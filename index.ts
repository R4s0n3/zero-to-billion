export function zeroToBillion(number: number): string {
    let formattedNumber: string;
  
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