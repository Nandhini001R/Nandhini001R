const imageUpload = document.getElementById('imageUpload');
const uploadedImage = document.getElementById('uploadedImage');
const caption = document.getElementById('caption');
const generateCaption = document.getElementById('generateCaption');

generateCaption.addEventListener('click', () => {
    const file = imageUpload.files[0];
    if (file) {
        const formData = new FormData();
        formData.append('image', file);

        fetch('/generate-caption', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            uploadedImage.src = URL.createObjectURL(file);
            caption.textContent = data.caption;
        })
        .catch(error => {
            console.error(error);
            caption.textContent = 'Caption generation failed.';
        });
    }
});
