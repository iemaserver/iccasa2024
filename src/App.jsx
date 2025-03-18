import "./main.scss"
import { Home } from "./pages/Home"
import { KeynoteSpeaker } from "./pages/KeynoteSpeaker.jsx";
import { OrganizingTeam } from "./pages/OrganizingTeam.jsx";
import { Scope } from "./pages/Scope.jsx"
import { Registration } from "./pages/Registration.jsx"
import { Publication } from "./pages/Publication.jsx"
import { ImagePage2023 } from "./pages/2023ImagesPage.jsx"
import { ImagePage2022 } from "./pages/2022ImagePage.jsx";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// IMAGES
import uemLogoBackground from "./assets/PNG/uemBackgroundLogo.svg"
import uemLogo from "./assets/PNG/uemLogo2-removebg-preview.png"
import icassaLogo from "./assets/PNG/ICASSALogo.jpeg"
import locationIcon from "./assets/PNG/location_on.png"
import facebook from "./assets/PNG/facebook.png"
import linkedin from "./assets/PNG/linkedin.png"
import twitter from "./assets/PNG/twitter.png"
import { CallForPapers } from "./pages/CallForPapers.jsx";



function Banner() {

  return (


    // *********************************************************************
    // BANNER
    <div className="Banner-main">

      {/* ICCASA LOGO */}
      <div>
        <img className="
        2xl:h-[136px]
        xl:h-[130px]
        lg:h-[124px]
        " src={icassaLogo} alt="" />
      </div>





      {/* UEM TEXT */}
      <div className="Banner-wrapper-1-text_and_backgroundLogo_uem">
        <h1 className=" text-[#14008F]  font-bold 
        2xl:w-[43rem] 2xl:text-4xl
        xl:text-3xl xl:w-[36rem]
        lg:text-2xl lg:w-[29rem]">
          University Of Engineering and Management Jaipur</h1>


        {/* UEM BACKGROUND LOGO */}
        <div className="banner-uemLogoBackground">
          <img className="" src={uemLogoBackground} alt="" />
        </div>
      </div>



      {/* UEM LOGO */}
      <div>
        <img className="
        2xl:h-[136px]
        xl:h-[130px]
        lg:h-[124px]
        " src={uemLogo} alt="" />
      </div>


    </div>
  );
}







// ***************************************************************************
// NAVBAR
function Navbar() {


  return (
    <div className="Navbar-main 
    2xl:text-2xl
    xl:text-lg
    lg:text-lg
    ">
      <NavLink activeClassName="active" to="/" className="nav-link">Home</NavLink>
      <NavLink to="/scope" className="nav-link">Scope</NavLink>
      <NavLink to="/Keynote_Speaker" className="nav-link">Keynote Speaker</NavLink>
      <NavLink to="/Organinzing_Team" className="nav-link">Organizing Team</NavLink>
      <NavLink to="/CallForPapers" className="nav-link">Call for Paper</NavLink>
      <NavLink to="/Registration" className="nav-link">Registration</NavLink>
      <NavLink to="/Publication" className="nav-link">Publication</NavLink>
      <a href="#ContactUs" className="nav-link">Contact Us</a>
    </div>
  );
}






