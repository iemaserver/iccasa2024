import { KeynoteSpeaker_card_component } from "../components/KeynoteSpeaker_card_component"
import {PrevYear_KeynoteSpeaker_cardComponent} from "../components/PrevYear_KeynoteSpeaker_cardComponent"

export const KeynoteSpeaker = () => {
  return (
    <div className='lg:py-32 py-8 flex flex-col keynoteSpeaker-main container mx-auto'>

      <div className="flex justify-start keynoteSpeaker-heading">
        <h1 className="mb-3 text-lg font-bold lg:text-5xl lg:mb-16">Keynote Speakers :</h1>
      </div>
      <div className="KeynoteSpeakers-card-wrapper">

        {/* DR ABHIJIT KUMAR DAS */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Dr.AbhijitKumarDas.jpg?updatedAt=1751264845446" bold="Prof. (Dr.) Abhijit Kumar Das" line1="Senior Professor" line2="School of Mathematical &amp; Computational Sciences" line3="Indian Association for the Cultivation of Science, Kolkata" />

        {/* PROF DHARMENDRA TRIPATHI */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Dr.DharmendraTripathi.jpg?updatedAt=1751264845063" bold="Dr. Dharmendra Tripathi" line1="Associate Professor (Mathematics)" line2="Department of Mathematics" line3="National Institute of Technology, Uttarakhand" />

        {/* PROF DR OD MAKINDE */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Prof.%20O.%20D.%20Makinde.gif?updatedAt=1751264850134" bold="Prof. (Dr.) O.D. Makinde" line1="Professor (Mathematics)" line2="Stellenbosch University, South Africa" />

        {/* Prof. (Dr.) Haci Mehmet Baskonus */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Prof.Dr.HaciMehmetBaskonus.jpeg?updatedAt=1751264852099" bold="Prof. (Dr.) Haci Mehmet Baskonus" line1="Faculty of Education" line2="Harran University, Turkey" />

        {/* DR PRADEEP KUMAR */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Dr.PradeepKumar.jpg?updatedAt=1751264845213" bold="Dr. Pradeep Kumar" line1="Associate Professor" line2="Department of Chemistry" line3="MNIT Jaipur" />

        {/* PROF ANIL KUMAR */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Prof.AnilKumar.jpg?updatedAt=1751264850693" bold="Prof. (Dr.) Anil Kumar" line1="Professor" line2="Department of Chemistry" line3="BITS Pilani, Pilani campus" />

        {/* DR NARESH KUMAR */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/Dr.NareshKumar.jpeg?updatedAt=1751264845475" bold="Dr. Naresh Kumar" line1="Assistant Professor," line2="Department of Mathematical and Physical Sciences," line3="Sultanate of Oman." />

        {/*Dr Sachin Kumar */}
        <KeynoteSpeaker_card_component image="" bold = "Dr. Sachin Kumar" line1="Associate Professor" lin2="Department of Mathematics and Statistics" line3="School of basic Sciences, Central University of Punjab, Bathinda,Punjab,India" />
        
        {/*DR Sunil Pandey */}
        <KeynoteSpeaker_card_component image="" bold="Dr. Sunil Pandey" line1="Associate Professor" line2="Head of Department of Mathematics" line3="IIT Patna" />

        {/* Anoop Kumar Mukhopadhyay */}
        <KeynoteSpeaker_card_component image="" bold="Prof. Dr. Anoop Kumar Mukhopadhyay" line1="Scientist(former)" line2="CSIR- Central Glass and Ceramic Research Institute of Kolkata,India" />

        {/* Ritu Agarwal */}
        <KeynoteSpeaker_card_component image="https://ik.imagekit.io/keshav5173/keynoteSpeaker/RituAgarwal.jpg?updatedAt=1751264852101" bold="Dr. Ritu Agarwal" line1="Assistant Professor" line2="Department Of Mathematics" line3="MNIT Jaipur" />

        {/* Sarita Kumari */}
        <KeynoteSpeaker_card_component image="" bold="Dr. Sarita Kumari" line1="Associate Professor" line2="Department of Physics, VOR, Jaipur" />
      </div>

      {/* Previous Year keynote speaker */}

      <div className="flex justify-start keynoteSpeaker-heading mt-16">
        <h1 className="mb-3 text-lg font-bold lg:text-5xl lg:mb-16">Previous Year Keynote Speakers :</h1>
      </div>

      <div className="mb-10 flex flex-row gap-8 flex-wrap justify-center">
        <PrevYear_KeynoteSpeaker_cardComponent image="https://media-hosting.imagekit.io/774f0888a0f54513/h5.jpg?Expires=1841854650&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=PMyyp6UJRRnMlbigJs8SffuTOOJF11OOr86t2utgMIFjUEfunk4XjRGUAev76PSjiyXS-u5SSeJKg8xHGMF5gxcVMRtbzfkibd1l~j~dLpkzUk4RhOW29R4UZiK6-WoKRua36-1Ro1uSqEmN2hcxb1gBjGn7540Fb1sZP8o6v3ZmQhulja09C6hZ5oWhmgeeGEeGyzZi8aE7o2PZk-t4k4Go6Hj8XyC9BdlMnMrDntkjcu4g6WTUyhC-VnXUi7dDNH0yPog15Lv0q0Y8tw-gSeLW7bbYkEdYinzHcdyIh~EmhPbPdk9JAR9v-yxJvshCCnmRFV-fbS1Z4k3DjsjqXA__" bold="Prof. O.D. Makinde" line1="Faculty of Military Science, Stellenbosch" line2="University of South Africa  " />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://media-hosting.imagekit.io/3a17303abce14893/a.jpg?Expires=1841854638&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=NiwCJHj8KjkBQ7NwKd-h0M~RJoCwPvZp2mivQEPg8RCsm6pLWZAoZx39JeSQfNGSFd1tUfaImIJmEGFTVBEx6-~zXgjUEy1Xw~u00fW39UKE7gYJ~lJr0chxlhtd9fcqZ9cajcqxVo9eBX-D1KjrBOpnQk04Ef79k-TY-soxNil8~4W4rt77LfqQjV6RutfqQl-RynnsJ3Z1OEwY9HSg7opE1ogfv5x1rTmSj3dY2rPWHFC3ZBZzEgOkQrWUF2-DBmOK1ctu5OdDoV~SbE7expABNs3FFeWyJUC0tI2tqzWnXyg0~wVZP2amqSv6nTGVS4LvAbaMAw0R30DldNzEtw__" bold="Dr. Animasaun Issac L." line1="Department of Mathematical Science" line2="The fedral University of technology  Akure, Nigeria" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://media-hosting.imagekit.io/14ad169624ac4ce3/k-1.jpg?Expires=1841854654&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=VRWPLkIpv7h63qf7WD0qy7uaJyT94nrFYXcJ0FESBSXazclERMvF0m8fhO5yaFft9u2jjt6HEZkIc-jWXOjfLzINBJuUWxH7xJOl2naZE0OzelbOuyXRnIkT19XX-U25c3OkxwO0arqRNma4fbV8QnRSi5qb63KR4H7aoGzY8O-EEGLh6P6H14XNzPlrEGt~eN0JnawAfK9Yn5vzHDIA~dTwaTaAUunBcN0v5gRLtvva38w4q27SZd1WcqzyUbSX8TBL9BtolTy~PFJ2iuMqlFUUdfwJ5gzvr77Wu2JITfMDErSzEJCd4inOCl-0Hv-IlqZLFr0AMOz1O3XwIaRRfw__" bold="Dr. Dawid Dudowski" line1="Division of Dynamics Lodz" line2="University of technology, Lodz, Stefanowskiego (Poland)" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://media-hosting.imagekit.io/e2c4e21a15d54778/k-2.jpg?Expires=1841854658&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=uKMuhr9LwyZ~sqQTKrDjGNxBxlxEnc3DPZUwGoLOUtCb1kJ2odcVJbbM8BWE0qZ~P90i1mdYF9RPdiCZSekUnDDECHcuzuJgfdXRUFLP75F7ES4Z35B7~B6Au5dE0CZb6GR9AsCuQLfa5DNiozebAPZSqQdwmZkHeiuWK6vV~8dZmSghEQC96VKd1bLArBfS8s2uI0HTJRHhAWaO3ToWjsqJTF67F~jsuc~dVZAShAkBt83wbMxrISaR1yHuladvbeQiqoxNF6-XPIk7qHGpRtURrHBYSCzlOzwXIdKumRfBJoEi5uNLiN~llVI4WpxznqDjKaWVN4oxL4Xlxhtc~w__" bold="Prof. Manish Shrimali" line1="Department of physics" line2="Central University of Rajasthan" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://media-hosting.imagekit.io/639821a42bb841ee/k-3.jpg?Expires=1841854661&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YqHFQyELuiMncu3djbHKRh6ME17G5FbWS6yBr5jLYxa2gVqnvEuM7Kh5wVMSprw3Xfqz~BIcoXBr5c9XGCFRIQGOgoIrNEJMS~boB~THFqRtXx0ZmVa1P5gonuvIarEk3ey0Bx39jWjSFOUcXt410dzvtUs9kRBZFCUQB6uds0xSreWw12OR4q2Oz9ZWrqZ7FE0LodIVIA~QnnjZUidDqtKzyPl5AFasliLVBqSxlpkjBsRgqaJRb4lkVMOzAKNaRLHmy3PK3ZpQ7MUVej-evdPMEeH2Am6sPjaECrYyfqrdF7TAwg-CF9Hp0hEK~fJ~gEVRNFy62pT55r9cWyazYw__" bold="Prof. Ganesh Bagler" line1="Infosys Centre for Artificial Intelligence Department of Computational Biology" line2="IIT Delhi, New Delhi" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://media-hosting.imagekit.io/e94475a21e074b3f/k-4.jpg?Expires=1841854665&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=I0bRSe~KqMjnDQ~I0peyjX0pWA9y5Ry-I28cE7IGN-ffTmXOISBGjAsXAO9D-kbADHa1zUSGtUGXFp6CZEr0J4m3831ixPoOaETyzdgujtEkPBRnSnC8R83RFHoYV~5RxNl2eI4SKNk6f8ZiDZXrw7VtOxWgT~H7U3uK~5P3R6DS7lzXlMrE~BWnaB5kfG1cC3tt2bNcM8Oxec52fUOEo3IJuPJLKfcxjCFzU7ohgJZgY8fgMocJJsNbXNVWXb8mN9CT5p3LUDkNhL4GG0nR~iRpiI8XOKanRhm~ABZIEycUB8VJTjLuhBdR-eb1bdFyNzKNP7qR4ImrQhPfWZbkgg__" bold="Prof. Ram Ramaswamy" line1="Department of Chemistry" line2="IIT Delhi, New Delhi" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://media-hosting.imagekit.io/2a0e691ac5ad410d/k-5.jpg?Expires=1841854668&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Y86sGaoUIC~e7zCO2r9UVZrK9E4oMvUpTkN6o-gAxU3tWbixugg2pA1xbe6dB4k-4sh0D1qFt5oLIgc6jhpj9NLr5yyApUAhpuEPuzk79tNlM~BzyXctxcpNcGf6D2nEf3v2ztWh9uwKHR2jHdGj5XDkQjzG9~UOR0Qey6AL5xlgh9gzejK98npMsKowDq-CY9PO0iuZ4kZw5mNC9wNKTf1m44hj3nvm1EXPN6ldOjwQGvMZTgCgKUYAm2I0z7KfMU3vYxGort5r0~qBgluEZ7t702e9MUjV2nuhrwIL9s~12mtjAhaaMi9GSW7lpLO~cBsH4GoNckvKh4O9S53BkA__" bold="Mr. Saptarshi Basu" line1="Additional Director" line2="Tiger Agro Processing Industries Pvt Ltd." />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://media-hosting.imagekit.io/31d092498f394cd7/k-6.jpeg?Expires=1841854673&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=pSNzARWoBtM1vNtjn0lIcGnaRtKvrNS4IqntE3ecDAcJ4-kd58T79CJKbFTHt5zd~Foefc2d~ywUp5X5JRKIBiw5HsvS1MtY8BNETF15uww3oxs4CKE5CAu52qhinrNzl9CF6SzyrHqghyPVqERZuQ~uelV~sdHUvMcgs3NEngOu7C6G2a6y-Mp5y7O5F3PfPTHRa5rrXLRdFUah3x7v6O1cznqE5FT4-I2KuHcR7wxKsbak-UqOJPXzhKKIwhg4kcqLdLT6L72mpokAd0j9SsuRMokOrWRxImotfaNaMga7U5nI0CQvkWBx4-HxHi3UTbsUAG7Zdnds7TkT6qyuKQ__" bold="Dr. Vidyottama Jain" line1="Department of Data Science & Analytics" line2="Central University of Rajasthan" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://media-hosting.imagekit.io/d695cdc63d5f41c9/k-6.jpg?Expires=1841854680&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=Ck6wmIzsIpk3ElGZ1Dv8xMJDkI86SexIZayCFz3pduaNHuEc9EnVPJuMdI0k3KyPuUxcr9Ooif~ZrsQVYAyxMFT0FPEAQxNC~4Ia5Sa9I65MaJ35ZBbrQs21Z0kIiR6MP1svGWF7sxRzdZh~QXvsh-l8qYfq8nWRb5A~2amttA2r6IB5eLG7PIlc~0r~Wa8XZDGTBm57cbh2wbzSXkZoGx67zpfsq6K32Qgv4EV1R~HjM7zC9KMVi-PyYiRadFZHGDgkcpYYbiK38cBu0DDBWiHfA3wYntFsfBVe0Y2I~ae~DExteBqOT2dsPPpqcWBCBf11KxNCR-CKUe2xnX6peQ__" bold="Dr. Rajat Subhra Mandal" line1="Technical Chhairman" line2="Bureau of Indian Standard, Elcoma,ISLE" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://media-hosting.imagekit.io/dc8e8cc0b02a4046/k-7.jpg?Expires=1841854683&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=cILYikcO3pLf6TtGhPfteNH85ync9XcnZ-EVqEFBCDnTlzm3ePTfqA~ScWjYMD1DNfK3R5mCkHYGzXWPKitXAG-Nniy3Dd7nTRY8pghxTKUKLzTNaxruSCN64bn~KuGQI4c8K1Mkkn-HTZ-F-7hLt2xQLkhLKjD0gV2LfOxhOkhj8feOJI7FDqSIQE7QotE~Il8Cq~uBygXS83OlqaIyKxW4NOuDjivsv093pWMixeHVACGsrrZeSpQamNL6kLc60E7kBFAKE1zrNhStdQRzflkQdGtPcRsoid2AEw8QuJgiZ8kEdq6FOyuaNpvJx4VnhJSa2bX5Wlhx9GgCnPoSsA__" bold="Dr. Vedavati G. Puranik" line1="Ex-Senior Scientist, Physical & Material Chemistry Division CSIR" line2="National Chemical Laboratory, Pune." />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://media-hosting.imagekit.io/b649396fd06d44ec/k-9.jpg?Expires=1841854687&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=0kVpxNHIWtVJfAZ31xrVoXPXyIbXAFqK7sv4SROFuhIrtDPyT7s1FMfw0AigDfRRl7u0u3a9LGsUAhGztOyFbpMGx3V1S7MRLya3rzNGzQzaQdVIlIDQFZQ0nIRxHxKq3-Q8gYS4bUCkEeiM-OsA9otsZyHPNAdNzUYczUWC3w5wzFyQ6KYzb1hYM7lxtxmvXy6aV-XwXLlPWqaAxAzfVe6obCW2qk0eEiG~C4B~6e7dE8c1WhN~J1gccsMa7VKlFdbO46eujXfoGWHJVmmV25pGYx~F-qtSK1e3F~9a~oNSiAyrBG0D~7Wc8yUIjr~BTdgCDGE13WYNEQ3hq-J0Og__" bold="Prof. Sanjeev K. Tomer" line1="Department of Statistics" line2="IIT BHU" />
       <PrevYear_KeynoteSpeaker_cardComponent image="https://media-hosting.imagekit.io/39c19cc345b84437/k-8.jpg?Expires=1841858751&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=j72jKY-O3On0lZunTBTnKJ6fTfJxWQaGWIG2jgXWOHC9XF-1o6ZMDehNOviKJb~1yyLMTrm8vSymcqcQcnrpGKdWf3JhU4m3h9hFDPQjAbsLJLs5r6vT6qKwNyqiLRP~0aC5e6aAGs4BBsH889IBEUcQ52LeBq-tdi09Ecv0aa-VGFn4eA1HmfkTvq2Hgdt0mL-1Te3VzwRtX3WRQKPDjF4vyQgUu5LTQMcL5Z4wecGJorMRGabhL8WVRn3GK47B9U4lpgOp6IrIYkpqShb586Fy~lBp~cP33YC7Xn3Up715NJm6SMmvnLjNsuUsVXpdG0NKt4knGvWiZSBYfwJ60A__" bold="Prof. Santiago Gómez-Ruiz" line1="Universidad Rey Juan Carlos(Spain)" />
      </div>
    </div>
  )
}
