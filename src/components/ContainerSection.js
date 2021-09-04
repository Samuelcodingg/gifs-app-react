import React from 'react'
import { HistoryBar } from './HistoryBar'
import { SearchGif } from './SearchGif'

export const ContainerSection = ({categories, setCategories, listCategories, setListCategories}) => {
    return (
        <div className="row pt-5 px-5">
            <HistoryBar listCategories={listCategories} />
            <SearchGif categories={categories} setCategories={setCategories} listCategories={listCategories} setListCategories={setListCategories}/>
        </div>
    )
}
