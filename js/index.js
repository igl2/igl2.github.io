let photo = document.getElementById('about-me-photo');

let blur = () => {
    photo.style.opacity = '0.5';
};

let unblur = () => {
    photo.style.opacity = '1';
};

photo.addEventListener('mousedown', blur);
photo.addEventListener('mouseup', unblur);