import './contentA.scss';

const ContentA = {
  element: null,
  initialize: function() {
    this.element = document.createElement("section");
    this.element.classList.add("content-form-A");

    this.element.innerHTML = `
      <section class="content-body">
        <div class="content-image">
        </div>
        <div class="content-text">
          내용입니다.
        </div>
      </section>
      
      <div class="button-group">
        <button class="modi-button">수정</button>
        <button class="font-button" data-font="'Black Han Sans', sans-serif">글꼴A</button>
        <button class="font-button" data-font="'Cute Font', cursive">글꼴B</button>
        <button class="font-button" data-font="'Dokdo', cursive">글꼴C</button>
        <button class="font-button" data-font="'Dongle', sans-serif">글꼴D</button>
        <button class="font-button" data-font="'East Sea Dokdo', cursive">글꼴E</button>
        <button class="delete-button">삭제</button>
      </div>`;

    const contentImage = this.element.querySelector(".content-image");
    const buttonGroup = this.element.querySelector(".button-group");
    const modifyButton = buttonGroup?.querySelector(".modi-button");
    const deleteButton = buttonGroup?.querySelector(".delete-button");
    let contentText = this.element.querySelector(".content-text");

    // buttonGroup?.addEventListener("click",(e)=>{
    //     const targetButton = e.target.closest(".font-button");
    //     if(targetButton){
    //       targetTitle.style.fontFamily = targetButton.getAttribute("data-font");
    //     }
    // })

    modifyButton?.addEventListener("click", (e)=>{
        if(modifyButton.textContent==="수정"){
            if(contentText){
                contentText.innerHTML=`<textarea class="text-input" />`;
            }
            modifyButton.innerHTML="적용";
        }
        else{
            if(contentText){
                const afterText = this.element.querySelector(".text-input");
                contentText.innerHTML=afterText?.value;
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

ContentA.initialize();
export default ContentA;
