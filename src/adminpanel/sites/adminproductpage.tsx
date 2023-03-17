import styles from '../../styles/quickwin.module.css'
import {useEffect, useState} from "react";
import {Machinecard} from "../cards/machinecard";
import {Sidebar} from "../components/sidebar";
import {Machinecardrented} from "../cards/machinecardrented";
import {Menubar} from "../../components/menubar";

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
import {NextPage} from "next";



const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const Adminproductpage: NextPage = () => {
    function createData(
        name: string,
        shortdescription: string,
        pictureurl: string,
        isavailable: boolean,
        price: number,
    ) {
        return { name, shortdescription, pictureurl, isavailable, price };
    }

    function createData1(
        name: string,
        wert: string,
    ) {
        return { name, wert};
    }

    const rows = [
        createData('Maschine 1', 'shortdesc', 'pictureurl', true, 100),
        createData('Maschine 2', 'shortdesc',  'pictureurl', true, 100),
        createData('Maschine 3', 'shortdesc',  'pictureurl', true, 100),
        createData('Maschine 4', 'shortdesc',  'pictureurl', true, 100),
    ];

    const specsrows = [
        createData1('Treibstoff', 'Diesel'),
    ];

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    const [products, setProducts] = useState([]);

    /*
    useEffect(() => {
        const fetchData = async () => {
            ProductControllerService.getAllProductsUsingGet()
                .then((e) => {
                    setProducts(e);
                })
                .catch((error) => alert(error));
        };

        fetchData();
    }, []);
*/
    return (
        <>
        <Menubar></Menubar>
            <div className={styles.admincontainer}>
            <Sidebar></Sidebar>
                <TableContainer component={Paper}>
                    <h2 className={styles.producth2}>Produkte</h2>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell align="center">Kurzbeschreibung</TableCell>
                                <TableCell align="center">Bildadresse</TableCell>
                                <TableCell align="center">Verfügbarkeit</TableCell>
                                <TableCell align="center">Preis</TableCell>
                                <TableCell align="center">ändern</TableCell>
                                <TableCell align="center">löschen</TableCell>
                                <TableCell align="center">Spezifikationen</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.shortdescription}</TableCell>
                                    <TableCell align="center">{row.pictureurl}</TableCell>
                                    <TableCell align="center">{row.isavailable}</TableCell>
                                    <TableCell align="center">{row.price}</TableCell>
                                    <TableCell align="center" ><button onClick={() => {setOpen(true)}} className={styles.machinetablebutton}>Ändern</button></TableCell>
                                    <TableCell align="center" ><button onClick={() => {setOpen3(true)}} className={styles.machinetablebutton1}>Löschen</button></TableCell>
                                    <TableCell align="center"><button onClick={() => {setOpen1(true)}} className={styles.specsbutton}>Spezifikationen</button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>




            <div>
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Box sx={style}>
                        <h3>Maschine ändern</h3>
                        <form>
                            <input type="text" defaultValue="name"/> Name <br/>
                            <input type="text" defaultValue="kurz"/> Kurzbeschreibung<br/>
                            <input type="text" /> Beschreibung<br/>
                            <input type="text"/> Bildadresse<br/>
                            <input type="text"/> Verfügbarkeit<br/>
                            <input type="text"/> Preis<br/>
                            <input type="text"/> Verfügbarkeit<br/><br/>
                            <button className={styles.confirmdeletionbutton}>Speichern</button>
                            <button className={styles.canceldeletionbutton} onClick={() => setOpen(false)}>Abbrechen</button>
                        </form>
                    </Box>
                </Modal>
            </div>



            <div>
                <Modal
                    open={open1}
                    onClose={() => setOpen1(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Box sx={style}>
                        <TableContainer>
                            <Table sx={{ minWidth: 250 }}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Wert</TableCell>
                                        <TableCell>Ändern</TableCell>
                                        <TableCell>Löschen</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {specsrows.map((specsrow) => (
                                        <TableRow
                                            key = {specsrow.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {specsrow.name}
                                            </TableCell>
                                            <TableCell>{specsrow.wert}</TableCell>
                                            <TableCell><Button className={styles.machinetablebutton} onClick={() => {setOpen2(true)}}>Ändern</Button></TableCell>
                                            <TableCell><Button className={styles.machinetablebutton1} onClick={() => {setOpen4(true)}}>Löschen</Button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <br/>
                        <div className={styles.specsbuttons}>
                        <Button className={styles.confirmdeletionbutton} onClick={() => setOpen5(true)}>Hinzufügen</Button>
                        <Button className={styles.canceldeletionbutton} onClick={() => setOpen1(false)}>Abbrechen</Button>
                        </div>
                    </Box>
                </Modal>
            </div>


            <div>
                <Modal
                    open={open2}
                    onClose={() => setOpen2(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <h3>Spezifikation ändern</h3>
                        <form>
                            <input type="text"/> Name<br/>
                            <input type="text"/> Wert<br/>
                            <br/>
                            <button className={styles.confirmdeletionbutton} onClick={() => {setOpen1(true)}}>Ändern</button>
                            <button className={styles.canceldeletionbutton} onClick={() => setOpen2(false)}>Abbrechen</button>

                        </form>
                    </Box>
                </Modal>
            </div>

            <div>
                <Modal
                    open={open3}
                    onClose={() => setOpen3(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Box sx={style}>
                        <h3>Möchten Sie die Maschine wirklich löschen?</h3>
                        <div className={styles.deletioncontent}>
                        <button className={styles.confirmdeletionbutton}>Bestätigen</button>
                        <button className={styles.canceldeletionbutton} onClick={()=>{setOpen3(false)}}>Abbrechen</button>
                        </div>
                    </Box>
                </Modal>
            </div>

            <div>
                <Modal
                    open={open4}
                    onClose={() => setOpen4(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Box sx={style}>
                        Möchten Sie die Spezifikation wirklich löschen?
                        <br/> <br/>
                        <div className={styles.deletioncontent}>
                            <button className={styles.confirmdeletionbutton}>Bestätigen</button>
                            <button className={styles.canceldeletionbutton} onClick={()=>{setOpen4(false)}}>Abbrechen</button>
                        </div>
                    </Box>
                </Modal>
            </div>

            <div>
                <Modal
                    open={open5}
                    onClose={() => setOpen5(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <h3>Spezifikation hinzufügen</h3>
                        <form>
                            <br/>
                            <input type="text"/> Name<br/>
                            <input type="text"/> Wert<br/>
                            <br/>
                            <button className={styles.confirmdeletionbutton}>Speichern</button>
                            <button className={styles.canceldeletionbutton} onClick={() => setOpen5(false)}>Abbrechen</button>
                        </form>
                    </Box>
                </Modal>
            </div>

        </>
    )
}

