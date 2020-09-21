import InfoCard from '@components/InfoCard'

const Education = () => {
  return (
    <>
      <InfoCard
        title="Education"
        subtitle="University of Texas - Pan American"
        name="Bachelor of Business Administration in Computer Information Systems (CIS)"
        description="Graduated Fall 2007 - Cumulative GPA: 3.147 / Major in CIS: 3.556"
        list={[
          'Dean’s List First – Fall 2005, Fall 2007',
          'Dean’s List Second – Fall 2002, Fall 2006',
        ]}
        mb={0}
      />
      <InfoCard
        name="Association of Information Technology Professionals (AITP)"
        description="Administrative Liaison (Fall 2006 – Spring 2007)"
        list={[
          'Used Microsoft Access to create and maintain a database to record member participation',
          'Directed events with over 40 participants',
          'Hosted career fair activities for Tyson Foods, Inc.',
        ]}
        mb={0}
      />
      <InfoCard
        name="Relevant Coursework"
        list={[
          'Systems Analysis and Design',
          'Management Information Systems',
          'Database Development',
          'Web Programming',
          'Networking',
          'Managerial Finance',
          'COBOL I, II',
          'Visual Basic I, II',
        ]}
      />
    </>
  )
}

export default Education
