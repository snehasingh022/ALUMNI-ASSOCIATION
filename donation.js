// Enable the custom amount input if the custom radio is selected
document.getElementById('custom-amount-radio').addEventListener('change', function() {
    document.getElementById('custom-amount').disabled = false;
});

document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener('change', function() {
        if (!this.id.includes('custom-amount-radio')) {
            document.getElementById('custom-amount').disabled = true;
        }
    });
});

