import { createContext, useContext, useState } from 'react'

const OrganizationContext = createContext()

export const OrganizationProvider = ({ children }) => {
  const [currentOrganization, setCurrentOrganization] = useState(
    localStorage.getItem('currentOrganization') || null
  )

  const switchOrganization = (organizationId) => {
    setCurrentOrganization(organizationId)
    localStorage.setItem('currentOrganization', organizationId)
    window.location.href = `/org/${organizationId}/dashboard` // Force reload to ensure scoped data
  }

  return (
    <OrganizationContext.Provider value={{ currentOrganization, switchOrganization }}>
      {children}
    </OrganizationContext.Provider>
  )
}

export const useOrganization = () => useContext(OrganizationContext)
