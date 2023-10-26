import simpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector(".gallery");


const galeryItem = galleryItems
	.map((image) =>
		`<li class="gallery__item">
		<a class="gallery__link" href="${image.original}">
		<img class="gallery__image" src="${image.preview}" alt="${image.description}" />
		</a>
		</li>`
	)
	.join("")
gallery.insertAdjacentHTML("afterbegin", galeryItem);

new simpleLightbox('.gallery__item .gallery__link', {
	captionsData: "alt",
	captionDelay: 250,
});

