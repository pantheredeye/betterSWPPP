// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  inspectionsList: [
    {
      id: 42,
      date: 'test-date',
      inspectionType: 'test-inspectionType',
      site: { name: 'test-site-name' },
      inspector: { email: 'test-inspector-email' },
    },
  ],
})
