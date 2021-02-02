function createContacts(person) {
  const { contacts } = person;
  return contacts.map((link) => {
    const hostLink = new URL(link).hostname;
    const socialNwLinkImg = createElement("img", {
      classNames: ["social-nw-link-img"],
    });

    const socialNwLink = createElement("a", {
      classNames: ["social-nw-link"],
      attributes: { href: link },
    });
    socialNwLink.target = "_blank";
    const {0: src, 1: alt} = SUPPORTES_SOC_NET.get(hostLink);
    socialNwLinkImg.setAttribute("src", src)
    socialNwLinkImg.setAttribute("alt", alt)
    socialNwLink.append(socialNwLinkImg);
    return socialNwLink;
  });
}