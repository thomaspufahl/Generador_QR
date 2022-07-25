const cl = console.log;
cl('JS funcionando');


const contenedorQR = document.getElementById("contenedorQR");
const formularioQR = document.getElementById("formularioQR");

const QR = new QRCode(contenedorQR); 

formularioQR.addEventListener("submit", (e) => {
    e.preventDefault();
    const dni = document.querySelector('#dni').value;
    const apellido = document.querySelector('#apellido').value;
    const nombre = document.querySelector('#nombre').value;
    const nac = document.querySelector('#nac').value;
    const qrValue = '00000000000@' + apellido + '@' + nombre + '@N@' + dni + '@N@' + nac + '@00-00-0000';
    QR.makeCode(qrValue);
});

