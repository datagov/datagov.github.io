// Initiallisations for DOM
$("body>#slideshow").css("height",($("#slideshow").width())*0.1875);
$("body>#slideshow>.item:first").show();
$("body>#slideshow>#slideshowcontrols>ul>li:first").css("background-color", "#85BE00");
$("body>#maincontent>.pagepanes>.pageblocks>#block1content>div").css("height",($("body>#maincontent>.pagepanes>.pageblocks>.blockcontent>.block3tiles").width()*0.78));
$("body>#maincontent>.pagepanes>.pageblocks>#block9content>div").css("height",($("body>#maincontent>.pagepanes>.pageblocks>.blockcontent>.block3tiles").width()));

// Responsiveness
$(window).resize(function() {
	$("body>#slideshow").css("height",($("#slideshow").width())*0.1875);
	$("body>#maincontent>.pagepanes>.pageblocks>#block1content>div").css("height",($("body>#maincontent>.pagepanes>.pageblocks>.blockcontent>.block3tiles").width()*0.78));
	$("body>#maincontent>.pagepanes>.pageblocks>#block9content>div").css("height",($("body>#maincontent>.pagepanes>.pageblocks>.blockcontent>.block3tiles").width()));
});

// After loading DOM
$(document).ready(function() {

	// Slideshow stuffs.........................
	// variables
	var activeindex = 1;
	var slideshowid;
	var slideshowswitch;
	var buttoncontrolled=0;

	// functions
	function stopslideshow() {
		if(slideshowswitch!=0) {
			$("body > #slideshow > #slideshowcontrols > #pause").hide();
			$("body > #slideshow > #slideshowcontrols > #play").show();
			clearInterval(slideshowid);
		}
		slideshowswitch = 0;
	}
	function startslideshow() {
		if(slideshowswitch!=1) {
			$("body > #slideshow > #slideshowcontrols > #play").hide();
			$("body > #slideshow > #slideshowcontrols > #pause").show();
			slideshowid = setInterval(function(){slideshowfn()},3000);
		}
		slideshowswitch = 1;
	}
	function slideshowfn() {
		if(activeindex==5) {
			$("body>#slideshow>.item:nth-child(5)").hide();
			$("body>#slideshow>#slideshowcontrols>ul>li:nth-child(5)").css("background-color", "#FFFFFF");
			$("body>#slideshow>.item:nth-child(1)").fadeIn(400);
			$("body>#slideshow>#slideshowcontrols>ul>li:nth-child(1)").css("background-color", "#85BE00");
			activeindex=1;
		}
		else {
			$("body>#slideshow>.item:nth-child("+activeindex+")").hide();
			$("body>#slideshow>#slideshowcontrols>ul>li:nth-child("+activeindex+")").css("background-color", "#FFFFFF");
			activeindex+=1;
			$("body>#slideshow>.item:nth-child("+activeindex+")").fadeIn(400);
			$("body>#slideshow>#slideshowcontrols>ul>li:nth-child("+activeindex+")").css("background-color", "#85BE00");
		}
	}


	// Slideshow Main();
	startslideshow();

	// mouseenter/mouseleave
	$("body>#slideshow").mouseenter(function(){
		if(buttoncontrolled!=1) {
			stopslideshow();
		}
	});
	$("body>#slideshow").mouseleave(function(){
		if(buttoncontrolled!=1) {
			startslideshow();
		}
	});

	// play/pause button
	$("body>#slideshow>#slideshowcontrols>#play").click(function(){
		buttoncontrolled=1;
		startslideshow();
	});
	$("body>#slideshow>#slideshowcontrols>#pause").click(function(){
		buttoncontrolled=1;
		stopslideshow();
	});

	// dot controls
	$("body>#slideshow>#slideshowcontrols>ul>li").mouseenter(function(){
		$(this).css("background-color", "#85BE00");
	});
	$("body>#slideshow>#slideshowcontrols>ul>li").mouseleave(function(){
		if(activeindex != ($("body>#slideshow>#slideshowcontrols>ul>li").index(this)+1)) {
			$(this).css("background-color", "#FFFFFF");
		}
	});
	$("body>#slideshow>#slideshowcontrols>ul>li").click(function(){
		$("body>#slideshow>.item:nth-child("+activeindex+")").hide();
		$("body>#slideshow>#slideshowcontrols>ul>li:nth-child("+activeindex+")").css("background-color", "#FFFFFF");
		activeindex = $("body>#slideshow>#slideshowcontrols>ul>li").index(this)+1;
		$("body>#slideshow>.item:nth-child("+activeindex+")").fadeIn(400);
		$("body>#slideshow>#slideshowcontrols>ul>li:nth-child("+activeindex+")").css("background-color", "#85BE00");
	});

	// Slideshow ends.............................
});