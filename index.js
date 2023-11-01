(function readMore() {
  const readMoreElements = document.querySelectorAll("[data-easy-read-more-lines-to-show]");
  readMoreElements.forEach((element) => {
    const lines = parseInt(element.getAttribute("data-easy-read-more-lines-to-show"));
    const lineHeight = getLineHeight(element);
    const calculatedMaxHeight = `calc(${lineHeight.value} * ${lines}${lineHeight.units})`;
    setMaxHeight(element, calculatedMaxHeight);
    setWebkitLineClamp(element, lines);
    setOtherStyles(element, lines);
    const readMoreText = element.getAttribute("data-easy-read-more-button-text") || "Read More";
    const readLessText = element.getAttribute("data-easy-read-less-button-text") || "Read Less";
    const readMoreButton = createReadMoreButton(element, calculatedMaxHeight, lines, readMoreText, readLessText);
    element.parentNode.insertBefore(readMoreButton, element.nextSibling);
  });
})();

function setMaxHeight(element, calculatedMaxHeight) {
  element.style.maxHeight = calculatedMaxHeight;
}

function setWebkitLineClamp(element, webkitLineClamp) {
  element.style.webkitLineClamp = webkitLineClamp;
}

function setOtherStyles(element, lines) {
  element.style.overflow = "hidden";
  element.style.textOverflow = "ellipsis";
  element.style.webkitBoxOrient = "vertical";
  element.style.display = "-webkit-box";
}

function getLineHeight(element) {
  let lineHeight = parseInt(window.getComputedStyle(element).getPropertyValue("line-height"));
  let lineHeightUnits = window
    .getComputedStyle(element)
    .getPropertyValue("line-height")
    .match(/[a-zA-Z]+/)[0];
  if (isNaN(lineHeight)) {
    const tempElement = document.createElement("div");
    tempElement.innerHTML = "test";
    tempElement.style.fontSize = window.getComputedStyle(element).getPropertyValue("font-size");
    tempElement.style.lineHeight = window.getComputedStyle(element).getPropertyValue("line-height");
    document.body.appendChild(tempElement);
    lineHeight = tempElement.clientHeight;
    lineHeightUnits = window
      .getComputedStyle(tempElement)
      .getPropertyValue("line-height")
      .match(/[a-zA-Z]+/)[0];
    document.body.removeChild(tempElement);
  }
  return { value: lineHeight, units: lineHeightUnits };
}

function createReadMoreButton(element, calculatedMaxHeight, lines, readMoreText, readLessText) {
  const readMoreButton = document.createElement("button");
  readMoreButton.innerText = readMoreText;
  readMoreButton.classList.add("easyReadMoreButton");
  readMoreButton.addEventListener("click", () => {
    if (readMoreButton.innerText === readMoreText) {
      element.style.maxHeight = "unset";
      element.style.webkitLineClamp = `unset`;
      readMoreButton.innerText = readLessText;
    } else {
      element.style.maxHeight = calculatedMaxHeight;
      element.style.webkitLineClamp = lines;
      readMoreButton.innerText = readMoreText;
    }
  });
  return readMoreButton;
}
