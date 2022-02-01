let ofePhoto = document.getElementById('online-fit-expert-photo');
let liftTrackerPhoto = document.getElementById('lift-tracker-photo');
let triviaNationPhoto = document.getElementById('trivia-nation-photo');

let ofeDetails = document.getElementById('ofe-details');
let liftTrackerDetails = document.getElementById('lift-tracker-details');
let triviaNationDetails = document.getElementById('trivia-nation-details');

let ofeBlur = () => {
    ofePhoto.style.opacity = '0.5';
    ofeDetails.style.display = 'block';
};

let ofeUnblur = () => {
    ofePhoto.style.opacity = '1';
    ofeDetails.style.display = 'none';
};

ofePhoto.addEventListener('mouseover', ofeBlur);
ofePhoto.addEventListener('mouseout', ofeUnblur);

let liftTrackerBlur = () => {
    liftTrackerPhoto.style.opacity = '0.5';
    liftTrackerDetails.style.display = 'block';
};

let liftTrackerUnblur = () => {
    liftTrackerPhoto.style.opacity = '1';
    liftTrackerDetails.style.display = 'none';
};

liftTrackerPhoto.addEventListener('mouseover', liftTrackerBlur);
liftTrackerPhoto.addEventListener('mouseout', liftTrackerUnblur);

let triviaNationBlur = () => {
    triviaNationPhoto.style.opacity = '0.5';
    triviaNationDetails.style.display = 'block';
};

let triviaNationUnblur = () => {
    triviaNationPhoto.style.opacity = '1';
    triviaNationDetails.style.display = 'none';
};

triviaNationPhoto.addEventListener('mouseover', triviaNationBlur);
triviaNationPhoto.addEventListener('mouseout', triviaNationUnblur);