import { subirImagen } from "./http-provider";





const body = document.body;
let inputFile , imgFoto;

const crearInputFileHTML = () => {

    const html = `

        <h1 class="mt-5"> Subiendo Archivos </h1>
        <hr>

        <label>Selecciona una fotografia</label>
        <input type="file" accept="image/png image/jpeg image/jpg"/>

        <br>
        <img id="foto" class="img-thumbnail" src=""/>

    `;

    const div = document.createElement('div');
    div.innerHTML = html;

    body.appendChild(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');

};


const eventos = () => {

    inputFile.addEventListener( 'change', (event) => {

        const file = event.target.files[0];
        subirImagen( file ).then( resp => imgFoto.src = resp );

    });

};


export const init = () => {
    crearInputFileHTML();
    eventos();
};