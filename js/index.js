let photo = document.getElementById('about-me-photo');

let blur = () => {
    photo.style.border = '5px dashed #64ffda';
};

let unblur = () => {
    photo.style.border = '5px solid #64ffda';
};

photo.addEventListener('mouseover', blur);
photo.addEventListener('mouseout', unblur);