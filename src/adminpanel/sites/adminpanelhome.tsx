import styles from '../../styles/quickwin.module.css'
import React from "react";
import {Machinecard} from "../cards/machinecard";
import {Sidebar} from "../components/sidebar";
import {Machinecardrented} from "../cards/machinecardrented";
import {Menubar} from "@/components/menubar";
import {NextPage} from "next";


export const hubsteiger = {
    id: 'hubsteiger',
    name: 'Hubsteiger',
    shortdescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    fulldescription: 'THIS IS THE LONGE DESCRIPTION OF A HUBSTEIGER BLA BLA BLA',
    pictureurl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.18169-9/18813591_271218723350818_4586530245813470949_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=qJembP_CKCcAX_uOAwU&_nc_ht=scontent-vie1-1.xx&oh=00_AfAFB74tOn4JcvCJgyKqW-hQqBkY7PdXVgZTsk4lGuQTPw&oe=6384E89F',
    price: 240,
    isavaible: true,
    spezifications: ['Arbeitshöhe', '15m', 'Treibstoff', 'Diesel', 'Transportmöglichkeit', ' Tieflader',]
};
export const bagger15t = {
    id: 'bagger15t',
    name: 'Bagger 7,5T',
    shortdescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    fulldescription: 'THIS IS THE LONGE DESCRIPTION OF A HUBSTEIGER BLA BLA BLA',
    pictureurl: ' https://scontent-vie1-1.xx.fbcdn.net/v/t1.6435-9/94353921_894399431032741_5372626001324933120_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OiILnNU2008AX8PGNMq&_nc_ht=scontent-vie1-1.xx&oh=00_AfDS_k6vbG4SzcoXWTbJ9SxsPg9miwPyMZIt4K_-1O-5-w&oe=63904AD5',
    price: 0,
    isavaible: true,
    spezifications: ['Arbeitshöhe', '15m', 'Treibstoff', 'Diesel', 'Transportmöglichkeit', ' Tieflader',]
};

export const cartrailer = {
    id: 'cartrailer',
    name: 'Autoanhänger',
    shortdescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    fulldescription: 'THIS IS THE LONGE DESCRIPTION OF A HUBSTEIGER BLA BLA BLA',
    pictureurl: 'https://scontent-vie1-1.xx.fbcdn.net/v/t1.18169-9/19029314_274156246390399_99387921772951255_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=LQpo0_LRmT0AX-f39m7&_nc_ht=scontent-vie1-1.xx&oh=00_AfDT0CZub2Ge_5eQpYgbbG5jugnvR33yo5rStAzDS3-LfA&oe=638C356B',
    price: 0,
    isavaible: true,
    spezifications: ['Arbeitshöhe', '15m', 'Treibstoff', 'Diesel', 'Transportmöglichkeit', ' Tieflader',]
};

export const tieflader = {
    id: 'tieflader',
    name: 'Tieflader',
    shortdescription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
    fulldescription: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)',
    pictureurl: 'https://griener.de/wp-content/uploads/2019/08/9474_01-757x504.jpg',
    price: 500,
    isavaible: true,
    spezifications: ['Arbeitshöhe', '15m', 'Treibstoff', 'Diesel', 'Transportmöglichkeit', ' Tieflader',]
};
export const testpros = [hubsteiger, bagger15t, cartrailer, tieflader];


export const Adminpanelhome: NextPage = () => {
    return (
        <>
            <Menubar/>
            <div className={styles.admincontainer}>
                <Sidebar></Sidebar>

                <div>
                    <div className={styles.machinelist}>
                        <h2>Vermietete Maschinen</h2>
                        <Machinecard/>
                    </div>
                    <div className={styles.machinelist}>
                        <div id="available-cars">
                            <h2>Verfügbare Maschinen</h2>
                            <Machinecardrented/>
                        </div>

                    </div>

                </div>

            </div>
        </>
    );
}