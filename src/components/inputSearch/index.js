import React,{useState} from 'react'
import './index.css';
export const InputSearch = ({setCategoria}) => {

    const [inputdata, setInputdata]=useState('');

    const escucharChange=(valor) => {
        setInputdata(valor.target.value);
    }

    const AccionEnvio = (e) => {
        e.preventDefault();
        if(inputdata.trim().length > 1){
            setCategoria((catego)=>[inputdata,...catego]);
            setInputdata('');
            console.log("se realizo el envio");
        }
    }

    return (
        <form onSubmit={AccionEnvio}>
            <input 
                value={inputdata} 
                onChange={escucharChange}
                className="input_search" type="text"/>
        </form>
    )
}
