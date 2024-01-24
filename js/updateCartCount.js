var countCart = recupererCountCart();

$('#cc-count-cart').text(countCart);

function recupererCountCart(){
	let nbreArticles = 0;
	
	
	if(localStorage.getItem('helloMaroc') != null){
		nbreArticles = JSON.parse(localStorage.getItem('helloMaroc')).length;
	}
	return nbreArticles;
}