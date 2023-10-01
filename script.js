const gallery = document.querySelector(".gallery");

// Replace 'images/' with the path to your image folder
const imagePath = 'images/';
const imageFiles = fetchImageFiles();

function fetchImageFiles() {
    const lines = images.trim().split('\n');
    return lines
}

// Function to create image elements and add them to the gallery
function createGallery() {
    imageFiles.forEach((filename) => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");

        const img = document.createElement("img");
        img.addEventListener("click", () => {
            displayImageInModal(img.src, img.alt);
        });

        img.src = imagePath + filename;
        img.alt = filename;
        imageContainer.appendChild(img);
        gallery.appendChild(imageContainer);
    });
}

// Function to create image elements and add them to the gallery
function displayImageInModal(imageSrc, imageAlt) {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    const modalImage = document.createElement("img");
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;

    modalContent.appendChild(modalImage);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);

    // Add a click event listener to close the modal
    modal.addEventListener("click", () => {
        document.body.removeChild(modal);
    });
}

// Call the createGallery function to display images
createGallery();

