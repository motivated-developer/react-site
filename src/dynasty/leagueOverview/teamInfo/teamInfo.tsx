import React from 'react';
import './teamInfo.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFootball,
  faUser,
  faChevronRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

interface props {
  teamName: string;
  owner: string;
  record: string;
  pointsFor: number;
  pointsAgainst: number;
}

export default function TeamInfo(props: props) {
  return (
    <Accordion
      sx={{
        background: 'rgb(158, 162, 162, 0.9)',
      }}
    >
      <AccordionSummary>
        <div className="team-title">
          <FontAwesomeIcon id="football-icon" icon={faFootball} />
          <b>{props.teamName || 'Please Give Your Team A Name, Matthew'}</b>
        </div>
      </AccordionSummary>
      <AccordionDetails className="team-details">
        <div className="separater"></div>
        <div className="team-owner">
          <FontAwesomeIcon id="user-icon" icon={faUser}></FontAwesomeIcon>
          {props.owner}
          <Button
            sx={{
              transform: 'translate(-8px, 0px)',
              color: 'black',
              fontFamily: 'inherit',
              textTransform: 'none',
            }}
          >
            <div id="roster-button">
              <FontAwesomeIcon
                id="roster-arrow"
                icon={faArrowRight}
              ></FontAwesomeIcon>
              <u>See Roster</u>
            </div>
          </Button>
        </div>
        <div className="separater" id="separater-2"></div>
        <div>
          <FontAwesomeIcon
            className="right-arrow"
            icon={faChevronRight}
          ></FontAwesomeIcon>
          Record: {props.record}
        </div>
        <div>
          <FontAwesomeIcon
            className="right-arrow"
            icon={faChevronRight}
          ></FontAwesomeIcon>
          Points For: {props.pointsFor}
        </div>
        <div>
          <FontAwesomeIcon
            className="right-arrow"
            icon={faChevronRight}
          ></FontAwesomeIcon>
          Points Against: {props.pointsAgainst}
        </div>
        <div>
          <FontAwesomeIcon
            className="right-arrow"
            icon={faChevronRight}
          ></FontAwesomeIcon>
          2021 Finish: {props.pointsAgainst}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
