// CHAKRA UI
import {
  Table,
  Tbody,
  Tr,
  Td,
  Th,
  Thead,
  TableContainer,
} from '@chakra-ui/react'


export const Registration = () => {
  return (
    <div className=' flex flex-col justify-center items-center xl:py-32
    lg:py-16'>




      {/* IMPORTANT DATES */}
      <div className=' xl:w-[70rem] xl:text-2xl xl:mb-16 xl:p-8
      lg:p-4 lg:py-6 lg:text-xl lg:mb-16'>

        <h1 className=' font-bold xl:text-4xl xl:ml-8 xl:mb-8 
        lg:mb-4 lg:ml-8  lg:text-2xl'>Important Dates</h1>


        <TableContainer>
          <Table variant='simple' colorScheme="blue" size="lg">
            <Tbody>
              <Tr>
                <Th></Th>
                <Th>Start Date</Th>
                <Th>End Date</Th>
              </Tr>
              <Tr>
                <Td>Call for paper/abstract submission</Td>
                <Td>1<sup>st</sup> June 2025</Td>
                <Td>30<sup>th</sup>June 2025</Td>

              </Tr>
              <Tr>
                <Td>Acceptance mail for Submission</Td>
                <Td>20<sup>th</sup> July 2025</Td>
                <Td>31<sup>st</sup> July 2025</Td>
              </Tr>
              <Tr>
                <Td>Registration</Td>
                <Td>1<sup>st</sup> August 2025</Td>
                <Td>31<sup>st</sup> August 2025</Td>
              </Tr>
              <Tr>
                <Td>Accommodation booking date</Td>
                <Td>25<sup>th</sup> August 2025</Td>
                <Td>5<sup>th</sup> September 2025</Td>

              </Tr>
              <Tr>
                <Td>Conference</Td>
                <Td>20<sup>th</sup> September 2025</Td>
                <Td>21<sup>st</sup> September 2025</Td>
              </Tr>

            </Tbody>
          </Table>
        </TableContainer>
        {/* <p className=' text-sm mt-8 text-red-600'>* Extra charges will be applied according to the availability of the accommodation.</p> */}
      </div>



      







      {/* REGISTRATION FEE FOR PUBLICATION + PAPER PRESENTATION */}
      <div className='xl:w-[65rem] xl:text-2xl mb-20 lg:text-xl'>
        <ul className=' xl:text-4xl font-bold list-disc mb-8
        lg:text-2xl'><li>Registration fee only for Attendees</li></ul>

      <TableContainer>
        <Table variant="striped" colorScheme="blue" size="lg"> 
          <Thead className="Thead-table2">
            <Tr>
              <Th></Th>
              <Th colSpan={2} textAlign="center" fontSize="xl">India</Th> 
              <Th colSpan={2} textAlign="center" fontSize="xl">Foreign</Th> 
            </Tr>
            <Tr>
              <Th></Th>
              <Th>Online</Th>
              <Th>Offline</Th>
              <Th>Online</Th>
              <Th>Offline</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Research Scholar</Td>
              <Td>₹ 500/-</Td>
              <Td>₹ 2,000/-</Td>
              <Td>15 $</Td>
              <Td>30 $</Td>
            </Tr>
            <Tr>
              <Td>Academician</Td>
              <Td>₹ 500/-</Td>
              <Td>₹ 2,500/-</Td>
              <Td>20 $</Td>
              <Td>35 $</Td>
            </Tr>
            <Tr>
              <Td>Scientist/Industry</Td>
              <Td>₹ 1,000/-</Td>
              <Td>₹ 3,000/-</Td>
              <Td>25 $</Td>
              <Td>40 $</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>


      </div>


      {/* REGISTRATION ONLY FOR PAPER PUBLICATION */}
      <div className='xl:w-[65rem] xl:text-2xl lg:text-xl'>
        <ul className=' xl:text-4xl font-bold list-disc mb-8 lg:text-2xl'><li>Registration fee only for paper presentation </li></ul>

        <TableContainer>
        <Table variant="striped" colorScheme="blue" size="lg"> {/* Increased table size */}
          <Thead className="Thead-table2">
            <Tr>
              <Th></Th>
              <Th colSpan={2} textAlign="center" fontSize="xl">India</Th> {/* Increased font size */}
              <Th colSpan={2} textAlign="center" fontSize="xl">Foreign</Th> {/* Increased font size */}
            </Tr>
            <Tr>
              <Th></Th>
              <Th>Online</Th>
              <Th>Offline</Th>
              <Th>Online</Th>
              <Th>Offline</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Research Scholar</Td>
              <Td>₹ 1,000/-</Td>
              <Td>₹ 2,500/-</Td>
              <Td>20 $</Td>
              <Td>50 $</Td>
            </Tr>
            <Tr>
              <Td>Academician</Td>
              <Td>₹ 1000/-</Td>
              <Td>₹ 3,000/-</Td>
              <Td>30 $</Td>
              <Td>60 $</Td>
            </Tr>
            <Tr>
              <Td>Scientist/Industry</Td>
              <Td>₹ 1,500/-</Td>
              <Td>₹ 4,000/-</Td>
              <Td>50 $</Td>
              <Td>80 $</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
        
      </div>
      <div className='mt-10'>
        <h1 className='w-[65rem] text-xl font-semibold'>Registration Link: <a className='text-blue-500 underline font-bold' href="https://forms.gle/c4JDVkMCTwBRFaZx5">Click here to Register</a></h1>
        <h1 className='w-[65rem] text-xl font-semibold mt-3'>Paper/Abstract submission Link: <a className='text-blue-500 underline font-bold' href="https://cmt3.research.microsoft.com/ICCASA2025/Submission/Manage">Click here to submit</a></h1>
      </div>

    <div className='xl:w-[65rem] xl:text-2xl lg:text-xl'>
      
      <h2 className='text-4xl mt-10 mb-4 font-bold'>Note:</h2>
    <ul className=' list-disc  text-lg'>
      <li className='text-xl font-semi-bold mb-2'>The above-mentioned registration fee includes conference kit (Only for offline Candidates), breakfast, lunch and certificate of participation (Attendees and presenters).</li>
      <li className='text-xl font-semi-bold mb-2'>Accommodation will be arranged for a limited number of participants either on campus or at nearby hotels on a payment basis with prior request.</li>
      <li className='text-xl font-semi-bold mb-2'>It is mandatory that at least one of the authors of each accepted paper shall Register and present the paper in the technical session. All accepted papers will be considered for presentation only after the payment of registration fee.</li>
      <li className='text-xl font-semi-bold mb-2'>The conference language is English. Original and unpublished works are encouraged for presentation in the conference.</li>
      <li className='text-xl font-semi-bold mb-2'>Authors should ensure that the similarity score of their research paper is not above 10% (with single source less than 3%), by Turnitin/ iThenticate software.</li>
      <li className='text-xl font-semi-bold mb-2'>Authors are notified of acceptance when the Conference receives the comments and the recommendation of qualified reviewers. The Conference sends each paper to independent reviewers, experts in the area of the paper. So, each paper will be evaluated, by independent experts according to the following Criteria:
          Relevance to the Conference Topics
          Scientific - Technical Originality, Potential Impact and Interest for the audience
          Scientific/Technical Content and Advances beyond The State-Of-The-Art
          Quality of the Presentation, clarity of the Content. 
      </li>
      <li className='text-xl font-semi-bold mb-2'>It is suggested that people from Jaipur city and nearby regions are instructed to attend the conference physically.</li>
    </ul>

    </div>
    </div>
  )
}
