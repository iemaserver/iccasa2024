import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from '@chakra-ui/react'




// IMPORTING IMAGES BELOW
import satyajitChakrabarti from "../assets/PNG/organizing team 2024/satyajitChakrabarti.png"
import Biswajoy_Chatterjee from "../assets/PNG/organizing team 2024/biswajoy.jpeg"
import alex from "../assets/PNG/organizing team 2024/alex.webp"
import PradeepKumarSharma from "../assets/PNG/organizing team 2024/pradeepKrSharma.webp"
// import MukeshYadav from "../assets/PNG/organizing team 2024/mukeshYadav.jpeg"
import tarunSharma from "../assets/PNG/organizing team 2024/tarunSharma.jpg"
import rahulSharma from "../assets/PNG/organizing team 2024/rahulSharma.jpg"
import ArnabPalui from "../assets/PNG/organizing team 2024/arnab.jpg"
import PraphullChhabra from "../assets/PNG/organizing team 2024/prafulChhabra.jpg"
import AnamikaKhaskel from "../assets/PNG/organizing team 2024/anamika.png"
import PallaviMalik from "../assets/PNG/organizing team 2024/pallavi_mam.jpg"
import PriyankaChhaparwal from "../assets/PNG/organizing team 2024/priyankaChhaparwal.png"
import BiswanathMukherjee from "../assets/PNG/organizing team 2024/biswanath.jpeg"
import ManishKrJangir from "../assets/PNG/organizing team 2024/manishKr.jpg"
import BhimLama from "../assets/PNG/organizing team 2024/bhimLama.jpg"
import ShyamLal from "../assets/PNG/organizing team 2024/shyamLal.jpg"
import kamalKishoreKumawat from "../assets/PNG/organizing team 2024/kamalKishore.jpeg"
import { KeynoteSpeaker_card_component } from '../components/KeynoteSpeaker_card_component'


