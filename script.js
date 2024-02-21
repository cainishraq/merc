current = ["pushup",10]
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
	if (target.nodeName == "TD") {
		var exercise = target.parentNode.parentNode.parentNode.getAttribute("name").toLowerCase(),
			index = target.cellIndex+1;
		if (exercise == "fingertippushup") exercise = "pushup";
		exercises = exercise == "hang" ? 8 : 10
		current = [exercise,index]; modal_open(index != 1, index != exercises);
	} else if (target.nodeName == "A") {
		current = ["fingertip",'']; modal_open(false, false);
	} else if (target.id == "left-arrow" || target.id == "right-arrow") {
        if (target.id == "left-arrow") current[1] -= 1;
        else if (target.id == "right-arrow") current[1] += 1;
        modal_open(current[1] != 1, current[1] != exercises);
	}
	
}, false);

var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var captionText = document.getElementById("caption");
var modal_open = function(left, right) {
	modalImg.src = "";
    document.body.style.overflow = 'hidden';
	var leftArrow = document.getElementById('left-arrow');
	var rightArrow = document.getElementById('right-arrow');
	var caption = document.getElementById('caption');
	
	leftArrow.style.display = left ? 'block' : 'none';
	rightArrow.style.display = right ? 'block' : 'none';
	console.log(left, right, leftArrow.style.display);

	modal.style.display = "block";
	modalImg.src = "images/"+current[0]+current[1]+".png";
	caption.textContent = current[0].toUpperCase() +' ('+current[1]+'/'+exercises+')'
}

document.getElementById("close-button").onclick = function() {
    document.body.style.overflow = 'auto';
	modal.style.display = "none";
}

