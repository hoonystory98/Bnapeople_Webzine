import './contentC.scss';

const ContentC = {
  element: null,
  initialize: function() {
    this.element = document.createElement("section");
    this.element.classList.add("content-form-C");

    this.element.innerHTML = `
      <section class="content-body">
        <div class="content-text">
          내용입니다.
        </div>
      </section>
      
      <div class="button-group">
        <button class="modi-button">수정</button>
        <button class="font-button" data-font="'Gaegu', cursive">글꼴A</button>
        <button class="font-button" data-font="'Gamja Flower', cursive">글꼴B</button>
        <button class="font-button" data-font="'Hi Melody', cursive">글꼴C</button>
        <button class="font-button" data-font="'Nanum Brush Script', cursive">글꼴D</button>
        <button class="font-button" data-font="'Dokdo', cursive">글꼴E</button>
        <button class="delete-button">삭제</button>
      </div>`;

    const buttonGroup = this.element.querySelector(".button-group");
    const modifyButton = buttonGroup?.querySelector(".modi-button");
    const deleteButton = buttonGroup?.querySelector(".delete-button");
    let contentText = this.element.querySelector(".content-text");
    let contentInput: HTMLTextAreaElement;

    buttonGroup?.addEventListener("click",(e)=>{
        const targetButton = e.target.closest(".font-button");
        if(targetButton){
          contentText.style.fontFamily = targetButton.getAttribute("data-font");
        }
    })

    modifyButton?.addEventListener("click", (e)=>{
        if(modifyButton.textContent==="수정"){
            if(contentText){
                contentText.innerHTML=`<textarea class="text-input" rows=1 />`;
                contentInput = contentText?.querySelector(".text-input");
                contentInput?.addEventListener("input",()=>{
                    contentInput.style.height='auto';
                    contentInput.style.height=contentInput.scrollHeight + 'px';
                })
            }
            modifyButton.innerHTML="적용";
        }
        else{
            if(contentText){
                const afterText = this.element.querySelector(".text-input");
                const brAfterText: string = afterText?.value.trim().replace(/\n/g,"<br />");
                contentText.innerHTML=brAfterText;
                contentText=this.element.querySelector(".content-text");
            }
            modifyButton.innerHTML="수정";
        }
    })

    deleteButton?.addEventListener("click",(e)=>{
        this.element?.remove();
    })
  },
  getElement: function() {
    return this.element;
  }
};

ContentC.initialize();
export default ContentC;
