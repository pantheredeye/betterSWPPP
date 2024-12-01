import type {
  QueryResolvers,
  MutationResolvers,
  InspectionEventDetailsRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const inspectionEventDetailses: QueryResolvers['inspectionEventDetailses'] =
  () => {
    return db.inspectionEventDetails.findMany()
  }

export const inspectionEventDetails: QueryResolvers['inspectionEventDetails'] =
  ({ id }) => {
    return db.inspectionEventDetails.findUnique({
      where: { id },
    })
  }

export const createInspectionEventDetails: MutationResolvers['createInspectionEventDetails'] =
  ({ input }) => {
    return db.inspectionEventDetails.create({
      data: input,
    })
  }

export const updateInspectionEventDetails: MutationResolvers['updateInspectionEventDetails'] =
  ({ id, input }) => {
    return db.inspectionEventDetails.update({
      data: input,
      where: { id },
    })
  }

export const deleteInspectionEventDetails: MutationResolvers['deleteInspectionEventDetails'] =
  ({ id }) => {
    return db.inspectionEventDetails.delete({
      where: { id },
    })
  }

export const InspectionEventDetails: InspectionEventDetailsRelationResolvers = {
  event: (_obj, { root }) => {
    return db.inspectionEventDetails
      .findUnique({ where: { id: root?.id } })
      .event()
  },
  organization: (_obj, { root }) => {
    return db.inspectionEventDetails
      .findUnique({ where: { id: root?.id } })
      .organization()
  },
}
