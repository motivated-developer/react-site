import React, { useState } from 'react';
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
  faRankingStar,
} from '@fortawesome/free-solid-svg-icons';

interface props {
  userId: string;
  teamName: string;
  owner: string;
  record: string;
  pointsFor: number;
  pointsAgainst: number;
  handleRosterClick: Function;
}

export default function TeamInfo(props: props) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange =
    () => (event: React.SyntheticEvent, isExpanded: boolean) => {
      if ((event.target as HTMLElement).id != 'roster-button') {
        // Prevent collapse from accordion on button click
        setExpanded(!expanded);
      }
    };

  return (
    <Accordion
      sx={{
        background: 'rgb(158, 162, 162, 0.9)',
      }}
      onChange={handleChange()}
    >
      <AccordionSummary>
        <div>
          <div className="team-title">
            <FontAwesomeIcon id="football-icon" icon={faFootball} />
            <b>{props.teamName || 'Please Give Your Team A Name, Daniel'}</b>
          </div>
          <div className={`owner-name ${!expanded ? 'hidden' : ''}`}>
            <div>
              <FontAwesomeIcon id="user-icon" icon={faUser}></FontAwesomeIcon>
              {props.owner}
            </div>
            <div>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  props.handleRosterClick(props.userId);
                }}
                sx={{
                  // transform: 'translate(-8px, 0px)',
                  color: 'black',
                  fontFamily: 'inherit',
                  textTransform: 'none',
                  backgroundColor: 'rgb(0 0 0 / 7%)',
                  marginTop: '20px',
                  boxShadow: '-1px 2px 3px 0px rgb(0 0 0 / 25%)',
                  // paddingRight: '24px',
                  borderRadius: '7px',
                }}
              >
                <div id="roster-button">Roster</div>
              </Button>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails className="team-details">
        <div className="separater"></div>
        <div className="team-record">
          <div>
            <FontAwesomeIcon
              id="placement-icon"
              icon={faRankingStar}
            ></FontAwesomeIcon>
            {`${props.record} (1st)`}
          </div>
        </div>
        <div className="separater" id="separater-2"></div>
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
