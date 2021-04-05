console.log("Extension running");
var body = document.body,
    html = document.documentElement;
// var height = window.innerHeight;
var readings = ["Something terrible will happen soon. Be aware of who you trust.",
 "Look around you. Something close to you is trying to harm you.",
 "What you worry about is out of your hands. Let fate be your guide and hold your dearest allies close.",
 "Spend some money, you want to buy something. Treat yourself to something nice, you have had it tough lately.",
"You are feeling abundantly happy and joyful - if you don't, be assured that you are about to enter a period of success and fulfillment.",
"The responsibility of important decisions weighs heavy with you where there are choices to make. Trust your intuition, and even if you have to make the painful decision to give up something in order to move on, then have the courage to do it.",
"Help is at hand. If you want wise counsel and moral guidance put your trust in someone you have a lot of respect for.",
"Don't allow others to influence you too much with what they want you to conform to - be true to yourself.",
"What you most want is a new love in your life, a new love affair or perhaps a rekindled affair is at hand.",
"You are at risk of doing something hasty out of impatience and rage. This is not a time for irrational and impulsive behaviour.",
"Whilst you are confused and fearful and allowing your anxieties to hold you back, trust that all will turn out well in the end.",
"If you are concerned about making the right decision there is someone with the right moral fibre who can help.",
"This is a time of good luck and fortune, perhaps after a period of struggle and heartache. If considering a new love affair, new job, career change, or travel, then go for it.",
"Brand new potential, an opportunity which once given must not be ignored, a new project, decision or relationship that could affect the rest of your life.",
"If you are in an unhappy relationship you have a choice to make - go with your heart, take the risk. Greater happiness is ahead of you."
];

var meaning = readings[Math.floor(Math.random() * readings.length)];

var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
var width = window.innerWidth;
var card_x = Math.random() * width;
var card_y = Math.random() * height;


  var card = new Image();
  card.src = chrome.runtime.getURL("images/arcana02.png");
  card.style.position = "absolute";
  card.style.left = (card_x - 50).toString() + "px";
  card.style.top = (card_y - 50).toString() + "px";
  document.body.appendChild(card);

console.log(card_x, card_y);


document.addEventListener("click", check_position);

function check_position(event) {
  console.log(event.pageX, event.pageY);
  if (Math.sqrt(Math.pow((event.pageX - card_x), 2) + Math.pow((event.pageY - card_y), 2)) < 200) {
    alert(meaning);
  // meaning = true;
  // console.log(meaning);
  }
}

// if (meaning === true) {
//   showMeaning();
// }
// function showMeaning() {
//   alert("This has deep meaning for you");
// }
