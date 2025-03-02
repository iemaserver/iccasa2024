// IMAGES
// import uemLogoBackground from "../assets/PNG/uemBackgroundLogo.svg"
// import uemLogo from "../assets/PNG/uemLogo2-removebg-preview.png"
// import icassaLogo from "../assets/PNG/ICASSALogo.png"
import locationIcon from "../assets/PNG/location_on.png"
// import downArrow from "../assets/PNG/downArrow.png"
// import image1 from "../assets/PNG/2023_Event_Images/2023-image1.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// IMPORTING IMAGES HERE :
import image1_2023 from "../assets/PNG/2023_Event_Images/2023-image1.jpg"
import image2_2023 from "../assets/PNG/2023_Event_Images/2023-image2.jpg"
import image3_2023 from "../assets/PNG/2023_Event_Images/2023-image3.jpg"
import image4_2023 from "../assets/PNG/2023_Event_Images/2023-image4.jpg"
import image5_2023 from "../assets/PNG/2023_Event_Images/2023-image5.jpg"
import image6_2023 from "../assets/PNG/2023_Event_Images/2023-image6.jpg"
import image7_2023 from "../assets/PNG/2023_Event_Images/2023-image7.jpg"
import image8_2023 from "../assets/PNG/2023_Event_Images/IMG-20230714-WA0008.jpg"


// CHAKRA UI
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import Slider from "react-slick";
import { useState, useEffect } from "react";





