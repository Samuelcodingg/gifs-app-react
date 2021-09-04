import React from 'react'

export const HistoryBar = ({listCategories, setCategories}) => {

    const handleSetCategoriesByList = (e) =>{
        e.preventDefault();

        setCategories([e.target.textContent]);
    }

    return (
        <div className="list-group col-md-3 px-0">
            {
                listCategories.map((category)=>(
                    <a href="/" key={category} onClick={handleSetCategoriesByList} className="list-group-item list-group-item-action">{category}</a>
                ))
            }
        </div>
    )
}
