
import { obtenerChiste } from './http-provider';

const body = document.body;
let  btnOtros , olList;

const crearHTML = () => {

        const html = `

        <h1 class="mt-5">Chistes</h1>
        <hr>
    
        <button class="btn btn-primary"> Otro Chiste</button>
    
        <ol class="mt-3 list-group"> </ol>

        `;

        const divChistes = document.createElement('div');
        divChistes.innerHTML = html;

        body.append( divChistes );


};

const eventos = () => {

    
    btnOtros = document.querySelector('button');

    btnOtros.addEventListener('click' , async() => {

        btnOtros.disabled = true;
        dibujarChiste(  await obtenerChiste() );
        btnOtros.disabled = false;

    });
    
};

const dibujarChiste = ( chiste ) => {

    olList   = document.querySelector('ol');
    const liItem = document.createElement('li');

    liItem.innerHTML = `<b>${ chiste.id }</b> , <b>${ chiste.value }</b>`;
    liItem.classList.add('list-group-item');

    olList.append( liItem );
    
};

export const init = () => {
    
    crearHTML();
    eventos();
    
};




