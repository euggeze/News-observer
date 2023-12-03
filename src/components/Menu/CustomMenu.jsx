import React from 'react'
import MenuBlock from "./CustomBlockWithA/MenuBlock";
import SiteTitle from "./CustomSiteTitle/SiteTitle";
import SelectedCategory from "./SelectedCategory/SelectedCategory";
import '../../styles/SiteTitles.css'

const CustomMenu = ({selectedCategory, setSelectedCategory}) => {
    return <div className='titleBlock'>
        <SiteTitle/>
        <MenuBlock setSelectedCategory={setSelectedCategory}/>
        <SelectedCategory selectedCategory={selectedCategory}/>
    </div>
}

export default CustomMenu;