import scopeImage from '../assets/PNG/2023_Event_Images/scopeImage.png'



export const Scope = () => {
  return (
    <div className='scope-main 2xl:px-[9.2rem] 
    lg:py-[6rem]
    xl:px-[5.2rem]
    lg:px-[3rem]'>

      {/* WRAPPER FOR THE HEADING AND THE BULLET POINTS */}
      <div className='flex flex-col 
      2xl:w-[50%]
      lg:w-[70%]
      lg:ml-[2rem]
      lg:mr-[1rem]
      '>
        {/* HEADING */}
        <h1 className=' 
         font-bold
         relative
         right-6
         lg:mb-6
        lg:text-3xl

         '>Thrust areas of the Conference (ICCASA-2024)</h1>


        {/* THE BULLET POINTS */}
        <ul className='list-disc text-xl'>
          <li>Computational Methods in Applied Mathematics</li>
          <li>Mathematical Modelling & Simulation in Engineering & Applied Sciences</li>
          <li>Theoretical & Computational Fluid Dynamics</li>
          <li>Microfluidic Devices & Biomedical Applications</li>
          <li>Epidemic Modeling and Public Health</li>
          <li>Environmental and Ecological Modelling</li>
          <li>Decision Analysis and Risk Management</li>
          <li>Stochastic and Robust Optimization</li>
          <li>Nonlinear Dynamics and Chaos Theory</li>
          <li>Decision Analysis and Risk Management</li>
          <li>Nanotechnology and Nano-materials</li>
          <li>Sustainable and Green Chemistry</li>
          <li>Sustainable Energy Solutions</li>
          <li>Applied Nuclear Science and Engineering</li>
          <li>Plasma Physics and Applications</li>
          <li>Magnetic Materials and Applications</li>
          <li>Statistical Methods in Applied Sciences</li>
          <li>Interdisciplinary Applications of Mathematics</li>
        </ul>
      </div>

      {/* THE IMAGE */}
      <div className=' flex justify-center items-center'>
        <img src={scopeImage} alt="" />
      </div>
    </div>
  )
}
