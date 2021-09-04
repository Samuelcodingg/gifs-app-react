import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifContainer = ({ category }) => {

    const { data } = useFetchGifs(category);

    return (
        <div className="row mt-4">
                {
                    data.map((img) =>
                        <div className="card col-sm-6 col-md-4 p-0" key={img.id}>
                            <img src={img.url} alt={img.title} className="card-img " />
                        </div>
                    )
                }
        </div>

    )
}
