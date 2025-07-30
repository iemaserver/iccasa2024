
export const Publication=()=>{

    return(
        <div className='flex flex-col container mx-auto xl:py-32 lg:py-16 py-8'>
            <h1 className="font-bold xl:text-5xl lg:text-2xl text-lg">Publication</h1>
            <ol className="mt-10 text-sm lg:text-xl">
                <li>1.	All accepted papers, following their presentation, will have the <span className="font-bold">opportunity to be published 
                    in the AIP Conference</span> Proceedings (Indexed in Scopus, Web of Science, Inspec, Chemical Abstracts Service (CAS), and 
                    Astrophysics Data System (ADS)), in domains related to physics, chemistry, and mathematics, subject to the applicable article 
                    processing charges (APC). </li>
                <li className="mt-4">2.	A limited number of selected research papers, following a double-blind peer review process at the journal's side, will have the 
                    <span className="font-bold">opportunity to be published in Applications and Applied Mathematics (AAM)</span>, an ESCI-indexed 
                    journal (at no cost), provided the work is in a domain related to mathematics.</li>
                <li className="mt-4">
                    3. All the selected abstracts will be published in conference souvenir, a text book with valid ISBN: <span className="font-bold">978-93-343-6456-9</span>
                </li>
            </ol>
            <div className='mt-10'>
                <h1 className='text-sm lg:text-xl font-semibold'>Registration Link: <a className='text-blue-500 underline font-bold' href="https://forms.gle/c4JDVkMCTwBRFaZx5">Click here to Register</a></h1>
                <h1 className='text-sm lg:text-xl font-semibold mt-3 '>Paper/Abstract submission Link: <a className='text-blue-500 underline font-bold' href="https://cmt3.research.microsoft.com/ICCASA2025/Submission/Manage">Click here to submit</a></h1>
            </div>
            
        </div>
    )
}