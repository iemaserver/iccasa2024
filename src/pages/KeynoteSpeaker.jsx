import { KeynoteSpeaker_card_component } from "../components/KeynoteSpeaker_card_component"

// IMAGE IMPORTS
import DrAbhijitKumarDas from "../assets/JPG/keynoteSpeaker/Dr. Abhijit Kumar Das.jpg"
import DrRituAgarwal from "../assets/JPG/keynoteSpeaker/RituAgarwal.jpg"
import DrDevendraKumar from "../assets/JPG/keynoteSpeaker/Dr. Devendra Kumar.jpeg"
import DrDharmendraTripathi from "../assets/JPG/keynoteSpeaker/Dr. Dharmendra Tripathi.jpg"
import DrJagdevSingh from "../assets/JPG/keynoteSpeaker/Dr. Jagdev Singh.jpeg"
import DrNareshKumar from "../assets/JPG/keynoteSpeaker/Dr. Naresh Kumar.jpeg"
import DrPradeepKumar from "../assets/JPG/keynoteSpeaker/Dr. Pradeep Kumar.jpg"
import DrVaibhav from "../assets/JPG/keynoteSpeaker/Dr. Vaibhav 1.png"
import DrYudhveerSing from "../assets/JPG/keynoteSpeaker/Dr. Yudhveer Singh.jpeg"
import ProfAnilKumar from "../assets/JPG/keynoteSpeaker/Prof. Anil Kumar.jpg"
import DrHaciMehmet from "../assets/JPG/keynoteSpeaker/Prof. (Dr.) Haci Mehmet Baskonus.jpeg"
import ProfODMakinde from "../assets/JPG/keynoteSpeaker/Prof. O. D. Makinde.gif"



export const KeynoteSpeaker = () => {
  return (
    <div className=' lg:w-[100%] py-32 flex flex-col items-center keynoteSpeaker-main'>

      <div className="flex justify-start keynoteSpeaker-heading">
        <h1 className=" font-bold text-5xl mb-16">Keynote Speakers :</h1>
      </div>
      <div className="KeynoteSpeakers-card-wrapper">

        {/* DR ABHIJIT KUMAR DAS */}
        <KeynoteSpeaker_card_component image={DrAbhijitKumarDas} bold="Prof. (Dr.) Abhijit Kumar Das" line1="Senior Professor" line2="School of Mathematical &amp; Computational Sciences" line3="Indian Association for the Cultivation of Science, Kolkata" />

        {/* DR RITU AGARWAL */}
        <KeynoteSpeaker_card_component image={DrRituAgarwal} bold="Dr. Ritu Agarwal" line1="Assistant Professor (Mathematics)" line2="Department of Mathematics" line3="MNIT Jaipur" />

        {/* PROF DHARMENDRA TRIPATHI */}
        <KeynoteSpeaker_card_component image={DrDharmendraTripathi} bold="Dr. Dharmendra Tripathi" line1="Associate Professor (Mathematics)" line2="Department of Mathematics" line3="National Institute of Technology, Uttarakhand" />

        {/* PROF DR OD MAKINDE */}
        <KeynoteSpeaker_card_component image={ProfODMakinde} bold="Prof. (Dr.) O.D. Makinde" line1="Professor (Mathematics)" line2="Stellenbosch University, South Africa" />

        {/* Prof. (Dr.) Haci Mehmet Baskonus */}
        <KeynoteSpeaker_card_component image={DrHaciMehmet} bold="Prof. (Dr.) Haci Mehmet Baskonus" line1="Faculty of Education" line2="Harran University, Turkey" />

        {/* PROF DR YUDHVEER SING */}
        <KeynoteSpeaker_card_component image={DrYudhveerSing} bold="Dr. Yudhveer Singh" line1="Associate Professor" line2="Amity Institute of Information Technology" line3="Amity University Rajasthan, Jaipur" />

        {/* DR DEVENDRA KUMAR */}
        <KeynoteSpeaker_card_component image={DrDevendraKumar} bold="Dr. Devendra Kumar" line1="Assistant Professor" line2="Department of Mathematics" line3="University of Rajasthan, Jaipur" />

        {/* DR JAGDEV SING */}
        <KeynoteSpeaker_card_component image={DrJagdevSingh} bold="Prof. (Dr.) Jagdev Singh" line1="Professor and Head" line2="Department of Mathematics," line3="JECRC University, Jaipur" />

        {/* DR PRADEEP KUMAR */}
        <KeynoteSpeaker_card_component image={DrPradeepKumar} bold="Dr. Pradeep Kumar" line1="Associate Professor" line2="Department of Chemistry" line3="MNIT Jaipur" />

        {/* PROF ANIL KUMAR */}
        <KeynoteSpeaker_card_component image={ProfAnilKumar} bold="Prof. (Dr.) Anil Kumar" line1="Professor" line2="Department of Chemistry" line3="BITS Pilani, Pilani campus" />

        {/* DR NARESH KUMAR */}
        <KeynoteSpeaker_card_component image={DrNareshKumar} bold="Dr. Naresh Kumar" line1="Assistant Professor," line2="Department of Mathematical and Physical Sciences," line3="Sultanate of Oman." />

        {/* DR VAIBHAV VARSHNEY */}
        <KeynoteSpeaker_card_component image={DrVaibhav} bold="Dr. Vaibhav Varshney" line1="Assistant Professor" line2="Department of Physics and Astrophysics" line3="Delhi University, Delhi, India" />
      </div>
    </div>
  )
}
