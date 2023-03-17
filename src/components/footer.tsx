import styles from '../../styles/quickwin.module.css'
import React from "react";

export const Footer = () => {


    return (
        <>
            <div className={styles.footercontainer}>

                <div className={styles.footerTextContainer}>
                    <div className={styles.footertext}>©HK-Rent Projektteam 2022</div>
                    <div className={styles.footertext}>
                        Nummer:
                        <a href="tel: 436769342721"> +43 676 9342721</a>
                    </div>
                    <div className={styles.footertext}>
                        E-Mail:
                        <a href= "mailto:hk.rent.og@gmail.com">  hk.rent.og@gmail.com</a>
                    </div>
                </div>
            </div>
        </>
    );
}