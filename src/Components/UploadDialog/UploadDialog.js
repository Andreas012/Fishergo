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

const UploadDialog = (props) => {

    const [image, setImage] = useState('');

    const fishRef = useRef(null);
    const nameRef = useRef(null);
    const locationRef = useRef(null);

    const upload = () => {
        if (image == null)
            return;
        else
            CreateCard(image, fishRef.current.value, nameRef.current.value, locationRef.current.value).then(() => {
                return props.handleClose();
            });
    }

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose}>
                <DialogTitle>Ladda upp</DialogTitle>
                <DialogContent>
                    <center>
                        <input type="file" onChange={(e) => { setImage(e.target.files[0]) }} />
                        <Select
                            autoFocus
                            inputRef={fishRef}
                            margin="dense"
                            id="fish"
                            label="Fisk"
                            type="text"
                            fullWidth
                            variant="standard"
                        >
                            <MenuItem value={"Abborre"}>Abborre</MenuItem>
                            <MenuItem value={"Berggylta"}>Berggylta</MenuItem>
                            <MenuItem value={"Bergtunga"}>Bergtunga</MenuItem>
                            <MenuItem value={"Bleka"}>Bleka</MenuItem>
                            <MenuItem value={"Braxen"}>Braxen</MenuItem>
                            <MenuItem value={"Fjärsing"}>Fjärsing</MenuItem>
                            <MenuItem value={"Gädda"}>Gädda</MenuItem>
                            <MenuItem value={"Gös"}>Gös</MenuItem>
                            <MenuItem value={"Havskatt"}>Havskatt</MenuItem>
                            <MenuItem value={"Hellefisk"}>Hellefisk</MenuItem>
                            <MenuItem value={"Hoki"}>Hoki</MenuItem>
                            <MenuItem value={"Horngädda"}>Horngädda</MenuItem>
                            <MenuItem value={"Hummer"}>Hummer</MenuItem>
                            <MenuItem value={"Hälleflundra"}>Hälleflundra</MenuItem>
                            <MenuItem value={"Kammussla"}>Kammussla</MenuItem>
                            <MenuItem value={"Karp"}>Karp</MenuItem>
                            <MenuItem value={"Knot"}>Knot</MenuItem>
                            <MenuItem value={"Kolja"}>Kolja</MenuItem>
                            <MenuItem value={"Krabba"}>Krabba</MenuItem>
                            <MenuItem value={"Kräfta flod"}>Kräfta flod</MenuItem>
                            <MenuItem value={"Kräfta havs"}>Kräfta havs</MenuItem>
                            <MenuItem value={"Kräfta signal"}>Kräfta signal</MenuItem>
                            <MenuItem value={"Kummel"}>Kummel</MenuItem>
                            <MenuItem value={"Kungsfisk"}>Kungsfisk</MenuItem>
                            <MenuItem value={"Lake"}>Lake</MenuItem>
                            <MenuItem value={"Lax"}>Lax</MenuItem>
                            <MenuItem value={"Lubb"}>Lubb</MenuItem>
                            <MenuItem value={"Långa"}>Långa</MenuItem>
                            <MenuItem value={"Makrill"}>Makrill</MenuItem>
                            <MenuItem value={"Marulk"}>Marulk</MenuItem>
                            <MenuItem value={"Ostron"}>Ostron</MenuItem>
                            <MenuItem value={"Pigghaj"}>Pigghaj</MenuItem>
                            <MenuItem value={"Piggvar"}>Piggvar</MenuItem>
                            <MenuItem value={"Regnbågslax"}>Regnbågslax</MenuItem>
                            <MenuItem value={"Rocka"}>Rocka</MenuItem>
                            <MenuItem value={"Räka Nordhavs"}>Räka Nordhavs</MenuItem>
                            <MenuItem value={"Röding"}>Röding</MenuItem>
                            <MenuItem value={"Rödspätta/rödspotta"}>Rödspätta/rödspotta</MenuItem>
                            <MenuItem value={"Rödtunga"}>Rödtunga</MenuItem>
                            <MenuItem value={"Sandskädda"}>Sandskädda</MenuItem>
                            <MenuItem value={"Sej"}>Sej</MenuItem>
                            <MenuItem value={"Sik"}>Sik</MenuItem>
                            <MenuItem value={"Siklöja"}>Siklöja</MenuItem>
                            <MenuItem value={"Sill/Strömming"}>Sill/Strömming</MenuItem>
                            <MenuItem value={"Sillhaj"}>Sillhaj</MenuItem>
                            <MenuItem value={"Sjurygg"}>Sjurygg</MenuItem>
                            <MenuItem value={"Sjötunga"}>Sjötunga</MenuItem>
                            <MenuItem value={"Skarpsill"}>Skarpsill</MenuItem>
                            <MenuItem value={"Skrubbskädda, skrubba eller flundra"}>Skrubbskädda, skrubba eller flundra</MenuItem>
                            <MenuItem value={"Slätvar"}>Slätvar</MenuItem>
                            <MenuItem value={"Tonfisk"}>Tonfisk</MenuItem>
                            <MenuItem value={"Torsk"}>Torsk</MenuItem>
                            <MenuItem value={"Vitling"}>Vitling</MenuItem>
                            <MenuItem value={"Ål"}>Ål</MenuItem>
                        </Select>
                        <TextField
                            inputRef={nameRef}
                            margin="dense"
                            id="name"
                            label="Namn"
                            type="text"
                            fullWidth
                            variant="standard"
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