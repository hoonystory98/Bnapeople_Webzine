import './addButton.scss';
import Title from '../Title/title';
import ContentA from '../Contents/contentA';
import ContentB from '../Contents/contentB';
import ContentC from '../Contents/contentC';
import ContentD from '../Contents/contentD';

const addButton = {
  element: null,
  initialize: function() {
    this.element = document.createElement("section");
    this.element.classList.add("add-button");

    this.element.innerHTML = `
        <button id="add-title">제목 넣기</button>
        <button id="add-contentA">그림+글</button>
        <button id="add-contentB">글+그림</button>
        <button id="add-contentC">글</button>
        <button id="add-contentD">그림</button>
    `;

    const editorContainer=document.querySelector("#editor-container");
    const addTitle=this.element.querySelector("#add-title");
    const addContentA=this.element.querySelector("#add-contentA");
    const addContentB=this.element.querySelector("#add-contentB");
    const addContentC=this.element.querySelector("#add-contentC");
    const addContentD=this.element.querySelector("#add-contentD");

    addTitle?.addEventListener("click",()=>{
        const newTitle = Object.create(Title); // mainTitle 객체를 프로토타입으로 갖는 새로운 객체 생성
        newTitle.initialize(); // 새로운 객체 초기화
        editorContainer?.insertBefore(newTitle.element,this.element);
    });
    addContentA?.addEventListener("click",()=>{
        const newContent = Object.create(ContentA); // mainTitle 객체를 프로토타입으로 갖는 새로운 객체 생성
        newContent.initialize(); // 새로운 객체 초기화
        editorContainer?.insertBefore(newContent.element,this.element);
    });
    addContentB?.addEventListener("click",()=>{
        const newContent = Object.create(ContentB); // mainTitle 객체를 프로토타입으로 갖는 새로운 객체 생성
        newContent.initialize(); // 새로운 객체 초기화
        editorContainer?.insertBefore(newContent.element,this.element);
    });
    addContentC?.addEventListener("click",()=>{
        const newContent = Object.create(ContentC); // mainTitle 객체를 프로토타입으로 갖는 새로운 객체 생성
        newContent.initialize(); // 새로운 객체 초기화
        editorContainer?.insertBefore(newContent.element,this.element);
    });
    addContentD?.addEventListener("click",()=>{
        const newContent = Object.create(ContentD); // mainTitle 객체를 프로토타입으로 갖는 새로운 객체 생성
        newContent.initialize(); // 새로운 객체 초기화
        editorContainer?.insertBefore(newContent.element,this.element);
    });
  },

  getElement: function() {
    return this.element;
  }
};

addButton.initialize();
export default addButton;
