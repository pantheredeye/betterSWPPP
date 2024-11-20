# README: SWPPP-TOP - Stormwater Inspection Application

## **System Overview**

This application streamlines stormwater inspection management, ensuring compliance with legal requirements for sites with land disturbances. It supports the entire inspection lifecycle—from site creation to inspection management and violation resolution—while maintaining a robust communication audit trail.

Key features include:
- Site and inspection management.
- Violation documentation and reporting.
- Multi-level organizational support.
- Integrated communication tools (email, SMS, call logging).
- Role-specific workflows for developers, inspectors, and government agencies.

---

## **User Roles & Interactions**

1. **State-Level Organizations (e.g., Dept. of Environmental Quality)**
   - View and oversee sites managed by municipal entities.
   - Monitor compliance across jurisdictions.

2. **Municipal Entities (e.g., City/County Departments)**
   - Manage multiple sites under their jurisdiction.
   - Conduct inspections and enforce compliance with local ordinances.
   - Interact with private inspectors and state-level regulators.

3. **Private Businesses (e.g., Developers, Landowners)**
   - Perform self-inspections as legally required.
   - Receive violation notifications and submit resolutions via the app.
   - Manage multiple sites across various jurisdictions.

4. **Private Inspection Firms (e.g., Civil Engineering or Survey Firms)**
   - Conduct inspections on behalf of municipal, state, or private entities.
   - Maintain records and communication logs for audits.

---

## **Core Functionalities by Role**

| Role                   | Core Functions                                                                 |
|------------------------|-------------------------------------------------------------------------------|
| **Inspectors**         | Add sites, perform inspections, document violations, and generate reports.    |
| **Municipal Entities** | Assign inspectors, manage violations, and notify site owners.                 |
| **State Entities**     | Oversee and report on compliance trends across jurisdictions.                 |
| **Private Businesses** | Manage self-inspections and resolve violations.                              |
| **All Users**          | Utilize integrated communication (messaging, email, SMS, calls) for streamlined record-keeping. |

---

## **Communication & Audit Trail**
Keeping a clear record of all communications and actions is a cornerstone of this system:
- **Violation Notifications**: Email, SMS, or in-app alerts to site owners.
- **Call Logs**: Record details of phone communications for audit purposes.
- **Messaging**: Direct messaging within the app, tied to specific sites or violations.
- **Printable Reports**: Generate detailed summaries of inspections, communications, and resolutions.

---
## **Site Management**
Administrators can manage various types of sites, including:
- **Residential Sites**: Individual lots in subdivisions where dirt is being cleared for house construction.
- **Large Sites**: Commercial developments, land tracts for subdivisions, or similar large-scale land clearing projects.

To simplify workflows:
- **Site Copying**: Duplicate existing site setups for faster creation of similar sites, particularly useful for subdivision lots.
- **Archival**: Retain site data for regulatory compliance and historical reference, even after the site becomes inactive.

## **Inspection Workflow**
Inspectors assess Best Management Practices (BMPs) at each site to ensure compliance with environmental standards.
- **BMP Management**:
  - **Standard BMPs**: Universal measures applied across all sites.
  - **Custom BMPs**: Site-specific measures that inspectors define as needed.

- **Dynamic Inspection Forms**:
  - Forms auto-generate fields based on standard and custom BMPs to streamline data collection.

- **Media Upload & Handling**:
  - Attach images, documents, and other media to inspection records for detailed documentation.

## **Reporting**
To comply with regulatory requirements and streamline communication, the application provides:
- **PDF Export**: Generate professional inspection reports for individual or bulk exports.
- **Violation Summary**: Highlight key findings and resolutions in an easy-to-read format.
- **Batch Reporting**: Export reports for multiple inspections simultaneously, reducing administrative overhead.


## **Future Vision**
- **Multi-Tenant Support**: Enable interactions across state, municipal, and private actors.
- **Cross-Jurisdiction Insights**: Provide inspectors and organizations visibility into broader compliance data.
- **Integrated Violation Resolution**: Facilitate back-and-forth communication to document corrective actions directly in the app.
---
#### **Feature Roadmap**

| Feature                         | Description                                                  | Status            |
|---------------------------------|--------------------------------------------------------------|-------------------|
| **Enter Sites**                 | Add and manage site information.                            | ✅ Complete       |
| **Enter Inspections**           | Log inspection details for compliance tracking.             | ✅ Complete    |
| **Export Inspections**          | Export inspection reports to PDF.                           | ✅ Complete    |
| **Dashboard**                   | View recent violations and inspections in one place.        | 🛠️ Planned    |
| **Multi-Tenant Schema**         | Support multiple organizations and user memberships.        | 🛠️ Planned        |
| **Billing & Payments**          | Manage subscriptions and auto-deactivate unpaid accounts.   | 🛠️ Planned        |
| **Notifications**               | Customizable alerts for key events (violations, inspections).| 🛠️ Planned       |
| **Comms/Messaging with Audit Trail** | Track calls, emails, and messages sent from the app.     | 🛠️ Planned        |

---

#### **Planned Releases**
- **MVP**
  - Enter Sites
  - Enter Inspections

- **Phase 2**
  - Multi-Tenant Schema
  - Notifications
  - Dashboard
  - Billing & Payments

- **Phase 3**
  - Comms/Messaging with Audit Trail
