let photo = document.getElementById('online-fit-expert-photo');
let details = document.getElementById('click-on-img-text');

let blur = () => {
    photo.style.opacity = '0.5';
    details.style.display = 'block';
};

let unblur = () => {
    photo.style.opacity = '1';
    details.style.display = 'none';
};

photo.addEventListener('mouseover', blur);
photo.addEventListener('mouseout', unblur);