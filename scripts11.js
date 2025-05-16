document.addEventListener('DOMContentLoaded', function() {
    const photoInput = document.getElementById('profilePhoto');
    const photoPreview = document.getElementById('photoPreview');

    photoInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = new Image();
                img.src = e.target.result;

                img.onload = function() {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    // Set the desired dimensions
                    const maxDimension = 150; // Fixed dimension for width and height
                    let width = img.width;
                    let height = img.height;

                    if (width > height) {
                        if (width > maxDimension) {
                            height *= maxDimension / width;
                            width = maxDimension;
                        }
                    } else {
                        if (height > maxDimension) {
                            width *= maxDimension / height;
                            height = maxDimension;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);

                    const dataUrl = canvas.toDataURL('image/jpeg');
                    photoPreview.innerHTML = `<img src="${dataUrl}" alt="Profile Photo">`;
                };
            };
            reader.readAsDataURL(file);
        } else {
            photoPreview.innerHTML = '<p>No photo selected</p>';
        }
    });

    document.getElementById('alumniForm').addEventListener('submit', function(event) {
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const graduationYear = document.getElementById('graduationYear').value.trim();
        const degree = document.getElementById('degree').value.trim();
        const bio = document.getElementById('bio').value.trim();

        // Simple form validation
        if (!fullName || !email || !graduationYear || !degree || !bio) {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevent form submission
        } else {
            // For now, just display a message and prevent submission
            alert('Registration successful!');
            event.preventDefault(); // Remove this line to allow form submission
        }
    });
});
