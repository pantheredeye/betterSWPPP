import type {
  QueryResolvers,
  MutationResolvers,
  EventRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const events: QueryResolvers['events'] = () => {
  return db.event.findMany()
}

export const event: QueryResolvers['event'] = ({ id }) => {
  return db.event.findUnique({
    where: { id },
  })
}

export const createEvent: MutationResolvers['createEvent'] = ({ input }) => {
  return db.event.create({
    data: input,
  })
}

export const updateEvent: MutationResolvers['updateEvent'] = ({
  id,
  input,
}) => {
  return db.event.update({
    data: input,
    where: { id },
  })
}

export const deleteEvent: MutationResolvers['deleteEvent'] = ({ id }) => {
  return db.event.delete({
    where: { id },
  })
}

export const Event: EventRelationResolvers = {
  site: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).site()
  },
  membership: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).membership()
  },
  organization: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).organization()
  },
  media: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).media()
  },
  inspectionEventDetails: (_obj, { root }) => {
    return db.event
      .findUnique({ where: { id: root?.id } })
      .inspectionEventDetails()
  },
  inspection: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).inspection()
  },
  eventTag: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).eventTag()
  },
  user: (_obj, { root }) => {
    return db.event.findUnique({ where: { id: root?.id } }).user()
  },
}