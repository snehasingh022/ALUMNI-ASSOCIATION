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

document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const photo = document.getElementById('photo').files[0];

    const reader = new FileReader();
    reader.onload = function(e) {
        const photoDataURL = e.target.result;
        const profileHTML = `
            <div class="profile">
                <img src="${photoDataURL}" alt="${name}'s Photo">
                <div class="profile-info">
                    <strong>${name}</strong>
                    <p>${email}</p>
                </div>
            </div>
        `;

        document.getElementById('directory').innerHTML += profileHTML;
    };

    if (photo) {
        reader.readAsDataURL(photo);
    } else {
        alert('Please upload a photo.');
    }

    // Clear the form
    document.getElementById('profileForm').reset();
    document.getElementById('photoPreview').style.display = 'none';
});
