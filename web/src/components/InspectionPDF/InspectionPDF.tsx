import React from 'react'

import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
    fontSize: 12,
    color: '#000',
  },
  section: {
    marginBottom: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
  },
  titleSection: {
    marginBottom: 12,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 4,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    marginBottom: 4,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },
  column: {
    flexDirection: 'column',
    flexGrow: 1,
    paddingRight: 8,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  image: {
    width: '48%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
  },
})

const bmpHasData = (bmpItem) => {
  return (
    bmpItem.implemented !== null ||
    bmpItem.maintenanceRequired !== null ||
    bmpItem.repeatOccurrence !== null ||
    bmpItem.correctiveActionNeeded !== null ||
    (bmpItem.notes && bmpItem.notes.trim() !== '')
  )
}

const InspectionPDF = ({ inspection }) => {
  const documentTitle = `${inspection.site.name} & ${inspection.title}`
  const author = `Inspector ID: ${inspection.inspector.id}`
  const subject = `${inspection.inspectionType} inspection of ${
    inspection.site.name
  } on ${new Date(inspection.date).toLocaleDateString()}`
  const keywords = `${inspection.site.name}, ${inspection.inspector.name}, ${
    inspection.inspectionType
  }, ${new Date(inspection.date).toLocaleDateString()}`

  return (
    <Document
      title={documentTitle}
      author={author}
      subject={subject}
      keywords={keywords}
    >
      <Page size="A4" style={styles.page}>
        {/* Header Section */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>{inspection.title}</Text>
          <View style={styles.grid}>
            <View style={styles.column}>
              <Text style={styles.label}>Site:</Text>
              <Text style={styles.text}>{inspection.site.name}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Inspector:</Text>
              <Text style={styles.text}>
                {inspection.inspector.firstName +
                  ' ' +
                  inspection.inspector.lastName}
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Date:</Text>
              <Text style={styles.text}>
                {new Date(inspection.date).toLocaleDateString()}
              </Text>
            </View>
          </View>
        </View>

        {/* Time and Severity Section */}
        <View style={styles.section}>
          <View style={styles.grid}>
            <View style={styles.column}>
              <Text style={styles.label}>Start Time:</Text>
              <Text style={styles.text}>
                {new Date(inspection.startTime).toLocaleTimeString()}
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>End Time:</Text>
              <Text style={styles.text}>
                {new Date(inspection.endTime).toLocaleTimeString()}
              </Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Severity:</Text>
              <Text style={styles.text}>{inspection.severity}</Text>
            </View>
          </View>
        </View>

        {/* Inspection Details */}
        <View style={styles.section}>
          <Text style={styles.label}>Description:</Text>
          <Text style={styles.text}>{inspection.description}</Text>
        </View>

        {/* Other Details */}
        <View style={styles.section}>
          <Text style={styles.label}>SWPPP on Site:</Text>
          <Text style={styles.text}>
            {inspection.swpppOnSite ? 'Yes' : 'No'}
          </Text>

          <Text style={styles.label}>BMPs Installed Per SWPPP:</Text>
          <Text style={styles.text}>
            {inspection.bmpsInstalledPerSwppp ? 'Yes' : 'No'}
          </Text>

          <Text style={styles.label}>Permit on Site:</Text>
          <Text style={styles.text}>
            {inspection.permitOnSite ? 'Yes' : 'No'}
          </Text>
        </View>

        {/* Storm Event Section */}
        <View style={styles.section}>
          <Text style={styles.label}>New Storm Event:</Text>
          <Text style={styles.text}>
            {inspection.newStormEvent ? 'Yes' : 'No'}
          </Text>

          {inspection.newStormEvent && (
            <>
              <Text style={styles.label}>Storm Date & Time:</Text>
              <Text style={styles.text}>
                {new Date(inspection.stormDateTime).toLocaleString()}
              </Text>
              <Text style={styles.label}>Storm Duration:</Text>
              <Text style={styles.text}>{inspection.stormDuration}</Text>
              <Text style={styles.label}>Approx. Precipitation:</Text>
              <Text style={styles.text}>
                {inspection.approximatePrecipitation}
              </Text>
            </>
          )}
        </View>

        {/* Weather and Discharge Section */}
        <View style={styles.section}>
          <Text style={styles.label}>Weather at Time:</Text>
          <Text style={styles.text}>{inspection.weatherAtTime}</Text>

          <Text style={styles.label}>Temperature:</Text>
          <Text style={styles.text}>{inspection.temperature} °C</Text>

          <Text style={styles.label}>Previous Discharge:</Text>
          <Text style={styles.text}>{inspection.previousDischarge}</Text>

          <Text style={styles.label}>New Discharges:</Text>
          <Text style={styles.text}>{inspection.newDischarges}</Text>

          <Text style={styles.label}>Current Discharges:</Text>
          <Text style={styles.text}>{inspection.currentDischarges}</Text>

          <Text style={styles.label}>Discharge at This Time:</Text>
          <Text style={styles.text}>{inspection.dischargeAtThisTime}</Text>
        </View>

        {inspection.bmpData &&
          inspection.bmpData.filter(bmpHasData).length > 0 && (
            <View style={styles.section}>
              <Text style={styles.label}>BMPs:</Text>
              {inspection.bmpData.filter(bmpHasData).map((bmpItem, index) => (
                <View key={index} style={styles.section}>
                  <Text style={styles.text}>BMP Name: {bmpItem.bmp.name}</Text>
                  <Text style={styles.text}>
                    Implemented: {bmpItem.implemented ? 'Yes' : 'No'}
                  </Text>
                  <Text style={styles.text}>
                    Maintenance Required:{' '}
                    {bmpItem.maintenanceRequired ? 'Yes' : 'No'}
                  </Text>
                  <Text style={styles.text}>
                    Repeat Occurrence: {bmpItem.repeatOccurrence ? 'Yes' : 'No'}
                  </Text>
                  <Text style={styles.text}>
                    Corrective Action Needed:{' '}
                    {bmpItem.correctiveActionNeeded ? 'Yes' : 'No'}
                  </Text>
                  <Text style={styles.text}>Notes: {bmpItem.notes}</Text>
                </View>
              ))}
            </View>
          )}

        {/* Media Section */}
        {inspection.media && inspection.media.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.label}>Media:</Text>
            <View style={styles.imageGrid}>
              {inspection.media.map((mediaItem, index) => (
                <Image key={index} style={styles.image} src={mediaItem.url} />
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  )
}

export default InspectionPDF
