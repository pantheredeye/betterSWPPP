// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  sites: {
    __typename: 'sites' as const,
    id: 42,
    name: '42-name',
    ownerName: '42-ownerName',
    addressLine1: '42-addressLine1',
  },
})
