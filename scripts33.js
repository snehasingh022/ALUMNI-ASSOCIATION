function previewImage(event) {
    var output = document.getElementById('photoPreview');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.style.display = 'block';
}