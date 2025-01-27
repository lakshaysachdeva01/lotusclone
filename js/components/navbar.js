function navbarDesign() {
  const navbarContainer = document.getElementById("navbar-layout-container");
  navbarContainer.innerHTML = `   
  <nav class="navbar navbar-expand-lg">
      <div class="container">
        <!-- Logo -->
        <div class="logo-wrapper">
         <a class="logo" href="index.html">
  <img src="img/logo-transparent.png" class="logo-img" alt="Lotus resorts Logo" />
</a>

        </div>
        <!-- Button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"><i class="ti-menu"></i></span>
        </button>
        <!-- Menu -->
        <div class="collapse navbar-collapse" id="navbar">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.html#about-home-container">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/rooms.html">Rooms</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/wedding.html">Wedding</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/mice.html">Mice</a>
            </li>
             <li class="nav-item dropdown nav-link dropdown-toggle" style="cursor:pointer;">
             Gallery <i class="ti-angle-down"></i>
              <ul class="dropdown-menu">
                <li>
                  <a href="/gallery-image.html" class="dropdown-item"
                    ><span>Image Gallery</span></a
                  >
                </li>
                <li>
                  <a href="/gallery-video.html" class="dropdown-item"
                    ><span>Video Gallery</span></a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/blog.html">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact.html">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
`;
}

navbarDesign();
