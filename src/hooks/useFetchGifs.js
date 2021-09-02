import { useEffect, useState } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = ((category) => {

    const [state, setState] = useState({
        data: []
    });

    useEffect(()=> { 
        getGifs( category)
            .then(gif => setState({
                data: gif
            }))
    }, [category]);
    
    console.log(state);

    return state; 
})