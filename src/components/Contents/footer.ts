import './footer.scss';

const Footer = {
  element: document.createElement("footer"),
  initialize: function() {
    this.element.classList.add("bna-footer");

    this.element.innerHTML = `
      <div class="bna-logo"></div>
      <section class="footer-contact">
        <p><i class="fa-solid fa-phone"></i> 전화번호 : 010-2833-3932</p>
        <p><i class="fa-solid fa-fax"></i> 팩스 : 0504-135-3932</p>
        <p><i class="fa-solid fa-location-dot"></i> 빛나사아트홀 주소 : 부산광역시 남구 천제등로 29, 지하 1층</p>
        <p><i class="fa-solid fa-building"></i> 다목적홀 주소 : 부산광역시 남구 수영로 196번길52</p>
        <p><i class="fa-solid fa-heart-circle-plus"></i> 후원계좌 : 국민은행 102701-04-408505 (사)빛을나누는사람들</p>
        <p><i class="fa-solid fa-globe"></i> 홈페이지 : www.bnapeople.org</p>
        <p><i class="fa-solid fa-envelope"></i> 이메일 : bnapeople@naver.com</p>
      </section>
      <p class="madeBy">Powered by hoonystory98</p>
    `;
  },
  getElement: function() {
    return this.element;
  }
};

Footer.initialize();
export default Footer;
