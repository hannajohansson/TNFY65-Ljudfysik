

// Variables
var canvas = document.getElementById('imageView');
var ctx = canvas.getContext("2d");
var canvasHeight = 1000;
var canvasWidth = 600;
var rita = false;


function makeCanvas()
{

	if(rita)
	{
	
	var canvas, context;

	    // Initialization sequence.
	    function init () {
			// Find the canvas element.
			canvas = document.getElementById('imageView');
			if (!canvas) {
			  alert('Error: I cannot find the canvas element!');
			  return;
			}
			if (!canvas.getContext) {
			     alert('Error: no canvas.getContext!');
			     return;
			}
			// Get the 2D canvas context.
			context = canvas.getContext('2d');
			if (!context) {
			     alert('Error: failed to getContext!');
			     return;
			}

			// Attach the mousemove event handler.
			canvas.addEventListener('mousemove', ev_mousemove, false);
	    }

	  // The mousemove event handler.
	  var started = false;
	  function ev_mousemove (ev) {
		var x, y;

		// Get the mouse position relative to the canvas element.
		if (ev.layerX || ev.layerX == 0) { // Firefox
		     x = ev.layerX;
		     y = ev.layerY;
		} 
		else if (ev.offsetX || ev.offsetX == 0) { // Opera
		     x = ev.offsetX;
		     y = ev.offsetY;
		}

		// The event handler works like a drawing pencil which tracks the mouse 
		// movements. We start drawing a path made up of lines.
		if (!started) {
			 context.beginPath();
			 context.moveTo(x, y);
			 started = true;
		} 
		else {
		     context.lineTo(x, y);
		     context.stroke();
		}
	  }

	 
	}
		// Kopierad fr�n rad 527 
		// Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
		var canvasDiv = document.getElementById('canvasSimpleDiv');
		canvas = document.createElement('canvas');
		canvas.setAttribute('width', canvasWidth);
		canvas.setAttribute('height', canvasHeight);
		canvas.setAttribute('id', 'canvas');
		canvasDiv.appendChild(canvas);
		
			if(typeof G_vmlCanvasManager != 'undefined') 
			{
				canvas = G_vmlCanvasManager.initElement(canvas);
			}
		
	
}

// Clear the canvas 
function clearCanvas()
{
	ctx.clearRect(0, 0, canvasHeight, canvasWidth);
}


function draw() 
{
	rita = !rita;
}

/*
// Keep everything in anonymous function, called on window load.
if(window.addEventListener) 
{
	window.addEventListener('load', function () 
	{
	  var canvas, context;

	    // Initialization sequence.
	    function init () {
			// Find the canvas element.
			canvas = document.getElementById('imageView');
			if (!canvas) {
			  alert('Error: I cannot find the canvas element!');
			  return;
			}
			if (!canvas.getContext) {
			     alert('Error: no canvas.getContext!');
			     return;
			}
			// Get the 2D canvas context.
			context = canvas.getContext('2d');
			if (!context) {
			     alert('Error: failed to getContext!');
			     return;
			}

			// Attach the mousemove event handler.
			canvas.addEventListener('mousemove', ev_mousemove, false);
	    }

	  // The mousemove event handler.
	  var started = false;
	  function ev_mousemove (ev) {
		var x, y;

		// Get the mouse position relative to the canvas element.
		if (ev.layerX || ev.layerX == 0) { // Firefox
		     x = ev.layerX;
		     y = ev.layerY;
		} 
		else if (ev.offsetX || ev.offsetX == 0) { // Opera
		     x = ev.offsetX;
		     y = ev.offsetY;
		}

		// The event handler works like a drawing pencil which tracks the mouse 
		// movements. We start drawing a path made up of lines.
		if (!started) {
			 context.beginPath();
			 context.moveTo(x, y);
			 started = true;
		} 
		else {
		     context.lineTo(x, y);
		     context.stroke();
		}
	  }

	  init();
	  }, false); 
}

/*

