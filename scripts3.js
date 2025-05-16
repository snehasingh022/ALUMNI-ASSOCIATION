document.addEventListener('DOMContentLoaded', function() {
    const researchList = document.getElementById('researchList');
    const addResearchForm = document.getElementById('addResearchForm');
    const imageInput = document.getElementById('researchImage');
    const imagePreview = document.getElementById('imagePreview');

    // Function to display research
    function displayResearch(title, description, imageUrl) {
        const researchCard = document.createElement('div');
        researchCard.className = 'research-card';

        researchCard.innerHTML = `
            <img src="${imageUrl || 'images/default-research.jpg'}" alt="${title}">
            <h3>${title}</h3>
            <p>${description}</p>
        `;

        researchList.appendChild(researchCard);
    }

    // Handle image preview
    imageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.innerHTML = `<img src="${e.target.result}" alt="Research Image">`;
            };
            reader.readAsDataURL(file);
        } else {
            imagePreview.innerHTML = '<p>No image selected</p>';
        }
    });

    // Handle form submission
    addResearchForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('researchTitle').value.trim();
        const description = document.getElementById('researchDescription').value.trim();
        const imageUrl = imagePreview.querySelector('img') ? imagePreview.querySelector('img').src : '';

        if (!title || !description) {
            alert('Please fill in all required fields.');
            return;
        }

        // Display new research
        displayResearch(title, description, imageUrl);

        // Reset the form
        addResearchForm.reset();
        imagePreview.innerHTML = '<p>No image selected</p>';
    });

    // Example research (replace these with dynamic content if using a backend)
    // displayResearch('AI and Machine Learning', 'Exploring advanced AI techniques and their applications.', 'images/research1.jpg');
    // displayResearch('Quantum Computing', 'Research into quantum algorithms and their potential.', 'images/research2.jpg');
});
