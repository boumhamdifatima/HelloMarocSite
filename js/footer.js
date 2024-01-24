const createFooter = () => {
	let footer = document.querySelector('.cc-footer');

	footer.innerHTML = `
<div class="container">
	<div class="row">
	  <div class="col-md-3 text-center">
		<a  href="../index.html">
		  <img src="../images/logo2.png" alt="Hello Maroc" class="logofooter">
		</a>
	  </div>
	  <div class="col-md-3">
		<h3 class="redressed py2 text-center">Général</h3>
		<nav class="nav flex-column text-center">
		  <a class="nav-link active" href="../index.html">Acceuil</a>
		  <a class="nav-link" href="apropos.html">A propos de nous</a>
		  <a class="nav-link" href="#">Termes & Services</a>
		  <a class="nav-link" href="#">Politique de confidentialité</a>
		</nav>
	  </div>
	  <div class="col-md-3">
		<h3 class="redressed py2 text-center">Nos Circuits</h3>
		<nav class="nav flex-column text-center">
		  <a class="nav-link" href="#">Imperial</a>
		  <a class="nav-link" href="#">Désert</a>
		  <a class="nav-link" href="#">Plages et littéraux</a>
		  <a class="nav-link" href="#">Trekking</a>
		  <a class="nav-link" href="#">Montagnes</a>
		  <a class="nav-link" href="#">Histoire</a>
		</nav>
	  </div>
	  <div class="col-md-3">
		<h3 class="redressed py2 text-center">Suivez-nous</h3>
		<nav class="nav flex-column text-center">
		  <a class="nav-link" href="#"><i class="fa-brands fa-square-facebook fa-2xl cc-icolor"></i></a>
		  <a class="nav-link" href="#"><i class="fa-brands fa-square-instagram fa-2xl cc-icolor"></i></a>
		  <a class="nav-link" href="#"><i class="fa-brands fa-square-twitter fa-2xl cc-icolor"></i></a>
		</nav>
	  </div>
	</div>
  </div>
  <div class="container-fluid">
	<div class="row py-4 bg-dark">
	  <p class="text-center fs-4 redressed text-light">Hello Maroc <i class="fa-regular fa-copyright fa-lg"></i> 2023</p>
	</div>
  </div>`

}

createFooter();