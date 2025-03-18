import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Tab,
} from '@chakra-ui/react'


// IMPORTING IMAGES BELOW
// import satyajitChakrabarti from "../assets/PNG/organizing team 2024/satyajitChakrabarti.png"
// import Biswajoy_Chatterjee from "../assets/PNG/organizing team 2024/biswajoy.jpeg"
// import alex from "../assets/PNG/organizing team 2024/alex.jpg"
// import PradeepKumarSharma from "../assets/PNG/organizing team 2024/pradeepKrSharma.jpg"
// import banani from "../assets/PNG/organizing team 2024/banani.jpg"
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
          <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//2196cb0cc3c44701/satyajitChakrabarti.png?Expires=1836901423&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lwwJmuaQOoZPwFG4r-QMZ~h-uXVu8SwsO4mzstrRSW39HjAQjxKBtGdyb6y7gUiwDAc01T5eX6s1QJ7AE5E3abx9doxK-BVMA4~NVCZiq0~4kOjtjD5LgP6rMsbFnbgwKByuFk5Ba-Vg1G15mPfM8-RXz8em9ycvYPZlOU4CpmkBBkzysrfK6MMBRJ6rVGmRiwCRo39MUAGpirFUR5RrVmGQGrb3YcnzXRTJ0HmcZ-xKWxY0ZW~NBLTR66uOJiY9QPN8NJW5jdZdSv9DmXxBWOGHT6gNfOCha5zKzviXxwJLYCUSVx1H4rloItUIReaAQfZTvpcUK-ou~7Jkzbff2g__" bold="Prof.(Dr.) Satyajit Chakrabarti" line1="CHIEF PATRON" line2="Founder" line3="UEM JAIPUR" />
          <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//c98260b3cde744f7/banani.jpg?Expires=1836901417&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=joTaLQpj2YSalaB8Y~ajGQOhODnnjf-46eRxxTsBzbGaqluSfxmH5STUrEe9DAl0SQw7bTFcA-NA4bry7v8CR5eN7liL9Ehu9VFjXGufVqseoBaHF58hzmVf-CceCKcfHXNt6C3v6ZtkWeRWqsOHIVGNVLqgFxSHkwmj7n~GqawZcI3lEAb6DCfI0A9~h4KmkVPpRYBdQSzBTLEc~UNSFkbZBMffallHbaIaT1eLd7SowoU6zBxDgzaf2yh--4iOS9NJy8lgDebOB0t59PxIAx3C5zqOg12jxr5oVPFw5208wXjxBo1BiYoXU2wdPNbavV7EMlC1B2kp08fdLfWQVw__" bold="Mrs. Banani Chakrabarti" line1="PATRON" line2="CHANCELLOR" line3="UEM Jaipur" />
          <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//cc2253d41766420d/alex.jpg?Expires=1836901343&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=gjbnYM6mieIiRcanmNuQ~DHekM1nDSyw4deqRGh0Qc0ghrreQVIpbGFfeG7RvuME3mAA0nkO1~N1TdPEkApkciQ9x2Z2AmWZGUIcWRwtkWMZaA1bR65b15tSvw~e3mqUpLEmp5LLevM-VOTfy8WZAQ8u5bgQnQx4FdbY2sEndIrjf48WJ3nFH8FktOW63QOLeu7BlVSUTTZyipf7F1pp-xhsWLIPF0loBLGrjT8cEg2s0ZhrXNZUirdarpCbfwi2kYLHR~Uqr1THNQW6XOJbu884qxto4M~iJhiQQOcQqPW8Kdq6JoZ0UH0cHo8b9Yyzbz0wA7nteD3DBJQ4k3tIPQ__" bold="Prof.(Dr.) Satyajit Chakrabarti" line1="PATRON" line2="PRO VICE CHANCELLOR UEM JAIPUR" line3="" />

        </div>




        {/* BISWAJOY AND Pradeep Sharma */}
        <div className=' mb-10 flex justify-evenly w-[95rem]'>
          <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//3c84767216d3430e/biswajoy.jpeg?Expires=1836901435&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=F4ppoMxSReBiDChLIXK0W6Qcx7e6l6MSquEhFxQBoSXc83I9kYZKiTZal4EaS2MODFBZXuKp3YqMJZPjDe1khLnJ9fM9K-SlFPcyzKaBYAu2s8Aus19YQOl3x7TGxPh0~OcJcOudmZidG2pJqCKamc6bgxkC2GQbN5g7BfNIG9WiyYa70UIctPOtlMKvnpGAzCxWpTeYyy~mc8wAewMeFj8GHBXrfEe~j4i7xn07uCO6i-EcthPgRy-w2~SzQMKwlId6cOYdhkrd4GIVpP4JoX-5FxqWTZGVoXs3tUy8qTexwm6bv~iE79-yRvD2bjNu65MMPHwdW~x5cAKb8-jQpQ__" bold="Prof.(Dr.) Biswajoy Chatterjee"  line1="VICE-CHANCELLOR " line2="UEM JAIPUR" />
          <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//d61332e27f8245e5/pradeepKrSharma.jpg?Expires=1836901429&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fY3GHkXa8erern-OLl3TzSJw4n3QCQvJr7I7jztSfop6cepAjZUInCkdvGWV7JZMyUEMvBrr9mI3470lMJZ2Gm5VpcR~4ays8MFrKU3436Nhj55jzXWqphOQa~TlK0Jpr0t~A3Z-6M6ub95z6Ue5fjrzV7Y72y6e5q2HesIjnpM7qQDiS7FMnr0kS68sdoUMKoEH7Zc22ykB-GA1f4i3Y4DTpjvKh-WTeB80bcn-Ub4twAXvKgGdniCsgb33V-vnKlh3nxI1xYbXXBNc2MS8Xh0cz13XLuEa03pWjuKy~9g0z3O6akWhSElpdrLBtKuIcpMiQJITZd6dFU3xIOsrew__" bold="Prof.(Dr.) Pradeep Kr. Sharma" line1="REGISTRAR" line2="UEM JAIPUR" line3="" />
          
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
                <Td className="font-semibold">Professor (Department of Mathematics) UEM Jaipur.</Td>

              </Tr>

              <Tr>
                <Td className="text-lg font-bold">Dr. Tarun Sharma</Td>
                <Td className=" font-semibold">Associate Professor(Department of Mathematics) UEM Jaipur</Td>
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
                <Td className="font-semibold">Associate Professor(Department of Physics) UEM Jaipur.</Td>
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