export const Home = () => {

  const [autoWidth, setAutoWidth] = useState("43rem");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1490) {
        setAutoWidth("38rem")
      }

      if (window.innerWidth < 1380) {
        setAutoWidth("35rem")
      }
      if (window.innerWidth < 1198) {
        setAutoWidth("31rem")
      }
      if (window.innerWidth < 1102) {
        setAutoWidth("27rem")
      }
      if (window.innerWidth > 1542) {
        setAutoWidth("43rem")
      }
    }


    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // SETTINGS FOR THE CAROUSEL
  let settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "homePageCarousel",
    autoplay: true,
    lazyLoad: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
  };





  return (
    <div className="Home-main">

      {/* WRAPPER OVER THE CAROUSOUL AND THE WRITING */}
      <div>



        {/* THE WRITING OVER THE CAROUSOUL AND THE BLACK OVERLAY*/}
        <div className="Home-main-wrapper-2-writing_over_carousel_and_black_overlay 2xl:px-32 xl:px-16 lg:px-8">

          {/* THE MAIN HEADING */}
          <h1 className=" xl:text-7xl
          lg:text-5xl font-bold xl:mb-2">ICCASA</h1>


          {/* THE FULL FORM */}
          <h3 className=" 
          2xl:text-3xl
          xl:text-2xl
          2xl:w-[56rem]
          xl:w-[45rem] 
          xl:mb-4
          lg:text-xl
          lg:w-[38rem]">International Conference On Computational Applied Sciences And It's Application </h3>



          {/* THE COLLEGE LOCATION AND NAME */}
          <div className=" flex justify-center items-center relative right-2">


            {/* THE LOCATION ICON */}
            <img className=" w-[2.2rem]" src={locationIcon} alt="" />

            {/* THE UNIVERSITY NAME */}
            <p className=" xl:text-xl lg:text-base">University of Engineering And Management Jaipur</p>

            

          </div>



          {/* DATE */}
          <h3 className=" 
          2xl:text-3xl
          xl:text-2xl
          2xl:w-[56rem]
          xl:w-[45rem] 
          xl:mt-2
          lg:text-xl
          lg:w-[38rem]">20-21 September 2025, Hybrid mode, 3rd version of the conference</h3>
        </div>









        {/* THE CAROUSOUL */}
        <div className="
        ">
          <Slider {...settings}>


            <div>
              <img className="relative bottom-[18rem]" src={image1_2023} alt="" />
            </div>


            <div>
              <img className="relative bottom-[6rem]" src={image2_2023} alt="" />
            </div>


            <div>
              <img className="relative bottom-[8rem]" src={image3_2023} alt="" />
            </div>


            <div>
              <img className="relative bottom-[16rem]" src={image4_2023} alt="" />
            </div>


            <div>
              <img className="relative bottom-[12rem]" src={image5_2023} alt="" />
            </div>


            <div>
              <img className="relative bottom-[2rem]" src={image6_2023} alt="" />
            </div>


            <div>
              <img className="relative bottom-[26rem]" src={image7_2023} alt="" />
            </div>


            <div>
              <img className="relative bottom-[36rem]" src={image8_2023} alt="" />
            </div>


          </Slider>

        </div>




      </div>










      {/* ************************************************************ *************/}


      {/* THE ABOUT US SECTION AND THE IMPORTANT DATES SECTION WRAPPER */}
      <div className=" flex justify-center 
      2xl:px-16
      xl:px-16
      xl:py-16
      xl:pb-32
      lg:pb-16
      lg:px-8
      lg:py-16
      ">



        {/* THE ABOUT US SECTION  */}
        <div className=" flex flex-col 
        2xl:w-[50%]
        2xl:mr-[2rem]
        xl:mr-[2rem]
        lg:mr-[3rem]
        ">

          {/* HEADING */}
          <h1 className=" font-bold
            2xl:mb-8
            2xl:text-5xl
            xl:text-3xl
            xl:mb-4
            lg:text-2xl
            
            
            ">About Us</h1>

          {/* PARAGRAPH */}
          <p className=" 2xl:text-2xl
          xl:text-xl lg:text-base">The vision behind organizing this conference is to provide an excellent forum for researchers, scientist and industrialist from interdisciplinary areas to showcase their current contribution in the recent area of Physical Sciences. The objectives of International Conference on Computational Applied Sciences and it’s Applications (ICCASA-2025) are to abreast the young minds from Institutes, Universities, Colleges and Industries across the country, with the latest advancements in the field of this area, and providing them an opportunity to share their recent researches and views in various fields of Physical Sciences and their applications for the ultimate benefit of the Society and Industry. The broad aim of the conference is to groom the young scientists’ minds to face the challenges of future for effective and efficient professional responsibilities. The conference will cover a wide range of topics in the form of plenary speakers, keynote speakers, invited talks & contributory papers presentations.<br></br><br /> </p>







          {/* ABOUT UEM SECTION  */}
          <h1 className=" font-bold
            2xl:mb-8
            2xl:text-5xl
            xl:text-3xl
            xl:mb-4
            lg:text-2xl
            
            
            ">About UEM</h1>

          <p className=" 2xl:text-2xl
          xl:text-xl lg:text-base">UEM Jaipur was established in the year 2011 by Ordinance 11 of 2011 and Act No 5 of 2012 of Govt of Rajasthan. UEM Jaipur has achieved the awards of “Best Private University in North India” and “Best Emerging University in North India”. The university is dedicated to providing an international learning environment that fosters innovation, creativity, and technical expertise. With a strong emphasis on industry-oriented courses and modern teaching techniques, UEM Jaipur ensures that students are well-prepared to meet the demands of the evolving job market. The curriculum is designed to bridge the gap between academics and industry requirements, equipping students with practical knowledge, hands-on training, and professional skills that give them a competitive edge during placements.
                                   UEM Jaipur continuously adapts to the latest advancements in technology and education, offering state-of-the-art facilities, experienced faculty, and research opportunities to help students excel in their respective fields. The university also encourages entrepreneurship, innovation, and leadership, making it a preferred choice for students aspiring to build successful careers.</p>
        </div>




        







        {/* THE IMPORTANT DATES SECTION */}
        <div className="importantDates-wrapper font-sofia 
        2xl:text-xl
        xl:text-lg
        lg:text-base">
          <div>
            <h1 className=" font-bold 
            2xl:text-4xl
            xl:text-3xl
            lg:text-2xl
            mb-4">Important Dates</h1>
          </div>

          <TableContainer width={autoWidth} maxWidth="43rem">
            <Table variant='striped' colorScheme="blue" size="md">
              <Tbody>
                <Tr>
                  <Td>Call for paper/abstract submission</Td>
                  <Td>TO be Announced soon...</Td>

                </Tr>
                <Tr>
                  <Td>Call for paper/Abstract submission ending date </Td>
                  <Td>TO be Announced soon...</Td>

                </Tr>
                <Tr>
                  <Td>Registration starting date</Td>
                  <Td>TO be Announced soon...</Td>
                </Tr>
                <Tr>
                  <Td>Registration ending date</Td>
                  <Td>TO be Announced soon...</Td>

                </Tr>
                <Tr>
                  <Td>Accommodation booking date</Td>
                  <Td>TO be Announced soon...</Td>

                </Tr>


              </Tbody>
            </Table>
          </TableContainer>
        </div>







      </div>




    </div >


  )
}
