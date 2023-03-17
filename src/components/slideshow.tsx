import styles from '../../styles/quickwin.module.css'
import React, {useEffect, useState} from "react";


export const Slideshow = () => {
    let sliderindex = 0;
    const [picture1, setPicture1Visible] = useState(false);
    const [picture2, setPicture2Visible] = useState(false);
    const [picture3, setPicture3Visible] = useState(true);
    const [picture4, setPicture4Visible] = useState(false);







    return (


        <div className={styles.slideshowimage}>
            {picture3 && <img src={require("../../../../Desktop/Schule/Projekt/andere/quickwin_hk/src/resources/hk_project_team.jpg")} alt="asd" style={{height: '500%'}}/>}
        </div>

    )
}