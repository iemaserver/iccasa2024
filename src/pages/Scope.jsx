export const Scope = () => {
  return (
    <div className="scope-main container mx-auto lg:py-[6rem] py-6 flex flex-col lg:flex-row">
      {/* WRAPPER FOR THE HEADING AND THE BULLET POINTS */}
      <div
        className="flex flex-col
      2xl:w-[50%]
      lg:w-[70%]
      lg:ml-[2rem]
      lg:mr-[1rem]
      w-full
      mb-4 *:lg:mb-0
      "
      >
        {/* HEADING */}
        <h1
          className=" 
         font-bold
         relative
         lg:mb-6
        lg:text-3xl
         text-md
         "
        >
          Thrust areas of the Conference (ICCASA-2025)
        </h1>

        {/* THE BULLET POINTS */}
        <ul className="list-disc lg:text-xl ml-4 text-sm max-w-full">
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

          <li>Mathematical Biology and Bioinformatics</li>
          <li>Quantum Computing and Quantum Information Science</li>
          <li>Applied Game Theory in Engineering & Economics</li>
          <li>Reinforcement Learning and Autonomous Systems</li>
          <li>AI for Healthcare and Precision Medicine</li>
          <li>Quantum Materials and Quantum Optics</li>
          <li>Soft Matter Physics and Biophysics</li>
          <li>High Energy Physics and Particle Accelerators</li>
          <li>Artificial Photosynthesis and CO₂ Reduction</li>
          <li>Green Energy and Hydrogen Fuel Cells</li>
          <li>Computational Chemistry and Drug Discovery</li>
        </ul>
      </div>

      {/* THE IMAGE */}
      <div className="flex justify-center items-center">
        <img
          src="https://ik.imagekit.io/keshav5173/2023_Event_Images/scopeImage.png?updatedAt=1751264613500"
          alt=""
        />
      </div>
    </div>
  );
};
