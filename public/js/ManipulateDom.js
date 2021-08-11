const cardsContainer = document.querySelector('.cards-container');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const SearchBtn = document.querySelector('#SearchBtn');

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

SearchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  cardsContainer.textContent = '';
  // eslint-disable-next-line no-undef
  getData(day.value, month.value);
});
