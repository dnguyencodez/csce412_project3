$(document).ready(function() {
	// pagination for index.html
	$('#slides').superslides({
		animation: 'fade',
		play: 4000,
		pagination: false
	});
	// calls the 'typed' code that takes in two parameters: 
	// selector of the element (how the code knows what to use)
	// and the options which edits/adjusts the animations of the text
	var typed = new Typed(".typed", {
		// creates an array of strings
		strings: ["Texas AM University.", "Computer Science."],
		typeSpeed: 80, // how fast the letters type out in milliseconds
		loop: true, // loops through the different strings so it doesn't get stuck at the last one
		startDelay: 1000, // starts typing after 1000 ms or 1 second
		showCursor: false
	});

	//============================================================//
	// animations for portfolio page

	$('.owl-carousel').owlCarousel({
	    loop:true, // get rid of margins and nav
	    items: 4, // changes number of items
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

	//=============================//
	// pagination for portfolio.html

	

	// ----------------------//
	// for homepage chart
	$('.chart').easyPieChart({
        //your options goes here
        // all these options are explained on github
        easing: 'easeInOut', //smooth transitions
        barColor: '#fff', // white bar color
        trackColor: false, // the pie chart doesn't fill in what is remaining
        scaleColor: false, // we don't want those lines or marks on the pie chart
        lineWidth: 5, // width of the line
        size: 152, // this is what we set the height and width to in the canvas
        onStep: function(from, to, percent) {
        	$(this.el).find('.percent').text(Math.round(percent)); // find the current element, and set value to percent
        }
    });

    //=============================//
	// pagination for qualifications.html
	$('#slides2').superslides({
		animation: 'fade',
		play: 6000,
		pagination: false
	});
	// calls the 'typed' code that takes in two parameters: 
	// selector of the element (how the code knows what to use)
	// and the options which edits/adjusts the animations of the text
	var typed = new Typed(".typed2", {
		// creates an array of strings
		strings: ["Texas AM University.", "Computer Science."],
		typeSpeed: 80, // how fast the letters type out in milliseconds
		loop: true, // loops through the different strings so it doesn't get stuck at the last one
		startDelay: 1000, // starts typing after 1000 ms or 1 second
		showCursor: false
	});

	$('.owl-carousel2').owlCarousel({
	    loop:true, // get rid of margins and nav
	    items: 4, // changes number of items
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});

});

