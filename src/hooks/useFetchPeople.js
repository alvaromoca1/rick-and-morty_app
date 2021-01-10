import {useState, useEffect} from 'react'
import {getPeople} from '../helpers/getPeople'

export const useFetchPeople = (categoria) => {
    const [state, setState] = useState({
        data:[],
        loading: true,
    });
    useEffect(() => {
        getPeople(categoria)
        .then((people) =>{
            setState({
                data: people,
                loading:false,
            })
        })
    }, [categoria])
    return state;
}
