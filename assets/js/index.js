const container = document.getElementById("cards-container");

fetch('http://192.168.1.148:3000/users')
.then((res)=>res.json())
.then((data)=>pageAppender(data))


function pageAppender (data) {
  const filtredDB = data.filter(
    (person) =>
      person.firstName !== "" && person.lastName !== "" && person.id !== ""
  );
  
  const cards = filtredDB.map((person) => createPersonCard(person));
  container.append(...cards);
}




