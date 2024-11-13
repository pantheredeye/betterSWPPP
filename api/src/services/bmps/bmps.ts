import type {
  QueryResolvers,
  MutationResolvers,
  BmpRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const bmps: QueryResolvers['bmps'] = () => {
  return db.bmp.findMany()
}

export const bmp: QueryResolvers['bmp'] = ({ id }) => {
  return db.bmp.findUnique({
    where: { id },
  })
}

export const standardBmps: QueryResolvers['standardBmps'] = () => {
  return db.bmp.findMany({
    where: { isStandard: true },
  })
}

export const inspectionBmps: QueryResolvers['inspectionBmps'] = ({
  isStandard,
  siteId,
}) => {
  const where: any = {}
  if (isStandard !== undefined) {
    where.isStandard = isStandard
  }
  if (siteId !== undefined) {
    where.siteId = siteId
  }
  return db.bmp.findMany({
    where,
  })
}

export const createBmp: MutationResolvers['createBmp'] = ({ input }) => {
  // Ensure siteId is set to null if not provided
  const data = { ...input, siteId: input.siteId || null }
  return db.bmp.create({
    data,
  })
}

export const updateBmp: MutationResolvers['updateBmp'] = ({ id, input }) => {
  return db.bmp.update({
    data: input,
    where: { id },
  })
}

export const deleteBmp: MutationResolvers['deleteBmp'] = ({ id }) => {
  return db.bmp.delete({
    where: { id },
  })
}

export const Bmp: BmpRelationResolvers = {
  site: (_obj, { root }) => {
    return db.bmp.findUnique({ where: { id: root?.id } }).site()
  },
  bmpData: (_obj, { root }) => {
    return db.bmp.findUnique({ where: { id: root?.id } }).bmpData()
  },
}
