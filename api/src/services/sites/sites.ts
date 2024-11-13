import type {
  QueryResolvers,
  MutationResolvers,
  SiteRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const sites: QueryResolvers['sites'] = () => {
  return db.site.findMany()
}

export const site: QueryResolvers['site'] = ({ id }) => {
  return db.site.findUnique({
    where: { id },
  })
}
export const createSite: MutationResolvers['createSite'] = async ({
  input,
}) => {
  const { siteTypeId, userId, bmps, ...rest } = input

  // Check if the siteTypeId exists
  const siteTypeExists = await db.siteType.findUnique({
    where: { id: siteTypeId },
  })
  if (!siteTypeExists) {
    throw new Error(`SiteType with ID ${siteTypeId} does not exist`)
  }

  // Check if the userId exists, if provided
  if (userId) {
    const userExists = await db.user.findUnique({
      where: { id: userId },
    })
    if (!userExists) {
      throw new Error(`User with ID ${userId} does not exist`)
    }
  }

  return db.site.create({
    data: {
      ...rest,
      siteType: { connect: { id: siteTypeId } },
      User: userId ? { connect: { id: userId } } : undefined,
      bmps: {
        create: bmps.map(
          (bmp: {
            name: string
            description: string
            isStandard: boolean
          }) => ({
            name: bmp.name,
            description: bmp.description,
            isStandard: false,
          })
        ),
      },
    },
  })
}

export const updateSite: MutationResolvers['updateSite'] = ({ id, input }) => {
  const { siteTypeId, userId, bmps, ...rest } = input

  return db.site.update({
    data: {
      ...rest,
      siteType: { connect: { id: siteTypeId } },
      User: userId ? { connect: { id: userId } } : undefined,
      bmps: {
        create: bmps.map(
          (bmp: {
            name: string
            description: string
            isStandard: boolean
          }) => ({
            name: bmp.name,
            description: bmp.description,
            isStandard: false,
          })
        ),
      },
    },
    where: { id },
  })
}

export const deleteSite: MutationResolvers['deleteSite'] = ({ id }) => {
  return db.site.delete({
    where: { id },
  })
}

export const Site: SiteRelationResolvers = {
  siteType: (_obj, { root }) => {
    return db.site.findUnique({ where: { id: root?.id } }).siteType()
  },
  inspections: (_obj, { root }) => {
    return db.site.findUnique({ where: { id: root?.id } }).inspections()
  },
  bmps: (_obj, { root }) => {
    return db.site.findUnique({ where: { id: root?.id } }).bmps()
  },
  User: (_obj, { root }) => {
    return db.site.findUnique({ where: { id: root?.id } }).User()
  },
}
