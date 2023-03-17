import React from "react";
import styles from '../styles/quickwin.module.css';

export const Menubar = () => {

    function error(){
        alert("Diese Website wird gerade von Grund auf erneuert, wir bitten um Ihr Verständnis.")
    }

    return (
        <>
            <div className={styles.menubar}>
                <img src={require('../resources/hk_rent_logo.jpg')} alt="HK_RENT_LOGO" className={styles.logo}/>
               <div className={styles.menubarbuttongroup}>
                    <div className={styles.menubarbutton} onClick={error}>Produkte</div>
                    <div className={styles.menubarbutton} onClick={error}>Login</div>
                    <div className={styles.menubarbutton} onClick={error}>Registrieren</div>
                    <div className={styles.menubarbutton} onClick={error}>Admin</div>
               </div>

            </div>
        </>
    );
}