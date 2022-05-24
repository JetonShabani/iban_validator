
export const isLichtenstein = (input) => {

    let CODE_LENGTHS = {
       LI: 21,
    };

    let iban = String(input).toUpperCase().replace(/[^A-Z0-9]/g, ''), // keep only alphanumeric characters
    code = iban.match(/^([A-Z]{2})(\d{2})([A-Z\d]+)$/),
    codeLi = iban.match(/^LI\d{7}[A-Z0-9]{12}$/),
    digits;
  
    if (!codeLi || !code || iban.length !== CODE_LENGTHS[code[1]]) {   //if dont match any of them return false
        return false;
    } 

    // rearrange country code and check digits, and convert chars to ints
    digits = (code[3] + code[1] + code[2]).replace(/[A-Z]/g, function (letter) {
        return letter.charCodeAt(0) - 55;
    });
    // final check
    return mod97(digits) === 1;


    // the iban is validated by a mod97 operation.
    // first four char of the iban are pulled from the beginning and appended at the end
    // second all the letters obtained string of char are replaced by the ASCII of their corresponding uppercase decreased by 55 (ascii value -55)
    // third the modulus of the hence obtained number, let say x, with respect to 97 is checked
    // fourth if the modulus is 1, then it's a valid IBAN number.

function mod97(string) {
    let checksum = string.slice(0, 2), fragment;
    for (var offset = 2; offset < string.length; offset += 7) {
        fragment = String(checksum) + string.substring(offset, offset + 7);
        checksum = parseInt(fragment, 10) % 97;
    }
    return checksum;

}   
}
