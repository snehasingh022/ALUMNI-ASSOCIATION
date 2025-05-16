document.addEventListener('DOMContentLoaded', function() {
    const profileList = document.getElementById('profileList');
    const addProfileForm = document.getElementById('addProfileForm');
    const imageInput = document.getElementById('storyImage');
    const videoInput = document.getElementById('storyVideo');
    const imagePreview = document.getElementById('imagePreview');
    const videoPreview = document.getElementById('videoPreview');

    // Function to display profiles
    function displayProfile(name, email, title, description, imageUrl, videoUrl) {
        const profileCard = document.createElement('div');
        profileCard.className = 'profile-card';

        profileCard.innerHTML = `
            <img src="${imageUrl || 'images/default-profile.jpg'}" alt="${name}">
            <h3>${name}</h3>
            <p>${title}</p>
            <p>${description}</p>
            <a href="profile.html?id=${name}" class="view-profile">View Profile</a>
        `;

        profileList.appendChild(profileCard);
    }

    // Handle image preview
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

    // Handle video preview
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

    // Handle form submission
    addProfileForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const title = document.getElementById('storyTitle').value.trim();
        const description = document.getElementById('storyDescription').value.trim();
        const imageUrl = imagePreview.querySelector('img') ? imagePreview.querySelector('img').src : '';
        const videoUrl = videoPreview.querySelector('video') ? videoPreview.querySelector('video').src : '';

        if (!name || !email || !title || !description) {
            alert('Please fill in all required fields.');
            return;
        }

        // Display new profile
        displayProfile(name, email, title, description, imageUrl, videoUrl);

        // Reset the form
        addProfileForm.reset();
        imagePreview.innerHTML = '<p>No image selected</p>';
        videoPreview.innerHTML = '<p>No video selected</p>';
    });

    // Example profiles (replace these with dynamic content if using a backend)
    // displayProfile('John Doe', 'john.doe@example.com', 'Software Engineer at TechCorp', 'John has been leading innovative projects in the tech industry.', 'images/alumni1.jpg', 'videos/johndoe.mp4');
    // displayProfile('Jane Smith', 'jane.smith@example.com', 'Marketing Specialist at MarketLeaders', 'Jane has significantly contributed to brand growth and marketing strategies.', 'images/alumni2.jpg', 'videos/janesmith.mp4');
});
