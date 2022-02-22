// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описан в документации
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery')
galleryEl.innerHTML = createGalleryMarkup(galleryItems)

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250});

function createGalleryMarkup(items){
    return items.map(({ preview, original, description })=>{
        return `<a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`
    }).join("");
}
