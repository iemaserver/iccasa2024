import { KeynoteSpeaker_card_component } from "../components/KeynoteSpeaker_card_component"

// IMAGE IMPORTS
import DrAbhijitKumarDas from "../assets/JPG/keynoteSpeaker/abhijitKumar.jpg"
// import DrRituAgarwal from "../assets/JPG/keynoteSpeaker/RituAgarwal.jpg"
// import DrDevendraKumar from "../assets/JPG/keynoteSpeaker/Dr. Devendra Kumar.jpeg"
import DrDharmendraTripathi from "../assets/JPG/keynoteSpeaker/DharmendraTripathi.jpg"
// import DrJagdevSingh from "../assets/JPG/keynoteSpeaker/Dr. Jagdev Singh.jpeg"
import DrNareshKumar from "../assets/JPG/keynoteSpeaker/Dr. Naresh Kumar.jpeg"
import DrPradeepKumar from "../assets/JPG/keynoteSpeaker/Dr. Pradeep Kumar.jpg"
// import DrVaibhav from "../assets/JPG/keynoteSpeaker/Dr. Vaibhav 1.png"
// import DrYudhveerSing from "../assets/JPG/keynoteSpeaker/Dr. Yudhveer Singh.jpeg"
import ProfAnilKumar from "../assets/JPG/keynoteSpeaker/Prof. Anil Kumar.jpg"
import DrHaciMehmet from "../assets/JPG/keynoteSpeaker/Prof. (Dr.) Haci Mehmet Baskonus.jpeg"
// import DrAnuragShukla from "../assets/JPG/keynoteSpeaker/Dr.AnuragShukla.jpeg"
import ProfODMakinde from "../assets/JPG/keynoteSpeaker/Prof. O. D. Makinde.gif"
import sachin from "../assets/JPG/keynoteSpeaker/Sachin.jpg"
import sunil from "../assets/JPG/keynoteSpeaker/SunilPandey.jpg"
import AKM from "../assets/JPG/keynoteSpeaker/AKM Picture 1.jpg"


export const KeynoteSpeaker = () => {
  return (
    <div className=' lg:w-[100%] py-32 flex flex-col items-center keynoteSpeaker-main'>

      <div className="flex justify-start keynoteSpeaker-heading">
        <h1 className=" font-bold text-5xl mb-16">Keynote Speakers :</h1>
      </div>
      <div className="KeynoteSpeakers-card-wrapper">

        {/* DR ABHIJIT KUMAR DAS */}
        <KeynoteSpeaker_card_component image={DrAbhijitKumarDas} bold="Prof. (Dr.) Abhijit Kumar Das" line1="Senior Professor" line2="School of Mathematical &amp; Computational Sciences" line3="Indian Association for the Cultivation of Science, Kolkata" />

        {/* PROF DHARMENDRA TRIPATHI */}
        <KeynoteSpeaker_card_component image={DrDharmendraTripathi} bold="Dr. Dharmendra Tripathi" line1="Associate Professor (Mathematics)" line2="Department of Mathematics" line3="National Institute of Technology, Uttarakhand" />

        {/* PROF DR OD MAKINDE */}
        <KeynoteSpeaker_card_component image={ProfODMakinde} bold="Prof. (Dr.) O.D. Makinde" line1="Professor (Mathematics)" line2="Stellenbosch University, South Africa" />

        {/* Prof. (Dr.) Haci Mehmet Baskonus */}
        <KeynoteSpeaker_card_component image={DrHaciMehmet} bold="Prof. (Dr.) Haci Mehmet Baskonus" line1="Faculty of Education" line2="Harran University, Turkey" />

        {/* DR PRADEEP KUMAR */}
        <KeynoteSpeaker_card_component image={DrPradeepKumar} bold="Dr. Pradeep Kumar" line1="Associate Professor" line2="Department of Chemistry" line3="MNIT Jaipur" />

        {/* PROF ANIL KUMAR */}
        <KeynoteSpeaker_card_component image={ProfAnilKumar} bold="Prof. (Dr.) Anil Kumar" line1="Professor" line2="Department of Chemistry" line3="BITS Pilani, Pilani campus" />

        {/* DR NARESH KUMAR */}
        <KeynoteSpeaker_card_component image={DrNareshKumar} bold="Dr. Naresh Kumar" line1="Assistant Professor," line2="Department of Mathematical and Physical Sciences," line3="Sultanate of Oman." />

        {/*Dr Sachin Kumar */}
        <KeynoteSpeaker_card_component image={sachin} bold = "Dr. Sachin Kumar" line1="Associate Professor" lin2="Department of Mathematics and Statistics" line3="School of basic Sciences, Central University of Punjab, Bathinda,Punjab,India" />
        
        {/*DR Sunil Pandey */}
        <KeynoteSpeaker_card_component image={sunil} bold="Dr. Sunil Pandey" line1="Associate Professor" line2="Head of Department of Mathematics" line3="IIT Patna" />

        {/* Anoop Kumar Mukhopadhyay */}
        <KeynoteSpeaker_card_component image={AKM} bold="Prof. Dr. Anoop Kumar Mukhopadhyay" line1="Scientist(former)" line2="CSIR- Central Glass and Ceramic Research Institute of Kolkata,India" />
      </div>
    </div>
  )
}
