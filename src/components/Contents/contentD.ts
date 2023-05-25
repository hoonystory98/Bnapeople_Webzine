import './contentD.scss';

const ContentD = {
  element: document.createElement("section"),
  initialize: function() {
    this.element.classList.add("content-form-D");

    this.element.innerHTML = `
      <section class="content-body">
        <div class="content-image">
        </div>
      </section>
      
      <div class="button-group">
        <button class="upload-button">사진</button>
        <button class="delete-button">삭제</button>
      </div>`;

    const contentImage = this.element.querySelector(".content-image") as HTMLElement;
    const buttonGroup = this.element.querySelector(".button-group");
    const uploadButton = buttonGroup?.querySelector(".upload-button");
    const deleteButton = buttonGroup?.querySelector(".delete-button");

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

    deleteButton?.addEventListener("click",()=>{
        this.element?.remove();
    })
  },
  getElement: function() {
    return this.element;
  }
};

ContentD.initialize();
export default ContentD;
