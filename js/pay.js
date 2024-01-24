


	// Valider le formulaire de paiement
	document.getElementById('paymentForm').addEventListener('submit', function (event) {
		event.preventDefault();

		// Verifier que les champs sont remplis
		var form = event.target;
		if (form.checkValidity() === false) {
			event.stopPropagation();
			form.classList.add('was-validated');
			return;
		}

		// Afficher le message de confirmation du paiement
		$('#successModal').modal('show');
		localStorage.clear();
	});

	// Fermer la fenetre de paiement
	$('#successModal').on('hidden.bs.modal', function () {
		var form = document.getElementById('paymentForm');
		form.classList.remove('was-validated');
		form.reset();
	});

	//Passer le montant a payer sur le formulaire de paiement
	$('#cc-passer-caisse').click(function(){
			$('#money').text($('#cc-total-prix').text());
	});



		
                                                                         