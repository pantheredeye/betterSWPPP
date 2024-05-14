import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'
import { hashPassword } from '@redwoodjs/auth-dbauth-api'

export default async () => {
  try {
    // Seed data for roles
    const roles: Prisma.RoleCreateInput[] = [
      { name: 'ADMIN' },
      { name: 'SITE_OWNER' },
      { name: 'INSPECTOR' },
    ]
    const createdRoles = await Promise.all(
      roles.map((role) => db.role.create({ data: role }))
    )

    // Seed data for site types
    const siteTypes: Prisma.SiteTypeCreateInput[] = [
      { name: 'RESIDENTIAL' },
      { name: 'LARGE' },
    ]
    const createdSiteTypes = await Promise.all(
      siteTypes.map((siteType) => db.siteType.create({ data: siteType }))
    )

    // Seed data for users
    const users: Array<Omit<Prisma.UserCreateInput, 'hashedPassword' | 'salt'> & { password: string }> = [
      {
        email: 'admin@example.com',
        password: 'adminpassword',
        role: { connect: { id: createdRoles.find((role) => role.name === 'ADMIN')?.id } },
      },
      {
        email: 'siteowner@example.com',
        password: 'siteownerpassword',
        role: { connect: { id: createdRoles.find((role) => role.name === 'SITE_OWNER')?.id } },
      },
      {
        email: 'inspector@example.com',
        password: 'inspectorpassword',
        role: { connect: { id: createdRoles.find((role) => role.name === 'INSPECTOR')?.id } },
      },
    ]

    for (const user of users) {
      const [hashedPassword, salt] = hashPassword(user.password)
      await db.user.create({
        data: {
          email: user.email,
          hashedPassword,
          salt,
          role: user.role,
        },
      })
    }

    // Seed data for sites
    const sites: Prisma.SiteCreateInput[] = [
      {
        name: 'Site 1',
        address: '123 Main St',
        city: 'City 1',
        state: 'State 1',
        zipCode: '12345',
        siteType: { connect: { id: createdSiteTypes.find((siteType) => siteType.name === 'RESIDENTIAL')?.id } },
        owner: { connect: { email: 'siteowner@example.com' } },
      },
      {
        name: 'Site 2',
        address: '456 Elm St',
        city: 'City 2',
        state: 'State 2',
        zipCode: '67890',
        siteType: { connect: { id: createdSiteTypes.find((siteType) => siteType.name === 'LARGE')?.id } },
        owner: { connect: { email: 'siteowner@example.com' } },
      },
    ]

    await Promise.all(sites.map((site) => db.site.create({ data: site })))

    console.log('Seeding completed successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
  }
}
