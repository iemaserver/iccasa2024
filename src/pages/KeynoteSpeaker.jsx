import { KeynoteSpeaker_card_component } from "../components/KeynoteSpeaker_card_component"

// IMAGE IMPORTS
// import DrAbhijitKumarDas from "../assets/JPG/keynoteSpeaker/abhijitKumar.jpg"
// import DrRituAgarwal from "../assets/JPG/keynoteSpeaker/RituAgarwal.jpg"
// import DrDevendraKumar from "../assets/JPG/keynoteSpeaker/Dr. Devendra Kumar.jpeg"
// import DrDharmendraTripathi from "../assets/JPG/keynoteSpeaker/DharmendraTripathi.jpg"
// import DrJagdevSingh from "../assets/JPG/keynoteSpeaker/Dr. Jagdev Singh.jpeg"
// import DrNareshKumar from "../assets/JPG/keynoteSpeaker/Dr. Naresh Kumar.jpeg"
// import DrPradeepKumar from "../assets/JPG/keynoteSpeaker/Dr. Pradeep Kumar.jpg"
// import DrVaibhav from "../assets/JPG/keynoteSpeaker/Dr. Vaibhav 1.png"
// import DrYudhveerSing from "../assets/JPG/keynoteSpeaker/Dr. Yudhveer Singh.jpeg"
// import ProfAnilKumar from "../assets/JPG/keynoteSpeaker/Prof. Anil Kumar.jpg"
// import DrHaciMehmet from "../assets/JPG/keynoteSpeaker/Prof. (Dr.) Haci Mehmet Baskonus.jpeg"
// import DrAnuragShukla from "../assets/JPG/keynoteSpeaker/Dr.AnuragShukla.jpeg"
// import ProfODMakinde from "../assets/JPG/keynoteSpeaker/Prof. O. D. Makinde.gif"
// import sachin from "../assets/JPG/keynoteSpeaker/Sachin.jpg"
// import sunil from "../assets/JPG/keynoteSpeaker/SunilPandey.jpg"
// import AKM from "../assets/JPG/keynoteSpeaker/AKM Picture 1.jpg"
import rituAgarwal from "../assets/PNG/rituAgarwal.jpg"


