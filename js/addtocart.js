window.onload = function()
{
	//localStorage.clear();

		
	/*ajouter au panier le formulaire de saisi des personnes benificiaires du produits*/
	//createCustomerLine();

	/*ajouter article au panier en cliquant sur le bouton acheter*/
	$('#cc-btn-merveilles').click(function(){
		addToLocalStorageCard('cc-card-merveilles');		
	});	
	$('#cc-btn-casablanca').click(function(){
		addToLocalStorageCard('cc-card-casablanca');		
	});
	$('#cc-btn-Ouzoud').click(function(){
		addToLocalStorageCard('cc-card-Ouzoud');		
	});
	$('#cc-btn-Merzouga').click(function(){
		addToLocalStorageCard('cc-card-Merzouga');		
	});
	$('#cc-btn-Toubkal').click(function(){
		addToLocalStorageCard('cc-card-Toubkal');		
	});
	$('#cc-btn-Essaouira').click(function(){
		addToLocalStorageCard('cc-card-Essaouira');		
	});

	/*----------------------------*/
	

}

function createCustomerLine(ident){
	alert(ident.slice(13));
	let servisElts = document.querySelector('#cc-servis-'+ident.slice(13));
	console.log(servisElts);
	//for(let j = 0; j < servisElts.length; j++){
		//servisElts[j].onchange = function(){
		//	createCustomerLineBis(servisElts[j].id.slice(10));
		//} 
		//let servisNbre = servisElts.value;
		let servisNbre = $('#cc-servis-'+ident.slice(13)).attr('defaultValue') ;
		$('#cc-servis-'+ident.slice(13)).on("input", function() {
			servisNbre = $(this).val(); 
		 });
		console.log('------'+servisNbre);
		//let sel = '#cc-serviform-'+servisElts[j].id.slice(10);
		let serviFormElt = document.querySelector('#'+ident);
		let strServiForme = `<td colspan="6" class="py-2">`;
		for(let i = 1; i <= servisNbre; i++){
			strServiForme += 	
					`<h5 class="text-start px-3 fw-bold">Personne no `+ i +`</h5>
					<div class="py-2 cc-servipers">							
					<input type="text" name="nom" id="nom-`+i+`" placeholder="Nom">
					<input type="text" name="prenom" id="prenom-`+i+`" placeholder="Prénom">
					<input type="text" name="passport" id="passport-`+i+`" placeholder="No Passport">
					</div>							
					<div>
						<label for="datenaiss-`+i+`">Date Naiss.</label>
						<input type="date" name="datenaiss" id="datenaiss-`+i+`">
						</div>							
					</div>`;
		}
		strServiForme += `</td>`;
		//serviFormElt.innerHTML = strServiForme;
		$('#'+ident).appendTo(strServiForme);
	//}
}



function createCustomerLineBis(n){
	let ident = 'cc-servis-'+ n;
	let servisElt = document.getElementById(ident);
	let servisNbre = servisElt.value;
	let idform = '#cc-serviform-'+ n;
	let serviFormElt = document.querySelector(idform);
	let strServiForme = `<td colspan="6" class="py-2">`;
	for(let i = 1; i <= servisNbre; i++){
		strServiForme += 	
				`<h5 class="text-start px-3 fw-bold">Personne no `+ i +`</h5>
				<div class="py-2 cc-servipers">							
				<input type="text" name="nom" id="nom-`+i+`" placeholder="Nom">
				<input type="text" name="prenom" id="prenom-`+i+`" placeholder="Prénom">
				<input type="text" name="passport" id="passport-`+i+`" placeholder="No Passport">
				</div>							
				<div>
					<label for="datenaiss-`+i+`">Date Naiss.</label>
					<input type="date" name="datenaiss" id="datenaiss-`+i+`">
					</div>							
				</div>`;
	}
	strServiForme += `</td>`;
	serviFormElt.innerHTML = strServiForme;
}

function addToLocalStorageCard(idCart){
	/*-----Vérifier si cette card est deja dans le panier avant de l'inserer*/
	if(cardNotExistePanier(idCart)){
		let imageSrcCard = $('#'+idCart+' a img').attr('src');
		let titleCard = $('#'+idCart+' h5').text();
		let prixCard = $('#'+idCart+' .cc-prix-card').text();
		
		var dataCard = {
			'Id' : idCart,
			'Image' : imageSrcCard,
			'Titre' : titleCard,
			'Quantite' : '1',
			'Prix'  : prixCard
		};
		console.log(dataCard);
		
		var allCardPanier = new Array();
		
		var existantLocalstor = localStorage['helloMaroc'];
		/*Verifier si article est deja au panier*/
		if ( existantLocalstor != null){
			allCardPanier = JSON.parse(existantLocalstor);
		}
		allCardPanier.push(dataCard);

		var JSONallCardPanier = JSON.stringify(allCardPanier);
		localStorage.setItem('helloMaroc',JSONallCardPanier);
		
		/*Mise a jour nombre d'article panier*/
		$('#cc-count-cart').text(allCardPanier.length);
				
	}else{
		alert('Circuit existe déja dans votre panier!!!')
	}
	

}
function cardNotExistePanier(idCart){
	
	var listCircuitExistants = localStorage['helloMaroc'];

	if ( listCircuitExistants != null){
		 var allCardPanier = JSON.parse(listCircuitExistants);
		 console.log('-------'+allCardPanier);
		 for(let i = 0; i < allCardPanier.length; i++){
			if(allCardPanier[i].Id == idCart){
				return false;
			}
		 }
	}
	console.log('true');
	return true;
}

function removeCardFromCart(idCart){
	if(confirm('Voulez-vous vraiment supprimer ce circuit?')){
		if (removeFromLocalStorageCard(idCart)){
			/*remove card from document*/
			console.log('avant suppression element du document');
			console.log('#'+idCart);
			console.log($('#'+idCart));
			$('#'+idCart).empty();
			$('#'+idCart).remove();
		}
		console.log('apre suppression du localstorage');
	}
	
}
function removeFromLocalStorageCard(idCart){
/*enlever l'element avec idCart du LocalStorage et décrémenter panier*/
	var listCircuitExistants = localStorage['helloMaroc'];
	console.log(listCircuitExistants);
	if ( listCircuitExistants != null){
		var allCardPanier = JSON.parse(listCircuitExistants);
		for(let i = 0; i < allCardPanier.length; i++){
			if(allCardPanier[i].Id == idCart){
				console.log(allCardPanier);
				allCardPanier.splice(i,1);
				console.log(allCardPanier);
				if(allCardPanier.length != 0){
					localStorage.setItem('helloMaroc',JSON.stringify(allCardPanier));		
					/*Mise a jour nombre d'article panier*/
					$('#cc-count-cart').text(allCardPanier.length);
							
				}else{
					localStorage.clear();
					/*Mise a jour nombre d'article panier*/
					$('#cc-count-cart').text('0');	
				}
				
				return true;
			}
		}
	}
	return false;
}

