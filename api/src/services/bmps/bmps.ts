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

export const createBmp: MutationResolvers['createBmp'] = ({ input }) => {
  return db.bmp.create({
    data: input,
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
