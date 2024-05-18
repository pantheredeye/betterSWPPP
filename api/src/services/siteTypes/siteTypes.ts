import type {
  QueryResolvers,
  MutationResolvers,
  SiteTypeRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const siteTypes: QueryResolvers['siteTypes'] = () => {
  return db.siteType.findMany()
}

export const siteType: QueryResolvers['siteType'] = ({ id }) => {
  return db.siteType.findUnique({
    where: { id },
  })
}

export const createSiteType: MutationResolvers['createSiteType'] = ({
  input,
}) => {
  return db.siteType.create({
    data: input,
  })
}

export const updateSiteType: MutationResolvers['updateSiteType'] = ({
  id,
  input,
}) => {
  return db.siteType.update({
    data: input,
    where: { id },
  })
}

export const deleteSiteType: MutationResolvers['deleteSiteType'] = ({ id }) => {
  return db.siteType.delete({
    where: { id },
  })
}

export const SiteType: SiteTypeRelationResolvers = {
  sites: (_obj, { root }) => {
    return db.siteType.findUnique({ where: { id: root?.id } }).sites()
  },
}
