import type {
  inspectionBmpsQuery,
  inspectionBmpsQueryVariables,
} from 'types/graphql'
import { useState } from 'react'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import BmpItem from '../BmpItem/BmpItem'
import useBmpStore from 'src/stores/bmpStore'
import AvailableBmps from '../AvailableBMPs/AvailableBMPs'

export const QUERY: TypedDocumentNode<
  inspectionBmpsQuery,
  inspectionBmpsQueryVariables
> = gql`
  query inspectionBmpsQuery($isStandard: Boolean, $siteId: Int) {
    inspectionBmps(isStandard: $isStandard, siteId: $siteId) {
      id
      name
      description
    }
  }
`
interface Bmp {
  id: number
  name: string
  description: string
}

export const Loading = () => <div>Loading...</div>
export const Empty = () => <div>Empty</div>
export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  inspectionBmps,
}: CellSuccessProps<inspectionBmpsQuery>) => {
  const { bmps, addBmp, submitBmps } = useBmpStore()

  const handleSelectBmp = (bmp: Bmp) => {
    addBmp({
      ...bmp,
      implemented: false,
      maintenanceRequired: false,
      repeatOccurrence: false,
      correctiveActionNeeded: '',
      notes: '',
    })
  }

  return (
    <>
      <AvailableBmps bmps={inspectionBmps} onSelect={handleSelectBmp} />
      <div className="mt-4 space-y-4">
        {bmps.map((bmp) => (
          <BmpItem key={bmp.id} bmp={bmp} />
        ))}
      </div>
      <button
        onClick={submitBmps}
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white"
      >
        Submit
      </button>
    </>
  )
}

export default Success
