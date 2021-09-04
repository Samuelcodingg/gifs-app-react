import React, { useState } from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifContainer } from './GifContainer';

export const SearchGif = ({setCategories, categories, listCategories, setListCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            //get data
            // const gifs = await getGifs(inputValue);
            setCategories([inputValue]);
            setListCategories([inputValue,...listCategories.slice(0,9)]);
            setInputValue('');
            // setData([gifs]);
        }
    }

    return (
        <div className="col-md-9 mt-3 mt-md-0 px-0 px-md-3">
            <form className="d-flex" onSubmit={handleSubmit}>
                <input type="text" className="form-control" value={inputValue} onChange={handleInputValue}/>
                <button className="btn btn-dark ms-3">Search</button>
            </form>
            <div className="container">
                {
                    categories.map((category) => 
                        <GifContainer key={category} category={category} />
                    )
                }
            </div>
        </div>
    )
}
