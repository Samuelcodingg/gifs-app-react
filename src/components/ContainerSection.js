import React from 'react'
import { HistoryBar } from './HistoryBar'
import { SearchGif } from './SearchGif'

export const ContainerSection = ({categories, setCategories, listCategories, setListCategories}) => {
    return (
        <div className="row pt-5 px-5 container-section">
            <HistoryBar listCategories={listCategories} setCategories={setCategories}/>
            <SearchGif categories={categories} setCategories={setCategories} listCategories={listCategories} setListCategories={setListCategories}/>
        </div>
    )
}
