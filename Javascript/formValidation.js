const cl = console.log;
cl('JS funcionando');

//VALIDACION DE DATOS EN CADA CAMPO DE LOS INPUTS

// function checkForm(nombreCampo) {
//     nombreCampo.addEventListener('submit', (e) => {
//         let valueForm = e.target.value;
//         if (valueForm.length === 0) {cl('Rellena el campo ' + nombreCampo.name)} else {cl(nombreCampo.value)}
//     })
// }
// checkForm(dni);
// checkForm(apellido);
// checkForm(nombre);
// checkForm(nac);

const qrCode = () => {
    const dni = document.querySelector('#dni').value;
    const apellido = document.querySelector('#apellido').value;
    const nombre = document.querySelector('#nombre').value;
    const nac = document.querySelector('#nac').value;
    const qrValue = '00000000000@' + apellido + '@' + nombre + '@N@' + dni + '@N@' + nac + '@00-00-0000';
    cl(qrValue);
}