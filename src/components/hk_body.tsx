import MenuUnstyled from '@mui/base/MenuUnstyled';
import MenuItemUnstyled from '@mui/base/MenuItemUnstyled';
import styles from '../../styles/quickwin.module.css'
import React from "react";

export const Hk_Body = () => {


    return (
        <>
            <div className={styles.bodycontainer}>


                <img className={styles.slideshowimage} src={require("../../../../Desktop/Schule/Projekt/andere/quickwin_hk/src/resources/hk_project_team.jpg")} alt="asd"  />



                <div className={styles.title}>
                    Wir verleihen was Sie brauchen!
                </div>
                <div className={styles.text}>
                    Wir sind ein österreichisches Unternehmen mit Sitz in Rohrbach an der Gölsen, Niederösterreich.
                    HK Rent wurde 2016 gegründet und hat sich auf Maschinen- und Werkzeugverleih spezialisiert.
                    Mit unserem Mietservice können Sie sich professionelle Maschinen und Werkzeug einfach und kostengünstig mieten.
                </div>

                <div className={styles.title}>
                   Diese Website befindet sich gerade im Neuaufbau
                </div>
                <div className={styles.text}>
                    Die Neugestaltung unserer Homepage wird zum Maturaprojekt
                    von 5 Schülern, aus der Abschlussklasse, der HTL St. Pölten Abteilung Informatik.
                </div>

                <div className={styles.title}>
                    Unser Standort
                </div>
                <div className={styles.map}>
                    <iframe

                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10669.136396977889!2d15.7208173!3d48.0468521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x99fd2f6fa7dc97e3!2sHK%20Rent%20OG!5e0!3m2!1sde!2sat!4v1666097318977!5m2!1sde!2sat"
                        className={styles.googlemap}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>


            </div>
        </>
    );
}