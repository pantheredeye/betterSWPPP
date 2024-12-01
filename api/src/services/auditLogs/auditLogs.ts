import type {
  QueryResolvers,
  MutationResolvers,
  AuditLogRelationResolvers,
} from "types/graphql";

import { db } from "src/lib/db";

export const auditLogs: QueryResolvers["auditLogs"] = () => {
  return db.auditLog.findMany();
};

export const auditLog: QueryResolvers["auditLog"] = ({ id }) => {
  return db.auditLog.findUnique({
    where: { id },
  });
};

export const createAuditLog: MutationResolvers["createAuditLog"] = ({
  input,
}) => {
  return db.auditLog.create({
    data: input,
  });
};

export const updateAuditLog: MutationResolvers["updateAuditLog"] = ({
  id,
  input,
}) => {
  return db.auditLog.update({
    data: input,
    where: { id },
  });
};

export const deleteAuditLog: MutationResolvers["deleteAuditLog"] = ({ id }) => {
  return db.auditLog.delete({
    where: { id },
  });
};

export const AuditLog: AuditLogRelationResolvers = {
  member: (_obj, { root }) => {
    return db.auditLog.findUnique({ where: { id: root?.id } }).member();
  },
};
