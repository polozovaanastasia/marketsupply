$(document).ready(function(){

	$('.header-top-nav-toggle').click(function(){
		$('.header-top-nav-toggle span').toggleClass('toggle-active');
		$('.header-top-nav').toggleClass('nav-active');
	});

	$(window.innerWidth < 992).ready(function(){
		$('.sidebar-header p').click(function(){
		$('.menu-market').toggle();
		});
	});

	$(window.innerWidth < 560).ready(function(){
		$('.search-btn').click(function(){
		$('.search').toggleClass('search-visible');
		});
	});
});