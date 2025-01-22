import React from "react";

export const AuthorGuideline = () => {
  return (
    <div
      className=" flex flex-col justify-center items-center xl:py-32
    lg:py-16"
    >


     {/* THE WRAPPER FOR AUTHOR GUIDLINES */}
      







        {/* AUTOHOR GUIDELINES */}
        <div
          className=" lg:w-[60rem] xl:text-2xl xl:mb-16 xl:p-8
lg:p-4 lg:py-6 lg:text-xl lg:mb-16"
        >

            {/* HEADING */}
          <h1 className=' font-bold xl:text-4xl xl:ml-0 xl:mb-8 
        lg:mb-4 lg:ml-0  lg:text-2xl'>Author Guidelines</h1>


        {/* TEXT */}
          <p>
            We welcome authors to submit their technical papers for the
             International Conference on Computational Applied Sciences and it’s
            Applications (ICCASA-2025) using Microsoft’s Conference Management
            Toolkit (CMT). Please adhere to the guidelines outlined below to
            ensure a smooth submission process.
          </p>
        </div>










        {/* PAPER PREPARATION */}
        <div className=" lg:w-[60rem] xl:text-2xl xl:mb-16 xl:p-8
lg:p-4 lg:py-6 lg:text-xl lg:mb-16">

            {/* HEADING */}
            <h1 className=' font-bold xl:text-4xl xl:ml-0 xl:mb-8 
        lg:mb-4 lg:ml-0  lg:text-2xl'>Paper Preparation</h1>

            {/* TEXT */}
            <p className=" mb-2">Authors are invited to submit original, unpublished research manuscripts on the above topics. Papers should be submitted in the prescribed template. Authors must ensure that the similarity index produced by plagiarism detection software does not surpass 15 percent.</p>



            {/* DOWNLOAD TEMPLATE BUTTON */}
            <button className=" bg-[#14008F] text-white px-4 py-2 hover:bg-white hover:text-[#14008F] hover:border-2 hover:border-[#14008F]" onClick={() => {window.open("https://iemecon.uem.edu.in/wp-content/uploads/2024/03/Template_IEMECON_2024.docx")}}>Download Template</button>


            {/* BULLETED POINTS */}
            <ul className=" list-disc mt-8">
                <li>The number of pages should not exceed six A4 size pages, and the paper should be uploaded through the <a className=" url" href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FIEMECON2024">Microsoft CMT</a> portal.</li>
                <li>There will be a double-blind review of the paper. Therefore, do not include ‘the authors’ names in the submitted paper.</li>
                <li>A paper with ‘authors’ names will not be considered for review.</li>
                <li>Authors must adhere to the supplied template.</li>
                <li>The paper must include an abstract of about 200 words with a maximum of five keywords.</li>
                <li>Authors of the accepted papers will be informed by email. Information about necessary revisions will be communicated to the corresponding author through email.</li>
                <li>The author(s) will have to incorporate the suggestions and will have to send the revised camera-ready copy of the paper as per the final submission guidelines within the given time limit (will be declared).</li>
            </ul>


            {/* SOME EXTRA TEXT */}
            <p>It is mandatory for at least one of the authors to register for publication of the paper in proceedings. For the author presenting more than one papers, it is mandatory to register and present each paper separately.</p>

            
        </div>








        {/* PAPER SUBMISSION */}
        <div className=" lg:w-[60rem] xl:text-2xl xl:mb-16 xl:p-8
lg:p-4 lg:py-6 lg:text-xl lg:mb-16">

            {/* HEADING */}
            <h1 className=' font-bold xl:text-4xl xl:ml-0 xl:mb-8 
        lg:mb-4 lg:ml-0  lg:text-2xl'>Paper Submission</h1>

            {/* TEXT */}
            <p>Authors are required to submit their papers through <a href="https://cmt3.research.microsoft.com/IEMECON2024" className=" url">Microsoft CMT</a>. The submission procedure is outlined below:</p>

        </div>
            







        {/* ACESSING THE SUBMISSION SYSTEM */}
        <div className=" lg:w-[60rem] xl:text-2xl xl:mb-16 xl:p-8
lg:p-4 lg:py-6 lg:text-xl lg:mb-16"> 

            {/* HEADING */}
            <h1 className=' font-bold xl:text-4xl xl:ml-0 xl:mb-8 
        lg:mb-4 lg:ml-0  lg:text-2xl'>Accessing the Submission System</h1>

            {/* TEXT */}
            <p>To submit your paper, access the Microsoft Conference Management Toolkit (Microsoft CMT) via the provided submission link.</p>


            {/* LINK */}
            <a href="https://cmt3.research.microsoft.com/ICCASA2025" className=" url">https://cmt3.research.microsoft.com/ICCASA2025</a>
        </div>







        {/* AUTHOR INFORMATION */}
        <div className=" lg:w-[60rem] xl:text-2xl xl:mb-16 xl:p-8
lg:p-4 lg:py-6 lg:text-xl lg:mb-16">

            {/* HEADING */}
            <h1 className=' font-bold xl:text-4xl xl:ml-0 xl:mb-8 
        lg:mb-4 lg:ml-0  lg:text-2xl'>Author Information</h1>
            

            {/* TEXT */}
            <p>Provide accurate author information, including names, affiliations, email addresses.
            Ensure the correct order of authors, as papers are often published in this order.</p>
        </div>







        {/* PAPER UPLOADING */}
        <div className=" lg:w-[60rem] xl:text-2xl xl:mb-16 xl:p-8
lg:p-4 lg:py-6 lg:text-xl lg:mb-16">

            {/* HEADING */}
            <h1 className=' font-bold xl:text-4xl xl:ml-0 xl:mb-8 
        lg:mb-4 lg:ml-0  lg:text-2xl'>Paper Uploading</h1>


            {/* UNORDERED LIST */}

            <ul className=" list-disc">
                <li>Log in to <a href="https://cmt3.research.microsoft.com/IEMECON2024" className=" url">Microsoft CMT</a> using your credentials and click the “Create New Submission” link.</li>
                <li>Fill in the required details, including the paper title, abstract, and author information.</li>
                <li>Upload your paper in both Word and PDF format as per the provided <a href="https://iemecon.uem.edu.in/wp-content/uploads/2024/03/Template_IEMECON_2024.docx" className="url">Template</a>.</li>
                <li>Assign appropriate keywords to your submission.</li>
            </ul>
        </div>








        {/* REVIEW PROCESS */}
        <div className=" lg:w-[60rem] xl:text-2xl xl:mb-16 xl:p-8
lg:p-4 lg:py-6 lg:text-xl lg:mb-16">


            {/* HEADING */}
            <h1 className=' font-bold xl:text-4xl xl:ml-0 xl:mb-8 
        lg:mb-4 lg:ml-0  lg:text-2xl'>
            Review Process
            </h1>

            {/* TEXT */}
            <p>Technical Program Chairs will evaluate papers based on technical suitability, scope, and plagiarism. After evaluation, qualifying submissions proceed to double-blind review by at least three experts for each paper.
            Authors will be notified of acceptance/rejection and any necessary revisions via Microsoft CMT.</p>

        </div>





      
    </div>
  );
};
