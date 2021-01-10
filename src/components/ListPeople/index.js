import React from 'react'
import {useFetchPeople} from '../../hooks/useFetchPeople'
import { CardPeople } from '../CardPeople';
import './index.css';
export const ListPeople = ({categoria}) => {


    const{data, loading}= useFetchPeople(categoria);
    return (

        <div>
            <h3>{categoria}</h3>
            <ol className="list_people">
                {
                    loading ? ('cargando....'):(
                        data.map(data =>(
                            <CardPeople {...data}/>
                                
                        ))
                    )
                }

            </ol>

        </div>
    )
}
