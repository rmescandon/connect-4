import { Circle } from "./Circle";
import type { Status } from "./Circle";
import { Grid, Box } from "@mui/material";
import { useState } from "react";

const ROWS = 6;

type Props = {
    id: number;
    turn: 1 | 2;
    changeTurnCallback: () => void;
}

export const Column = ({ id, turn, changeTurnCallback }: Props) => {
    const [cells, setCells] = useState<Status[]>(Array(ROWS).fill(0 as Status)); // Start from the bottom (0 position

    const handleClick = () => {
        const newCells = [...cells];
        for (let i = 0; i < ROWS; i++) {
            if (newCells[i] === 0) {
                newCells[i] = turn;
                break;
            }
        }
        console.log("Clicked column", id, "turn", turn, "newCells", newCells);
        setCells(newCells);
        changeTurnCallback(); // Change turn after placing a piece
    }

    return (
        <Grid
            container
            direction="column"
            key={id}
            spacing={2}
            onClick={handleClick}
        >
            <Box
                sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: 'gray',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: 80 / 4
                }}
            >
                ⬇︎
            </Box>
            
            {[...cells].reverse().map((cell, idx) => {
                const cellIdx = ROWS - 1 - idx; // Reverse the index to start from the bottom
                return (
                    <Circle
                        id={[cellIdx, id]} // Row and column index
                        color={cell}
                    >
                        {`${cellIdx}${id}`}
                    </Circle>
                )
            })}
        </Grid>

    );
}
