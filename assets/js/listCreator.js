const listContainer = document.getElementById("list-container");

function listAppender(mapDB) {
  listContainer.innerHTML = '';
  const selectedDb = [];
  for (const item of mapDB.entries()) {
    selectedDb.push (item);
  }
  
  const listItems = selectedDb.map((item) => listCreator(item));

  listContainer.append(...listItems);
}

function listCreator(item) {
  const listText = createElement(
    "p",
    {
      classNames: ["list-item-text"],
      onClick: null,
      attributes: {},
      datasets: {},
    },
    document.createTextNode(item[1])
  );

  const listBtn = createElement(
    "button",
    {
      classNames: ["list-item-btn"],
      onClick: null,
      attributes: {},
      datasets: {cardId: item[0]},
    },
    document.createTextNode("X")
  );
  listBtn.addEventListener("click", deselectBtnFunc);
  

  const listItem = createElement(
    "div",
    {
      classNames: ["list-item"],
      onClick: null,
      attributes: {},
      datasets: {},
    },
    listText,
    listBtn
  );

  return listItem;
}
