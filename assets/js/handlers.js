function handleImageError({ target }) {
  target.remove();
}

function handleImageLoad({
  target,
  target: {
    dataset: { id },
  },
}) {
  document.getElementById(`wrapper${id}`).append(target);
}

function cardHighlighter ({currentTarget: o}) {
  o.classList.add('card-highligter');
}

function cardHighlighterOff ({currentTarget: o}) {
  o.classList.remove('card-highligter');
}

const selectedDB = new Map ();

function cardSelector ({currentTarget: o}) {
  const {id} = o;
  const {children : {1 :{textContent : fullName}}} = o;
  if (o.dataset.isSelect) {
    o.classList.add('card-selector');
    o.dataset.isSelect = '';
    selectedDB.set (id,fullName);
    listAppender(selectedDB);

  } else {
    o.classList.remove('card-selector');
    o.dataset.isSelect = 1;
    selectedDB.delete (id,fullName);
    listAppender(selectedDB);
  }
}

function deselectBtnFunc ({currentTarget: o}) {
  const {dataset: {cardId}} = o;
  document.getElementById(cardId).dispatchEvent(new Event ('click'));
}

