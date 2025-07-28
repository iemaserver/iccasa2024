import { KeynoteSpeaker_card_component } from "../components/KeynoteSpeaker_card_component"
import {PrevYear_KeynoteSpeaker_cardComponent} from "../components/PrevYear_KeynoteSpeaker_cardComponent"

export const KeynoteSpeaker = () => {
  return (
    <div className='lg:py-32 py-8 flex flex-col keynoteSpeaker-main container mx-auto'>

      <div className="flex justify-start keynoteSpeaker-heading">
        <h1 className="mb-3 text-lg font-bold lg:text-5xl lg:mb-16">Keynote Speakers :</h1>
      </div>
      <div className="KeynoteSpeakers-card-wrapper">

        {/* DR ABHIJIT KUMAR DAS */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Dr.AbhijitKumarDas.jpg?updatedAt=1751264845446" bold="Prof. (Dr.) Abhijit Kumar Das" line1="Senior Professor" line2="School of Mathematical &amp; Computational Sciences" line3="Indian Association for the Cultivation of Science, Kolkata" />

        {/* PROF DHARMENDRA TRIPATHI */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Dr.DharmendraTripathi.jpg?updatedAt=1751264845063" bold="Dr. Dharmendra Tripathi" line1="Associate Professor (Mathematics)" line2="Department of Mathematics" line3="National Institute of Technology, Uttarakhand" />

        {/* PROF DR OD MAKINDE */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Prof.%20O.%20D.%20Makinde.gif?updatedAt=1751264850134" bold="Prof. (Dr.) O.D. Makinde" line1="Professor (Mathematics)" line2="Stellenbosch University, South Africa" />

        {/* Prof. (Dr.) Haci Mehmet Baskonus */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Prof.Dr.HaciMehmetBaskonus.jpeg?updatedAt=1751264852099" bold="Prof. (Dr.) Haci Mehmet Baskonus" line1="Faculty of Education" line2="Harran University, Turkey" />

        {/* DR PRADEEP KUMAR */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Dr.PradeepKumar.jpg?updatedAt=1751264845213" bold="Dr. Pradeep Kumar" line1="Associate Professor" line2="Department of Chemistry" line3="MNIT Jaipur" />

        {/* PROF ANIL KUMAR */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Prof.AnilKumar.jpg?updatedAt=1751264850693" bold="Prof. (Dr.) Anil Kumar" line1="Professor" line2="Department of Chemistry" line3="BITS Pilani, Pilani campus" />

        {/* DR NARESH KUMAR */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Dr.NareshKumar.jpeg?updatedAt=1751264845475" bold="Dr. Naresh Kumar" line1="Assistant Professor," line2="Department of Mathematical and Physical Sciences," line3="Sultanate of Oman." />

        {/*Dr Sachin Kumar */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Sachin.jpg?updatedAt=1751349371455" bold = "Dr. Sachin Kumar" line1="Associate Professor" lin2="Department of Mathematics and Statistics" line3="School of basic Sciences, Central University of Punjab, Bathinda,Punjab,India" />
        
        {/*DR Sunil Pandey */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/SunilPandey.jpg?updatedAt=1751349371507" bold="Dr. Sunil Pandey" line1="Associate Professor" line2="Head of Department of Mathematics" line3="IIT Patna" />

        {/* Anoop Kumar Mukhopadhyay */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/AKM%20Picture%201.jpg?updatedAt=1751349371511" bold="Prof. Dr. Anoop Kumar Mukhopadhyay" line1="Scientist(former)" line2="CSIR- Central Glass and Ceramic Research Institute of Kolkata,India" />

        {/* Ritu Agarwal */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/RituAgarwal.jpg?updatedAt=1751264852101" bold="Dr. Ritu Agarwal" line1="Assistant Professor" line2="Department Of Mathematics" line3="MNIT Jaipur" />

        {/* Sarita Kumari */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Sarita.jpg?updatedAt=1753688125434" bold="Dr. Sarita Kumari" line1="Associate Professor" line2="Department of Physics, UOR, Jaipur" />
      </div>

      {/* Previous Year keynote speaker */}

      <div className="flex justify-start keynoteSpeaker-heading mt-16">
        <h1 className="mb-3 text-lg font-bold lg:text-5xl lg:mb-16">Previous Year Keynote Speakers :</h1>
      </div>

      <div className="mb-10 flex flex-row gap-8 flex-wrap justify-center">
       <PrevYear_KeynoteSpeaker_cardComponent image="https://ik.imagekit.io/keshav5173/previousYear_keynoteSspeaker/ODMakinde.jpg?updatedAt=1751348782054" bold="Prof. O.D. Makinde" line1="Faculty of Military Science, Stellenbosch" line2="University of South Africa  " />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://ik.imagekit.io/keshav5173/previousYear_keynoteSspeaker/animasaunIssac.jpg?updatedAt=1751348781840" bold="Dr. Animasaun Issac L." line1="Department of Mathematical Science" line2="The fedral University of technology  Akure, Nigeria" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://ik.imagekit.io/keshav5173/previousYear_keynoteSspeaker/DawidDudowski.webp?updatedAt=1751348782689" bold="Dr. Dawid Dudowski" line1="Division of Dynamics Lodz" line2="University of technology, Lodz, Stefanowskiego (Poland)" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://ik.imagekit.io/keshav5173/previousYear_keynoteSspeaker/ManishShrimali.jpg?updatedAt=1751348781897" bold="Prof. Manish Shrimali" line1="Department of physics" line2="Central University of Rajasthan" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://ik.imagekit.io/keshav5173/previousYear_keynoteSspeaker/GaneshBagler.jpg?updatedAt=1751348782079" bold="Prof. Ganesh Bagler" line1="Infosys Centre for Artificial Intelligence Department of Computational Biology" line2="IIT Delhi, New Delhi" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://ik.imagekit.io/keshav5173/previousYear_keynoteSspeaker/RamRamaswamy.jpg?updatedAt=1751348782561" bold="Prof. Ram Ramaswamy" line1="Department of Chemistry" line2="IIT Delhi, New Delhi" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://ik.imagekit.io/keshav5173/previousYear_keynoteSspeaker/SaptrisiBasu.jpg?updatedAt=1751348782110" bold="Mr. Saptarshi Basu" line1="Additional Director" line2="Tiger Agro Processing Industries Pvt Ltd." />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://ik.imagekit.io/keshav5173/previousYear_keynoteSspeaker/VidyottmaJain.jpg?updatedAt=1751348786139" bold="Dr. Vidyottama Jain" line1="Department of Data Science & Analytics" line2="Central University of Rajasthan" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://ik.imagekit.io/keshav5173/previousYear_keynoteSspeaker/RajatMandal.jpg?updatedAt=1751348782030" bold="Dr. Rajat Subhra Mandal" line1="Technical Chhairman" line2="Bureau of Indian Standard, Elcoma,ISLE" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://ik.imagekit.io/keshav5173/previousYear_keynoteSspeaker/vedavatiPuranik.jpg?updatedAt=1751348785161" bold="Dr. Vedavati G. Puranik" line1="Ex-Senior Scientist, Physical & Material Chemistry Division CSIR" line2="National Chemical Laboratory, Pune." />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://ik.imagekit.io/keshav5173/previousYear_keynoteSspeaker/SanjeevTomar.jpg?updatedAt=1751348782500" bold="Prof. Sanjeev K. Tomer" line1="Department of Statistics" line2="IIT BHU" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://ik.imagekit.io/keshav5173/previousYear_keynoteSspeaker/santiagoRuiz.jpg?updatedAt=1751348781740" bold="Prof. Santiago Gómez-Ruiz" line1="Universidad Rey Juan Carlos(Spain)" />
      </div>
    </div>
  )
}
