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
      <div className=' xl:w-[60rem] xl:text-2xl xl:mb-16 xl:p-8
      lg:p-4 lg:py-6 lg:text-xl lg:mb-16'>

        <h1 className=' font-bold xl:text-4xl xl:ml-8 xl:mb-8 
        lg:mb-4 lg:ml-8  lg:text-2xl'>Important Dates</h1>


        <TableContainer>
          <Table variant='simple' colorScheme="blue" size="lg">
            <Tbody>
              <Tr>
                <Td>Call for paper/abstract submission</Td>
                <Td>6th Jan 2025</Td>

              </Tr>
              <Tr>
                <Td>Call for paper/Abstract submission ending date </Td>
                <Td>3rd Feb 2025</Td>

              </Tr>
              <Tr>
                <Td>Registration starting date</Td>
                <Td>6th  Jan 2025</Td>
              </Tr>
              <Tr>
                <Td>Registration ending date</Td>
                <Td>3rd  Feb 2025</Td>

              </Tr>
              <Tr>
                <Td>Accommodation booking date</Td>
                <Td>17th March – 24th March</Td>

              </Tr>

            </Tbody>
          </Table>
        </TableContainer>
        <p className=' text-sm mt-8 text-red-600'>* Extra charges will be applied according to the availability of the accommodation.</p>
      </div>



      







      {/* REGISTRATION FEE FOR PUBLICATION + PAPER PRESENTATION */}
      <div className='xl:w-[60rem] xl:text-2xl mb-20 lg:text-xl'>
        <ul className=' xl:text-4xl font-bold list-disc mb-8
        lg:text-2xl'><li>Registration fee for publication + paper presentation </li></ul>

        <TableContainer >
          <Table variant='striped' colorScheme="blue" size="md">
            <Thead className='Thead-table2'>
              <Tr>
                <Th></Th>
                <Th>India</Th>
                <Th>Foriegn</Th>
              </Tr>
            </Thead>
            <Tbody>

              <Tr>
                <Td>Industry expert</Td>
                <Td>₹ 10,000/-</Td>
                <Td>200 $</Td>

              </Tr>
              <Tr>
                <Td>Faculty</Td>
                <Td>₹ 9000/-</Td>
                <Td>180 $</Td>


              </Tr>
              <Tr>
                <Td>Student and Research Scholar</Td>
                <Td>₹ 8500/-</Td>
                <Td>150 $</Td>

              </Tr>
              <Tr>


              </Tr>
              <Tr>


              </Tr>

            </Tbody>
          </Table>
        </TableContainer>
      </div>


      {/* REGISTRATION ONLY FOR PAPER PUBLICATION */}
      <div className='xl:w-[60rem] xl:text-2xl lg:text-xl'>
        <ul className=' xl:text-4xl font-bold list-disc mb-8 lg:text-2xl'><li>Registration only for paper presentation </li></ul>

        <TableContainer >
          <Table variant='striped' colorScheme="blue" size="md">
            <Thead className='Thead-table2'>
              <Tr>
                <Th></Th>
                <Th>India</Th>
                <Th>Foriegn</Th>
              </Tr>
            </Thead>
            <Tbody>

              <Tr>
                <Td>Industry expert</Td>
                <Td>₹ 1500/-</Td>
                <Td>50 $</Td>

              </Tr>
              <Tr>
                <Td>Faculty</Td>
                <Td>₹ 1500/-</Td>
                <Td>50 $</Td>


              </Tr>
              <Tr>
                <Td>Student and Research Scholar</Td>
                <Td>₹ 1500/-</Td>
                <Td>50 $</Td>

              </Tr>
              <Tr>


              </Tr>
              <Tr>


              </Tr>

            </Tbody>
          </Table>
        </TableContainer>
      </div>


    </div>
  )
}
