import './styles/reset.scss';
import './styles/main.scss';
import './styles/editor.scss';
import MainTitle from './components/Title/mainTitle';
import addButton from './components/AddButton/addButton';
import Footer from './components/Contents/footer';

document.querySelector('#app')!.innerHTML = `
  <h1 id="main-title">빛을 나누는 사람들: Webzine 제작기</h1>
  <hr class="TitleHr" />
  <div id="editor-container">
  </div>
`;

const bnaTitle = Object.create(MainTitle);
bnaTitle.initialize();
document.querySelector("#editor-container")?.appendChild(bnaTitle.getElement());

const btnGroup = Object.create(addButton);
btnGroup.initialize();
document.querySelector("#editor-container")?.appendChild(btnGroup.getElement());

const bnaFooter = Object.create(Footer);
Footer.initialize();
document.querySelector("#editor-container")?.appendChild(bnaFooter.getElement());