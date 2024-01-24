window.onload = function()
{
	const idproducts = ['merveilles','casablanca','Ouzoud','Merzouga','Toubkal','Essaouira'];
	/*Chargement des articles dans le panier */
	chargerCartBySelectedArticles();
	
	/*mise a jour du sous total avec la somme de tous les totals card*/
	/*mise a jour taxes et total panier avec la somme du sous total et taxes*/
	calculerHTTaxesTTC();
	for(let i = 0; i < idproducts.length; i++){
		
		/*input type number has min = 1 et max = 10*/
		jQuery('#button-plus-'+idproducts[i]).click(function(){
			var currentval = parseInt(jQuery(this).prev().val(), 10);
			if (!isNaN(currentval)  && currentval < 10) {
				jQuery(this).prev().val(currentval + 1);
				//ajouter personne a la fin
				ajouterLigneFin(idproducts[i]);
				updateTotalPriceByCard(idproducts[i]);
			}else {
				jQuery(this).prev().val(10);
			}
		});
		
		/*input type number has min = 1 et max = 10*/
		jQuery('#button-minus-'+idproducts[i]).click(function(){
			var currentval = parseInt(jQuery(this).next().val(), 10);
			if (!isNaN(currentval) && currentval > 1) {
				jQuery(this).next().val(currentval - 1);
				//supprimer la derniere personne
				supprimerLigneFin(idproducts[i]);
				updateTotalPriceByCard(idproducts[i]);
			}else {
				jQuery(this).next().val(1);
			}
		});
		/*Ajouter les évenement de suppression des article suite a un click*/
		jQuery('#cc-remove-'+idproducts[i]).click(function(){
			removeCardFromCart('cc-card-'+idproducts[i]);
			updateTotalPriceByCard();
		});
		
	}			
	
}


function chargerCartBySelectedArticles(){
	
	var listCircuitExistants = localStorage['helloMaroc'];

	if ( listCircuitExistants != null){
		 var allCardPanier = JSON.parse(listCircuitExistants);
		 console.log(allCardPanier);
		 for(let i = 0; i < allCardPanier.length; i++){
			console.log(allCardPanier[i]);
			chargerUnArticle(allCardPanier[i]);
		 }
	}else{
		/*Afficher message panier vide */

	}
	
	
}
function chargerUnArticle(article){
	let cardId = article['Id'].slice(8);
	let strCardHtml =`
			<tr>
				<td>
					<a href="#" id="cc-remove-`+cardId+`"><i class="fa-solid fa-trash-can fa-lg cc-icolor"
						></i></a>
				</td>
				<td>
					<img src="`+article['Image']+`" alt="bijoux" >
				</td>
				<td>
					<h5>`+article['Titre']+`</h5>
				</td>
				<td>
					<h5 id="cc-prix-`+cardId+`">`+article['Prix']+`$</h5>
				</td>
				<td>
				<input type="button" value="-" id="button-minus-`+cardId+`" data-field="quantity">
				<input  id="cc-input-`+cardId+`" class="cc-servis w-25 pl-1" value="1" type="number" min="1" max="10" >
				<input type="button" value="+" id="button-plus-`+cardId+`" data-field="quantity">
				
				</td>
				<td>
					<h5 id="cc-prix-total-card-`+cardId+`" class="cc-prix-total-card">`+article['Prix']+`$</h5>
				</td>
			</tr>
			<tr>
				<td colspan="6" " class="py-3 cc-list-pers"><p> Liste des personnes bénificiants du circuit </p></td>
			</tr>
			<tr id="cc-pers-`+cardId+`-1" class="cc-serviform">
				<td colspan="6" " class="py-2">
					
					<div class="py-2 cc-servipers">							
					<input type="text" name="nom" id="nom-1" placeholder="Nom">
					<input type="text" name="prenom" id="prenom-1" placeholder="Prénom">
					<input type="text" name="passport" id="passport-1" placeholder="No Passport">
					
						<label for="datenaiss-1">Date Naiss.</label>
						<input type="date" name="datenaiss" id="datenaiss-1">							
					</div>
				</td>
			</tr>
			<tr id="cc-pers-`+cardId+`-2" class="cc-serviform"></tr>
			<tr id="cc-pers-`+cardId+`-3" class="cc-serviform"></tr>
			<tr id="cc-pers-`+cardId+`-4" class="cc-serviform"></tr>
			<tr id="cc-pers-`+cardId+`-5" class="cc-serviform"></tr>
			<tr id="cc-pers-`+cardId+`-6" class="cc-serviform"></tr>
			<tr id="cc-pers-`+cardId+`-7" class="cc-serviform"></tr>
			<tr id="cc-pers-`+cardId+`-8" class="cc-serviform"></tr>
			<tr id="cc-pers-`+cardId+`-9" class="cc-serviform"></tr>
			<tr id="cc-pers-`+cardId+`-10" class="cc-serviform"></tr>`;
	/*$('#'+article['Id']).appendTo(strCardHtml);*/
	
	let tbodyElt = document.querySelector('#'+article['Id']);
	//console.log(tbodyElt);
	tbodyElt.innerHTML = strCardHtml;
	
}

