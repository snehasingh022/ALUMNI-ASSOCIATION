document.getElementById('pictures').addEventListener('change', function(event) {
    const files = event.target.files;
    const previewContainer = document.getElementById('picturePreview');
    previewContainer.innerHTML = '';

    for (const file of files) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            previewContainer.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
});

document.getElementById('video').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const previewContainer = document.getElementById('videoPreview');
    previewContainer.innerHTML = '';

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const video = document.createElement('video');
            video.src = e.target.result;
            video.controls = true;
            previewContainer.appendChild(video);
        };

        reader.readAsDataURL(file);
    }
});



document.getElementById('submissionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const name = document.getElementById('name').value;
    const graduationyear = document.getElementById('graduation year').value;
    const city = document.getElementById('city').value;
    const email = document.getElementById('email').value;
    const story = document.getElementById('story').value;
    const pictures = document.getElementById('pictures').files;
    const video = document.getElementById('video').files;

    console.log('Name:', name);
    console.log('graduation year :',graduationyear);
    console.log('Email:', email);
    console.log('Story:', story);
    console.log('city:', city);

    if (pictures.length > 0) {
        console.log('Pictures:', pictures);
    }

    if (video.length > 0) {
        console.log('Video:', video);
    }

    alert('Your success story has been submitted!');
});

