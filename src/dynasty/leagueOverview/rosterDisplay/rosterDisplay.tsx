import React from 'react';
import './rosterDisplay.css';

import { playerDetails } from '../../playerData/playerData';
import playerData from '../../playerData/playerData';
import PlayerInfo from '../playerInfo/playerInfo';

interface props {
  roster: {
    players: string[];
    starters: string[];
  }[];
}

export default function RosterDisplay(props: props) {
  const roster = props.roster[0];
  let starters1: React.ReactNode[] = [];
  let starters2: React.ReactNode[] = [];
  let benchPlayers1: React.ReactNode[] = [];
  let benchPlayers2: React.ReactNode[] = [];
  let benchPlayers3: React.ReactNode[] = [];

  roster.players.map((playerNum: any) => {
    // @ts-ignore
    const playerInfo: playerDetails = playerData[playerNum];
    if (roster.starters.includes(playerNum)) {
      if (starters1.length < 8) {
        starters1.push(
          <PlayerInfo
            key={playerInfo.first_name + Math.random()}
            name={playerInfo.full_name || playerInfo.first_name + ' D/ST'}
            weight={playerInfo.weight}
          ></PlayerInfo>
        );
      } else {
        starters2.push(
          <PlayerInfo
            key={playerInfo.first_name + Math.random()}
            name={playerInfo.full_name || playerInfo.first_name + ' D/ST'}
            weight={playerInfo.weight}
          ></PlayerInfo>
        );
      }
    } else if (benchPlayers1.length < 8) {
      benchPlayers1.push(
        <PlayerInfo
          key={playerInfo.first_name + Math.random()}
          name={playerInfo.full_name || playerInfo.first_name + ' D/ST'}
          weight={playerInfo.weight}
        ></PlayerInfo>
      );
    } else if (benchPlayers2.length < 8) {
      benchPlayers2.push(
        <PlayerInfo
          key={playerInfo.first_name + Math.random()}
          name={playerInfo.full_name || playerInfo.first_name + ' D/ST'}
          weight={playerInfo.weight}
        ></PlayerInfo>
      );
    } else {
      benchPlayers3.push(
        <PlayerInfo
          key={playerInfo.first_name + Math.random()}
          name={playerInfo.full_name || playerInfo.first_name + ' D/ST'}
          weight={playerInfo.weight}
        ></PlayerInfo>
      );
    }
  });

  return (
    <div id="players-column">
      <div>
        <b>Starters</b>
        <div id="starters">
          <div>{starters1}</div>
          <div>{starters2}</div>
        </div>
      </div>
      <div>
        <b>Bench</b>
        <div id="bench-players">
          <div>{benchPlayers1}</div>
          <div>{benchPlayers2}</div>
          <div>{benchPlayers3}</div>
        </div>
      </div>
    </div>
  );
}
