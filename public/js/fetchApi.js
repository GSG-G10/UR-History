/* eslint-disable max-len */
const today = new Date();
const cuurentDay = today.getDate();
const currentMonth = today.getMonth();

const displayData = (myData) => {
  for (let i = 0; i < 6; i += 1) {
    // eslint-disable-next-line no-undef
    createCards(myData.Events[i].links[0].title,
      myData.Events[i].text, myData.Events[i].links[0].link, myData.Events[i].year);
  }
};

// eslint-disable-next-line no-unused-vars
const getData = (month, day) => {
  fetch(`/getCard/${month}/${day}`)
    .then((res) => res.json())
    .then((data) => displayData(data))
    .catch((error) => error);
};
getData(currentMonth + 1, cuurentDay);
