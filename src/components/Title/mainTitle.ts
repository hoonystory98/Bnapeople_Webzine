import './mainTitle.scss';

const MainTitle = {
  element: document.createElement("header"),
  initialize: function() {
    this.element.classList.add("bna-header");

    const todayDate = new Date();

    this.element.innerHTML = `
      <h1>빛을 나누는 사람들</h1>
      <h3>${todayDate.getMonth() < 1 ? 12 : todayDate.getMonth()}월호 웹진</h3>
    `;
  },
  getElement: function() {
    return this.element;
  }
};

MainTitle.initialize();
export default MainTitle;
