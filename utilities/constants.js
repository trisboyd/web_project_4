// profile variables
export const editProfileButton = document.querySelector(".profile__edit-button");

export const editProfileExitButton = document.querySelector(".popup__exit_edit-profile");

export const profileEditor = document.querySelector(".popup_profile-edit");

export const profileName = document.querySelector(".profile__name");

export const profileDescriptor = document.querySelector(".profile__descriptor");

export const editName = document.querySelector(".edit-box__text_type_name");

export const formProfile = document.querySelector(".edit-box_profile");

export const editDescriptor = document.querySelector(".edit-box__text_type_descriptor");

// Submit Button for both popups

export const formSubmitButton = document.querySelector(".edit-box__submit");

// Add Card/Place variables
export const addPlace = document.querySelector(".popup_add-place");

export const addPlaceExitButton = document.querySelector(".popup__exit_add-place");

export const addPlaceButton = document.querySelector(".profile__add-place-button");

export const addPlaceName = document.querySelector("#place-title");

export const addPlaceImage = document.querySelector("#image-link");

export const formAddPlace = document.querySelector(".edit-box_place");

export const addPlaceSubmit = document.querySelector("#add-place-submit");

// Image Popup variables

export const imagePopup = document.querySelector(".popup_image");

export const imagePopupExit = document.querySelector(".popup__exit_image");

export const imagePopupPic = document.querySelector(".popup-image-container__pic");

export const imagePopupTitle = document.querySelector(".popup-image-container__title")

// Define ESC key and allow pressing ESC key to close modal window
export const escKey = 27;

// Places Grid Variable
export const places = document.querySelector(".places");

// Initial Cards/Places Info
export const initialCards = [
    {
        name: "Gulf of California",
        link: "https://images.unsplash.com/photo-1597244586456-1044325c5ce4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3VsZiUyMG9mJTIwY2FsaWZvcm5pYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Grand Canyon",
        link: "https://images.unsplash.com/photo-1516302350523-4c29d47b89e0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhbmQlMjBjYW55b258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Rocky Mountains",
        link: "https://images.unsplash.com/photo-1583542225701-e9bb2c337ed3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cm9ja3klMjBtb3VudGFpbnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Rio Grande River",
        link: "https://images.unsplash.com/photo-1610660059460-f4fa987fb3ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHRleGFzJTIwcml2ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Palo Duro Canyon",
        link: "https://images.unsplash.com/photo-1579477460827-0c6598bc1e51?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBhbG8lMjBkdXJvJTIwY2FueW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
        name: "Great Plains",
        link: "https://images.unsplash.com/photo-1608240525233-7c6e1657c494?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGdyZWF0JTIwcGxhaW5zfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
];

// Settings for Form Validation

export const settings = {
    formSelector: ".edit-box",
    inputSelector: ".edit-box__text",
    submitButtonSelector: ".edit-box__submit",
    inactiveButtonClass: "edit-box__submit_inactive",
    inputErrorClass: "edit-box__text_type_error",
    errorClass: ".edit-box__error_visible"
  };

// Form Variables
export const profileForm = document.querySelector(".edit-box_profile");
export const placeForm = document.querySelector(".edit-box_place");