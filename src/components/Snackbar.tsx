import { Snackbar, Alert } from '@mui/material';
import type { SnackbarCloseReason } from '@mui/material/Snackbar';

type Props = {
    resetHandler: () => void;
    winner: 0 | 1 | 2 | -1; // 0 = no winner, 1 = red, 2 = blue, -1 = draw
}


export const GameSnackbar = ({ resetHandler, winner }: Props) => {
    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        resetHandler(); // Call the reset handler to reset the game state
    };

    return (
        <Snackbar open={!!winner} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
            <Alert
                onClose={handleClose}
                severity={(winner === -1 ? 'info' : 'success')}
                variant='filled'
                sx={{ width: '100%' }}
            >
                {(winner === -1) ? "It's a draw!" : winner === 1 ? "Red wins!" : winner === 2 ? "Blue wins!" : ""}
            </Alert>
        </Snackbar>

    )
}