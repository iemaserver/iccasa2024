import { Image } from '@imagekit/react';

export const ImagePage2022 = () => {
  const imagePaths = [
    "https://ik.imagekit.io/keshav5173/2022_Event_Images/2022-pic1.jpg",
    "https://ik.imagekit.io/keshav5173/2022_Event_Images/2022-pic5.jpg",
    "https://ik.imagekit.io/keshav5173/2022_Event_Images/DSC_5515.jpg",
    "https://ik.imagekit.io/keshav5173/2022_Event_Images/DSC_5521.jpg",
    "https://ik.imagekit.io/keshav5173/2022_Event_Images/DSC_5523.jpg",
    "https://ik.imagekit.io/keshav5173/2022_Event_Images/DSC_5526.jpg",
    "https://ik.imagekit.io/keshav5173/2022_Event_Images/DSC_7216.jpg",
    "https://ik.imagekit.io/keshav5173/2022_Event_Images/DSC_7226.jpg",
    "https://ik.imagekit.io/keshav5173/2022_Event_Images/DSC_7228.jpg",
    "https://ik.imagekit.io/keshav5173/2022_Event_Images/DSC_7229.jpg",
    "https://ik.imagekit.io/keshav5173/2022_Event_Images/DSC_7232.jpg",
    "https://ik.imagekit.io/keshav5173/2022_Event_Images/DSC_7234.jpg",
  ];

  return (
    <div className="container mx-auto xl:py-32 lg:py-16 py-8">
      <h1 className="text-center text-lg lg:text-5xl">2022 Event Images</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        {imagePaths.map((image, index)=>(
            <img src={image} key={index} alt="Event Image" className='max-h-[300px]' />
        ))}
      </div>
    </div>
  );
};
