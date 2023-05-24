import './styles/reset.scss';
import './styles/main.scss';
import './styles/editor.scss';
import Title from './components/Title/title';
import ContentA from './components/Contents/contentA';

const todayMonth = new Date();

document.querySelector('#app')!.innerHTML = `
  <h1 id="main-title">빛을 나누는 사람들: ${todayMonth.getMonth() + 1}월 Webzine</h1>
  <hr class="TitleHr" />
  <div id="editor-container">
    <button id="sampleButton">Click me!</button>
    <button id="sampleButton2">Click me!</button>
  </div>
`;

document.querySelector("#sampleButton")?.addEventListener("click", () => {
  const newTitle = Object.create(Title); // mainTitle 객체를 프로토타입으로 갖는 새로운 객체 생성

  newTitle.initialize(); // 새로운 객체 초기화

  document.querySelector("#editor-container")?.appendChild(newTitle.getElement());
});

document.querySelector("#sampleButton2")?.addEventListener("click", () => {
  const newContent = Object.create(ContentA); // mainTitle 객체를 프로토타입으로 갖는 새로운 객체 생성

  newContent.initialize(); // 새로운 객체 초기화

  document.querySelector("#editor-container")?.appendChild(newContent.getElement());
});