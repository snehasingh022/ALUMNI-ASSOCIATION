document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('storyImage');
    const videoInput = document.getElementById('storyVideo');
    const imagePreview = document.getElementById('imagePreview');
    const videoPreview = document.getElementById('videoPreview');

    imageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="Story Image">`;
            };
            reader.readAsDataURL(file);
        } else {
            imagePreview.innerHTML = '<p>No image selected</p>';
        }
    });

    videoInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                videoPreview.innerHTML = `<video controls src="${e.target.result}" alt="Story Video"></video>`;
            };
            reader.readAsDataURL(file);
        } else {
            videoPreview.innerHTML = '<p>No video selected</p>';
        }
    });

    document.getElementById('successStoryForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Gather form data
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const storyTitle = document.getElementById('storyTitle').value.trim();
        const storyDescription = document.getElementById('storyDescription').value.trim();

        // Simple form validation
        if (!fullName || !email || !storyTitle || !storyDescription) {
            alert('Please fill in all required fields.');
            return;
        }

        // Handle the form data (e.g., send to server or display confirmation)
        // For demonstration purposes, we'll just show an alert
        alert(`Thank you, ${fullName}! Your success story titled "${storyTitle}" has been submitted.`);

        // Clear the form
        document.getElementById('successStoryForm').reset();
        imagePreview.innerHTML = '<p>No image selected</p>';
        videoPreview.innerHTML = '<p>No video selected</p>';
    });
});
