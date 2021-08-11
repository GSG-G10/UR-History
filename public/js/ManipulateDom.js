const cardsContainer = document.querySelector('.cards-container');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const searchBtn = document.querySelector('#SearchBtn');

const createElement = (tag, className, parentNode) => {
  const tagName = document.createElement(tag);
  tagName.classList.add(className);
  parentNode.appendChild(tagName);
  return tagName;
};

// eslint-disable-next-line no-unused-vars
const createCards = (title, text, link, year) => {
  const card = createElement('div', 'card', cardsContainer);
  const cardTitle = createElement('p', 'historyTitle', card);
  cardTitle.textContent = `${title}  ${year}`;
  const cardParagraph = createElement('p', 'historyText', card);
  cardParagraph.textContent = text;
  const cardLink = createElement('a', 'historyLink', card);
  cardLink.href = link;
  cardLink.textContent = `link : ${title}`;
};

searchBtn.addEventListener('click', () => {
  if (day.value <= 31 && day.value > 0) {
    if (month.value > 0 && month.value <= 12) {
      cardsContainer.textContent = '';
      // eslint-disable-next-line no-undef
      getData(month.value, day.value);
    } else {
      cardsContainer.textContent = '';
      // eslint-disable-next-line no-alert
      alert('Enter a valid month');
    }
  } else {
    // eslint-disable-next-line no-alert
    alert('Enter a valid day');
    cardsContainer.textContent = '';
  }
});
