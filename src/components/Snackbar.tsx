import { Snackbar, Alert } from '@mui/material';
import type { SnackbarCloseReason } from '@mui/material/Snackbar';

type Props = {
    resetHandler: () => void;
    winner: 0 | 1 | 2;
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
                severity="success"
                variant='filled'
                sx={{ width: '100%' }}
            >
                {`Player ${(winner === 1 ? "Red" : "Blue")} wins!`}
            </Alert>
        </Snackbar>

    )
}