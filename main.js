// Get the images using their IDs
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');

const btn1 = document.getElementById('btn1');

const alertBox = document.getElementById('alert-box');
const alertMessage = document.getElementById('alert-message');
const alertOk = document.getElementById('alert-ok');
const alertRedirect = document.getElementById('alert-redirect');

function showAlert(message, redirectUrl) {
    alertBox.style.display = 'block';

    alertOk.addEventListener('click', function () {
        alertBox.style.display = 'none';
    });

    // if (dogNum == 3) {

    //     showAlert('Congratulations you won', 'https://www.example.com');
    //     alertBox.style.display = 'block';
    // }
    

    alertRedirect.addEventListener('click', function () {
        window.location.href = 'win.html';
    });
}


let dogNum = 0;

btn1.addEventListener('click', function () {
    location.reload()
})

img1.addEventListener('click', function () {
    img1.style.opacity = 0.5;
    dogNum++
    console.log('Image 1 clicked!');

    if (dogNum == 3) {
    alertBox.style.display = 'block';
    showAlert('Congratulations you won', 'win.html');
}

});
img3.addEventListener('click', function () {
    img3.style.opacity = 0.5;
    dogNum++
    console.log('Image 3 clicked!');

    if (dogNum == 3) {
    alertBox.style.display = 'block';
    showAlert('Congratulations you won', 'https://www.example.com');
}

});
img4.addEventListener('click', function () {
    img4.style.opacity = 0.5;
    dogNum++
    console.log('Image 4 clicked!');

    if (dogNum == 3) {

        alertBox.style.display = 'block';
        showAlert('Congratulations you won', 'https://www.example.com');
    }
    
});
img6.addEventListener('click', function () {
    img6.style.opacity = 0.5;
    dogNum++
    console.log('Image 6 clicked!');

    if (dogNum == 3) {

        alertBox.style.display = 'block';
        showAlert('Congratulations you won', 'https://www.example.com');
    }
    
});
img9.addEventListener('click', function () {
    img9.style.opacity = 0.5;
    dogNum++
    console.log('Image 9 clicked!');

    if (dogNum == 3) {

        alertBox.style.display = 'block';
        showAlert('Congratulations you won', 'https://www.example.com');
    }
    
});

if (dogNum == 3) {
    alertBox.style.display = 'block';
    showAlert('Congratulations you won', 'https://www.example.com');
}

img2.addEventListener('click', function () {
    window.location.href = 'racist.html'
    console.log('Image 2 clicked!');
});
img5.addEventListener('click', function () {
    window.location.href = 'racist.html'
    console.log('Image 5 clicked!');
});
img8.addEventListener('click', function () {
    window.location.href = 'racist.html'
    console.log('Image 8 clicked!');
});


img7.addEventListener('click', function () {
    window.location.href = 'cat.html';
    console.log('Image 7 clicked!');
});
