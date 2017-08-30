
$('#menu').mmenu({

	//оформление и стилизация меню.
	extensions: ['theme-dark',"shadow-page","listview-huge","pagedim-black","border-none"],

//стилизация title в меню. Можно вставить картинку через тег img  title: "<img src="../img/logo.svg">".
navbar:{
	title: "Меню"
},

//меняем поиск и результат поиска на русский язык.
searchfield:{
	placeholder: "Поиск по меню",
	noResults: "Ничего не найдено"
},


//Размещаем меню слева от контента. Это стандартное значение. Также можно "right", "bottom", "top". 
offCanvas: {
	position: "left", //Default
},

"setSelected": {
	"hover": true
},

//Добавляем в меню поиск и размещаем его сверху. Доступно значение "bottom".
"navbars":[{
	"position":"top",
	"content":["searchfield"]
},

//Добавляем ссылки на соц-сети и размещаем их снизу. Доступно значение "top". 
{
	"position":"bottom",
	"content":[
	"<a class='fa fa-instagram' href='#'></a>",
	"<a class='fa fa-vk' href='#'></a>",
	"<a class='fa fa-facebook' href='#'></a>",
	]
}
]

});

//Анимируем иконку меню с помощью API

	var API = $('#menu').data('mmenu');

	API.bind('open:finish', function() {
		$('.hamburger').addClass('hamburger--arrow is-active');
	}).bind('close:finish', function(){
		$('.hamburger').removeClass('hamburger--arrow is-active');
	});


//OWL.CAROUSEL

$('.rewiew').owlCarousel({
	  autoplay: true,
	  autoplayHoverPause:true,
	  autoplayTimeout:5000,
		loop: true,
    dots:true,
    items:1,
    autoHeight: true,
    animateOut: 'zoomOutDown',
    animateIn: 'zoomInDown',
})



$('.carousel-services').owlCarousel({
	loop: false,
	nav: true,
	navText: ['<i class="fa fa-angle-left"></i>' , '<i class="fa fa-angle-right"></i>'],
	smartSpeed: 500,
	dots: false,
	responsive: {
		0:{
			items:1
		},
		550:{
			items:2,
			nav: true
		},
		900:{
			items:3
		},
		1500:{
			items:4,
			nav: true
		}
	}

});

//Колонки одной высоты

$(".carousel-services-item").equalHeight({

});

//FOTORAMA

$('.fotorama').fotorama({
	width: "100%",
  thumbheight: 100,
  thumbwidth: 180,
  nav: "thumbs",
  allowfullscreen: "true",
  thumbborderwidth: 0,
});

//show button to top
$(window).scroll(function() {
	if($(this).scrollTop() > 1000){
		$(".top").addClass("active");
	}else{
		$(".top").removeClass("active");
	}
});


//scroll-page to top
$(".top").click(function(){
	$("body").stop().animate({scrollTop: 0}, "slow");
});

//preloader
$(window).load(function(){
	$('.preloader').delay(100).fadeOut('slow');
});

	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find(".success").addClass("active").css("display", "flex").hide().fadeIn();
			setTimeout(function() {
				$(th).find(".success").removeClass("active").fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

//Selectize

$("select").selectize({


});









