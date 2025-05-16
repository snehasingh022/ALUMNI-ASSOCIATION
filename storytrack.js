document.getElementById('photo').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const photoPreview = document.getElementById('photoPreview');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            photoPreview.src = e.target.result;
            photoPreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        photoPreview.src = '#';
        photoPreview.style.display = 'none';
    }
});

document.getElementById('video').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const videoPreview = document.getElementById('videoPreview');

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            videoPreview.src = e.target.result;
            videoPreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    } else {
        videoPreview.src = '#';
        videoPreview.style.display = 'none';
    }
});

document.getElementById('storyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const storyText = document.getElementById('story').value;
    const photo = document.getElementById('photo').files[0];
    const video = document.getElementById('video').files[0];

    const readerPhoto = new FileReader();
    const readerVideo = new FileReader();

    let photoDataURL = '';
    let videoDataURL = '';

    if (photo) {
        readerPhoto.onload = function(e) {
            photoDataURL = e.target.result;
            // addStoryToDirectory();
        };
        readerPhoto.readAsDataURL(photo);
    } else {
        addStoryToDirectory();
    }

    if (video) {
        readerVideo.onload = function(e) {
            videoDataURL = e.target.result;
            addStoryToDirectory();
        };
        readerVideo.readAsDataURL(video);
    } else {
        addStoryToDirectory();
    }

    function addStoryToDirectory() {
        const storyHTML = `
            <div class="story">
                <div class="story-info">
                    <strong>${name}</strong>
                    <p>${storyText}</p>
                    ${photo ? `<img src="${photoDataURL}" alt="${name}'s Photo">` : ''}
                    ${video ? `<video src="${videoDataURL}" controls></video>` : ''}
                </div>
            </div>
        `;

        document.getElementById('storiesDirectory').innerHTML += storyHTML;

        // Clear the form
        document.getElementById('storyForm').reset();
        document.getElementById('photoPreview').style.display = 'none';
        document.getElementById('videoPreview').style.display = 'none';
    }
});