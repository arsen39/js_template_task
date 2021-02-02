const container = document.getElementById("cards-container");

const filtredDB = db.filter(
  (person) =>
    person.firstName !== "" && person.lastName !== "" && person.id !== ""
);

const cards = filtredDB.map((person) => createPersonCard(person));
container.append(...cards);


