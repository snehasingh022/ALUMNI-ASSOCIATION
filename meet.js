document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = new FormData(event.target);

    // Convert form data to an object
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // For demonstration purposes, log the data
    console.log('Form data submitted:', data);

    // Ideally, here you would send the data to a server
    alert('Thank you for registering! We look forward to seeing you at the alumni meet.');
});