function createPersonCard(person) {
  const cardImage = createElement("img", {
    classNames: ["card-image"],
    onClick: null,
    attributes: {
      alt: `${person.firstName} ${person.lastName}`,
      src: person.profilePicture,
    },
    datasets: {
      id: person.id,
    },
  });
  cardImage.addEventListener("error", handleImageError);
  cardImage.addEventListener("load", handleImageLoad);

  const imageContainerText = createElement("p", {
    classNames: ["image-container-text"],
    onClick: null,
    attributes: { id: person.id },
    datasets: {},
  });
  imageContainerText.append(
    document.createTextNode(`${person.firstName[0]}${person.lastName[0]}`)
  );

  const imageContainer = createElement(
    "div",
    {
      classNames: ["image-container"],
      onClick: null,
      attributes: { id: `${person.id}` },
      datasets: {
        id: person.id,
        fullName: `${person.firstName} ${person.lastName}`,
      },
    },
    cardImage,
    imageContainerText
  );

  imageContainer.style.backgroundColor = stringToColour(
    imageContainer.dataset.fullName
  );

  const cardName = createElement(
    "h1",
    {
      classNames: ["card-name"],
      onClick: null,
      attributes: {},
      datasets: {},
    },
    document.createTextNode(`${person.firstName} ${person.lastName}`)
  );

  const cardText = createElement(
    "p",
    {
      classNames: ["card-text"],
      onClick: null,
      attributes: {},
      datasets: {},
    },
    document.createTextNode(lorem)
  );

  const socialNwLinkContainer = createElement(
    "div",
    {
      classNames: ["social-nw-links"],
      onClick: null,
      attributes: {},
      datasets: {},
    },
    ...createContacts(person)
  );

  const elem = createElement(
    "div",
    {
      classNames: ["card-container"],
      onClick: null,
      attributes: {id: `card${person.id}`},
      datasets: {isSelect: 1},
    },
    imageContainer,
    cardName,
    cardText,
    socialNwLinkContainer
  );
  elem.addEventListener('mouseenter', cardHighlighter);
  elem.addEventListener('mouseleave', cardHighlighterOff);
  elem.addEventListener('click', cardSelector);
  

  return elem;
}