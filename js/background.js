const images = [
	"0.jpg",
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg"
];

const chosenImages = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url("img/${chosenImages}")`;