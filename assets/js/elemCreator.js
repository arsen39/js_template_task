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