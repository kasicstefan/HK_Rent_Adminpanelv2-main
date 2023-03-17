import styles from '../../styles/quickwin.module.css'
import React, {useState} from "react";
import {Machinecard} from "../cards/machinecard";
import {Sidebar} from "../components/sidebar";
import {Machinecardrented} from "../cards/machinecardrented";
import {Menubar} from '../../components/menubar'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Adminuserpage = () => {
    return (
        <>
            <Menubar></Menubar>
        <div className={styles.admincontainer}>
            <Sidebar></Sidebar>
            <TableContainer component={Paper}>
            <h2 className={styles.producth2}>Benutzer verwalten</h2>
            </TableContainer>
        </div>
        </>
    )
}