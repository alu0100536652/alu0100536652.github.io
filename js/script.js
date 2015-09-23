$(document).ready(function() {
	sizes(); 
});

$(window).resize(function() {
  	sizes(); 
});

function sizes() {
    
    var windowsHeight = $(window).height(),
        home = $('.home'),
        fontSize = ($(window).height() * 0.11),
	    paddingSection = ($(window).height() * 0.3),
	    slogan = $('.slogan'),
	    subTitle = $('.subTitle');
	
        
    home.css({"height": windowsHeight});
    slogan.css({"padding-top":paddingSection});
	slogan.css({"font-size":fontSize});
	subTitle.css({"font-size":(fontSize * 0.5)});
	
	var introwork = $('.introwork'),
	    introworktitle = $('.introworktitle');
	
	introwork.css({"height": windowsHeight * 0.5});
	introworktitle.css({"padding-top":paddingSection * 0.5});
	introworktitle.css({"font-size":fontSize});
	    
	
	var about = $('.about');
	about.css({"height": windowsHeight * 0.6});
        
    
    $(window).scroll(function() {
		var mainmenu = $("header"),
			logo = $('.logo'),
			menu = $('nav a');

		if($(window).scrollTop() > ($(window).height() - 50)) 
	    {
	   		mainmenu.css({"background-color": "#FFF"});
	   		mainmenu.addClass("shadow");
	   		logo.css({"color": "#222"});
	   		menu.css({"color": "#222"});
	   		menu.hover(function() {
  				$(this).css("border-bottom-color","#222")
			});
		}
		else
		{ 
			mainmenu.css({"background-color": "transparent"});
		    mainmenu.removeClass("shadow");
			logo.css({"color": "#FFF"});
	   		menu.css({"color": "#FFF"});
	   		menu.hover(function() {
  				$(this).css("border-bottom-color","#FFF")
			});
		}
	});
};
