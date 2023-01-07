import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeColor } from '../features/themeSlice'

function ChangeColor(){

    const [color, setColor] = useState("");
    const dispatch = useDispatch()
    //we need dispatch to use our reducer functions 
    //definded in the themeSlice reducer

    return(
        <div>
            <input type="text" onChange={(e) => setColor(e.target.value)} />
            <button onClick={()=> {dispatch(changeColor(color))}}>Change Color</button>
        </div>
    )
}

export default ChangeColor;