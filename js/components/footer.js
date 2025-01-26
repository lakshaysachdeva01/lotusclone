function footerDesign() {
  const footerContainer = document.getElementById("footer-layout-container");
  const currentDate = new Date();
  const cuurentYear = currentDate.getFullYear();
  footerContainer.innerHTML = `
  <footer class="footer">
  <div class="top">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-30">
          <div class="sub-title border-footer-light whte">Contact Us!</div>
          <div class="footer-logo-wrapper">
          <a class="logo" href="index.html">
            <img src="img/logo-transparent.png" style="width: 100%;height: auto;object-fit: contain" alt="" />
          </a>
        </div>
        </div>
        <div class="col-md-4 offset-md-1">
          <div class="item">
            <h3>Get in touch</h3>
            <p>
            <a target="_blank" href="${WEBSITE_MAP_LINK}">
              ${WEBSITE_ADDRESS}
            </a>
            </p>
            <p class="phone">
            <a href="tel:${WEBSITE_MOBILE_NUMBER}">
           (+91) ${WEBSITE_MOBILE_NUMBER}
            </a>
            </p>
            <p class="mail">
            <a href="mailto:${WEBSITE_EMAIL}">
            ${WEBSITE_EMAIL}
            </a>
            </p>
            <div class="social mt-2">
              <a target="_blank" href="${WEBSITE_SOCIAL_LINKS.FACEBOOK}"><i class="ti-facebook"></i></a>
              <a target="_blank" href="${WEBSITE_SOCIAL_LINKS.INSTAGRAM}"><i class="ti-instagram"></i></a>
              <a target="_blank" href="${WEBSITE_SOCIAL_LINKS.LINKEDIN}"><i class="ti-linkedin"></i></a>
              <a target="_blank" href="${WEBSITE_SOCIAL_LINKS.PINTEREST}"><i class="ti-pinterest"></i></a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="item">
            <h3>Quick Links</h3>
            <ul class="footer-explore-list list-unstyled">
              <li><a href="blog.html">Blog</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="rooms.html">Rooms</a></li>
              <li><a href="wedding.html">Wedding</a></li>
              <li><a href="mice.html">Mice</a></li>
              <li><a href="career.html">Career</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <p>© ${cuurentYear} ${WEBSITE_NAME}. All right reserved.</p>
        </div>
        <div class="col-lg-8 col-md-6">
        <p class="right">
          Powered By
          <a href="https://www.technolitics.com" target="_blank" style="color:var(--primary)" onMouseOver="this.style.color='var(--primary)'">
          Technolitics
          </a>
        </p>
        </div>
      </div>
    </div>
  </div>
</footer>
  `;
}

footerDesign();
