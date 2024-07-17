import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const tests: QueryResolvers['tests'] = () => {
  return db.test.findMany()
}

export const test: QueryResolvers['test'] = ({ id }) => {
  return db.test.findUnique({
    where: { id },
  })
}

export const createTest: MutationResolvers['createTest'] = ({ input }) => {
  return db.test.create({
    data: input,
  })
}

export const updateTest: MutationResolvers['updateTest'] = ({ id, input }) => {
  return db.test.update({
    data: input,
    where: { id },
  })
}

export const deleteTest: MutationResolvers['deleteTest'] = ({ id }) => {
  return db.test.delete({
    where: { id },
  })
}
