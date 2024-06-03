
function checkCardNumber(cardNumber) {
    const sanitizedNumber = cardNumber.replace(/\D/g, ''); // Remove caracteres não numéricos
    let sum = 0;
    let double = false;

    for (let i = sanitizedNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitizedNumber.charAt(i), 10);

        if (double) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        double = !double;
    }

    return sum % 10 === 0;
}

