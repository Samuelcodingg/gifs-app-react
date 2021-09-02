import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifContainer = ({category}) => {

    const {data} = useFetchGifs(category);

    return (
        <div className="card-grid">
            {
                data.map((img)=>
                    <img src={img.url} alt={img.title} />
                )
            }
        </div>
    )
}