export const KeynoteSpeaker = () => {
  return (
    <div className=' lg:w-[100%] py-32 flex flex-col items-center keynoteSpeaker-main'>

      <div className="flex justify-start keynoteSpeaker-heading">
        <h1 className=" font-bold text-5xl mb-16">Keynote Speakers :</h1>
      </div>
      <div className="KeynoteSpeakers-card-wrapper">

        {/* DR ABHIJIT KUMAR DAS */}
        <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//3fb75242e23847a1/abhijitKumar.jpg?Expires=1836900896&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=2N9s9egCbdWbW5M1QDytwtjRcORpmH6cdeyE-LiNXNPFxVuzaMj0ey22JEB-1gv7OZyXopKEvwTdLVNMhcOkuMFlrcKDEMq9Fl-TKNo~1uCBcjpiBF7ZuWDUsFSlhP6kzS7t4E~JoxuGrK5AcDQIj3KGTgZHVDDUv4S1z1IQi6dBGU4aCRy2LaJC9Ow8iMUde5vwtBuKzSXhvAbhGvYv1fJfQ8Y~S2ajy98~itoS-0XNhOWVfCjebArvf3qSAI8P5ZeK8SHF4BIvK6NmqtgMWZRhe1l64ENwG~zINXTrYgbM7SUNxQ7o2FrbAA65XX9kgnGxWuXhUzaLhOM4C4K2jw__" bold="Prof. (Dr.) Abhijit Kumar Das" line1="Senior Professor" line2="School of Mathematical &amp; Computational Sciences" line3="Indian Association for the Cultivation of Science, Kolkata" />

        {/* PROF DHARMENDRA TRIPATHI */}
        <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//8647fa0ce6bb431d/DharmendraTripathi.jpg?Expires=1836900915&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=c~-3r~a-DrOMV5tfYsL1l-JH6Cz2T6CT8WmPk82rr6I5fR3ixwyNr770-KIqcl9ATevc978OGQAtipgUt15wmecuKQekRwRi-ek6RQNG9NnBmeqKjZEK63VgO~ReOghZmdaj~cIZM8azPem4T1msFwZ20~rHro6betix9vQIAVCEaq0AqiAkeSxo7ZyoCXFYaLxtdQohWyWqaSJ9noZ~05Vv0~l31ogLVma3n3eevE9ImON4yT8Qt6CThmqkR~tv4fxZCzoWZ2BKUh7bc888UsMe9lu2rKeljSm55pbgbKm2I4UW1ir26wSaeGJ64IuHcod0z2kILxksmi3pLuhgAw__" bold="Dr. Dharmendra Tripathi" line1="Associate Professor (Mathematics)" line2="Department of Mathematics" line3="National Institute of Technology, Uttarakhand" />

        {/* PROF DR OD MAKINDE */}
        <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//d39c415f1b8e4cd8/Prof.%20O.%20D.%20Makinde.gif?Expires=1836900939&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=euhNI8Z24UKpOr9vBo3DrRicmgD0tbamTWC6keTl~ZaYVHWxSLewaPwZG4V2PXyQR9fguuxa8QGp3tznZVblnutB92TdUyvcPRa~11qHJ~hy6Sk~DXf~EGL3-IZk9~3cadl80fbTPzujir5fUnCmEZfYvmAHajbm1QyyaJq7~Aib2ps-Yo7bOcNWDbJMFCP7o0w12DWnwcQIsHwLLwc1ne0N9q~4XT9rvb8CgPvIebq5jkjaF~8VvWY106WJHkEAhhEqjmXXDSPzbB4IoPCL~iaYJeiJ6~-E0O6HuY07b7DHGo5ZzWBnLmbOoQEH65dM5sLViV0v76jFU~xbUcjkYw__" bold="Prof. (Dr.) O.D. Makinde" line1="Professor (Mathematics)" line2="Stellenbosch University, South Africa" />

        {/* Prof. (Dr.) Haci Mehmet Baskonus */}
        <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//f8a37ad2ce264124/Prof.%20(Dr.)%20Haci%20Mehmet%20Baskonus.jpeg?Expires=1836900926&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=zBa~unZU15ynY6V7wGi9a9o1026Lf5I3RV49NQ1nZHnVsA3TljO1DDeSj15WXwpxgi8VC7GXvQP0F5MZUQlijNlSdCeZ-7YntxSxqjsXgOerBJ-QJwm4fzCXdv0eah5I-qVzGZoBI5OGKOJcsCCrLWa6dIuLaFixzmZM~GOFb4HVfKY4ixziQ2yVe~VHuulpzWOGpNpoWrxYkDegAouoZdn~JOwu2Nz5XESRjkF5E6Acyml19wF9yJyQgu9mX7rbqyTS~GgqRhmYZhKan1nyt9mis-iVAsQpieYxdmgB0wuG8nbD9jWZMxw8J-WzKmjsyd6gYgVA5PF3UCydALekFQ__" bold="Prof. (Dr.) Haci Mehmet Baskonus" line1="Faculty of Education" line2="Harran University, Turkey" />

        {/* DR PRADEEP KUMAR */}
        <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//8bfb71f9053445ad/Dr.%20Pradeep%20Kumar.jpg?Expires=1836900922&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SGiIKW4PWZf0s22-DPltSeaFSCN5VzbyBH5Kok-l~KREJO8PBhwh2EISMDIBRDNa17jY4QHnBwcNzt4sTpb9jaazOiWKo6TCmfq-kP7rxzTr5R8piuBpplp8DwzXiZizRXYlMWFeVSq0VxIm0iVcjvVX6NRr5teyIZZi59DxbuHkpuuxRlG14HICWjFxl5rTJWbqzBTrq1hX4mJ9yeJajBxi~GoxTUZbSRQOOn78mTtPHESEVx45VNhgm1cNiJ9a0LpcirhERDxGBjDQp2XsSC79fZIYaMkBhsDlyNBmTEf5rYwXmnfU7nFF3Ny6OrmgU9ByvTRGwC6sJLgUUibsOQ__" bold="Dr. Pradeep Kumar" line1="Associate Professor" line2="Department of Chemistry" line3="MNIT Jaipur" />

        {/* PROF ANIL KUMAR */}
        <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//0ed88245a2184869/Prof.%20Anil%20Kumar.jpg?Expires=1836900933&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=I24Cmzw89b3matmr2rQva7-b11AhY~BZBhCT2zvWwvN3MHRNrbvUkBsIVhqBHvAcE9hDMHDf-0hYw51O~OxqPPHTC61dDo4Ajf0eGQda5dVT5xXYavzhlLl77o6EUxgVQfxeWXNt46tiLoAAGo3R7Ck~99zNBlR95Qe--~HsLSnVuSTxgsqdCWA9qj~H5ZSziNgVKkaLi41kkR6Ycm-kt-vX9sThoZ2WpByW120wniHv3GKt42hPFlXFxJ8FdhSHssiLg-wx9DOlWKCV6H5l31f~pvOhPUSL94HIco0TLnmSscXXbUxwLEIWG-S7yy-O3z1jtoi0xEjjp~1nFENp~g__" bold="Prof. (Dr.) Anil Kumar" line1="Professor" line2="Department of Chemistry" line3="BITS Pilani, Pilani campus" />

        {/* DR NARESH KUMAR */}
        <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//2ea8dc31919c4642/Dr.%20Naresh%20Kumar.jpeg?Expires=1836900907&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ykIDCzrNI1HG7FlKtFkaC8vzT1FNnYVYA2pgSpIxZtGm98~-uN0it-sRs9OWWb-PSeB0ybS3Z6xIh--SbUGR-hzQ3--OqkTkJOCPjSIT2XKGqbUge9N5gxGTKwIwW0UFUIv4e54kNuVnMqMBrqd8ZAYLLvHO0AjuHSNbqor8VFuc3vdTw1E29PyRLJL0mLQYjCRuhOqBFjVap21II4O04zDrYqYkXyBNTBg-~becYBG1goa6xmAfd0PObmOttlLh4uUFWA6EHFlr022H3gSQNyBaCln2bbtglfMow-a1h6vmiqIZX4OJfaygi~M1uKBmVyiL18bmpPGfYOA81mVfzw__" bold="Dr. Naresh Kumar" line1="Assistant Professor," line2="Department of Mathematical and Physical Sciences," line3="Sultanate of Oman." />

        {/*Dr Sachin Kumar */}
        <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//c24f37fb9045487c/Sachin.jpg?Expires=1836900947&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0Oqr9bfNj47wd5yM3nOFmegYyMSPOLq~NUNG9GILsqJDE6ujNdm4XnksI-SUBZubp5ikBr8p9Ovu3gAD3xXy5iEq-omfGU0ExGwmZHfOBQuDq1h3GzUXN7G-wslcExqpsmiZulp-aXLx~zXaYegbS7uyrreg1583ThDX2TYFxdO71xyp9q17F1qSSVQb9p9371zYKgmpEOSF0kl4XfH5r1kkY2~AuzRFwuBWETBEAvvXhrQZzLigneqvCxldrVweCpKW5eMozZZvrIs0M4EgTHo3JFuuIozp~TQTUbUgOQb7APxPSDN~JV6W5lqsEi93EdfWo88GiNkhFYQnHuTkuQ__" bold = "Dr. Sachin Kumar" line1="Associate Professor" lin2="Department of Mathematics and Statistics" line3="School of basic Sciences, Central University of Punjab, Bathinda,Punjab,India" />
        
        {/*DR Sunil Pandey */}
        <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//234ed5aafc5c46ad/SunilPandey.jpg?Expires=1836900954&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=e6Ka7RZ0rMp0gKlxGSAyATDuX5YZo-0xy5jn30yHSP21JsF5FMX3mpwYYjFsJAmwQD6xqCVrbx6yOfefOOc71BYdMx05ptmdlRo0~-2H05yAVHLHo3XI31LmumFvY5dts7IMKHj~nfcvV8FMql32Rt4UyU1pJID~pz9JKkRRQIlc9tXMUaoh3xNlS7hPuBvqN9KoAfwrxwdfEiEU9yPVGMwtvTW5z1hMKr4yo0c5~ZfwSIS1fVwK8K8iVfmImkLRTqtML8eld~~oxbkGgovPQ~XZuUAtgWW6UG3eDtN1s83TeCMAltwg0g9scM-oPiaEkYYTLqFKaNTgfqRz2iR62A__" bold="Dr. Sunil Pandey" line1="Associate Professor" line2="Head of Department of Mathematics" line3="IIT Patna" />

        {/* Anoop Kumar Mukhopadhyay */}
        <KeynoteSpeaker_card_component image="https://media-hosting.imagekit.io//6905ec553cfb4b40/AKM%20Picture%201.jpg?Expires=1836900889&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=wikM4SuO~d8MIKslVL-IE2XJjJhgla-Lwn1Mvaps0fvJjFZs3Qou51Dsew55ddull2jhya9XUnrA1F-6pk70tdcjSYEExSUZjAGBGptgLhGPGGmkEn6YYQUZ-x-n6RxMgMcKwhhrFfNeJwT~q5A0Z7jO9-GzSkRbf4h85wbHY2zeTs3D7tkPvXdj1DIu8oVPVKtxyrQuDoo4K-h3qMeEY5EJrj1wBmww7k-~YAQSFA-o4zxMW3BhGOkgxBgDZn0eSl7~rJe6kruXPYMmTR9DlSkk-Xogo-ejZATgFRtFqzsvNk5kP8kruG6CLBwKKx7Asfz6Dqdk1uqHIjuR8kxpFQ__" bold="Prof. Dr. Anoop Kumar Mukhopadhyay" line1="Scientist(former)" line2="CSIR- Central Glass and Ceramic Research Institute of Kolkata,India" />

        {/* Ritu Agarwal */}
        <KeynoteSpeaker_card_component image={rituAgarwal} bold="Dr. Ritu Agarwal" line1="Assistant Professor" line2="Department Of Mathematics" line3="Malaviya NIT Jaipur" />
      </div>
    </div>
  )
}
