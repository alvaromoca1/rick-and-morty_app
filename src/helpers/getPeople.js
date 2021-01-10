export const getPeople = async (categoria) => {
    const url=`https://rickandmortyapi.com/api/character/?name=${categoria}&status=alive`;
    
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();

    const people = results.map(datas => {
        return{
            id:datas.id,
            name:datas.name,
            species:datas.species,
            image:datas.image,
        }
    })

    return(people);
}
