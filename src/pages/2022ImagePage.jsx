import image1 from "../assets/JPG/2022Images/DSC_5515.jpg"
import image2 from "../assets/JPG/2022Images/DSC_5516.jpg"
import image3 from "../assets/JPG/2022Images/DSC_5518.jpg"
import image4 from "../assets/JPG/2022Images/DSC_5521.jpg"
import image5 from "../assets/JPG/2022Images/DSC_5523.jpg"
import image6 from "../assets/JPG/2022Images/DSC_5526.jpg"
import image7 from "../assets/JPG/2022Images/DSC_5529.jpg"
import image8 from "../assets/JPG/2022Images/DSC_5531.jpg"
import image9 from "../assets/JPG/2022Images/DSC_5532.jpg"
import image10 from "../assets/JPG/2022Images/DSC_5552.jpg"
import image11 from "../assets/JPG/2022Images/DSC_5554.jpg"
import image12 from "../assets/JPG/2022Images/DSC_5560.jpg"
import image13 from "../assets/JPG/2022Images/DSC_5562.jpg"
import image14 from "../assets/JPG/2022Images/DSC_7212.jpg"
import image15 from "../assets/JPG/2022Images/DSC_7213.jpg"
import image16 from "../assets/JPG/2022Images/DSC_7216.jpg"
import image17 from "../assets/JPG/2022Images/DSC_7219.jpg"
import image18 from "../assets/JPG/2022Images/DSC_7220.jpg"
import image19 from "../assets/JPG/2022Images/DSC_7221.jpg"
import image20 from "../assets/JPG/2022Images/DSC_7222.jpg"
import image21 from "../assets/JPG/2022Images/DSC_7223.jpg"
import image22 from "../assets/JPG/2022Images/DSC_7224.jpg"
import image23 from "../assets/JPG/2022Images/DSC_7226.jpg"
import image24 from "../assets/JPG/2022Images/DSC_7228.jpg"
import image25 from "../assets/JPG/2022Images/DSC_7229.jpg"
import image26 from "../assets/JPG/2022Images/DSC_7230.jpg"
import image27 from "../assets/JPG/2022Images/DSC_7232.jpg"
import image28 from "../assets/JPG/2022Images/DSC_7233.jpg"
import image29 from "../assets/JPG/2022Images/DSC_7234.jpg"
import image30 from "../assets/JPG/2022Images/DSC_5564.jpg"

export const ImagePage2022=()=>{
    return(
        <>
             <h1 className="text-center text-5xl mt-10">2022 Event Images</h1>
            <div className="flex flex-wrap justify-center gap-4 lg:w-[100%] py-10">
                {[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12,image13, image14, image15, image16, image17, image18, image19, image20, image21, image22, image22, image23, image24, image25, image26, image27, image28, image29, image30].map(
                    (img, index) => (
                    <img key={index} className="border-6 border-black max-h-[400px]" src={img} alt={`Gallery Image ${index + 1}`} />
                    )
                )}  
            </div>
        </>
    )
}