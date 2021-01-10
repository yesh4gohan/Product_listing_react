import {TileContainer,TileImg,TileHeading,TileDesc,SizeTile} from './styles';
import React from 'react';
const ProductTile = React.forwardRef(({id,imageUrl,title,sizeVariation,subTitle},ref) => {
    const getSize = (sizeVariation) => {
        if(Array.isArray(sizeVariation) && sizeVariation.length){
            let sizes = [];
            for(let size of sizeVariation){
                const {title} = size;
                if(!!title && title !== ""){
                    sizes.push(title)
                }
            }
            return sizes.join(',')
        }
        else {
            return "N/A"
        }
    }
    return (
        <TileContainer id={id} ref={ref}>
            <TileImg src={imageUrl} alt="placeholder"/>
            <TileHeading>{title || "N/A"}</TileHeading>
            <TileDesc>{subTitle || "N/A"}</TileDesc>
            <SizeTile>{getSize(sizeVariation)}</SizeTile>
        </TileContainer>
    )   
})

export default ProductTile;