import React, { useState } from "react"
import { navigate } from "@reach/router";



const Search = () => {

    const [form, setForm] = useState({
        option: "people",
        id:""
    });

    const onChangeHandler = (event) => {
        setForm({
            //[event.target.name] in brackets because that is a variable 
            ...form,
            [event.target.name]: event.target.value
        });
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        navigate("/" + form.option + "/" + form.id)
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <label>Search for:</label>
            <select name="option" value={form.option} onChange={onChangeHandler}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <label>ID:</label>
            <input name="id" value={form.id} onChange={onChangeHandler}/>
            <button>Search</button>
        </form>
    )
} 

export default Search;