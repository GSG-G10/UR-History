/* eslint-disable max-len */
const today = new Date();
const cuurentDay = today.getDate();
const currentMonth = today.getMonth();

const displayData = (myData) => {
  for (let i = 0; i < 6; i += 1) {
    // eslint-disable-next-line no-undef
    createCards(myData.data.Events[i].links[0].title, myData.data.Events[i].text, myData.data.Events[i].links[0].link, myData.data.Events[i].year);
  }
};

// eslint-disable-next-line no-unused-vars
const getData = (month, day) => {
  fetch(`/getCard/${month}/${day}`)
    .then((data) => data.json())
    .then((data) => displayData(data))
    .catch((error) => error);
};
getData(currentMonth + 1, cuurentDay);
