import type {
  QueryResolvers,
  MutationResolvers,
  EventTagRelationResolvers,
} from "types/graphql";

import { db } from "src/lib/db";

export const eventTags: QueryResolvers["eventTags"] = () => {
  return db.eventTag.findMany();
};

export const eventTag: QueryResolvers["eventTag"] = ({ id }) => {
  return db.eventTag.findUnique({
    where: { id },
  });
};

export const createEventTag: MutationResolvers["createEventTag"] = ({
  input,
}) => {
  return db.eventTag.create({
    data: input,
  });
};

export const updateEventTag: MutationResolvers["updateEventTag"] = ({
  id,
  input,
}) => {
  return db.eventTag.update({
    data: input,
    where: { id },
  });
};

export const deleteEventTag: MutationResolvers["deleteEventTag"] = ({ id }) => {
  return db.eventTag.delete({
    where: { id },
  });
};

export const EventTag: EventTagRelationResolvers = {
  event: (_obj, { root }) => {
    return db.eventTag.findUnique({ where: { id: root?.id } }).event();
  },
};
