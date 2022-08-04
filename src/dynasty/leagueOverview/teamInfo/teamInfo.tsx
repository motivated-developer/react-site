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
  faArrowUpRightFromSquare,
  faRankingStar,
} from '@fortawesome/free-solid-svg-icons';

interface props {
  userId: string;
  teamName: string;
  owner: string;
  record: string;
  pointsFor: number;
  // pointsAgainst: number;
  streak: string;
  totalMoves: number;
  waiverPosition: number;
  handleRosterClick: Function;
}

export default function TeamInfo({
  userId,
  teamName,
  owner,
  record,
  pointsFor,
  streak,
  totalMoves,
  waiverPosition,
  handleRosterClick,
}: props) {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange = () => (event: React.SyntheticEvent) => {
    if ((event.target as HTMLElement).id != 'roster-button') {
      // Prevent collapse from accordion on button click
      setExpanded(!expanded);
    }
  };

  return (
    <Accordion
      sx={{
        // background: 'rgb(158, 162, 162, 0.9)',
        background: 'white',
      }}
      onChange={handleChange()}
    >
      <AccordionSummary>
        <div>
          <div className="team-title">
            <FontAwesomeIcon id="football-icon" icon={faFootball} />
            <b>{teamName || 'Please Give Your Team A Name, Daniel'}</b>
          </div>
          <div className={`owner-name ${!expanded ? 'hidden' : ''}`}>
            <div>
              <FontAwesomeIcon id="user-icon" icon={faUser}></FontAwesomeIcon>
              {owner}
            </div>
            <div>
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  handleRosterClick(userId);
                }}
                endIcon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
                sx={{
                  // transform: 'translate(-8px, 0px)',
                  color: 'white',
                  fontFamily: 'inherit',
                  textTransform: 'none',
                  // backgroundColor: 'rgb(0 0 0 / 7%)',
                  backgroundColor: '#ba0c2f',
                  marginTop: '20px',
                  boxShadow: '-1px 2px 3px 0px rgb(0 0 0 / 25%)',
                  // paddingRight: '24px',
                  borderRadius: '7px',
                  '&:hover': {
                    background: 'black',
                    color: '#ba0c2f',
                  },
                }}
              >
                <div id="roster-button">Roster</div>
              </Button>
            </div>
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails className="team-details">
        <div className="separator"></div>
        <div className="team-record">
          <div>
            <FontAwesomeIcon
              id="placement-icon"
              icon={faRankingStar}
            ></FontAwesomeIcon>
            {/* {`${record} (1st)`} */}
            {record}
          </div>
        </div>
        <div className="separator" id="separator-2"></div>
        <div>
          <FontAwesomeIcon
            className="right-arrow"
            icon={faChevronRight}
          ></FontAwesomeIcon>
          Points For: {pointsFor}
        </div>
        <div>
          <FontAwesomeIcon
            className="right-arrow"
            icon={faChevronRight}
          ></FontAwesomeIcon>
          Streak: {streak}
        </div>
        <div>
          <FontAwesomeIcon
            className="right-arrow"
            icon={faChevronRight}
          ></FontAwesomeIcon>
          Waiver Position: {waiverPosition}
        </div>
        <div>
          <FontAwesomeIcon
            className="right-arrow"
            icon={faChevronRight}
          ></FontAwesomeIcon>
          Total Moves: {totalMoves}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
