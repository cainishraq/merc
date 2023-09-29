document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
	if (target.nodeName == "TD") {
		var exercise = target.parentNode.parentNode.parentNode.getAttribute("name").toLowerCase(),
			index = target.cellIndex+1;
		if (exercise == "fingertippushup") exercise = "pushup";
		modal_open(exercise+index+".png");
	} else if (target.nodeName == "A") {
		modal_open("fingertip"+".png");
	}
}, false);

var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");
var modal_open = function(fl){
	modal.style.display = "block";
	modalImg.src = "images/"+fl;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
	modal.style.display = "none";
}