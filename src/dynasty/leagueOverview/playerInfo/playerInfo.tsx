import React from 'react';
import './playerInfo.css';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

interface props {
  name: string;
  weight: string;
}

export default function PlayerInfo(props: props) {
  return (
    <Accordion
      sx={{
        background: 'rgb(158, 162, 162, 0.9)',
      }}
    >
      <AccordionSummary sx={{ marginInline: '1px' }} className="player-name">
        <div>{props.name}</div>
      </AccordionSummary>
      <AccordionDetails>{props.weight} lbs</AccordionDetails>
    </Accordion>
  );
}
