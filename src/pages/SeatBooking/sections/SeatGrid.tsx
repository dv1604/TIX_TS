import { Button, Grid } from '@mui/material'
import React, { useState } from 'react'

type SeatStatus = 'Sold' | 'Available' | 'Selected'

interface Seat {
    id: string,
    status: SeatStatus
}

// First section of seats
const rows = [
    ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'A10'],
    ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9', 'B10'],
    ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10'],
    ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'],
    ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8', 'E9', 'E10'],
    ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'],
    ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8', 'G9', 'G10'],
    ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10'],
]

// Second section of seats
const secondRows = [
    ['A11', 'A12', 'A13', 'A14', 'A15', 'A16', 'A17', 'A18', 'A19', 'A20'],
    ['B11', 'B12', 'B13', 'B14', 'B15', 'B16', 'B17', 'B18', 'B19', 'B20'],
    ['C11', 'C12', 'C13', 'C14', 'C15', 'C16', 'C17', 'C18', 'C19', 'C20'],
    ['D11', 'D12', 'D13', 'D14', 'D15', 'D16', 'D17', 'D18', 'D19', 'D20'],
    ['E11', 'E12', 'E13', 'E14', 'E15', 'E16', 'E17', 'E18', 'E19', 'E20'],
    ['F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20'],
    ['G11', 'G12', 'G13', 'G14', 'G15', 'G16', 'G17', 'G18', 'G19', 'G20'],
    ['H11', 'H12', 'H13', 'H14', 'H15', 'H16', 'H17', 'H18', 'H19', 'H20'],
]

const SeatGrid = () => {

    const [seats, setSeats] = useState<Seat[][]>(
        rows.map(row => (
            row.map(id => ({
                id,
                status: Math.random() > 0.8 ? 'Sold' : 'Available'
            }))
        ))
    );

    const [secondSeats, setSecondSeats] = useState<Seat[][]>(
        secondRows.map(row => (
            row.map(id => ({
                id,
                status: Math.random() > 0.8 ? 'Sold' : 'Available'
            }))
        ))
    );

    const handleSelectSeat = (rowIndex: number, seatIndex: number, section: 'first' | 'second') => {
        if (section === 'first') {
            setSeats(prevSeats => (
                prevSeats.map((row, rIndx) => (
                    row.map((seat, seatIndx) => (
                        rIndx === rowIndex && seatIndx === seatIndex
                            ? { ...seat, status: seat.status === 'Selected' ? 'Available' : 'Selected' }
                            : seat
                    ))
                ))
            ));
        } else {
            setSecondSeats(prevSeats => (
                prevSeats.map((row, rIndx) => (
                    row.map((seat, seatIndx) => (
                        rIndx === rowIndex && seatIndx === seatIndex
                            ? { ...seat, status: seat.status === 'Selected' ? 'Available' : 'Selected' }
                            : seat
                    ))
                ))
            ));
        }
    };

    return (
        <Grid container justifyContent="center" sx={{ mt: 5, width: '100%', display: 'flex', flexDirection: 'row', gap: 6 }}>
            {/* First Section (Left) */}
            <Grid item>
                <Grid container direction="column" spacing={0.5}>
                    {seats.map((row, rowIndex) => (
                        <Grid container key={rowIndex} justifyContent="center">
                            {row.map((seat, seatIndex) => (
                                <Grid item key={seatIndex} sx={{ margin: '4px' }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            width: 45,  // Force exact width
                                            height: 45, // Force exact height
                                            minWidth: 'unset', // Remove MUI default width (fixes extra width issue)
                                            borderRadius: '6px',
                                            boxShadow: 'none',
                                            border: '1px solid',
                                            borderColor: 'grey.300',
                                            bgcolor: seat.status === 'Sold' ? 'royalblue.main' :
                                                seat.status === 'Selected' ? 'links.main' : 'primary.main',
                                            color: seat.status === 'Available' ? 'grey.900' : 'primary.main',
                                            fontWeight: 700,
                                            '&:hover': {
                                                bgcolor: seat.status === 'Available' ? 'royalblue.main' :
                                                    seat.status === 'Selected' ? 'links.main' : 'primary.main',
                                                color: 'white'
                                            }
                                        }}
                                        onClick={() => seat.status === 'Available' && handleSelectSeat(rowIndex, seatIndex, 'first')}
                                    >
                                        {seat.id}
                                    </Button>

                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            {/* Second Section (Right) */}
            <Grid item>
                <Grid container direction="column" spacing={0.5}>
                    {secondSeats.map((row, rowIndex) => (
                        <Grid container key={rowIndex} justifyContent="center">
                            {row.map((seat, seatIndex) => (
                                <Grid item key={seatIndex} sx={{ margin: '4px' }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            width: 45,  // Force exact width
                                            height: 45, // Force exact height
                                            minWidth: 'unset', // Remove MUI default width (fixes extra width issue)
                                            borderRadius: '6px',
                                            boxShadow: 'none',
                                            border: '1px solid',
                                            borderColor: 'grey.300',
                                            bgcolor: seat.status === 'Sold' ? 'royalblue.main' :
                                                seat.status === 'Selected' ? 'links.main' : 'primary.main',
                                            color: seat.status === 'Available' ? 'grey.900' : 'primary.main',
                                            fontWeight: 700,
                                            '&:hover': {
                                                bgcolor: seat.status === 'Available' ? 'royalblue.main' :
                                                    seat.status === 'Selected' ? 'links.main' : 'primary.main',
                                                color: 'white'
                                            }
                                        }}
                                        onClick={() => seat.status === 'Available' && handleSelectSeat(rowIndex, seatIndex, 'second')}
                                    >
                                        {seat.id}
                                    </Button>

                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>


    );
};

export default SeatGrid;
