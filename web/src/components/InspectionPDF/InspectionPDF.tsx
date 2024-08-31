// web/src/components/InspectionPDF.js

import React from 'react'

import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'

// Optional: You can use custom fonts
// Font.register({
//   family: 'Roboto',
//   src: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap',
// })

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
    // fontFamily: 'Roboto',
    fontSize: 12,
    color: '#000',
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    marginBottom: 4,
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
})

const InspectionPDF = ({ inspection }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>{inspection.title}</Text>
        <View style={styles.grid}>
          <View>
            <Text style={styles.label}>Site:</Text>
            <Text style={styles.text}>{inspection.site.name}</Text>
          </View>
          <View>
            <Text style={styles.label}>Inspector:</Text>
            <Text style={styles.text}>{inspection.inspector.name}</Text>
          </View>
          <View>
            <Text style={styles.label}>Date:</Text>
            <Text style={styles.text}>
              {new Date(inspection.date).toLocaleDateString()}
            </Text>
          </View>
        </View>
        <View style={styles.grid}>
          <View>
            <Text style={styles.label}>Start Time:</Text>
            <Text style={styles.text}>
              {new Date(inspection.startTime).toLocaleTimeString()}
            </Text>
          </View>
          <View>
            <Text style={styles.label}>End Time:</Text>
            <Text style={styles.text}>
              {new Date(inspection.endTime).toLocaleTimeString()}
            </Text>
          </View>
          <View>
            <Text style={styles.label}>Severity:</Text>
            <Text style={styles.text}>{inspection.severity}</Text>
          </View>
        </View>
        {/* Add more fields as needed */}
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.text}>{inspection.description}</Text>
      </View>
      {/* More sections for other inspection details */}
    </Page>
  </Document>
)

export default InspectionPDF
