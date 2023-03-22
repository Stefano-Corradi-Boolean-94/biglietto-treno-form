/*
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

*/

// input
const inputUser = document.getElementById('name');
const inputKm = document.getElementById('km');
const selectEta = document.getElementById('fasciaEta');

// buttons
const btnGenera = document.getElementById('genera');
const btnAnnulla = document.getElementById('annulla');


btnGenera.addEventListener('click', function(){

  let validForm = true;

  // salvo gli input
  const nameUser = inputUser.value;
  const km = parseInt(inputKm.value);
  const fasciaEta = selectEta.value;
  const prezzoKm = 0.21;
  const carrozza = Math.ceil(Math.random() * 3);
  const codiceCP = Math.floor(Math.random() * (99000 - 10000 + 1) ) + 10000;

  let offerta = 'Prezzo Standard',
      sconto = 0,
      prezzo;

  if(fasciaEta === 'minorenne'){
    sconto = 20;
    offerta = 'Sconto Minorenni';
  }else if(fasciaEta === 'senior'){
     sconto = 40;  
     offerta = 'Sconto Silver';
  }

  prezzo = (km * prezzoKm) * (1 - sconto/100);

  // VALIDAZIONE
  // controllo che la lunghezza del nome si > 2
  if(nameUser.length < 3) validForm = false;
  
  // controllo che i km siano numerici
  // isNaN resituisce true se NON è un numero
  if(isNaN(km)) validForm = false;
  
  // controllo che sia stat scelta la fascia d'età
  if(fasciaEta === '') validForm = false;

  // controllo compatto
  //if(nameUser.length < 3 || isNaN(km) || fasciaEta === '') validForm = false;

  // elementi da stampare
  const outputName =      document.getElementById('outputName');
  const outputOfferta =   document.getElementById('outputOfferta');
  const outputCarrozza =  document.getElementById('outputCarrozza');
  const outputCp =        document.getElementById('outputCp');
  const outputPrezzo =    document.getElementById('outputPrezzo');

  // stampo
  if(validForm){
    outputName.innerHTML =      nameUser;
    outputOfferta.innerHTML =   offerta;
    outputCarrozza.innerHTML =  carrozza;
    outputCp.innerHTML =        codiceCP;
    outputPrezzo.innerHTML = `
    &euro; ${prezzo.toFixed(2)}
    `;
    document.querySelector('.ticket-area').classList.remove('hide');
  }else{
    alert('Inserire tutti i campi')
  }
});



// reset
btnAnnulla.addEventListener('click', function(){
  inputUser.value = '';
  inputKm.value = '';
  selectEta.value = '';
  document.querySelector('.ticket-area').classList.add('hide');
})