// IMAGES
// import uemLogoBackground from "../assets/PNG/uemBackgroundLogo.svg"
// import uemLogo from "../assets/PNG/uemLogo2-removebg-preview.png"
// import icassaLogo from "../assets/PNG/ICASSALogo.png"
import locationIcon from "../assets/PNG/location_on.png"
// import downArrow from "../assets/PNG/downArrow.png"
// import image1 from "../assets/PNG/2023_Event_Images/2023-image1.jpg"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




// CHAKRA UI
import {
  Table,
  Tbody,
  Tr,
  Td,
  Th,
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
          lg:w-[38rem]">3rd International Conference On Computational Applied Sciences And It's Application </h3>



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
          lg:w-[38rem]">20-21 September 2025, Hybrid mode</h3>
        </div>









        {/* THE CAROUSOUL */}
        <div className="">
          <Slider {...settings}>


            <div>
              <img className="relative bottom-[18rem]" src="https://media-hosting.imagekit.io//b17fbc439a984292/2023-image1.jpg?Expires=1836895447&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ln4qCE85fWqPOzdXFp00rK-XXQztLsigZrjPXdsOsQQIpWv8OJb3RXJnJI6MWi0I19whC3yq7yE3sCyYZf-BZ~gh6FCNnvlHzxd02XCUbrOaXcO8vJAaKnw5f3RBe1Ws33~F9uNW0-FHZvuwFP0ffl76W8yf12Izj732jbSIEuiPr046Ox0g57uI0I1WOHxT8ljlTqrTG8bjzSxsW3FtOxAL8gGvLsFQ0D-HnwLwfwBf6q25vMAf-KF6ZZ9COH~79kk~63I7J6EzkIuSWtozyxAnC5ArFzye~rHGwLiRmmYkPvU1k7kudFKdun0kzC2NegoRSKJCvsqUITSFdc9-JQ__" alt="" />
            </div>


            <div>
              <img className="relative bottom-[6rem]" src="https://media-hosting.imagekit.io//c15594bc3d674e1b/2023-image2.jpg?Expires=1836895579&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=hOG7StbzFEHitmFnneWsw6740dI0B3q8~ji2ItcJp5v1xEh5RLB0SbQroxALR4LPIzCir~sR9eRQIjN4jzMgNcurk6Kh1fdFDi16XIwVzRWvArz9aRZ6N6TAYePL0MTyHPr1vtZVlF7Qta3kTdBPAhIa3cG9N1f6-f9LUq9DsjnE9qSG70LlUPsKq2BPn37OQe92u82~eOLPFliuS40tXENmsQDgnc5RE9JtioGjh-AE7jXBPnVjMIP6vJksTfB8qCHYaeikZoyahVYhrPtYDoCv5C-jjIm~vv1pm7RrVw8AaVan2DMv5WUNb28nl4RMEc6j34WW3dK6pf43RsuweQ__" alt="" />
            </div>


            <div>
              <img className="relative bottom-[8rem]" src="https://media-hosting.imagekit.io//54d5e76cdc52486f/2023-image3.jpg?Expires=1836896237&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LdaYVZAAYjhmN0qXZpQ7nQILDz1Ex8Q-3b6AbSp7bFtXNfRmsVQ9aTt4cpP7txIYeP71VkAuclV3GvazDUsyKk8XrvE5wZPmLv-T4XdQUQAGYG~cPSh7cuJm2LxdHgqzA0T72fU2ekB16Zb9nMBBH~lb9NIr43Dgj0nr-iWetmUNIP91JrIt2yaCSNCvSAeWPbVDroDVQFJesvyrx8~7sOuI8yXt8JHqm5Pk0xohZBIVrFUnjClxmmgWUZPVxVxOy6iHW-BpkLBJcTrR-Sjk4JCc6LfSQJXrsGQxCqGgTWPzc53ypMPcY-YYfOAno1q1ZvV-rebVEpzuoLZtOHK9Yg__" alt="" />
            </div>


            <div>
              <img className="relative bottom-[16rem]" src="https://media-hosting.imagekit.io//4dafc4ac89df448f/2023-image4.jpg?Expires=1836896245&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=BwtRiSgCu7Vsyt1XrMDsJrRTCv5rAN0v0Rw1R20MgQzSqSSAPGxoEcGEU2TpzeOeNZzKSWFG9lr0c6MC-BrEEkNSRb~c1i3sohn7O61p~MI1p0GvYZF9NRroujq5h6mJCgw8INyXpGy-yLRYWY8iQyKyt4vOFBuf0A3CG-EVAD6pZQ-sHdTswz7EXnBoBkCsJyxKM~C6xiu4IHZkENV4kZFvllGk1m5tOLCOH8OtHmDsSN7EKebfo8Go4CvO7Y8~5n5Ld5wYpcx7wBgarbK2tg9Lx3~T-Nh2WPMaE3I7pE5RXA26LXRj00uJHHbq4WueShOMQJK35yUUHP2CR0hW-w__" alt="" />
            </div>


            <div>
              <img className="relative bottom-[12rem]" src="https://media-hosting.imagekit.io//c7d52f3210bf4654/2023-image5.jpg?Expires=1836896252&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=OHXFjOpOxJ0xuroeWVEDu3yxI1ZXbimyoQ5gJCpvO5J-PEE4pLg3tg3YyCTBHPhQFd8LzZjPD57xDiZt9ucZQtfNOv-nwqHDFCpUUwgIB9O0Ju2E0PtuDeXr8PqZRwvvgCr5o6Uq~gKULvIVmzC3ZQBgpuSp2uwqoCEJuM3xK0r2ULNtFJnNmLDaiEhTHs8TRI8A-TrL1qHC246vNeHCqIGIq2OfR-KskiJ3HAcTOXLWDGWcULhJnBIWGpKe36k7IxDhKP3kXM9ZIRKcpPgX6jBaCzKCn10wYmhJw-XMJVuKoh7exaIAjoSjblFyllztSyXXM3pvGs~XQU2JSaeuaw__" alt="" />
            </div>


            <div>
              <img className="relative bottom-[2rem]" src="https://media-hosting.imagekit.io//691961c8647b4284/2023-image6.jpg?Expires=1836896257&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KLiuBD9pNROY57G5iOwDqMg~eAXV906PyvAa1dNIlgRQWx2dUidS9JBmTpb2tPWi9EPyTn61cz3lrgDbwWahtXcYShc492RFqXCoq-lJDP78mBsiEikm~j3UdnmlJAQYXGewVU1ZcCyqTuAb1CXxc-wSkR-oxacQn7kJGtp71mof~YXr1mBcn4m33EnaWtR5JfrocLw1BQtkY9F-EhpMnaJmBWc6-qtEesG2qk85JCtpUHa4PkfyTxxqGy3XWeFIwDYzjS~SFopjRxqIgaZGgFZW2UAFc280ec4DwzTM52O14Io8ZmySaP2TBDsL8Innu~c153GPhnEi0r1AuE1PMQ__" alt="" />
            </div>


            <div>
              <img className="relative bottom-[26rem]" src="https://media-hosting.imagekit.io//315b308b443e4c57/2023-image7.jpg?Expires=1836896279&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=lPM-FVvQ~x4MVaQIJm7yL~wPK385iocda7vor1qDGeKX4VVcO7gYFWTlbONow8piAuyYFzBHeUkb741BCdik2QkInNo7fLTFRMgt5psi0mfxpuaDPNahfo5M7J6H0Z0nkijiSFj~dZrfY2RBUa3fuKMFGEx4ufpgg~q0NIIVnVho41JX2aZ5n3pfPCXiC6wOZHaGSEnMAtGO5LELonyK-15pqXerSDVp9VyW8TbEs0uvhMUX8qYQh3VhgVwd5iHLu802pQlOL6dNSdKAPYjyunpAMjnkWJIex4uB~rO~AWiHmFcj1OVbp5HfpSKgzUL~QF0ZR87H04LMjHmRdDjryw__" alt="" />
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
        <div className=" flex flex-col align-center
        w-[100vw]
        2xl:mr-[2rem]
        xl:mr-[2rem]
        lg:mr-[3rem]
        ">

          {/* HEADING */}
          <h1 className=" font-bold
            
            2xl:text-5xl
            xl:text-3xl
            mb-6
            lg:text-2xl
            
            
            
            ">About Us</h1>

          {/* PARAGRAPH */}
          <p className=" 2xl:text-2xl xl:text-xl lg:text-base">The vision behind organizing this conference is to provide an excellent forum for researchers, scientist and industrialist from interdisciplinary areas to showcase their current contribution in the recent area of Physical Sciences. The objectives of International Conference on Computational Applied Sciences and it’s Applications (ICCASA-2025) are to abreast the young minds from Institutes, Universities, Colleges and Industries across the country, with the latest advancements in the field of this area, and providing them an opportunity to share their recent researches and views in various fields of Physical Sciences and their applications for the ultimate benefit of the Society and Industry. The broad aim of the conference is to groom the young scientists’ minds to face the challenges of future for effective and efficient professional responsibilities. The conference will cover a wide range of topics in the form of plenary speakers, keynote speakers, invited talks & contributory papers presentations.<br></br><br /> </p>







          {/* ABOUT UEM SECTION  */}
          <h1 className=" font-bold
            mb-6
            2xl:text-5xl
            xl:text-3xl

            lg:text-2xl
            
            
            ">About UEM</h1>
            

          <p className=" 2xl:text-2xl
          xl:text-xl lg:text-base">UEM Jaipur was established in the year 2011 by Ordinance 11 of 2011 and Act No 5 of 2012 of Govt of Rajasthan. UEM Jaipur has achieved the awards of “Best Private University in North India” and “Best Emerging University in North India”. The university is dedicated to providing an international learning environment that fosters innovation, creativity, and technical expertise. With a strong emphasis on industry-oriented courses and modern teaching techniques, UEM Jaipur ensures that students are well-prepared to meet the demands of the evolving job market. The curriculum is designed to bridge the gap between academics and industry requirements, equipping students with practical knowledge, hands-on training, and professional skills that give them a competitive edge during placements.
                                   UEM Jaipur continuously adapts to the latest advancements in technology and education, offering state-of-the-art facilities, experienced faculty, and research opportunities to help students excel in their respective fields. The university also encourages entrepreneurship, innovation, and leadership, making it a preferred choice for students aspiring to build successful careers.</p>
        </div>




        







        {/* THE IMPORTANT DATES SECTION */}
        {/*<div className="importantDates-wrapper font-sofia 
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

          <TableContainer className="w-[45rem]">
            <Table variant='striped' colorScheme="blue" size="md">
            <Tbody>
             
              <Tr>
                <Td>Abstract submission deadline</Td>
                <Td>30<sup>th</sup>June 2025</Td>

              </Tr>
              <Tr>
                <Td>Acceptance mail for Submission last date</Td>
                <Td>31<sup>st</sup> July 2025</Td>
              </Tr>
              <Tr>
                <Td>Registration deadline</Td>
                <Td>31<sup>st</sup> August 2025</Td>
              </Tr>
              <Tr>
                <Td>Accommodation booking deadline</Td>
                <Td>5<sup>th</sup> September 2025</Td>

              </Tr>
              <Tr>
                <Td>Conference dates</Td>
                <Td>20<sup>th</sup>21<sup>st</sup> September 2025</Td>
              </Tr>

            </Tbody>
            </Table>
          </TableContainer>
        </div>*/}







      </div>




    </div >


  )
}
