document.addEventListener("DOMContentLoaded", function(event) {
	//alert("Hello JavaScript");
    let targetImage = document.querySelector("#smart-image");
	
	
    targetImage.addEventListener("click", function() {
        if (targetImage.classList.contains("small")) {
            targetImage.classList.remove("small");
        }else{
            targetImage.classList.add("small");        
        }
    });
	
 });