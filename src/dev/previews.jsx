import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import SiteTitle from "../components/Menu/CustomSiteTitle/SiteTitle";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/SiteTitle">
                <SiteTitle/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews