import { createContext, useContext, useState, ReactNode } from 'react';
import { navigate } from '@redwoodjs/router';

// Create a context
const OrganizationContext = createContext(null);

// Could move switchOrg to a utility file: src/utils/organization.ts
// and call directly when needed

export const OrganizationProvider = ({ children }: { children: ReactNode }) => {
  const [currentOrganization, setCurrentOrganization] = useState(() =>
    localStorage.getItem('currentOrganization')
  );

  const switchOrganization = (organizationId: string) => {
    setCurrentOrganization(organizationId);
    localStorage.setItem('currentOrganization', organizationId);
    navigate(`/org/${organizationId}/dashboard`);
  };

  return (
    <OrganizationContext.Provider
      value={{ currentOrganization, switchOrganization }}
    >
      {children}
    </OrganizationContext.Provider>
  );
};

// Hook for easy access
export const useOrganization = () => {
  return useContext(OrganizationContext);
};
