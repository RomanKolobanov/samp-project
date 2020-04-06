// Скрипт контроля фоновой музыки

let audio = $("#audio");


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	audio[0].pause();

	$(".player-control").css({ display: 'none', });
} else {

	$(".player-control").css({ display: 'block', }); 
	$(".player-control").attr('src', 'content/play.png');
	$(".player-control").click(function() {  
    	if (audio[0].paused == false) {
        	audio.animate({volume: 0}, 2000, 'swing', function() {
            	audio[0].pause();   
        	});
        		$(this).attr('src', 'content/play.png');
     	} else {
         	audio[0].play();  
         	audio.animate({volume: 0.5}, 1000);
        		$(this).attr('src', 'content/pause.png');
     	}
	});

}


// Скрипт предзагрузчика


function preloaderOut() {
	$("#preloader").fadeOut('1000');
};


setTimeout(preloaderOut, 3000);


/*

Анимация загрузчика

*/

function preloaderAnimation(selector, interval) {
	var $elems = $(selector);

	$elems.slice(1).hide();
  var elemId = 0;

  return setInterval(function() {
  	$elems.eq(elemId).hide();
    elemId = (elemId + 1) % $elems.length;
    $elems.eq(elemId).show();
  }, interval);
}

preloaderAnimation('.preloader-content > .preloader-item', 250);