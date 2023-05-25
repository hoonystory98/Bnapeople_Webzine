import './styles/reset.scss';
import './styles/main.scss';
import './styles/editor.scss';
import MainTitle from './components/Title/mainTitle';
import addButton from './components/AddButton/addButton';
import Footer from './components/Contents/footer';
import html2canvas from 'html2canvas';

document.querySelector('#app')!.innerHTML = `
  <div class="main-header">
    <h1 id="main-title">빛을 나누는 사람들: Webzine 제작기</h1>
    <div class="main-btngroup">
      <button id="github-link"><i class="fa-brands fa-github"></i></ㅠ>    
      <button id="hide-button"><i class="fa-solid fa-eye"></i></button>
      <button id="change-image"><i class="fa-regular fa-image"></i></button>
      <button id="screen-shot"><i class="fa-solid fa-camera"></i></button>
    </div>
  </div>
  <hr class="TitleHr" />
  <section id="editor-section">
    <div id="editor-container">
      <div id="editor-background"></div>
    </div>
  </section>
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

const hideButton=document.querySelector("#hide-button");
const changeImage=document.querySelector("#change-image");
const screenShot=document.querySelector("#screen-shot");
const backGround:HTMLDivElement=document.querySelector("#editor-background");
const githubLink=document.querySelector("#github-link");

hideButton?.addEventListener("click",()=>{
  document.querySelector(".add-button")?.classList.toggle("hidden-group");
})

changeImage?.addEventListener("click",()=>{
  // 파일 선택을 위한 input 요소 생성
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  
  // 파일 선택 시 처리하는 이벤트 함수
  fileInput.addEventListener('change', (event) => {
    const fileList = (event.target as HTMLInputElement).files;
    
    // 선택된 파일이 없으면 종료
    if (!fileList || fileList.length === 0) {
      return;
    }
    
    const file = fileList[0];
    const reader = new FileReader();
    
    // 파일 로드 완료 시 처리하는 이벤트 함수
    reader.addEventListener('load', () => {
      // 로드된 이미지 URL을 박스의 배경 이미지로 설정
      backGround.style.backgroundImage = `url(${reader.result})`;
    });
    
    // 파일을 Data URL로 읽기
    reader.readAsDataURL(file);
  });
  
  // 파일 선택 대화상자 열기
  fileInput.click();
})

function captureScrollableElementAsImage(element:HTMLElement, fileName:string) {
  html2canvas(element, {scrollY: -window.scrollY})
    .then(function (canvas) {
      // 캔버스를 이미지 데이터 URL로 변환
      let dataURL = canvas.toDataURL("image/png");
      
      // a 태그를 생성하여 다운로드 링크로 사용
      let link = document.createElement('a');
      link.href = dataURL;
      link.download = fileName + ".png"; // 파일명 지정
      link.click();
    });
}

screenShot?.addEventListener("click",()=>{
  const targetForCapture=document.querySelector("#editor-container");
  const fileName="웹진캡쳐";
  if(targetForCapture){
    captureScrollableElementAsImage(targetForCapture,fileName);
  }
});

githubLink?.addEventListener("click",()=>{
  window.location.href="https://github.com/hoonystory98/Bnapeople_Webzine";
})