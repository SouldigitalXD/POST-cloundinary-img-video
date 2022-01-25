
const jokeURL     = 'https://api.chucknorris.io/jokes/random';
const usuariosURL = 'https://reqres.in/api/users?page=2';

//Cloundinary
const cloudPreset = 'hlaxbowo';
const cloudURL    = 'https://api.cloudinary.com/v1_1/ddrpqxzi6/upload';


const obtenerChiste = async() => {

    try {

        const resp = await fetch( jokeURL );

        if( !resp.ok ) throw 'No se pudo realizar la peticion';

        const { icon_url, id, value } = await resp.json();

        return { icon_url, id, value };

    } catch( err ) {

        throw err;

    }

   
};

const obtenerUsuarios = async() => {

    try {

        const respuesta = await fetch( usuariosURL );

        if( !respuesta.ok ) throw 'Error en la peticion';

        const { data:Usuarios } = await respuesta.json();

        return Usuarios;

    } catch( err ) {

        throw err;

    }

};


const subirImagen = async( archivoSubir ) => {

    const formData = new FormData(); 
    formData.append('upload_preset' , cloudPreset );
    formData.append('file' , archivoSubir );

    try{

        const resp = await fetch( cloudURL, {
            method:'POST',
            body: formData
        });

        if( resp.ok ) {
            const cloundRespuesta = await resp.json();
            return cloundRespuesta.secure_url;
        } 

        else {
            throw await resp.json();
        }



    } catch( err ) {
        throw err;
    }

};


export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
};