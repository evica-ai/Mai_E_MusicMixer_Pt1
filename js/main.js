// module pattern
// iife

(() => {
	// put variables (connections to the web page / DOM) at the top
	// const -> something that will never change / can't be redefined
	const 	dropZoneContainer = document.querySelector(".icons-dz")
			dragZone = document.querySelector(".sound-icons-left"),
			dragZone = document.querySelector(".sound-icons-right"),
			dragImages = document.querySelectorAll(".icon-image"),
			dropZones = document.querySelectorAll(".drop-zone");

	// functions go in the middle
	function dragStart(event) {
		console.log('I will cue you in');
		event.dataTransfer.setData("savedID", this.id);
	}

	function draggedOver(event) {
		event.preventDefault();
		console.log('Get ready to begin...');
	}

	function dropped(event) {
		event.preventDefault();

		// check to see if there's an element here already (a dropeed image)

		let targetID = event.dataTransfer.getData("savedID");
		console.log("Here comes the", targetID, "!!");
		event.target.appendChild(document.querySelector(`#${targetID}`));
	}
	
	function changeBGImage() {
		// 1. check all the drop Zones
		// 2. if a drop zone has an image in it, then it need to go back where it came from
		// 3. append it back into the drag zone

		dropZones.forEach(zone => {
			if (zone.childNodes.length > 0) {
				dragZone.appendChild(zone.firstElementChild);
			}
		})		
	}

 
	dragImages.forEach(piece => piece.addEventListener("dragstart", dragStart));
	dropZones.forEach(zone => {
		zone.addEventListener("dragover", draggedOver);
		zone.addEventListener("drop", dropped);
	})

})();
