export function createElement(tag, className, text, src) {
  const element = document.createElement(tag);
  element.className = className;
  element.innerText = text;
  element.src = src;

  return element;
}
