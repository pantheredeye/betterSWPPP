import type {
  QueryResolvers,
  MutationResolvers,
  MediaRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const medias: QueryResolvers['medias'] = () => {
  return db.media.findMany()
}

export const media: QueryResolvers['media'] = ({ id }) => {
  return db.media.findUnique({
    where: { id },
  })
}

export const createMedia: MutationResolvers['createMedia'] = ({ input }) => {
  return db.media.create({
    data: input,
  })
}

export const updateMedia: MutationResolvers['updateMedia'] = ({
  id,
  input,
}) => {
  return db.media.update({
    data: input,
    where: { id },
  })
}

export const deleteMedia: MutationResolvers['deleteMedia'] = ({ id }) => {
  return db.media.delete({
    where: { id },
  })
}

export const Media: MediaRelationResolvers = {
  inspection: (_obj, { root }) => {
    return db.media.findUnique({ where: { id: root?.id } }).inspection()
  },
}
