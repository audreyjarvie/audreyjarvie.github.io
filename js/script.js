function showNav() {
	$('#topnav').html(









`
<ul>
			<li class="about"><a href="about.html">About</a></li>
			<li class="projects"><a href="#">Projects</a></li>
			<li class="fav"><a href="fav.html">Favorite Foods</a></li>
		</ul>
`
);
}

function addActiveClass() {

	if( $('body').class('.fav') ) {
		alert('favorite foods!');

	} else if() {

	} else {

	}
}



function initialize() {
	showNav();
}
$(initialize());