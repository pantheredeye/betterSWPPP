import type {
  QueryResolvers,
  MutationResolvers,
  InspectionRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const inspections: QueryResolvers['inspections'] = () => {
  return db.inspection.findMany()
}

export const inspection: QueryResolvers['inspection'] = ({ id }) => {
  return db.inspection.findUnique({
    where: { id },
  })
}

export const createInspection: MutationResolvers['createInspection'] = async ({
  input,
}) => {
  const { bmpData, ...inspectionData } = input

  const inspection = await db.inspection.create({
    data: {
      ...inspectionData,
      bmpData: {
        create: bmpData.map((data) => ({
          bmpId: data.bmpId,
          implemented: data.implemented,
          maintenanceRequired: data.maintenanceRequired,
          repeatOccurrence: data.repeatOccurrence,
          correctiveActionNeeded: data.correctiveActionNeeded,
          notes: data.notes,
        })),
      },
      // media { }
    },
  })

  return inspection
}

export const updateInspection: MutationResolvers['updateInspection'] = async ({
  id,
  input,
}) => {
  const { bmpData, ...inspectionData } = input

  const updatedInspection = await db.inspection.update({
    where: { id },
    data: {
      ...inspectionData,
      bmpData: {
        deleteMany: {}, // Remove existing BMP data
        create: bmpData.map((data) => ({
          bmpId: data.bmpId,
          implemented: data.implemented,
          maintenanceRequired: data.maintenanceRequired,
          repeatOccurrence: data.repeatOccurrence,
          correctiveActionNeeded: data.correctiveActionNeeded,
          notes: data.notes,
          inspectionId: id, // Include the inspection ID
        })),
      },
    },
  })

  return updatedInspection
}

export const deleteInspection: MutationResolvers['deleteInspection'] = ({
  id,
}) => {
  return db.inspection.delete({
    where: { id },
  })
}

export const Inspection: InspectionRelationResolvers = {
  site: (_obj, { root }) => {
    return db.inspection.findUnique({ where: { id: root?.id } }).site()
  },
  inspector: (_obj, { root }) => {
    return db.inspection.findUnique({ where: { id: root?.id } }).inspector()
  },
  bmpData: (_obj, { root }) => {
    return db.inspection.findUnique({ where: { id: root?.id } }).bmpData()
  },
  media: (_obj, { root }) => {
    return db.inspection.findUnique({ where: { id: root?.id } }).media()
  },
}
