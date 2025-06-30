// import all images

import img1 from "../assets/Images2022/2022-pic1.jpg"
import img3 from "../assets/Images2022/2022-pic5.jpg"
import img4 from "../assets/Images2022/DSC_5515.jpg"
import img5 from "../assets/Images2022/DSC_5521.jpg"
import img6 from "../assets/Images2022/DSC_5523.jpg"
import img7 from "../assets/Images2022/DSC_5526.jpg"
import img8 from "../assets/Images2022/DSC_7216.jpg"
import img9 from "../assets/Images2022/DSC_7226.jpg"
import img10 from "../assets/Images2022/DSC_7228.jpg"
import img11 from "../assets/Images2022/DSC_7229.jpg"
import img12 from "../assets/Images2022/DSC_7232.jpg"
import img13 from "../assets/Images2022/DSC_7234.jpg"

export const ImagePage2022=()=>{
    const images = [img1, img3, img4, img5, img6, img7, img8,img9,img10,,img11,img12,img13];
    return(
        <div className="container mx-auto xl:py-32 lg:py-16 py-8">
             <h1 className="text-center text-lg lg:text-5xl">2022 Event Images</h1>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
                {/* <img src={img1} className="max-h-[300px]" alt="IMAGE" />
                <img src={img3} className="max-h-[300px]" alt="IMAGE" />
                <img src={img4} className="max-h-[300px]" alt="IMAGE" />
                <img src={img5} className="max-h-[300px]" alt="IMAGE" />
                <img src={img6} className="max-h-[300px]" alt="IMAGE" />
                <img src={img7} className="max-h-[300px]" alt="IMAGE" />
                <img src={img8} className="max-h-[300px]" alt="IMAGE" />
                <img src={img9} className="max-h-[300px]" alt="IMAGE" />
                <img src={img10} className="max-h-[300px]" alt="IMAGE" />
                <img src={img11} className=" max-h-[300px]" alt="image" />
                <img src={img12} className=" max-h-[300px]" alt="image" />
                <img src={img13} className=" max-h-[300px]" alt="image" /> */}

                {images.map((image, index) =>(
                    <img key={index} src={image} alt= "Event Images" className="max-h-[300px]" />
                ))}
                
            </div>
        </div>
    )
}