function ajouterLigneFin(ident){
	//alert('-----tt'+$('#cc-input-'+ident).val());
	let eltInputNumber = $('#cc-input-'+ident).val();
	console.log('no de ligne a ajouter : '+eltInputNumber);
	//alert('#cc-pers-'+ident+'-'+eltInputNumber);
	console.log($('#cc-pers-'+ident+'-'+eltInputNumber));
	/*Le nombre de lignes existants est eltInputNumber-1 */
	
	strLigne = `<td colspan="6" class="py-2 cc-servipers-line">
					
					<div class="py-2 cc-servipers">							
					<input type="text" name="nom" id="nom-`+eltInputNumber+`" placeholder="Nom">
					<input type="text" name="prenom" id="prenom-`+eltInputNumber+`" placeholder="Prénom">
					<input type="text" name="passport" id="passport-`+eltInputNumber+`" placeholder="No Passport">
					
						<label for="datenaiss-`+eltInputNumber+`">Date Naiss.</label>
						<input type="date" name="datenaiss" id="datenaiss-`+eltInputNumber+`">							
					</div>
				</td>`;
	$('#cc-pers-'+ident+'-'+eltInputNumber).append(strLigne);
}

function supprimerLigneFin(ident){
	//alert('-----tt'+$('#cc-input-'+ident).val());
	let eltInputNumber = 1 + Number($('#cc-input-'+ident).val());
	console.log('no de ligne a suprimer : '+eltInputNumber);
	//alert('#cc-pers-'+ident+'-'+eltInputNumber);
	console.log($('#cc-pers-'+ident+'-'+eltInputNumber));
	/*Le nombre de lignes existants est eltInputNumber-1 */
	
	$('#cc-pers-'+ident+'-'+eltInputNumber).empty();
}

function updateTotalPriceByCard(ident){
	let quantite = parseInt($('#cc-input-'+ident).val());
	console.log($('#cc-prix-'+ident));
	console.log($('#cc-prix-'+ident).text());
	let prixunit = parseFloat($('#cc-prix-'+ident).text().slice(0,-1));
	//mise a jour du prix total du produit : quantite * prix unitaire
	let totalC = quantite*prixunit ;
	$('#cc-prix-total-card-'+ident).text(totalC+'$');

	//mise a jour du sous total avec la somme de tous les totals card
	//mise a jour taxes et total panier avec la somme du sous total et taxes
	calculerHTTaxesTTC();

}
function calculerHTTaxesTTC(){
	//mise a jour du sous total avec la somme de tous les totals card
	let cprix = 0;
	$('.cc-prix-total-card').each(function(i){
        cprix += parseFloat($(this).text().slice(0,-1)); 
    
    });
	$('#cc-sous-total').text(cprix+'$');

	//mise a jour taxes et total panier avec la somme du sous total et taxes
	calculerTaxeEtTotal();

}
function calculerTaxeEtTotal(){
	let tauxTps = 5;		// 5%
	let tauxTvq = 9.75;		// 9.975%
	//Conversion de la valeur saisi en nombre
	let amountHT = parseFloat($('#cc-sous-total').text().slice(0,-1));
	//Calcul montant Tps avec un arrondi a 2 chiffre apres virgule
	let amountTps = Math.round((amountHT*tauxTps/100)*100)/100;
	//Calcul montant Tvq avec un arrondi a 2 chiffre apres virgule
	let amountTvq = Math.round((amountHT*tauxTvq/100)*100)/100;
	//Calcul montant taxes
	let amountTaxes = amountTps + amountTvq;
	//Calcul montant TTC
	let amountTTC = amountHT + amountTaxes;

	$('#cc-taxes').text(amountTaxes+'$');
	$('#cc-total-prix').text(amountTTC+'$');
}


function removeCardFromCart(idCart){
	console.log('----'+idCart);
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

