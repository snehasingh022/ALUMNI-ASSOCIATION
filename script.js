document.getElementById('donation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    if (name && email && amount) {
        // Open modal
        document.getElementById('donation-modal').style.display = 'flex';
    } else {
        alert("Please fill out all required fields.");
    }
});

// Close the modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('donation-modal').style.display = 'none';
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('donation-modal').style.display = 'none';
});

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('donation-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
