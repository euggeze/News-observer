import React from 'react'
import '../../../styles/SiteTitles.css'

const MenuBlock = ({setSelectedCategory}) => {
    const categories = ['New stories', 'Best stories', 'Top stories']
    const listCategories = categories.map((category,index) => {
        if (index < categories.length - 1) {
            return <a className="categoryStyle" onClick={() => setSelectedCategory(category)}> {category} |</a>
        }
        else{
            return <a className="categoryStyle" onClick={() => setSelectedCategory(category)}> {category}</a>
        }
    })
    return (<div>
        {listCategories}
    </div>)
}

export default MenuBlock