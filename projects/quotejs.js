const quotes=[
"Everything you can imagine is real. - Pablo Picasso",
"Life is what happens when you're busy making other plans. - John Lennon",
"Do one thing every day that scares you. - Eleanor Roosevelt",
"Happiness is not by chance, but by choice. - Jim Rohn ",
"A day without laughter is a day wasted. - Charlie Chaplin",
"Simplicity is the ultimate sophistication. - Leonardo da Vinci",
"It always seems impossible until it's done. - Nelson Mandela",
"Be yourself; everyone else is already taken. - Oscar Wilde",
"Success is a journey, not a destination. - Arthur Ashe",
"Don't count the days, make the days count. - Muhammad Ali",
"You only live once, but if you do it right, once is enough. - Mae West",
"Fall seven times, stand up eight. - Japanese Proverb",
"The best way to predict the future is to create it. - Peter Drucker",
"Act as if what you do makes a difference. It does. - William James",
"Kindness is free. Sprinkle that stuff everywhere. - Unknown",
"Courage doesn't always roar. - Mary Anne Radmacher",
"Learn the rules like a pro, so you can break them like an artist. - Pablo Picasso",
"Turn your wounds into wisdom. - Oprah Winfrey",
"I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
"Make your life a masterpiece; imagine no limitations. - Brian Tracy",
]


function repeat(){
const word=document.querySelector('#quote');
const index=Math.floor(Math.random()*quotes.length);
word.innerHTML=quotes[index];
}

   setInterval(repeat,2000);

