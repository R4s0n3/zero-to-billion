"use strict";
exports.__esModule = true;
exports.zeroToBillion = void 0;
function zeroToBillion(number) {
    var formattedNumber;
    switch (true) {
        case number >= 1000000000:
            formattedNumber = (number / 1000000000).toFixed(1) + 'B';
            break;
        case number >= 1000000:
            formattedNumber = (number / 1000000).toFixed(1) + 'M';
            break;
        case number >= 1000:
            formattedNumber = (number / 1000).toFixed(1) + 'K';
            break;
        default:
            formattedNumber = number.toString();
            break;
    }
    return formattedNumber;
}
exports.zeroToBillion = zeroToBillion;
