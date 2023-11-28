/*Cor de fundo imagens*/
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        const vibrant = new Vibrant(image.querySelector('img'));

        const swatches = vibrant.swatches();

        const dominantColor = swatches['Vibrant'].getHex();

        image.style.setProperty('--background-color', dominantColor);
    });
});
/*FIM Cor de fundo imagens*/

