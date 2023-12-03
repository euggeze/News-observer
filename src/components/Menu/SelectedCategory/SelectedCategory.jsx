import React from 'react'
import '../../../styles/SiteTitles.css'

const SelectedCategory = ({selectedCategory}) => {
    return <h3 className='selectedCategoryStyle'>{selectedCategory}</h3>
}

export default SelectedCategory