import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Tab,
} from '@chakra-ui/react'


// IMPORTING IMAGES BELOW
import satyajitChakrabarti from "../assets/PNG/organizing team 2024/satyajitChakrabarti.png"
import Biswajoy_Chatterjee from "../assets/PNG/organizing team 2024/biswajoy.jpeg"
import alex from "../assets/PNG/organizing team 2024/alex.webp"
import PradeepKumarSharma from "../assets/PNG/organizing team 2024/pradeepKrSharma.webp"
import banani from "../assets/PNG/organizing team 2024/banani.jpg"
// import MukeshYadav from "../assets/PNG/organizing team 2024/mukeshYadav.jpeg"

import { KeynoteSpeaker_card_component } from '../components/KeynoteSpeaker_card_component'


export const OrganizingTeam = () => {
  return (
    <div className=' lg:w-[100%] flex flex-col py-28 justify-center items-center '>

      <div>

        <h1 className='text-5xl font-bold mb-10'>Advisory Board</h1>
        <TableContainer>
          <Table>
            <Tbody>
              <Tr>
                <Td className="text-lg font-bold">Dr. Vedavati G. Puranik</Td>
                <Td className=" font-semibold">Ex-Senior Scientist, Physical and Materials Chemistry Division NCL Pune.</Td>

              </Tr>

              <Tr>
                <Td className="text-lb font-bold">Prof. K.C. Jain</Td>
                <Td className=" font-semibold">Professor, Dept. of Mathematics, MNIT Jaipur, India</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. Ivan Zelinka</Td>
                <Td className=" font-semibold">Professor, Electrical Engineering & Computer Science Department, National Supercomputing Centre, IT4 Innovations, Technical University of Ostrava.</Td>

              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. Awadhesh Prasad</Td>
                <Td className=" font-semibold">Professor, Department of Physics and Astrophysics University of Delhi</Td>

              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. D. Bandyopadhyay</Td>
                <Td className=" font-semibold">Professor, Department of Physics, BITS, Pilani</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. Ragini Gupta</Td>
                <Td className=" font-semibold">Professor, Department of Chemistry, MNIT Jaipur</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. Santiago Gómez-Ruiz</Td>
                <Td className=" font-semibold">Professor of Inorganic Chemistry, Dept. of Biology and Geology, Physics and Inorganic Chemistry, Rey Juan Carlos University, Spain</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Prof. Haci Mehmet Baskonus</Td>
                <Td className=" font-semibold">Professor, Faculty of Education, Harran University, Turkey</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Prof. Jagdev Singh</Td>
                <Td className=" font-semibold">Professor, Department of Mathematics, JECRC University, Jaipur-303905, Rajasthan, India</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. P. Barman</Td>
                <Td className=" font-semibold">Professor,  Department of Chemistry, NIT Silchar</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Dr. Yudhveer Singh</Td>
                <Td className=" font-semibold">Associate Professor, Amity Institute of Information Technology, Amity University Rajasthan, Jaipur-303002, India</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Dr. Pooja Sharma </Td>
                <Td className=" font-semibold">Associate Professor, Department of Mathematics & Statistics , Manipal University Jaipur</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Dr. Dawid Dudowski</Td>
                <Td className=" font-semibold">Assistant Professor, Division of Dynamics Lodz University of technology, Lodz, Stefanowskiego</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Dr. Devendra Kumar</Td>
                <Td className=" font-semibold">Assistant Professor, Department of Mathematics, University of Rajasthan, Jaipur-302004, Rajasthan, India</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Dr. Vaibhav Varshney</Td>
                <Td className=" font-semibold">Assistant Professor, Department of Physics, Dyal Singh College, University of Delhi</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Dr. Naresh Kumar</Td>
                <Td className=" font-semibold">Assistant Professor, Department of Mathematical and Physical Sciences, Sultanate of Oman.</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.) Anoop Kumar Mukhopadhyay</Td>
                <Td className=" font-semibold">Former Chief Scientist, CSIR-Central Glass and Ceramic Research Institute (CGCRI), Kolkata, India.</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.) Navin Kumar</Td>
                <Td className=" font-semibold">Principal, Indian Military Academy (IMA) Dehradun, Uttarakhand, India. </Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.) Chandra Shekhar</Td>
                <Td className=" font-semibold">Professor, Department of Mathematics, Birla Institute of Technology and Science, Pilani, Rajasthan, India. </Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.) Naveen Kumar</Td>
                <Td className=" font-semibold">Professor, Department of Applied Mathematics, Basic Science Building, MJP Rohilkhand University Bareilly, Utter Pradesh, India. </Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.) Pravindra Kumar</Td>
                <Td className=" font-semibold">Professor, Department of Biosciences and Bioengineering, IIT Roorkee, Uttarakhand, India</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.) Shailly Tomar</Td>
                <Td className=" font-semibold">Professor, Department of Biosciences and Bioengineering, IIT Roorkee, Uttarakhand, India</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.) Sanjeev Kumar</Td>
                <Td className=" font-semibold">Professor, Department of Mathematics, IIT Roorkee, Uttarakhand, India</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.) Manoranjan Mishra</Td>
                <Td className=" font-semibold">Professor, Department of Mathematics, IIT Roper, Punjab, India. </Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.) Rashmi Jain</Td>
                <Td className=" font-semibold">Retd Professor, Department of Mathematics, MNIT Jaipur, Rajasthan, India. </Td>

              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.) Neelama Gupta</Td>
                <Td className=" font-semibold">Retd. Professor, Department of Mathematics, MNIT Jaipur, Rajasthan, India. </Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.) R.C. Soni</Td>
                <Td className=" font-semibold">Retd. Professor, Department of Mathematics, MNIT Jaipur, Rajasthan, India. </Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.) Vatsala Mathur</Td>
                <Td className=" font-semibold">Retd. Professor, Department of Mathematics, MNIT Jaipur, Rajasthan, India. </Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.) Anil Sharma</Td>
                <Td className=" font-semibold">Retd. Professor, Department of Mathematics, University of Rajasthan Jaipur, Jaipur, Rajasthan, India. </Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.) R.N. Jaat</Td>
                <Td className=" font-semibold">Retd. Professor, Department of Mathematics, University of Rajasthan Jaipur, Jaipur, Rajasthan, India. </Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Prof. (Dr.)  Prashant S. Alegaonkar</Td>
                <Td className=" font-semibold">Department of Physics, School of Basic Sciences, Central University of Punjab, Bathinda, Punjab, India</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Dr. Santosh Chowdhary</Td>
                <Td className=" font-semibold">Associate Professor, Department of Mathematics, MNIT Jaipur, Jaipur, Rajasthan, India. </Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Dr. Nutan Kumar Tomar</Td>
                <Td className=" font-semibold">Associate Professor, Department of Mathematics, IIT Patna, Bihar, India. </Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Dr. Sunil Panday</Td>
                <Td className=" font-semibold">Associate Professor and Head of Department Mathematics, NIT Manipur, Imphal, Manipur, India.</Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Dr. Amit Kumar</Td>
                <Td className=" font-semibold">Associate Professor and Head of Department Mathematics SMPG College, Meerut, Utter Pradesh, India. </Td>
              </Tr>
              <Tr>
                <Td className="text-lg font-bold">Dr. Vipin Kumar</Td>
                <Td className=" font-semibold">Associate Professor, Department of Mathematics B K Birla Institute of Engineering and Technology, Pilani, Rajasthan, India. </Td>
              </Tr>


            </Tbody>
          </Table>
        </TableContainer>
        <h1 className='text-5xl font-bold mb-10 mt-24 mb-16'>Think Tank</h1>
      </div>

 {/* THE ORGANIZING TEAM SECTION */}
      <div className='w-[100%] flex flex-col items-center'>



        {/* SATYAJIT CHAKRABARTI, alex and Banani */}
        <div className=' mb-10 flex justify-evenly w-[95rem]'>
          <KeynoteSpeaker_card_component image={satyajitChakrabarti} bold="Prof.(Dr.) Satyajit Chakrabarti" line1="CHIEF PATRON" line2="Founder" line3="UEM JAIPUR" />
          <KeynoteSpeaker_card_component image={alex} bold="Prof.(Dr.) Satyajit Chakrabarti" line1="PATRON" line2="PRO VICE CHANCELLOR UEM JAIPUR" line3="" />
          <KeynoteSpeaker_card_component image={banani} bold="Mrs. Banani Chakrabarti" line1="PATRON" line2="CHANCELLOR" line3="UEM Jaipur" />

        </div>




        {/* BISWAJOY AND Pradeep Sharma */}
        <div className=' mb-10 flex justify-evenly w-[95rem]'>
          <KeynoteSpeaker_card_component image={Biswajoy_Chatterjee} bold="Prof.(Dr.) Biswajoy Chatterjee"  line1="VICE-CHANCELLOR " line2="UEM JAIPUR" />
          <KeynoteSpeaker_card_component image={PradeepKumarSharma} bold="Prof.(Dr.) Pradeep Kr. Sharma" line1="REGISTRAR" line2="UEM JAIPUR" line3="" />
          
        </div>
      </div>
      {/*Organising Team Table*/}

      <div className='w-[89rem]'>
        <h1 className='text-3xl font-bold mb-4'>CONVENERS</h1>
        <TableContainer className='mb-4'>
          <Table>
            <Tbody>
              <Tr>
                <Td className="text-lg font-bold w-[351.26px]">Dr. Praphull Chhabra</Td>
                <Td className="font-semibold">Professor (Department of Mathematics) UEM Jaipur</Td>

              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Dr. Tarun Sharma</Td>
                <Td className=" font-semibold">Professor(Department of Mathematics) UEM Jaipur</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <h1 className='text-3xl font-bold mb-4'>Co-Convener</h1>
        <TableContainer className='mb-4'>
          <Table>
            <Tbody>
              <Tr>
                <Td className="text-lg font-bold  w-[351.26px]">Dr.Arnab Palui</Td>
                <Td className="font-semibold">Associate Professor(Department of Physics) UEM Jaipur</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <h1 className='text-3xl font-bold mb-4'>Organising Team</h1>
        <TableContainer className='mb-4'>
          <Table>
            <Tbody>
              <Tr>
                <Td className="text-lg font-bold w-[351.26px]">Dr.Rahul Sharma</Td>
                <Td className=" font-semibold">Associate Professor(Department of Mathematics) UEM Jaipur</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Dr.Anamika Khaskel</Td>
                <Td className=" font-semibold">Associate Professor(Department of Chemistry) UEM Jaipur</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Ms.Pallavi Malik</Td>
                <Td className=" font-semibold">Assistant Professor(Department of Mathematics) UEM Jaipur</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Mr. Manish kumar Jangir</Td>
                <Td className=" font-semibold">Lab Technician(Department of Physics) UEM Jaipur</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Mr.Kamal Kishor Kumawat</Td>
                <Td className=" font-semibold">Lab Techinician(Department of Chemistry) UEM Jaipur</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Ms. Sonam Chhabra</Td>
                <Td className=" font-semibold">Research Scholar(Department of Mathematics) UEM Jaipur</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Mr. Devendra kumar</Td>
                <Td className=" font-semibold">Research Scholar(Department of Mathematics) UEM Jaipur</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Mr.Mukesh kumar Mahala</Td>
                <Td className=" font-semibold">Research Scholar(Department of Mathematics) UEM Jaipur</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Mr. Rakesh kumar Sharma</Td>
                <Td className=" font-semibold">Research Scholar(Department of Chemistry) UEM Jaipur</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Ms. Santosh kumari Bajiya</Td>
                <Td className=" font-semibold">Research Scholar(Department of Chemistry) UEM Jaipur</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Ms. Afsana Fazal</Td>
                <Td className=" font-semibold">Research Scholar(Department of Chemistry) UEM Jaipur</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Ms. Rachna Kumawat</Td>
                <Td className=" font-semibold">Research Scholar(Department of Chemistry) UEM Jaipur</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <h1 className='text-3xl font-bold mb-4'>Technical and other Support Team</h1>
        <TableContainer>
          <Table>
            <Tbody>
            <Tr>
                <Td className="text-lg font-bold w-[351.26px]">Mr. Biswanath Mukherjee</Td>
                <Td className=" font-semibold">Student Coordinator (CSE 3rd Year) UEM Jaipur</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Mr. Keshav Bhardwaj</Td>
                <Td className=" font-semibold">Student Coordinator(CSE(AIML) 2nd Year) UEM Jaipur</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Mr. Bhim Lama</Td>
                <Td className=" font-semibold">Technician UEM Jaipur</Td>
              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Mr. Shyam Lal Jaat</Td>
                <Td className=" font-semibold">Technician UEM Jaipur</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        
      </div>
    </div>
  )
}
