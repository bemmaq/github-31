document.addEventListener('DOMContentLoaded', function () {
    // Get form elements
    const cardNumberInput = document.getElementById('card-number');
    const nameInput = document.getElementById('name-text');
    const validThruInput = document.getElementById('Valid-thru-text');
    const cvvInput = document.getElementById('cvv-text');

    // Get card image elements
    const cardImage = document.querySelector('.aproxmimation');

    // Add an input event listener to the card number input
    cardNumberInput.addEventListener('input', updateCardImage);

    // Add an input event listener to the name input
    nameInput.addEventListener('input', updateCardImage);

    // Add an input event listener to the valid-thru input
    validThruInput.addEventListener('input', updateCardImage);

    // Add an input event listener to the CVV input
    cvvInput.addEventListener('input', updateCardImage);

    // Function to update the card image based on input values
    function updateCardImage() {
        // Get values from the form
        const cardNumber = cardNumberInput.value;
        const cardHolder = nameInput.value;
        const validThru = validThruInput.value;
        const cvv = cvvInput.value;

        // Set the src attribute of the card image with the updated values
        cardImage.src = generateCardImageURL(cardNumber, cardHolder, validThru, cvv);
    }

    // Function to generate the card image URL
    function generateCardImageURL(cardNumber, cardHolder, validThru, cvv) {
        // You may want to implement a logic to generate a dynamic card image URL based on the input values
        // For simplicity, you can use a static card image URL for now
        return "URL_TO_YOUR_CARD_IMAGE";
    }
});
