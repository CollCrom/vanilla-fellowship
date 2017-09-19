console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;


var makeMiddleEarth = () => {
   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
   const section = document.createElement('section');
   section.id = 'middle-earth';
   arr = [];
   for(let i = 0; i < lands.length; i++){
   	arr.push(document.createElement('article'));
   	section.appendChild(arr[i]);
   	arr[i].innerHTML = `<h1>${lands[i]}</h1>`;
   	arr[i].id = lands[i];
   }
   body.appendChild(section);
};
makeMiddleEarth();

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   // const hobbit = [];

   for(let i = 0; i < hobbits.length; i++){
   	const ul =	document.createElement('ul');
   		ul.innerText = hobbits[i];
   		ul.classList.add('hobbits');
   		document.getElementById('The Shire').appendChild(ul);
   }
};
makeHobbits();

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   div = document.createElement('div');
   div.id = 'the-ring';
   div.classList.add('magic-imbued-jewelry');
   hobbitList = document.getElementsByClassName('hobbits');
   for(let i = 0; i < hobbitList.length; i++){
   		if(hobbitList[i].innerText === 'frodo baggins')
   			hobbitList[i].appendChild(div);
   }
};
keepItSecretKeepItSafe();

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   const aside = document.createElement('aside');
   buddy = [];
   for(let i = 0; i < buddies.length; i++){
   		buddy.push(document.createElement('ul'));
   		buddy[i].innerText = buddies[i];
   		document.getElementById('Rivendell').appendChild(buddy[i]);
   }
};
makeBuddies();

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   ulList = document.querySelectorAll('ul');
   for(let i = 0; i < ulList.length; i++){
   		if(ulList[i].innerHTML === 'Strider')
   			ulList[i].innerText = 'Aragorn';
   }
};
beautifulStranger();

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   const hobbitList = document.getElementsByClassName('hobbits');
   rivendell = document.getElementById('Rivendell');
   const realHobbits = Array.from(hobbitList);

   for(let i = 0; i < realHobbits.length; i++){
   		rivendell.appendChild(realHobbits[i]);
   }
};
leaveTheShire();

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   div = document.createElement('div');
   div.id = 'the-fellowship';
   rivendell = document.getElementById('Rivendell');
   ulList = document.querySelectorAll('ul');
   for(let i = 0; i < ulList.length; i++){
   		div.appendChild(ulList[i]);
   		alert(`${ulList[i].innerText} has joined the fellowship`);
   }
   rivendell.appendChild(div);
};
forgeTheFellowShip();

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   ulList = document.querySelectorAll('ul');
   for(let i = 0; i < ulList.length; i++){
   		if(ulList[i].innerText === 'gandalf the grey'){
   			ulList[i].innerText = 'Gandalf the White';
   			ulList[i].style.backgroundColor = 'white';
   			ulList[i].style.border = 'thick solid grey'; 
   		}
   }
};
theBalrog();

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   alert('THE HORN OF GONDOR HAS BEEN BLOWN');
   fellowship = document.getElementById('the-fellowship');
   ulList = document.querySelectorAll('ul');
   for(let i = 0; i < ulList.length; i++){
   		if(ulList[i].innerText === 'boromir')
   			fellowship.removeChild(ulList[i]);
   }
};
hornOfGondor();

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   let hobbitList = document.getElementsByClassName('hobbits');
   hobbitList = Array.from(hobbitList);
   const mordor = document.getElementById('Mordor');
   const mtDoom = document.createElement('div');
   mtDoom.id = 'mount-doom';
   mordor.appendChild(mtDoom);
   for(let i = 0; i < hobbitList.length; i++){
   		if(hobbitList[i].innerText === 'frodo baggins' || hobbitList[i].innerText === 'samwise \'sam\' gamgee')
   			mordor.appendChild(hobbitList[i])
   }
};
itsDangerousToGoAlone();

 var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
   const gollum = document.createElement('div');
   const mordor = document.getElementById('Mordor');
   const ring = document.getElementById('the-ring');
   const mtDoom = document.getElementById('mount-doom');
   gollum.id = 'gollum';
   mordor.appendChild(gollum);
   gollum.appendChild(ring);
   mtDoom.appendChild(gollum);
};
weWantsIt();

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   const hobbitList = Array.from(document.getElementsByClassName('hobbits'));
   const shire = document.getElementById('The Shire');
   const mtDoom = document.getElementById('mount-doom');
   const gollum = document.getElementById('gollum');
   const theRing = document.getElementById('the-ring');
   gollum.removeChild(theRing);
   mtDoom.removeChild(gollum);
   for(let i = 0; i < hobbitList.length; i++)
   		shire.appendChild(hobbitList[i]);
};
thereAndBackAgain();