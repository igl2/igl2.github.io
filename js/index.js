let photo = document.getElementById('online-fit-expert-photo');

let blur = () => {
    photo.style.opacity = '0.5';
};

let unblur = () => {
    photo.style.opacity = '1';
};

photo.addEventListener('mouseover', blur);
photo.addEventListener('mouseout', unblur);