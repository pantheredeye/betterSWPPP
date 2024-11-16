import type {
  QueryResolvers,
  MutationResolvers,
  BmpDataRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const bmpDatas: QueryResolvers['bmpDatas'] = () => {
  return db.bmpData.findMany()
}

export const bmpData: QueryResolvers['bmpData'] = ({ id }) => {
  return db.bmpData.findUnique({
    where: { id },
  })
}

export const createBmpData: MutationResolvers['createBmpData'] = ({
  input,
}) => {
  return db.bmpData.create({
    data: input,
  })
}

export const updateBmpData: MutationResolvers['updateBmpData'] = ({
  id,
  input,
}) => {
  return db.bmpData.update({
    data: input,
    where: { id },
  })
}

export const deleteBmpData: MutationResolvers['deleteBmpData'] = ({ id }) => {
  return db.bmpData.delete({
    where: { id },
  })
}

export const BmpData: BmpDataRelationResolvers = {
  bmp: (_obj, { root }) => {
    return db.bmpData.findUnique({ where: { id: root?.id } }).bmp()
  },
  inspection: (_obj, { root }) => {
    return db.bmpData.findUnique({ where: { id: root?.id } }).inspection()
  },
}
