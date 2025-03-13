import image1 from "../assets/JPG/2023Images/DSC_2108.jpg"
import image2 from "../assets/JPG/2023Images/DSC_2115.jpg"
import image3 from "../assets/JPG/2023Images/DSC_2122.jpg"
import image4 from "../assets/JPG/2023Images/DSC_2130.jpg"
import image5 from "../assets/JPG/2023Images/DSC_2139.jpg"
import image6 from "../assets/JPG/2023Images/DSC_2140.jpg"
import image7 from "../assets/JPG/2023Images/DSC_2206.jpg"
import image8 from "../assets/JPG/2023Images/DSC_2266.jpg"
import image9 from "../assets/JPG/2023Images/DSC_2272.jpg"
import image10 from "../assets/JPG/2023Images/DSC_2322.jpg"
import image11 from "../assets/JPG/2023Images/DSC_2330.jpg"
import image12 from "../assets/JPG/2023Images/DSC_2336.jpg"

export const ImagePage2023=()=>{
    return(
      <>
        <h1 className="text-center text-5xl mt-10">2023 Event Images</h1>
        <div className="flex flex-wrap justify-center gap-4 lg:w-[100%] py-10">
          {[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12].map(
            (img, index) => (
              <img key={index} className="border-6 border-black max-h-[400px]" src={img} alt={`Gallery Image ${index + 1}`} />
            )
          )}
        </div>
     </>
    )
}