import React from "react";

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import {
    faBook,
    faScaleBalanced,
    faHammer,
    faBuildingColumns
} from '@fortawesome/free-solid-svg-icons'



const Hero = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
            <FontAwesomeIcon icon={faScaleBalanced}/>
            <FontAwesomeIcon icon={faHammer}/>
            <FontAwesomeIcon icon={faBuildingColumns} />
        </div>
    )
}

export default Hero;