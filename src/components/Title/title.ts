import './title.scss';

const Title = {
  element: null as HTMLElement | null,
  initialize: function() {
    this.element = document.createElement("section");
    this.element.classList.add("title-form");

    this.element.innerHTML = `
      <div class="title-body">
        <h2 class="title-text">제목</h2>
      </div>
      <div class="button-group">
        <button class="modi-button">수정</button>
        <button class="font-button" data-font="'Black Han Sans', sans-serif">글꼴A</button>
        <button class="font-button" data-font="'Cute Font', cursive">글꼴B</button>
        <button class="font-button" data-font="'Dokdo', cursive">글꼴C</button>
        <button class="font-button" data-font="'Dongle', sans-serif">글꼴D</button>
        <button class="font-button" data-font="'East Sea Dokdo', cursive">글꼴E</button>
        <button class="delete-button">삭제</button>
      </div>`;

    const titleBody = this.element.querySelector(".title-body"); 
    const buttonGroup = this.element.querySelector(".button-group")
    const modifyButton = buttonGroup?.querySelector(".modi-button");
    const deleteButton = buttonGroup?.querySelector(".delete-button");
    let targetTitle = this.element.querySelector(".title-text") as HTMLElement;

    buttonGroup?.addEventListener("click",(e)=>{
        const targetButton = (e.target as Element)?.closest(".font-button");
        if(targetButton){
          targetTitle.style.fontFamily = targetButton.getAttribute("data-font") ?? "";
        }
    })

    modifyButton?.addEventListener("click", ()=>{
        if(modifyButton.textContent==="수정"){
            if(titleBody){
                titleBody.innerHTML=`<input type="text" class="title-input" placeholder="${targetTitle?.textContent}"/>`;
            }
            modifyButton.innerHTML="적용";
        }
        else{
            if(titleBody){
                const afterTitle = this.element?.querySelector(".title-input") as HTMLTextAreaElement;
                titleBody.innerHTML=`<h2 class="title-text">${(afterTitle?.value.length === 0)?(titleBody.querySelector(".title-input")?.getAttribute("placeholder")):(afterTitle?.value)}</h2>`;
                targetTitle=this.element?.querySelector(".title-text") as HTMLElement;
            }
            modifyButton.innerHTML="수정";
        }
    })

    deleteButton?.addEventListener("click",()=>{
        this.element?.remove();
    })
  },
  getElement: function() {
    return this.element;
  }
};

Title.initialize();
export default Title;
