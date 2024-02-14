const button = document.getElementById('button');
const input = document.getElementById('input1');
const button1 = document.getElementById('button1');
const yesresponse = document.getElementById('Yes');
const noresponse = document.getElementById('No');


button.addEventListener('click', () => {
  input.value = 'YES'; 
    yesresponse.style.display= 'block';
    noresponse.style.display= 'none';
});

button1.addEventListener('click', () => {
    input.value = 'NO'; 
    noresponse.style.display= 'block';
    yesresponse.style.display= 'none';
});







