const imagePopup = document.querySelector('.popup_type_img');
const closeBtnInImage = imagePopup.querySelector('.popup__close-button');
const galleryContainer = document.querySelector('.gallery__list');
const galleryImage = galleryContainer.querySelectorAll('.gallery__image');
const expendedPhoto = document.querySelector('.popup__image');
const photoCaption = document.querySelector('.popup__img-caption');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function expendPhoto(image) {
  openPopup(imagePopup);
  expendedPhoto.src = image.src;
  expendedPhoto.alt = image.alt;
  photoCaption.textContent = image.alt;
}

galleryContainer.addEventListener('click', (event) => {
  let image = event.target.closest('.gallery__image');
  if (!image) return;
  expendPhoto(image);
});

closeBtnInImage.addEventListener('click', () => closePopup(imagePopup));
