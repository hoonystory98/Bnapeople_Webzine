import './footer.scss';

const Footer = {
  element: null,
  initialize: function() {
    this.element = document.createElement("footer");
    this.element.classList.add("bna-footer");

    this.element.innerHTML = `
      <div class="bna-logo"></div>
      <section class="footer-contact">
        <p><i class="fa-solid fa-phone"></i> 전화번호 : 010-2833-3932</p>
        <p><i class="fa-solid fa-location-dot"></i> 주소 : 부산광역시 남구 천제등로 29, 지하 1층</p>
        <p><i class="fa-solid fa-globe"></i> 홈페이지 : www.bnapeople.org</p>
        <p><i class="fa-solid fa-envelope"></i> 이메일 : bnapeople@naver.com</p>
      </section>
    `;
  },
  getElement: function() {
    return this.element;
  }
};

Footer.initialize();
export default Footer;
