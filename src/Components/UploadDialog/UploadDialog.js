import * as React from 'react';
import { useState, useRef } from 'react';
import { CreateCard } from '../../Firebase/Firebase';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Select from '@mui/material/Select';
import { MenuItem } from '@mui/material';
import { useStore } from '../../Context/Context';

const fishes = [
    "Abborre",
    "Berggylta",
    "Bergtunga",
    "Bleka",
    "Braxen",
    "Fjärsing",
    "Gädda",
    "Gös",
    "Havskatt",
    "Hellefisk",
    "Hoki",
    "Horngädda",
    "Hummer",
    "Hälleflundra",
    "Kammussla",
    "Karp",
    "Knot",
    "Kolja",
    "Krabba",
    "Kräfta flod",
    "Kräfta havs",
    "Kräfta signal",
    "Kummel",
    "Kungsfisk",
    "Lake",
    "Lax",
    "Lubb",
    "Långa",
    "Makrill",
    "Marulk",
    "Ostron",
    "Pigghaj",
    "Piggvar",
    "Regnbågslax",
    "Rocka",
    "Räka Nordhavs",
    "Röding",
    "Rödspätta/rödspspotta",
    "Rödtunga",
    "Sandskädda",
    "Sej",
    "Sik",
    "Siklöja",
    "Sill/Strömming",
    "Sillhaj",
    "Sjurygg",
    "Sjötunga",
    "Skarpsill",
    "Skrubbskädda, skrubba eller flundra",
    "Slätvar",
    "Tonfisk",
    "Torsk",
    "Vitling",
    "Ål"
]

const UploadDialog = (props) => {

    const context = useStore();

    const [image, setImage] = useState('');

    const fishRef = useRef(null);
    const nameRef = useRef(null);
    const locationRef = useRef(null);
    const weightRef = useRef(null);
    const lengthRef = useRef(null);
    const lureRef = useRef(null);

    const upload = () => {
        if (image == null)
            return;
        else
            CreateCard(
                image,
                fishRef.current.value,
                nameRef.current.value,
                locationRef.current.value,
                weightRef.current.value,
                lengthRef.current.value,
                lureRef.current.value,
            ).then(() => {
                return props.handleClose();
            });
    }

    return (
        <div>
            <Dialog open={context.open ? context.open : false} onClose={() => { context.setOpen(false) }}>
                <DialogTitle>Ladda upp</DialogTitle>
                <DialogContent>
                    <center>
                        <input type="file" onChange={(e) => { setImage(e.target.files[0]) }} />
                        <Select
                            autoFocus
                            inputRef={fishRef}
                            placeholder='Fisk'
                            type="text"
                            fullWidth
                            defaultValue={"Abborre"}
                        >
                            {fishes.map((fish) => {
                                return <MenuItem key={fish} value={fish}>{fish}</MenuItem>
                            })}
                        </Select>
                        <TextField
                            inputRef={nameRef}
                            margin="dense"
                            id="name"
                            label="Namn"
                            type="text"
                            fullWidth
                            variant="standard"
                            defaultValue={context.userProfile ? context.userProfile.name : ""}
                            disabled
                        />
                        <TextField
                            inputRef={locationRef}
                            margin="dense"
                            id="place"
                            label="Plats"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            inputRef={weightRef}
                            margin="dense"
                            id="place"
                            label="Vikt (kg)"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            inputRef={lengthRef}
                            margin="dense"
                            id="place"
                            label="Längd (cm)"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            inputRef={lureRef}
                            margin="dense"
                            id="place"
                            label="Drag"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                    </center>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => upload()}>Ladda upp</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default UploadDialog;