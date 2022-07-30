import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

interface props {
  teamName: string;
  owner: string;
  record: string;
  pointsFor: number;
  pointsAgainst: number;
}

export default function TeamInfo(props: props) {
  return (
    <Accordion>
      <AccordionSummary>
        <b>{props.teamName}</b>
      </AccordionSummary>
      <AccordionDetails>
        {props.owner}
        <p>Record: {props.record}</p>
        <p>Points For: {props.pointsFor}</p>
        <p>Pointe Against: {props.pointsAgainst}</p>
      </AccordionDetails>
    </Accordion>
  );
}
