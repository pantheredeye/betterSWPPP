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
    const users: Array<
      Omit<Prisma.UserCreateInput, 'hashedPassword' | 'salt'> & {
        password: string
      }
    > = [
      {
        email: 'admin@example.com',
        password: 'adminpassword',
        role: {
          connect: {
            id: createdRoles.find((role) => role.name === 'ADMIN')?.id,
          },
        },
      },
      {
        email: 'siteowner@example.com',
        password: 'siteownerpassword',
        role: {
          connect: {
            id: createdRoles.find((role) => role.name === 'SITE_OWNER')?.id,
          },
        },
      },
      {
        email: 'inspector@example.com',
        password: 'inspectorpassword',
        role: {
          connect: {
            id: createdRoles.find((role) => role.name === 'INSPECTOR')?.id,
          },
        },
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
        location: 'Location 1',
        addressLine1: '123 Main St',
        addressLine2: 'Suite 100',
        city: 'City 1',
        state: 'State 1',
        postalCode: '12345',
        country: 'Country 1',
        npdesTrackingNo: 'NPDES123',
        siteType: {
          connect: {
            id: createdSiteTypes.find(
              (siteType) => siteType.name === 'RESIDENTIAL'
            )?.id,
          },
        },
        siteInspector: 'Inspector 1',
        siteMap: 'site1-map.pdf',
        ownerName: 'Owner 1',
      },
      {
        name: 'Site 2',
        location: 'Location 2',
        addressLine1: '456 Elm St',
        addressLine2: 'Apt 202',
        city: 'City 2',
        state: 'State 2',
        postalCode: '67890',
        country: 'Country 2',
        npdesTrackingNo: 'NPDES456',
        siteType: {
          connect: {
            id: createdSiteTypes.find((siteType) => siteType.name === 'LARGE')
              ?.id,
          },
        },
        siteInspector: 'Inspector 2',
        siteMap: 'site2-map.jpeg',
        ownerName: 'Owner 2',
      },
    ]

    await Promise.all(sites.map((site) => db.site.create({ data: site })))

    console.log('Seeding completed successfully')
  } catch (error) {
    console.error('Error seeding database:', error)
  }
}
