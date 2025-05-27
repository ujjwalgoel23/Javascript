const questionBank = [
  {
    question: "Who has the most centuries in international cricket?",
    options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Which country won the first ICC Cricket World Cup?",
    options: ["India", "Australia", "England", "West Indies"],
    answer: "West Indies"
  },
  {
    question: "Who is known as the 'God of Cricket'?",
    options: ["MS Dhoni", "Virat Kohli", "Sachin Tendulkar", "Kapil Dev"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "What is the highest individual score in ODI cricket?",
    options: ["200", "264", "219", "237"],
    answer: "264"
  },
  {
    question: "Which bowler has taken the most wickets in Test cricket?",
    options: ["Muttiah Muralitharan", "Shane Warne", "Anil Kumble", "James Anderson"],
    answer: "Muttiah Muralitharan"
  },
  {
    question: "Which Indian player is known as the 'Hitman'?",
    options: ["Virat Kohli", "Shikhar Dhawan", "Rohit Sharma", "KL Rahul"],
    answer: "Rohit Sharma"
  },
  {
    question: "Who won the ICC Cricket World Cup 2011?",
    options: ["India", "Sri Lanka", "Australia", "England"],
    answer: "India"
  },
  {
    question: "Who holds the record for the fastest century in ODI cricket?",
    options: ["Virat Kohli", "AB de Villiers", "Chris Gayle", "Shahid Afridi"],
    answer: "AB de Villiers"
  },
  {
    question: "Which country is known as the Proteas in cricket?",
    options: ["New Zealand", "Australia", "South Africa", "Zimbabwe"],
    answer: "South Africa"
  },
  {
    question: "Who has the most sixes in international cricket?",
    options: ["MS Dhoni", "Rohit Sharma", "Chris Gayle", "Shahid Afridi"],
    answer: "Chris Gayle"
  },
  {
    question: "Which team has won the most ICC Cricket World Cups?",
    options: ["India", "Australia", "England", "West Indies"],
    answer: "Australia"
  },
  {
    question: "Who is the youngest player to score a century in international cricket?",
    options: ["Rashid Khan", "Shahid Afridi", "Sachin Tendulkar", "Prithvi Shaw"],
    answer: "Shahid Afridi"
  },
  {
    question: "Which cricket stadium is the largest in the world?",
    options: ["MCG", "Lord's", "Eden Gardens", "Narendra Modi Stadium"],
    answer: "Narendra Modi Stadium"
  },
  {
    question: "Who is the fastest bowler in cricket history?",
    options: ["Brett Lee", "Shoaib Akhtar", "Mitchell Starc", "Shaun Tait"],
    answer: "Shoaib Akhtar"
  },
  {
    question: "Which Indian player has scored 3 double centuries in ODIs?",
    options: ["Virender Sehwag", "Virat Kohli", "Rohit Sharma", "MS Dhoni"],
    answer: "Rohit Sharma"
  },
  {
    question: "Who is the only batsman to score 100 international centuries?",
    options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Jacques Kallis"],
    answer: "Sachin Tendulkar"
  },
  {
    question: "Who hit six sixes in an over in T20 World Cup 2007?",
    options: ["Chris Gayle", "MS Dhoni", "Yuvraj Singh", "Kevin Pietersen"],
    answer: "Yuvraj Singh"
  },
  {
    question: "Which country has never won an ICC Cricket World Cup?",
    options: ["Pakistan", "South Africa", "Sri Lanka", "West Indies"],
    answer: "South Africa"
  },
  {
    question: "Who was the captain of India in the 1983 World Cup?",
    options: ["Kapil Dev", "Sunil Gavaskar", "Mohinder Amarnath", "Kris Srikkanth"],
    answer: "Kapil Dev"
  },
  {
    question: "Who has the highest batting average in Test cricket?",
    options: ["Steve Smith", "Virat Kohli", "Don Bradman", "Joe Root"],
    answer: "Don Bradman"
  }
];
 
function randomQuestion() {
  const data = new Set();

  while (data.size !== 5) {
    const index = Math.floor(Math.random() * questionBank.length);
    data.add(questionBank[index]);
  }

  return [...data];//convert set into array    T.C=>0(N)

  //*******Better approach  of randomquestion()--> */

    //using sort function()-->
    // we know sort fun() is not working correctly in js
    // questionBank.sort(()=>Math.random()-0.5);
    //  return questionBank.slice(0,5)   T.C=>0(Nlogn)
    
    // optimised approach of randomquestion()=>
     const arr=[];
    let len=questionBank.length;
    for(let i=0;i<5;i++){
      const index= Math.floor(Math.random()*length);
      arr.push(questionBank[index]);
      
      //swap=>
       [arr[index],arr[len-1]]=[arr[len-1],arr[index]];
         len--;
    }
 return arr;
}

const form = document.querySelector("form");
const problem = randomQuestion();
const original_answer = {};

// Create each question
problem.forEach((obj, index) => {
  const div_element = document.createElement("div");
  div_element.className = "question";

  original_answer[`q${index + 1}`] = obj.answer;

  const para = document.createElement("p");
  para.textContent = `${index + 1}. ${obj.question}`;
  div_element.appendChild(para);

  obj.options.forEach((option) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index + 1}`;
    input.value = option;

    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    div_element.appendChild(label);
    div_element.appendChild(document.createElement("br"));
  });

  form.appendChild(div_element);
});

// Add submit button
const submitBtn = document.createElement("button");
submitBtn.type = "submit";
submitBtn.textContent = "Submit";
form.appendChild(submitBtn);

// Output div
const output = document.createElement("div");
output.id = "out";
output.style.marginTop = "20px";
output.style.fontSize = "20px";
output.style.fontWeight = "bold";
form.appendChild(output);

// Event Listener
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);

  let res = 0;
  for (let [key, value] of data.entries()) {
    if (value === original_answer[key]) {
      res++;
    }
  }

  const out = document.getElementById("out");
  out.textContent = `${res} out of 5 is correct`;

  form.reset();
});
