import InfoCard from '@components/InfoCard'

const WorkHistory = () => {
  return (
    <>
      <InfoCard
        title="Work History"
        subtitle="NoMoreAnalog"
        name="Owner / Developer"
        description="2015 - present"
        list={[
          'Lead programmer for multiple web-based applications built with React / Vue.js and MobX / Redux state management',
          'Publish applications using a Node.js and GraphQL backend with React and Redux on the frontend',
          'Document React component architecture for use by self and other team members',
          'Deploy Meteor applications to Galaxy and Heroku hosting services',
          'Maintain Flutter / React Native mobile applications published to the Google Play Store and Apple App Store',
        ]}
      />
      <InfoCard
        subtitle="Tyson Foods, Inc."
        name="Lead Developer"
        description="April 2008 - May 2020"
        list={[
          'Developed and maintained custom applications in the SAP environment using ABAP programming',
          'Key development role in designing, coding, and implementing a custom enterprise-wide inventory management system encompassing shipping, receiving, inventory counting, and material production',
          'Developed a user-friendly, fisher-price simple approach to UI',
          'Implemented and deployed various interfaces to communicate with external warehousing systems',
          'Created and enforced coding standards used by team of dozens of developers',
        ]}
      />
    </>
  )
}

export default WorkHistory
