const createHeader = () => {
	
	let aproposActive = '';
	let contactActive = '';
	let nosCircuitActive = '';

	let header = document.querySelector('header');

	if(header.className == 'cc-headerapropos') aproposActive = 'active';
	else if(header.className == 'cc-headercontact') contactActive = 'active';
	else if(header.className == 'cc-headernoscircuits') nosCircuitActive = 'active';
	
	header.innerHTML = `
	<nav class="cc-navbar navbar position-fixed navbar-expand-md w-100" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="../index.html">
            <img src="../images/logo2.png" alt="Hello Maroc" class="logo">
          </a>
          <a class="navbar-brand text-uppercase mx-0 py-3 d-none d-lg-block fw-bolder fs-2" href="../index.html">Hello Maroc</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent1">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item pe-4">
                <a class="nav-link" aria-current="page" href="../index.html">Acceuil</a>
              </li>
              <li class="nav-item pe-4">
                <a class="nav-link ` + aproposActive +`" href="apropos.html">A propos</a>
              </li>
              <li class="nav-item dropdown pe-4">
                <a class="nav-link ` + nosCircuitActive +` dropdown-toggle" href="noscircuits.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nos circuits
                </a>
                <ul class="dropdown-menu cc-sousmenu">
                  <li><a class="dropdown-item" href="cardmerveilles.html">Merveilles du Sahara</a></li>
                  <li><a class="dropdown-item" href="cardcasablanca.html">Casablanca</a></li>
                  <li><a class="dropdown-item" href="cardouzoud.html">Cascades d'Ouzoud</a></li>
                  <li><a class="dropdown-item" href="cardmerzouga.html">Caravane de Merzouga</a></li>
                  <li><a class="dropdown-item" href="cardtoubkal.html">Toubkal en famille</a></li>
                  <li><a class="dropdown-item" href="cardessaouira.html">Charme d'Essaouira</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="noscircuits.html">Tous Circuits</a></li>
                </ul>
              </li>
              <li class="nav-item pe-4">
                <a class="nav-link ` + contactActive +`" href="contact.html">Nous contacter</a>
              </li>
            </ul>
          </div>
          <a id="cc-count-cart" class="nav-link cc-bg-cartshop text-center text-light" href="cart.html"></a>
        </div>
      </nav>`;
}

createHeader();