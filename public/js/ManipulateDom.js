const cardsContainer=document.querySelector('.cards-container')
const day=document.querySelector('#day')
const month=document.querySelector('#month')
const createElement = (tag, className, parentNode) => {
    const tagName = document.createElement(tag);
    tagName.classList.add(className);
    parentNode.appendChild(tagName);
    return tagName;
  };

  const createCards = (title,text,link) => {
    const card = createElement("div", "card", cardsContainer);
    const cardTitle=createElement('p','historyTitle',card)
    cardTitle.textContent=title
    const cardParagraph=createElement('p','historyText',card)
    cardParagraph.textContent=text
    const cardLink=createElement('a','historyLink',card)
    cardLink.href=link
    cardLink.textContent=`link : ${title}`
  
  };
 
