import React from 'react'
import { HistoryBar } from './HistoryBar'
import { SearchGif } from './SearchGif'

export const ContainerSection = ({categories, setCategories}) => {
    return (
        <div className="row pt-5 px-5">
            <HistoryBar />
            <SearchGif categories={categories} setCategories={setCategories} />
        </div>
    )
}
