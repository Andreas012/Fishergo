import { useEffect, useState } from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { GetTopList } from "../../Firebase/Firebase";

import './Highscore.css';

const Highscore = () => {

    const [topList, setTopList] = useState([]);

    useEffect(() => {
        const GetHighscores = async () => {
            await GetTopList().then((cards) => {
                setTopList(cards);
            })
        };
        GetHighscores();
    }, []);

    return (
        <div className="Highscore">
            <h1>🏆</h1>
            <h1 className="Header-Text">TOPPLISTA</h1>
            <TableContainer component={Paper} className="TopList">
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ fontWeight: '600' }}>Fiskare</TableCell>
                            <TableCell style={{ textAlign: 'center', fontWeight: '600' }}>Fisk</TableCell>
                            <TableCell style={{ textAlign: 'center', fontWeight: '600' }}>Vikt (kg)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {topList.map((row, i) => {
                            console.log(i)
                            return (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : null}{row.name}
                                    </TableCell>
                                    <TableCell align="center">{row.fishName}</TableCell>
                                    <TableCell align="center">{row.weight}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Highscore;