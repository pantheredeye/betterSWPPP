import type { inspectionBmpsQuery, inspectionBmpsQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import BmpItem from '../BmpItem/BmpItem'

export const QUERY: TypedDocumentNode<inspectionBmpsQuery, inspectionBmpsQueryVariables> = gql`
  query inspectionBmpsQuery($isStandard: Boolean, $siteId: Int) {
    inspectionBmps( isStandard: $isStandard, siteId: $siteId ) {
      id
      name
      description
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ inspectionBmps }: CellSuccessProps<inspectionBmpsQuery>) => {
  return inspectionBmps.map((bmp) => <BmpItem key={bmp.id} bmp={bmp} />)
}
