const container = document.getElementsByClassName('cards-container');
const cards = db.map((person)=>{createPersonCard(person)});
container.append(...cards);

function createElement(type, { classNames, onClick }, ...children) {
  const elem = document.createElement(type);
  elem.classList.add(...classNames);
  elem.onclick = onClick;
  elem.append(...children);
  return elem;
};

function createPersonCard (person) {
  const imageDiv = createElement('div', {classNames: ['image-container']}, );

  const imageDiv = createElement('h1', {classNames: ['card-name']}, );


  return createElement ('div', {classNames: ['image-container']}, imageDiv, cardName, cardText, linksDiv)
}