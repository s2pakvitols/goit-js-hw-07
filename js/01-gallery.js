
import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemEl = document.querySelector(".gallery");
galleryItemEl.insertAdjacentHTML(
  "beforeend",
  criateElementsInItem(galleryItems)
);

function criateElementsInItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

galleryItemEl.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const instance = basicLightbox.create(`<img src=
      "${event.target.dataset.source}"
       width="800" height ="600"/>`);
    instance.show();
    galleryItemEl.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        document.removeEventListener("keydown", event);
        instance.close();
      }
    });
})