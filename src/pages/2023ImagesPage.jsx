import { Image } from "@imagekit/react"

export const ImagePage2023=()=>{

  const imagePaths = [
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/IMG-20230715-WA0061.jpg",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/IMG-20230715-WA0079.jpg?updatedAt=1751264612885",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/IMG-20230715-WA0020.jpg?updatedAt=1751264612813",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/IMG-20230715-WA0071.jpg?updatedAt=1751264612773",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/IMG-20230715-WA0071.jpg?updatedAt=1751264612773",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/IMG-20230715-WA0015.jpg?updatedAt=1751264611854",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/IMG-20230715-WA0006.jpg?updatedAt=1751264611461",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/2023-image3.jpg?updatedAt=1751264608890",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/2023-image4.jpg?updatedAt=1751264608859",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/2023-image1.jpg?updatedAt=1751264608852",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/2023-image7.jpg?updatedAt=1751264608682",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/2023-image8.jpg?updatedAt=1751264608118",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/2023-image6.jpg?updatedAt=1751264607981",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/2023-image5.jpg?updatedAt=1751264607867v",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/IMG-20230714-WA0057.jpg?updatedAt=1751264607710",
    "https://ik.imagekit.io/keshav5173/2023_Event_Images/2023-image2.jpg?updatedAt=1751264607686",

  ];

    return(
      <div className="container mx-auto xl:py-32 lg:py-16 py-8">
        <h1 className="text-center text-lg lg:text-5xl">2023 Event Images</h1>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {imagePaths.map((image, index)=>(
            <img src={image} key={index} alt="event 2023 images" className="max-h-[300px]" />
          ))}
        </div>
     </div>
    )
}