// ***************************************************************************
// CONTACT US
function ContactUs() {

  
  

  return (
    <div id="ContactUs" className="contactUs_section 
    2xl:px-32 2xl:text-xl 
    xl:text-lg
    xl:px-16
    lg:px-16
    lg:text-base ">


      {/* THE FIRST BLOCK CONTAINING THE HEADING PHONE NUMBER EMAIL AND UNIVERSITY LOCATION */}
      <div className=" flex flex-col h-[73%] 
      2xl:mr-[18rem] 
      xl:mr-[4rem]
      ">


        {/* CONTACT US HEADING */}
        <h1 className=" font-bold 
        2xl:text-5xl 
        xl:text-4xl 
        lg:text-3xl
        lg:mb-1
        xl:mb-2">Contact Us</h1>


        {/* PHONE NUMBER AND EMAIL */}
        <p>Phone No : +91 9783372873 /+91 9024424325</p>
        <p className=" xl:mb-1">email : iccasa@uem.edu.in</p>
        <p className="xl:mb-1">praphull.chhabra@uem.edu.in</p>
        <p className="xl:mb-2">tarun.sharma@uem.edu.in</p>




        {/* UEM JAIPUR LOCATION */}
        <a href="https://www.google.com/maps/place/University+of+Engineering+%26+Management+(UEM),+Jaipur/@27.2124649,75.6976676,17z/data=!3m1!4b1!4m6!3m5!1s0x396cffc30dacc2db:0xb78e5c340c935a95!8m2!3d27.2124649!4d75.7002425!16s%2Fm%2F0hhqh8d!5m1!1e2?entry=ttu" target="_blank" className=" flex justify-center items-center relative lg:right-2">

          <img className=" w-[1.5rem]" src={locationIcon} alt="" />
          <p>University of Engineering and Management Jaipur</p>

        </a>


      </div>








      {/* PREVIOUS WEBSITE DETAILS */}
      <div className=" h-[73%] flex flex-col ">

        <h1 className="font-bold 
        2xl:text-3xl 
        2xl:mb-4
        xl:text-2xl 
        lg:mb-1
        lg:text-xl
        ">Previous Websites</h1>


        <a href="https://iccasa2023.uem.edu.in/" target="_blank">2023 : Website Link</a>
        <a href="https://iccasa.uem.edu.in/" target="_blank">2022 : Website Link</a>
        <a href="https://uem.edu.in/uem-jaipur/" target="_blank">UEMJ Website</a>
      </div>








      {/* GALLERY DEAILS */}
      <div className=" flex flex-col h-[73%] ">
        <h1 className=" font-bold 
        2xl:text-3xl
        xl:text-2xl
        lg:text-xl">Gallery</h1>
        <NavLink to="/2023Images" className="cursor-pointer">Event 2023 Images</NavLink>
        <NavLink to="/2022Images" className="cursor-pointer">Event 2022 Images</NavLink>
        {/* <a href="https://drive.google.com/drive/folders/1FS0jsWjTVtoJsokgLvFKwpIt6k88W_E3?usp=sharing" target="blank">Event 2022 Images</a>
        <a href="https://drive.google.com/drive/folders/1LoWIgeprifvN2dmhdxYbd2nn1_7ksjqE?usp=sharing" target="blank">Event 2023 Images</a> */}
        

      </div>




      {/* FACEBOOK LINKEDIN AND TWITTER */}
      <div className="flex items-start h-[73%] ">

        {/* <img onClick={() => window.open("https://www.facebook.com/share/hDUSwy3Nv24Q7QTN/?mibextid=qi2Omg" , "_blank")}  className="w-[2rem] h-[2rem] mr-2 cursor-pointer" src={facebook}></img> */}

        <svg onClick={() => window.open("https://www.facebook.com/share/hDUSwy3Nv24Q7QTN/?mibextid=qi2Omg" , "_blank")} className="w-[2rem] h-[2rem] mr-4 cursor-pointer  fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/></svg>
        <svg onClick={() => window.open("https://x.com/Jaipur_Uem" , "_blank")} className="w-[2rem] h-[2rem] mr-4 cursor-pointer  fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
        <svg onClick={() => window.open("https://www.linkedin.com/school/university-of-engineering-management-uem/" , "_blank")} className="w-[2rem] h-[2rem] mr-4 cursor-pointer  fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>

        {/* <img onClick={() => window.open("https://www.linkedin.com/school/university-of-engineering-management-uem/" , "_blank")} className="w-[2rem] h-[2rem] mr-2 cursor-pointer" src={linkedin}></img> */}


        {/* <img onClick={() => window.open("https://x.com/Jaipur_Uem" , "_blank")} className="w-[2rem] h-[2rem] mr-2 cursor-pointer" src={twitter}></img> */}
      </div>




    </div>
  );
}




// ***************************************************************************
// THE APP
function App() {

  return (
    <BrowserRouter>
      <Banner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scope" element={<Scope />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/CallForPapers" element={<CallForPapers />} />
        <Route path="/Organinzing_Team" element={<OrganizingTeam />} />
        <Route path="/Keynote_Speaker" element={<KeynoteSpeaker />} />
        <Route path="Publication" element={<Publication />} />
        <Route path="/2023Images" element={<ImagePage2023 />} />
        <Route path="/2022Images" element={<ImagePage2022 />} />
      </Routes>
      <ContactUs />
    </BrowserRouter>
  )
}

export default App
