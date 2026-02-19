//Hook useState
import {useState} from "react"

export default function DeleteCounter (){
    //state es el valor actual del estado
    //setState es la funcion para actualizar
    //useStata() es el valor incial
    const [count, setCount] = useState(0)

    return(
        <>
        <p>Counter</p>
        <button onClick={() => setCount(count+1)}>Incrementar</button>:
        </>
    )
}