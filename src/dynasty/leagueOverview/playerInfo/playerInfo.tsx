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
    <Accordion>
      <AccordionSummary>{props.name}</AccordionSummary>
      <AccordionDetails>Weight: {props.weight}</AccordionDetails>
    </Accordion>
  );
}
