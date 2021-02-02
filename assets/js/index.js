const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque nisi culpa, autem nemo nobis deleniti eos veritatis error itaque expedita facilis eligendi, at quasi architecto natus cupiditate facere rerum magni!";
const container = document.getElementById("cards-container");

const filtredDB = db.filter(
  (person) =>
    person.firstName !== "" && person.lastName !== "" && person.id !== ""
);

const cards = filtredDB.map((person) => createPersonCard(person));
container.append(...cards);

function createElement(
  type = "div",
  { classNames = [], onClick = null, attributes = {}, datasets = {} } = {},
  ...children
) {
  const elem = document.createElement(type);

  elem.classList.add(...classNames);
  for (const [attrName, attrValue] of Object.entries(attributes)) {
    elem.setAttribute(attrName, attrValue);
  }
  for (const [dsName, dsNameValue] of Object.entries(datasets)) {
    elem.dataset[dsName] = dsNameValue;
  }
  elem.onclick = onClick;
  elem.append(...children);
  return elem;
}

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
    attributes: {},
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
      attributes: {},
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
      attributes: {},
      datasets: {},
    },
    imageContainer,
    cardName,
    cardText,
    socialNwLinkContainer
  );

  return elem;
}

function createContacts(person) {
  const contacts = person.contacts;
  const contactsElem = contacts.map((link) => {
    const hostLink = new URL(link).hostname;
    const socialNwLinkImg = createElement("img", {
      classNames: ["social-nw-link-img"],
      onClick: null,
      attributes: {},
      datasets: {},
    });

    const socialNwLink = createElement("a", {
      classNames: ["social-nw-link"],
      onClick: null,
      attributes: { href: link},
      datasets: {},
    });
    socialNwLink.target="_blank"
    switch (hostLink) {
      case "www.facebook.com":
        socialNwLinkImg.setAttribute("alt", "Facebook icon");
        socialNwLinkImg.setAttribute("src", "./assets/icons/facebook.svg");
        break;
      case "twitter.com":
        socialNwLinkImg.setAttribute("alt", "Twitter icon");
        socialNwLinkImg.setAttribute("src", "./assets/icons/twitter.svg");
        break;
      case "www.instagram.com":
        socialNwLinkImg.setAttribute("alt", "Instagram icon");
        socialNwLinkImg.setAttribute("src", "./assets/icons/instagram.svg");
        break;
    }
    socialNwLink.append(socialNwLinkImg);
    return socialNwLink;
  });
  return contactsElem;
}

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

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
}
