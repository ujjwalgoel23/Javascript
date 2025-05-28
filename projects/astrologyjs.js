 //based on months
 const zodiacsign=[
    "Capricorn", "Aquarius", "Pisces", 
                 "Aries", "Taurus", "Gemini",
                "Cancer", "Leo", "Virgo", "Libra",
             "Scorpio", "Sagittarius", "Capricorn"
            ];

    //based on dates
  const compliment=[
    "You have a great sense of humor.",
        "Your positivity is infectious.",
        "You're incredibly thoughtful.",
        "You have an amazing work ethic.",
        "You light up the room.",
        "You're a great listener.",
        "Your creativity is inspiring.",
        "You’re always so helpful.",
        "You're very intelligent.",
        "You make people feel comfortable.",
        "You're full of great ideas.",
        "You are very kind-hearted.",
        "You're a great friend.",
        "You're always so cheerful.",
        "Your determination is admirable.",
        "You're very talented.",
        "You make a difference.",
        "You're genuinely caring.",
        "You're so dependable.",
        "You bring out the best in others.",
        "You're very respectful.",
        "You're a true leader.",
        "You always find the silver lining.",
        "You make hard things look easy.",
        "You're so patient and calm.",
        "You're amazing just the way you are.",
        "You are so charismatic.",
        "Your presence is calming.",
        "You're a quick learner.",
        "You never give up.",
        "You're truly one of a kind."
  ];

  //size =20
  const victims=[
    "You always help everyone, but no one stands by you.",
        "You give your best to people who barely notice.",
        "You're too pure for this world.",
        "You always forgive, even when they don’t deserve it.",
        "You love deeply, yet always end up hurt.",
        "You do so much for others and never ask for anything back.",
        "You always show up, but they forget about you.",
        "You’re taken for granted because you're too nice.",
        "You never complain, yet suffer the most.",
        "You're always there for others, but no one checks on you.",
        "You carry everyone’s burden silently.",
        "You sacrifice your happiness so others can smile.",
        "You deserve better, but still settle for less.",
        "You care too much, and people don’t appreciate it.",
        "You’re too understanding, and people misuse that.",
        "You always stay loyal, but they always leave.",
        "You try so hard, but it's never enough for them.",
        "You always pick up the pieces for others.",
        "You’re the reason others shine, but stay in the shadows.",
        "You suffer silently, just to keep others at peace."
  ]
  
  //size =30
  const recommendations=[
      "Feed a street dog.",
        "Help an elderly person cross the road.",
        "Plant a tree.",
        "Donate old clothes to someone in need.",
        "Spend time with your parents.",
        "Compliment someone genuinely.",
        "Pick up litter from the street.",
        "Help a child with homework.",
        "Smile at a stranger.",
        "Cook a meal for someone.",
        "Donate blood if you're eligible.",
        "Give water to birds in summer.",
        "Support a local street vendor.",
        "Write a thank-you note to a teacher.",
        "Help someone carry heavy bags.",
        "Visit an orphanage or old-age home.",
        "Buy a meal for a homeless person.",
        "Avoid wasting food.",
        "Be kind on social media.",
        "Support someone emotionally in need.",
        "Donate books to a library or school.",
        "Let someone go ahead of you in line.",
        "Return someone’s lost item.",
        "Drive carefully and respectfully.",
        "Say sorry when you’re wrong.",
        "Offer your seat to someone who needs it.",
        "Share your umbrella during rain.",
        "Be patient with customer service workers.",
        "Spend a day without complaining.",
        "Encourage someone chasing their dreams."
  ];

  //size=>20
  const  predictions=[
     "You will become a crorepati.",
        "You will travel the world.",
        "You will inspire millions.",
        "You will buy your dream house.",
        "You will achieve your biggest goal.",
        "You will meet your soulmate soon.",
        "You will live a peaceful life.",
        "You will make your parents proud.",
        "You will get your dream job.",
        "You will create something legendary.",
        "You will be famous one day.",
        "You will find true happiness.",
        "You will be surrounded by good people.",
        "You will heal from your past.",
        "You will succeed against all odds.",
        "You will win something big.",
        "You will make a huge impact.",
        "You will attract positivity and peace.",
        "You will be healthier and stronger.",
        "You will shine in your own unique way."
  ];


  const form=document.getElementById("astroform");
  form.addEventListener('submit',(event)=>{
      event.preventDefault();

      const name=document.getElementById("name").value;
      const surname=document.getElementById("Surname").value;
      const day=Number(document.getElementById("day").value);
      const month=Number(document.getElementById("month").value);
      const year=Number(document.getElementById("year").value);
// jb bhe hm form se input lete hai toh hme string ke form me milta hai data toh hme phle usse numbe me convert krna padegaa.

      const result=document.getElementById("result");
      
      const first_message=`hello ${name} ${surname}`;
      const second_message=`your Zodiac sign is ${zodiacsign[month-1]}`;
      const third_message=compliment[day-1];

      let index=Math.floor(Math.random()*20);
      const fourth_message=victims[index];
      

      index= ((name.length)*(surname.length)*(year))%30;
      const fifth_message= recommendations[index];

       index=(day*month*year)%20;
      const sixth_message=predictions[index];

      result.innerText = `${first_message} ${second_message} ${third_message} ${fourth_message}  ${fifth_message} ${sixth_message}`;
    })

