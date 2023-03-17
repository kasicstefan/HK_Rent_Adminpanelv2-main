import styles from '../../styles/quickwin.module.css'
import React from "react";
import { useRouter } from 'next/router'
import {router} from "next/client";

export const Sidebar = () => {
    //const navigate = useNavigate();
    const router = useRouter()

function navigate(path: string) {

    router.push(path)
}

    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.sidebarentry} onClick={()=> navigate('/')}>Home</div>
                <div className={styles.sidebarentry} onClick={()=> navigate('/TestPage')}>Benutzer</div>
                <div className={styles.sidebarentry} onClick={() => navigate('/Adminproductpage')}>Produkte</div>
                <div className={styles.sidebarentry} onClick={()=> alert("opfer")}>Rabattcodes</div>
                <div className={styles.sidebarentry} onClick={()=> alert("opfer")}>Bestellungen</div>
            </div>

        </>
    );
}