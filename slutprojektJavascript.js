function scrollToSection() {

const element = document.getElementById("introduction");

  
element.scrollIntoView({ behavior: "smooth", block: "center" });

}



document.addEventListener('DOMContentLoaded', function() {
  const imageBoxes = document.querySelectorAll('.image-box');

  imageBoxes.forEach((box, index) => {
    const imageNumber = index + 1;
    const imagePath = `slutprojektEmployees${imageNumber}.html`;
    box.onclick = function() {
      window.location.href = imagePath;
    };
  });
});



function toggleDropdown(dropdownId) {
	var dropdown = document.getElementById(dropdownId);
	var otherDropdowns = document.getElementsByClassName("dropdown-content");

	for (var i = 0; i < otherDropdowns.length; i++) {
		var dropdownItem = otherDropdowns[i];
		if (dropdownItem.id !== dropdownId) {
			dropdownItem.classList.remove("show");
		}
	}

	dropdown.classList.toggle("show");
}
