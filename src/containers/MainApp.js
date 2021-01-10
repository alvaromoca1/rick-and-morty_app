import React, {useState} from 'react'
import {InputSearch} from '../components/inputSearch/index'
import {ListPeople} from '../components/ListPeople/index'
export const MainApp = () => {
    const[categoria, setCategoria] = useState(['rick']);
    return (
        <div className="container_main">
            <h3>Api de Rick and Morty</h3>
            <InputSearch setCategoria={setCategoria}/>
            <ol>
                {
                    categoria.map(categoria =>{
                        return (
                            <ListPeople key={categoria} categoria={categoria}/>
                        )
                    })
                }
            </ol>
        </div>
    )
}
