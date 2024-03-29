import React from 'react';
import './playerInfo.css';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface props {
  name: string;
  weight: string;
  college: string;
  age: number;
  team: string;
  yearsExperience: number;
}

export default function PlayerInfo({
  name,
  weight,
  college,
  age,
  team,
  yearsExperience,
}: props) {
  return (
    <Accordion
      sx={{
        background: 'white',
        fontSize: '14px',
        margin: 'auto',
        width: '100%',
        padding: '0px',
        textAlign: 'center',
      }}
    >
      <AccordionSummary
        sx={{
          '& .MuiAccordionSummary-content': {
            margin: '0px 0px',
            justifyContent: 'center',
          },
        }}
        className="player-name"
      >
        <div>{name}</div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="separator"></div>
        <div className="player-stats">
          <div>
            <FontAwesomeIcon
              className="right-arrow"
              icon={faChevronRight}
            ></FontAwesomeIcon>
            {team}
          </div>
          <div>
            <FontAwesomeIcon
              className="right-arrow"
              icon={faChevronRight}
            ></FontAwesomeIcon>
            {weight} lbs
          </div>
          <div>
            <FontAwesomeIcon
              className="right-arrow"
              icon={faChevronRight}
            ></FontAwesomeIcon>
            {age} years old
          </div>
          <div>
            <FontAwesomeIcon
              className="right-arrow"
              icon={faChevronRight}
            ></FontAwesomeIcon>
            {college}
          </div>
          <div>
            <FontAwesomeIcon
              className="right-arrow"
              icon={faChevronRight}
            ></FontAwesomeIcon>
            {yearsExperience} years experience
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
