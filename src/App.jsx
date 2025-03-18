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

        <img onClick={() => window.open("https://www.facebook.com/share/hDUSwy3Nv24Q7QTN/?mibextid=qi2Omg" , "_blank")}  className="w-[2rem] h-[2rem] mr-2 cursor-pointer" src={facebook}></img>


        <img onClick={() => window.open("https://www.linkedin.com/school/university-of-engineering-management-uem/" , "_blank")} className="w-[2rem] h-[2rem] mr-2 cursor-pointer" src={linkedin}></img>


        <img onClick={() => window.open("https://x.com/Jaipur_Uem" , "_blank")} className="w-[2rem] h-[2rem] mr-2 cursor-pointer" src={twitter}></img>
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
