import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data: Prisma.UserExampleCreateArgs['data'][] = [
      // To try this example data with the UserExample model in schema.prisma,
      // uncomment the lines below and run 'yarn rw prisma migrate dev'
      //
      // { name: 'alice', email: 'alice@example.com' },
      // { name: 'mark', email: 'mark@example.com' },
      // { name: 'jackie', email: 'jackie@example.com' },
      // { name: 'bob', email: 'bob@example.com' },
    ]
    console.log(
      "\nUsing the default './scripts/seed.ts' template\nEdit the file to add seed data\n"
    )

    if ((await db.userExample.count()) === 0) {
      // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
      // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
      await Promise.all(
        //
        // Change to match your data model and seeding needs
        //
        data.map(async (data: Prisma.UserExampleCreateArgs['data']) => {
          const record = await db.userExample.create({ data })
          console.log(record)
        })
      )
    } else {
      console.log('Users already seeded')
    }

    // If using dbAuth and seeding users, you'll need to add a `hashedPassword`
    // and associated `salt` to their record. Here's how to create them using
    // the same algorithm that dbAuth uses internally:
    //
    //   import { hashPassword } from '@redwoodjs/auth-dbauth-api'
    //
    //   const users = [
    //     { name: 'john', email: 'john@example.com', password: 'secret1' },
    //     { name: 'jane', email: 'jane@example.com', password: 'secret2' }
    //   ]
    //
    //   for (const user of users) {
    //     const [hashedPassword, salt] = hashPassword(user.password)
    //     await db.user.create({
    //       data: {
    //         name: user.name,
    //         email: user.email,
    //         hashedPassword,
    //         salt
    //       }
    //     })
    //   }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}

// import type { Prisma } from '@prisma/client'
// import { db } from 'api/src/lib/db'
// import { hashPassword } from '@redwoodjs/auth-dbauth-api'

// export default async () => {
//   try {
//     // Seed data for roles
//     const roles: Prisma.RoleCreateInput[] = [
//       { name: 'ADMIN' },
//       { name: 'SITE_OWNER' },
//       { name: 'INSPECTOR' },
//     ]
//     const createdRoles = await Promise.all(
//       roles.map((role) => db.role.create({ data: role }))
//     )

//     // Seed data for site types
//     const siteTypes: Prisma.SiteTypeCreateInput[] = [
//       { name: 'RESIDENTIAL' },
//       { name: 'LARGE' },
//     ]
//     const createdSiteTypes = await Promise.all(
//       siteTypes.map((siteType) => db.siteType.create({ data: siteType }))
//     )

//     // Seed data for users
//     const users: Prisma.UserCreateArgs['data'][] = [
//       {
//         email: 'admin@example.com',
//         password: 'adminpassword',
//         role: { connect: { id: createdRoles.find((role) => role.name === 'ADMIN')?.id } },
//       },
//       {
//         email: 'siteowner@example.com',
//         password: 'siteownerpassword',
//         role: { connect: { id: createdRoles.find((role) => role.name === 'SITE_OWNER')?.id } },
//       },
//       {
//         email: 'inspector@example.com',
//         password: 'inspectorpassword',
//         role: { connect: { id: createdRoles.find((role) => role.name === 'INSPECTOR')?.id } },
//       },
//     ]

//     for (const user of users) {
//       const [hashedPassword, salt] = hashPassword(user.password)
//       await db.user.create({
//         data: {
//           ...user,
//           password: hashedPassword,
//           salt,
//         },
//       })
//     }

//     // Seed data for sites
//     const sites: Prisma.SiteCreateInput[] = [
//       {
//         name: 'Site 1',
//         address: '123 Main St',
//         city: 'City 1',
//         state: 'State 1',
//         zipCode: '12345',
//         siteType: { connect: { id: createdSiteTypes.find((siteType) => siteType.name === 'RESIDENTIAL')?.id } },
//         owner: { connect: { email: 'siteowner@example.com' } },
//       },
//       {
//         name: 'Site 2',
//         address: '456 Elm St',
//         city: 'City 2',
//         state: 'State 2',
//         zipCode: '67890',
//         siteType: { connect: { id: createdSiteTypes.find((siteType) => siteType.name === 'LARGE')?.id } },
//         owner: { connect: { email: 'siteowner@example.com' } },
//       },
//     ]

//     await Promise.all(sites.map((site) => db.site.create({ data: site })))

//     console.log('Seeding completed successfully')
//   } catch (error) {
//     console.error('Error seeding database:', error)
//   }
// }
