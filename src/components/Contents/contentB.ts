import './contentB.scss';

const ContentB = {
  element: null,
  initialize: function() {
    this.element = document.createElement("section");
    this.element.classList.add("content-form-B");

    this.element.innerHTML = `
      <section class="content-body">
        <div class="content-text">
          내용입니다.
        </div>
        <div class="content-image">
        </div>
      </section>
      
      <div class="button-group">
        <button class="upload-button">사진</button>
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
    const uploadButton = buttonGroup?.querySelector(".upload-button");
    const modifyButton = buttonGroup?.querySelector(".modi-button");
    const deleteButton = buttonGroup?.querySelector(".delete-button");
    let contentText = this.element.querySelector(".content-text");

    // buttonGroup?.addEventListener("click",(e)=>{
    //     const targetButton = e.target.closest(".font-button");
    //     if(targetButton){
    //       targetTitle.style.fontFamily = targetButton.getAttribute("data-font");
    //     }
    // })

    uploadButton?.addEventListener("click",()=>{
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
          contentImage.style.backgroundImage = `url(${reader.result})`;
        });
        
        // 파일을 Data URL로 읽기
        reader.readAsDataURL(file);
      });
      
      // 파일 선택 대화상자 열기
      fileInput.click();
    })

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

ContentB.initialize();
export default ContentB;
