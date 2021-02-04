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
  if (o.dataset.isSelect) {
    o.classList.add('card-selector');
    o.dataset.isSelect = '';
    selectedDB.set (o.children[1].textContent,o);

  } else {
    o.classList.remove('card-selector');
    o.dataset.isSelect = 1;
    selectedDB.delete (o.children[1].textContent,o);
  }
}

