function generateSingleStanza(number) {
  let dryNumber = number % 10;
  let dryNumberLess = dryNumber - 1;
  let numberLess = number - 1;
  let bottle = (dryNumber == 1 & !(number >= 11 & number <= 19)) ? 'бутылка' :
    (dryNumber >= 2 & dryNumber <= 4 & !(number >= 11 & number <= 19)) ? 'бутылки' : 
    'бутылок';
  let bottleLess = (dryNumberLess == 1 & !(numberLess >= 11 & numberLess <= 19)) ? 'бутылка' :
    (dryNumberLess >= 2 & dryNumberLess <= 4 & !(numberLess >= 11 & numberLess <= 19)) ? 'бутылки' : 
    'бутылок';
  numberLess = number == 1 ? 'нет' : numberLess;

  return `${number} ${bottle} пива на стене, ${number} ${bottle} пива!
  Возьми одну, пусти по кругу, ${numberLess} ${bottleLess} пива на стене!
  
  `
}




function generateSongText() {
  let acc = ''
  for (let i = 99; i > 0; i--) {
    acc += generateSingleStanza(i)
  }
  return acc;
}
console.log(generateSongText())