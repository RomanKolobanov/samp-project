// Скрипт контроля фоновой музыки

let audio = $("#audio");

function animationWithMusic() {

};

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	audio[0].pause();

	$(".player-control").css({ display: 'none', });
} else {

	$(".player-control").css({ display: 'block', }); 
	$(".player-control").attr('src', 'content/play.png');
	$(".player-control").click(function() {  
    	if (audio[0].paused == false) {
        	audio.animate({volume: 0}, 670, 'swing', function() {
            	audio[0].pause();   
        	});
        		$(this).attr('src', 'content/play.png');
            $("#logo").removeClass('with-animation');
     	} else {
         	audio[0].play();  
         	audio.animate({volume: 0.5}, 670);
        	$(this).attr('src', 'content/pause.png');
          $("#logo").delay(8000).addClass('with-animation');
     	}
	});

}


// Скрипт предзагрузчика


$(window).on('load', function () {
      $("#preloader").delay(500).fadeOut('1000');
});


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

// Скрипт движения блоков

(function(){
  var elelLim = document.getElementById('hero-img'),
      startX = 100,
      startY = 100,
      w = document.documentElement.offsetWidth,
      h = document.documentElement.offsetHeight;

  elelLim.addEventListener('mousemove', function(evt){
    var posX = Math.round(evt.clientX / w * startX)
    var posY = Math.round(evt.clientY / h * startY)
    elelLim.style.backgroundPosition = posX + 'px ' + posY + 'px'
  })
})();

