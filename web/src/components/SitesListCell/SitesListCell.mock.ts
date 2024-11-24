// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  sitesList: {
    __typename: 'sitesList' as const,
    id: 42,
  },
})
