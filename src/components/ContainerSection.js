import React from 'react'
import { HistoryBar } from './HistoryBar'
import { SearchGif } from './SearchGif'

export const ContainerSection = () => {
    return (
        <div className="row pt-5 px-5">
            <HistoryBar />
            <SearchGif />
        </div>
    )
}
