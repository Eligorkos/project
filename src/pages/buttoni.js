import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Link to="/Cabinet">
      <Button variant="contained">Contained</Button>
      </Link>
    </Stack>
  );
}