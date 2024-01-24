const createContactForm = () => {
	let contactForm = document.querySelector('.contact-form');

	contactForm.innerHTML = `
	<div class="container">
        <h2 class="merriweather text-center text-light mb-4">Nous contacter pour plus de détails</h2>
        <form action="">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1"><i class="fas fa-user cc-icolor"></i></span>
                <input type="text" class="form-control" placeholder="Votre nom">
              </div>
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01"><i class="fa-solid fa-archway cc-icolor"></i></label>
                <select class="form-select" id="inputGroupSelect01">
                  <option selected>Choisir un circuit</option>
                  <option value="1">Merveilles du Sahara</option>
                  <option value="2">Casablanca</option>
                  <option value="3">Cascades d'Ouzoud</option>
                  <option value="4">La caravane de Merzouga</option>
                  <option value="5">Toubkal Atlas</option>
                  <option value="6">Charme d'Essaouira </option>
                </select>
              </div>
              <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect02"><i class="fa-solid fa-arrow-up-9-1 cc-icolor"></i></label>
                <select class="form-select" id="inputGroupSelect02">
                  <option selected>Nombre de personnes</option>
                  <option value="1">Une personne</option>
                  <option value="2">Une famille</option>
                  <option value="3">Un groupe</option>
                </select>
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="input-group mb-3">
                <input type="email" class="form-control" placeholder="Votre email">
                <span class="input-group-text" id="basic-addon1"><i class="fas fa-at cc-icolor"></i></span>
              </div>
              <div class="input-group mb-3">                
                <input type="tel" class="form-control" placeholder="Votre numero tel">
                <span class="input-group-text" id="basic-addon1"><i class="fas fa-phone cc-icolor"></i></span>
              </div>
              <div class="input-group mb-3">                
                <select class="form-select" id="inputGroupSelect02">
                  <option selected>Pays de résidence</option>
                  <option value="1">Maroc</option>
                  <option value="2">Canada</option>
                  <option value="3">Espagne</option>
                </select>
                <label class="input-group-text" for="inputGroupSelect02"><i class="fa-solid fa-location-dot cc-icolor"></i></label>
              </div>
            </div>
            <div class="col-md-6 col-sm"></div>
          </div>
          <div class="row">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">Préciser le nombre de personnes</span>
              <input type="text" class="form-control" placeholder="Exemple : 25">
            </div>
            <div class="input-group">
              <span class="input-group-text">Autres informations</span>
              <textarea class="form-control" aria-label="With textarea" rows="5"></textarea>
            </div>
          </div>
          <div class="row mt-5">
            <div class="card-body text-center">
              <input class="btn btn-primary btn-lg fs-4" type="submit" value="Envoyer">
            </div>  
          </div>
        </form>
      </div>`
}

createContactForm();