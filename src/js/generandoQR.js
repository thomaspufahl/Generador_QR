const contenedorQR = document.getElementById("contenedorQR");
const formularioQR = document.getElementById("formularioQR");

const QR = new QRCode(contenedorQR, {
    width: 256,
    height: 256,
    
}); 

formularioQR.addEventListener("submit", (e) => {
    e.preventDefault();
    const dni = document.querySelector('#dni').value;
    const apellido = document.querySelector('#apellido').value;
    const nombre = document.querySelector('#nombre').value;
    const nac = document.querySelector('#nac').value;
    const qrValue = '00000000000@' + apellido + '@' + nombre + '@N@' + dni + '@N@' + nac + '@00-00-0000';
    QR.makeCode(qrValue);
});

