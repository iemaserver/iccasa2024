// IMAGES
import uemLogoBackground from "../assets/PNG/uemBackgroundLogo.svg"
import uemLogo from "../assets/PNG/uemLogo2-removebg-preview.png"
import icassaLogo from "../assets/PNG/ICASSALogo.png"
import locationIcon from "../assets/PNG/location_on.png"
import downArrow from "../assets/PNG/downArrow.png"


// CAROUSEL
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


export const Home = () => {


  // CAROUSEL LOGIC
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 2000 })])













  return (
    <div className='Home-xxl' >

      {/* THE MAIN */}
      <div className="Home-main">

        {/* THE TOP BANNER */}
        <div className="Home-wrapper1-Banner_wrapper">



          {/* ICASSA LOGO */}
          <div>
            <img src={icassaLogo} alt="Logo of ICASSA" />
          </div>







          {/* UEM WRITING */}
          <div className="font-sora Home-wrapper1-2-div3">
            <h1>University of Engineering and Management Jaipur</h1>

            {/* UEM BACKGROUND LOGO */}
            <div className="Home-wrapper1-2-div1-Uem_background_logo">
              <img src={uemLogoBackground} alt="Uem Background logo" />
            </div>
          </div>



          {/* UEM LOGO */}
          <div>
            <img src={uemLogo} alt="" />
          </div>
        </div>




        {/* NAVBAR */}
        <div className="Home-wrapper2-Navbar font-sora">
          <div>Home</div>
          <div>About</div>
          <div>Scope</div>
          <div>Keynote Speaker</div>
          <div>Organizing Team</div>
          <div>Registration</div>
          <div>Gallery</div>
          <div>Conference Dates</div>
          <div>Editorial Team</div>
          <div>Contact Us</div>

          {/* THE OVERLAY */}
          <div className="Home-wrapper3-dark_overlay"></div>
        </div>






        {/* THE AUTO CHANGING IMAGE */}
        <div className="Home-wrapper4-imageChanger">

          {/* WRITING OVER THE IMAGE */}
          <div className="Home-wrapper-5-writing_over_the_image font-sora">
            <h1>ICCASA</h1>
            <h3>International Conference On Computational Applied Sciences And It's Application</h3>
            <div className=" flex justify-start items-center">
              <img src={locationIcon} alt="" />
              <h4>University of Engineering And Management Jaipur</h4>
            </div>
          </div>






          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide slide1"></div>
              <div className="embla__slide slide2"></div>
              <div className="embla__slide slide3"></div>
              <div className="embla__slide slide4"></div>
              <div className="embla__slide slide5"></div>
              <div className="embla__slide slide6"></div>
              <div className="embla__slide slide7"></div>
              <div className="embla__slide slide8"></div>
              <div className="embla__slide slide9"></div>
              <div className="embla__slide slide10"></div>
              <div className="embla__slide slide11"></div>
            </div>
          </div>
        </div>








        {/* THE BOTTOM ARROW */}
          <div className="Home-wrapper-6-The_arrow animate-bounce">
            <img src={downArrow} alt="a down arrow" />
          </div>




      </div>

    </div>
  )
}