export const OrganizingTeam = () => {
  return (
    <div className=' lg:w-[100%] flex flex-col py-28 justify-center items-center '>

      <div>

        <h1 className='text-5xl font-bold mb-10'>Advisory Body</h1>
        <TableContainer>
          <Table size="sm">
            <Tbody>
              <Tr>
                <Td>Dr. Vedavati G. Puranik</Td>
                <Td>Ex-Senior Scientist, Physical and Materials Chemistry Division NCL Pune.</Td>

              </Tr>

              <Tr>
                <Td>Prof. K.C. Jain</Td>
                <Td>Professor, Dept. of Mathematics, MNIT Jaipur, India</Td>
              </Tr>
              <Tr>
                <Td>Prof. Ivan Zelinka</Td>
                <Td>Professor, Electrical Engineering & Computer Science Department, National Supercomputing Centre, IT4 Innovations, Technical University of Ostrava.</Td>

              </Tr>
              <Tr>
                <Td>Prof. Awadhesh Prasad</Td>
                <Td>Professor, Department of Physics and Astrophysics University of Delhi</Td>

              </Tr>
              <Tr>
                <Td>Prof. D. Bandyopadhyay</Td>
                <Td>Professor, Department of Physics, BITS, Pilani</Td>
              </Tr>
              <Tr>
                <Td>Prof. Ragini Gupta</Td>
                <Td>Professor, Department of Chemistry, MNIT Jaipur</Td>
              </Tr>
              <Tr>
                <Td>Prof. Santiago Gómez-Ruiz</Td>
                <Td>Professor of Inorganic Chemistry, Dept. of Biology and Geology, Physics and Inorganic Chemistry, Rey Juan Carlos University, Spain</Td>
              </Tr>

              <Tr>
                <Td>Prof. Haci Mehmet Baskonus</Td>
                <Td>Professor, Faculty of Education, Harran University, Turkey</Td>
              </Tr>

              <Tr>
                <Td>Prof. Jagdev Singh</Td>
                <Td>Professor, Department of Mathematics, JECRC University, Jaipur-303905, Rajasthan, India</Td>
              </Tr>
              <Tr>
                <Td>Prof. P. Barman</Td>
                <Td>Professor,  Department of Chemistry, NIT Silchar</Td>
              </Tr>

              <Tr>
                <Td>Dr. Yudhveer Singh</Td>
                <Td>Associate Professor, Amity Institute of Information Technology, Amity University Rajasthan, Jaipur-303002, India</Td>
              </Tr>
              <Tr>
                <Td>Dr. Pooja Sharma </Td>
                <Td>Associate Professor, Department of Mathematics & Statistics , Manipal University Jaipur</Td>
              </Tr>
              <Tr>
                <Td>Dr. Dawid Dudowski</Td>
                <Td>Assistant Professor, Division of Dynamics Lodz University of technology, Lodz, Stefanowskiego</Td>
              </Tr>
              <Tr>
                <Td>Dr. Devendra Kumar</Td>
                <Td>Assistant Professor, Department of Mathematics, University of Rajasthan, Jaipur-302004, Rajasthan, India</Td>
              </Tr>
              <Tr>
                <Td>Dr. Vaibhav Varshney</Td>
                <Td>Assistant Professor, Department of Physics, Dyal Singh College, University of Delhi</Td>
              </Tr>
              <Tr>
                <Td>Dr. Naresh Kumar</Td>
                <Td>Assistant Professor, Department of Mathematical and Physical Sciences, Sultanate of Oman.</Td>
              </Tr>

            </Tbody>
          </Table>
        </TableContainer>
        <h1 className='text-5xl font-bold mb-10 mt-24 mb-16'>Organizing Team</h1>
      </div>









      {/* THE ORGANIZING TEAM SECTION */}
      <div className='w-[100%] flex flex-col items-center'>



        {/* SATYAJIT CHAKRABARTI */}
        <div className=' mb-12'>
          <KeynoteSpeaker_card_component image={satyajitChakrabarti} bold="Prof.(Dr.) Satyajit Chakrabarti" line1="CHIEF PATRON" line2="CHANCELLOR" line3="UEM JAIPUR" />
        </div>




        {/* BISWAJOY AND SATYAJIT */}
        <div className=' mb-12 flex justify-evenly w-[65rem]'>
          <KeynoteSpeaker_card_component image={Biswajoy_Chatterjee} bold="Prof.(Dr.) Biswajoy Chatterjee" line1="PATRON" line2="VICE-CHANCELLOR
UEM JAIPUR" line3="" />

          <KeynoteSpeaker_card_component image={alex} bold="Prof.(Dr.) Satyajit Chakrabarti" line1="PATRON" line2="PRO VICE CHANCELLOR
UEM JAIPUR" line3="" />
        </div>




        {/* MUKESH YADAV  PRADEEP KR SHARMA */}
        <div className=' mb-12 flex justify-evenly w-[65rem]'>
          <KeynoteSpeaker_card_component image={PradeepKumarSharma} bold="Prof.(Dr.) Pradeep Kr. Sharma" line1="REGISTRAR
" line2="UEM JAIPUR" line3="" />

          {/* <KeynoteSpeaker_card_component image={MukeshYadav} bold="Prof.(Dr.) Mukesh Yadav" line1="DEAN" line2=" 
UEM JAIPUR" line3="" /> */}
        </div>


        {/* TARUN SHARMA , RAHUL SHARMA , ARNAB PALUI */}
        <div className=' mb-12 flex justify-evenly w-[65rem]'>


          <KeynoteSpeaker_card_component image={rahulSharma} bold="Dr. Rahul Sharma" line1="CONVENER" line2="" line3="" />




        </div>

        <div className=' mb-12 flex'>

          <KeynoteSpeaker_card_component image={ArnabPalui} bold="Dr. Arnab Palui" line1="CO-CONVENER" line2="" line3="" />
        </div>




        {/* PRAPHULL CHHABRA , ANAMIKA KHASKEL  */}
        <div className=' mb-12 flex justify-evenly w-[65rem]'>
          <KeynoteSpeaker_card_component image={PraphullChhabra} bold="Dr. Praphull Chhabra" line1="ORGANISING SECRETARY" line2="" line3="" />


          <KeynoteSpeaker_card_component image={AnamikaKhaskel} bold="Dr. Anamika Khaskel" line1="ORGANISING SECRETARY" line2="" line3="" />
        </div>


        <div className=' mb-12 flex'>

          <KeynoteSpeaker_card_component image={tarunSharma} bold="Dr. Tarun Sharma" line1="ORGANIZING SECRETARY" line2="" line3="" />
        </div>





        {/* PALLAVI MALIK , PRIYANKA CHAPARWAL */}
        <div className=' mb-12 flex justify-evenly w-[65rem]'>
          <KeynoteSpeaker_card_component image={PallaviMalik} bold="Prof. Pallavi Malik" line1="ORGANISING SECRETARY" line2="" line3="" />

          <KeynoteSpeaker_card_component image={PriyankaChhaparwal} bold="Dr. Priyanka Chhaparwal" line1="ORGANISING SECRETARY" line2="" line3="" />


        </div>




        {/* ME */}
        <div className=' mb-12'>
          <KeynoteSpeaker_card_component image={BiswanathMukherjee} bold="Biswanath Mukherjee" line1="TECHNICAL SUPPORT" line2="" line3="" />
        </div>





        {/* Manish Kr. Jangir  , Kamal Kishore Kumawat*/}
        <div className=' mb-12 flex justify-evenly w-[65rem]'>
          <KeynoteSpeaker_card_component image={ManishKrJangir} bold="Mr. Manish Kr. Jangir" line1="TECHNICAL SUPPORT TEAM" line2="" line3="" />

          <KeynoteSpeaker_card_component image={kamalKishoreKumawat} bold="Mr. Kamal Kishore Kumawat" line1="TECHNICAL SUPPORT TEAM" line2="" line3="" />
        </div>




        {/* BHIM LAMA , SHYAM LAL */}
        <div className=' mb-12 flex justify-evenly w-[65rem]'>
          <KeynoteSpeaker_card_component image={BhimLama} bold="Mr. Bhim Lama" line1="TECHNICAL SUPPORT TEAM" line2="" line3="" />

          <KeynoteSpeaker_card_component image={ShyamLal} bold="Mr. Shyam Lal" line1="TECHNICAL SUPPORT TEAM" line2="" line3="" />
        </div>


      </div>


    </div>
  )
}
