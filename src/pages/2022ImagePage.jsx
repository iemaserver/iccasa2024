import image1 from "../assets/JPG/2022Images/DSC_5515.jpg"
import image2 from "../assets/JPG/2022Images/DSC_5518.jpg"
import image3 from "../assets/JPG/2022Images/DSC_5523.jpg"
import image4 from "../assets/JPG/2022Images/DSC_5529.jpg"
import image5 from "../assets/JPG/2022Images/DSC_7216.jpg"
import image6 from "../assets/JPG/2022Images/DSC_7222.jpg"
import image7 from "../assets/JPG/2022Images/DSC_7226.jpg"
import image8 from "../assets/JPG/2022Images/DSC_7229.jpg"
import image9 from "../assets/JPG/2022Images/DSC_7232.jpg"
import image10 from "../assets/JPG/2022Images/DSC_7234.jpg"
import image11 from "../assets/JPG/2022Images/DSC_5564.jpg"

export const ImagePage2022=()=>{
    return(
        <>
             <h1 className="text-center text-5xl mt-10">2022 Event Images</h1>
            <div className="flex flex-wrap justify-center gap-4 lg:w-[100%] py-10">
                <img src={image1} className="border-6 border-black max-h-[300px]" alt="" />
                <img src={image2} className="border-6 border-black max-h-[300px]" alt="" />
                <img src={image3} className="border-6 border-black max-h-[300px]" alt="" />
                <img src={image4} className="border-6 border-black max-h-[300px]" alt="" />
                <img src={image5} className="border-6 border-black max-h-[300px]" alt="" />
                <img src={image6} className="border-6 border-black max-h-[300px]" alt="" />
                <img src={image7} className="border-6 border-black max-h-[300px]" alt="" />
                <img src={image8} className="border-6 border-black max-h-[300px]" alt="" />
                <img src={image9} className="border-6 border-black max-h-[300px]" alt="" />
                <img src={image10} className="border-6 border-black max-h-[300px]" alt="" />
                <img src={image11} className="border-6 border-black max-h-[300px]" alt="" />
            </div>
        </>
    )
}