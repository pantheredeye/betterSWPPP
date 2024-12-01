import type {
  QueryResolvers,
  MutationResolvers,
  InspectionRelationResolvers,
} from "types/graphql";

import { db } from "src/lib/db";

export const inspections: QueryResolvers["inspections"] = () => {
  return db.inspection.findMany();
};

export const inspection: QueryResolvers["inspection"] = ({ id }) => {
  return db.inspection.findUnique({
    where: { id },
  });
};

export const createInspection: MutationResolvers["createInspection"] = ({
  input,
}) => {
  return db.inspection.create({
    data: input,
  });
};

export const updateInspection: MutationResolvers["updateInspection"] = ({
  id,
  input,
}) => {
  return db.inspection.update({
    data: input,
    where: { id },
  });
};

export const deleteInspection: MutationResolvers["deleteInspection"] = ({
  id,
}) => {
  return db.inspection.delete({
    where: { id },
  });
};

export const Inspection: InspectionRelationResolvers = {
  organization: (_obj, { root }) => {
    return db.inspection.findUnique({ where: { id: root?.id } }).organization();
  },
  site: (_obj, { root }) => {
    return db.inspection.findUnique({ where: { id: root?.id } }).site();
  },
  events: (_obj, { root }) => {
    return db.inspection.findUnique({ where: { id: root?.id } }).events();
  },
  media: (_obj, { root }) => {
    return db.inspection.findUnique({ where: { id: root?.id } }).media();
  },
};
