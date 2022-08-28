import React,{useState,useContext} from "react"
import { MovieContext } from "./MovieContactList";
import AddButton from "./AddButton"


const AddMovie = () => {
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [movie,setMovie] = useContext(MovieContext)

    const updateName = (e) => {
        setName(e.target.value)
    }
    const updatePrice = (e) => {
        setPrice(e.target.value)
    }
    const addMovie = (e) => {
        e.preventDefault();
        setMovie(preMovies => [...preMovies,{name: name,price:price}])
    }
    //Toast Button
    const showToast = () => console.log("show Toast")
    return(
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice}/>
            <AddButton handleClick={() => showToast()}>Submit</AddButton>
        </form>
    )
}
export default AddMovie