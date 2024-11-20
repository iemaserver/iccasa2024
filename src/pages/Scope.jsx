import scopeImage from "../assets/PNG/2023_Event_Images/scopeImage.png";

export const Scope = () => {
  return (
    <div
      className="scope-main 2xl:px-[9.2rem] 
    lg:py-[6rem]
    xl:px-[5.2rem]
    lg:px-[3rem]"
    >
      {/* WRAPPER FOR THE HEADING AND THE BULLET POINTS */}
      <div
        className="flex flex-col 
      2xl:w-[50%]
      lg:w-[70%]
      lg:ml-[2rem]
      lg:mr-[1rem]
      "
      >
        {/* HEADING */}
        <h1
          className=" 
         font-bold
         relative
         right-6
         lg:mb-6
        lg:text-3xl

         "
        >
          Thrust areas of the Conference (ICCASA-2025)
        </h1>

        {/* THE BULLET POINTS */}
        <ul className="list-disc text-xl">
          <li>
            Mathematical Modelling & Simulation in Engineering & Applied
            Sciences
          </li>
          <li>
            Emerging technologies in Artificial Intelligence & Deep Learning
          </li>
          <li>Theoretical & Computational Fluid Dynamics</li>
          <li>Microfluidic Devices & Biomedical Applications</li>
          <li>Environmental and Ecological Modelling</li>
          <li>Decision Analysis and Risk Management</li>
          <li>Stochastic and Robust Optimization</li>
          <li>Mathematics and Computational Science with AI</li>
          <li>AI for Energy and Sustainability</li>
          <li>Synthetic Organic Chemistry</li>
          <li>Nonlinear Dynamics and Chaos Theory</li>
          <li>Nanotechnology and Nano-materials</li>
          <li>Applied Nuclear Science and Engineering</li>
          <li>Recent Trends in Condensed Matter and Plasma Physics</li>
          <li>Green and Sustainable Chemistry</li>
          <li>Magnetic Materials and Applications</li>
          <li>Statistical Methods in Applied Sciences</li>
          <li>Computational Astrophysics</li>
          <li>Spectroscopy and Atmospheric Chemistry</li>
          <li>Catalysis</li>
        </ul>
      </div>

      {/* THE IMAGE */}
      <div className=" flex justify-center items-center">
        <img src={scopeImage} alt="" />
      </div>
    </div>
  );
};
