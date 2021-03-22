// Creare un array di oggetti: ogni oggetto
// descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
// Usiamo il forEach

const bici = [
  {
    nome : 'Sasso',
    peso : 13
  },
  {
    nome : 'Aria',
    peso : 3
  },
  {
    nome : 'Marmo',
    peso : 20
  },
  {
    nome : 'Sabbia',
    peso : 5
  },
  {
    nome : 'Asfalto',
    peso : 8
  }
];

// console.log(bici);

let leggera = bici [0];

bici.forEach((item) => {
  if (item.peso <= leggera.peso) {
    leggera = item;

  }
});

// console.log(leggera);

//Stampo
$('#bici').append(`La bici più leggera si chiama ${leggera.nome} e pesa solamente ${leggera.peso} kg.`)
