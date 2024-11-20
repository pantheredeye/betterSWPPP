# README: BetterSWPPP - Stormwater Inspection Application

Welcome to the README for the BetterSWPPP application, a comprehensive solution for managing stormwater inspections and compliance. Built using RedwoodJS, this application aims to streamline the inspection process for developers, inspectors, cities, counties, and states, fostering collaboration and efficient stormwater management. Below, you'll find an overview of the main features and functionalities of this application.

## Main Features

### 1. User Management

The application accommodates different user roles, including site owners (developers), inspectors, and administrators. Each user role has specific responsibilities and access levels within the system.

- Site owners can add inspections for their sites and stay informed about site-related activities.
- Inspectors have tools to conduct thorough inspections, access historical records, and generate comprehensive reports.
- Administrators have the power to manage sites, including adding, setting up, archiving, and overseeing the entire system.

### 2. Site Management

Administrators are responsible for site management tasks, such as creation, deletion, setup, and archival. The application supports two main site types: residential and large sites.

- Residential sites are individual lots in a subdivision where dirt is being cleared for house construction.
- Large sites are generally commercial sites, land tracts being developed for a subdivision, or similar sites involving large-scale land clearing.

The application allows for copying existing sites to create new ones, particularly useful for subdivision lots.

### 3. Inspection Workflow

Inspectors conduct inspections to assess the implementation and effectiveness of Best Management Practices (BMPs) at each site. The application handles both standard and custom BMPs.

- Standard BMPs are applicable to all sites, regardless of size.
- Custom BMPs are site-specific and need to be created on a site-by-site basis.

The application dynamically generates form fields based on custom BMP definitions and stores data related to the BMPs that have been assessed during inspections.

- Media Upload and Handling: The initial version of the application includes the capability to upload and handle media files as part of the inspection process. Inspectors can attach relevant images, documents, or other media to support their findings and observations.

### 4. Reporting

The application provides a reliable export mechanism for generating inspection reports, ensuring compliance with regulatory requirements. Key reporting features include:

- PDF export functionality for inspection reports.
- Bulk export capability to generate reports for multiple inspections simultaneously.
- A list of inspections with an 'export' button for easy report generation.

## Scope and Future Enhancements

The initial version of the application focuses on the core functionalities required by the existing client. Future enhancements and considerations include:

- Support for multiple tenants and customizable form building.
- Accommodating different user personas and their specific needs.
- Implementing a notification system for communication among stakeholders.
- Optimizing the application for scalability and performance.

The development approach follows the principle of "Do the things that don't scale," starting with a tightly scoped set of features and gradually expanding based on client requirements and feedback.

## Conclusion

BetterSWPPP aims to revolutionize stormwater inspection management by providing a user-friendly, efficient, and collaborative platform. By focusing on the core functionalities and iteratively enhancing the application, we strive to deliver a high-quality solution that meets the needs of our clients and contributes to effective stormwater management practices.

---

```sh
yarn rw g secret
yarn rw prisma migrate dev

```

# dev links

* [local web](http://localhost:8910/)
* [local web](http://localhost:8911/)
* [local GraphQL](http://localhost:8911/graphql)