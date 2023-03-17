import styles from "../../styles/quickwin.module.css";
import React, {useState} from "react";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import {Button, Table} from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";



type machinecardprops = {
    id: number,
}
type machine = {
    machine: machinecardprops
}
export const Machinecard = () => {
    const [isVermietet, setIsVermietet] = useState(true)
    function helperfunction(){
        //TODO get data from backend(over id)

    }

    const data = [

    ]

    function createDataRented(
        pictureurl: string,
        name: string,
        rentedfrom: string,
        rentedto: string,
        customername: string,
        price: number,
    ) {
        return {pictureurl, name, rentedfrom, rentedto, customername, price };
    }

    const rowsRented = [
        createDataRented('https://www.baumaschinenverleih.at/fileadmin/_processed_/e/2/csm_Hubsteiger_17m3_54db014b8c.jpg','Maschine 1', '01.01.2023', '02.02.2023', 'Max Muster', 100),
        createDataRented('https://www.baumaschinenverleih.at/fileadmin/_processed_/e/2/csm_Hubsteiger_17m3_54db014b8c.jpg', 'Maschine 2', '01.01.2023', '02.02.2023', 'Max Muster', 100),
        createDataRented('https://www.baumaschinenverleih.at/fileadmin/_processed_/e/2/csm_Hubsteiger_17m3_54db014b8c.jpg', 'Maschine 3', '01.01.2023', '02.02.2023', 'Max Muster', 100),
        createDataRented('https://www.baumaschinenverleih.at/fileadmin/_processed_/e/2/csm_Hubsteiger_17m3_54db014b8c.jpg', 'Maschine 4', '01.01.2023', '02.02.2023', 'Max Muster', 100),
    ];


    return(
        <>
            <div className={styles.admincontainer}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 900 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Bild</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Von</TableCell>
                                <TableCell align="center">Bis</TableCell>
                                <TableCell align="center">Kundenname</TableCell>
                                <TableCell align="center">Gesamtpreis</TableCell>
                                <TableCell align="center">Standort</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowsRented.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row" className={styles.tablecellwithpicture}>
                                        <img className={styles.machineimage} src={row.pictureurl} alt={row.name}/>
                                    </TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.rentedfrom}</TableCell>
                                    <TableCell align="center">{row.rentedto}</TableCell>
                                    <TableCell align="center">{row.customername}</TableCell>
                                    <TableCell align="center">{row.price}</TableCell>
                                    <TableCell align="center"><Button>Orten</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </>)
}