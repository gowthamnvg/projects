import { Box, Button, Card, CardActions, CardContent, FormControlLabel, MenuItem, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React from 'react';


const SubscriptionEntry: React.FC = () => {

    const currencies = [
        {
            value: '',
            label: ' None '
        },
        {
            value: 'USD',
            label: 'Pattnam',
        },
        {
            value: 'EUR',
            label: 'pattnam-1',
        },
        {
            value: 'BTC',
            label: 'pattnam-2',
        },
        {
            value: 'JPY',
            label: 'pattnam-3',
        },
    ];
    const card = (
        <React.Fragment>
            <CardContent>
                <TextField
                    id="village-name"
                    select
                    label={
                        <Typography style={{ fontSize: "12px" }}>
                            Select Village Name
                        </Typography>
                    }
                    style={{ marginBottom: "10px", minWidth: "-webkit-fill-available" }}
                    size='small'
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="person-name"
                    select
                    label={
                        <Typography style={{ fontSize: "12px" }}>
                            Select Person Name
                        </Typography>
                    }
                    style={{ marginBottom: "10px", minWidth: "-webkit-fill-available" }}
                    size='small'
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="box-number"
                    select
                    label={
                        <Typography style={{ fontSize: "12px" }}>
                            Select Box Number
                        </Typography>
                    }
                    style={{ marginBottom: "10px", minWidth: "-webkit-fill-available", fontSize: "8px" }}
                    size='small'
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField fullWidth
                    label={
                        <Typography style={{ fontSize: "12px" }}>
                            Amount
                        </Typography>
                    }
                    id="amount"
                    size='small' />
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue="paid"
                >
                    <FormControlLabel value="paid" control={<Radio size='small' />}
                        label={
                            <Typography style={{ fontSize: "12px" }}>
                                Paid
                            </Typography>
                        } />
                    <FormControlLabel value="not-paid" control={<Radio size='small'/>} label={
                        <Typography style={{ fontSize: "12px" }}>
                            Not Paid
                        </Typography>
                    } />
                </RadioGroup>
            </CardContent>
            <CardActions style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
                <Button variant="contained">Submit</Button>
            </CardActions>
        </React.Fragment>
    );
    return (
        <div className="App">
            <header className="App-header" style={{ overflow: "hidden" }}>
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Card variant="outlined" style={{ width: "300px" }}>
                        <p style={{ fontSize: "18px", fontWeight: "bolder" }}>RadhaKrishnan CableNetwork</p>
                        {card}
                    </Card>
                </Box>
            </header>
        </div>
    )
}
export default SubscriptionEntry