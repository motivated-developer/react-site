import React, { useState, useEffect } from 'react';
import './newtrade.css';
// @ts-ignore
import PrimaryButton from '../../utils/primaryButton.tsx';
// @ts-ignore
import TradeInput from './tradeInput/tradeInput.tsx';
// @ts-ignore
import TradeString from './tradeString/tradeString.tsx';
// @ts-ignore
import { getTeams, getSingleTeam, getRoster } from '../utils/sleeperGetters.ts';

interface teamFormat {
  metadata?: {
    team_name: string;
  };
  user_id?: string;
}

function NewTrade() {
  const [team1, setTeam1] = useState<string>('');
  const [team2, setTeam2] = useState<string>('');
  const [players1, setPlayers1] = useState<string[]>(['']);
  const [players2, setPlayers2] = useState<string[]>(['']);
  const [picks1, setPicks1] = useState<string[]>(['']);
  const [picks2, setPicks2] = useState<string[]>(['']);

  const [teams, setTeams] = useState<object[]>([{ value: '', label: '' }]);
  const [roster1, setRoster1] = useState<object[]>([{}]);
  const [roster2, setRoster2] = useState<object[]>([{}]);

  // const roster1 = [
  //   { value: 'patrick mahomes', label: 'patrick mahomes' },
  //   { value: 'tom brady', label: 'tom brady' },
  //   { value: 'mike williams', label: 'mike williams' },
  // ];

  // const roster2 = [
  //   { value: 'patrick mahomes', label: 'patrick mahomes' },
  //   { value: 'tom brady', label: 'tom brady' },
  //   { value: 'mike williams', label: 'mike williams' },
  // ];

  const draftPicks = [
    { value: 'first rounder', label: 'first rounder' },
    { value: 'second rounder', label: 'second rounder' },
    { value: 'third rounder', label: 'third rounder' },
  ];

  const updateTrade = (
    selection: { value: string; label: string },
    updateCategory: string
  ) => {
    switch (updateCategory) {
      case 'team1':
        setTeam1(selection.label);
        break;
      case 'team2':
        setTeam2(selection.label);
        break;
      case 'players1':
        const addNewPlayer1 = [...players1, selection.value];
        // Only set the players list with unique players
        setPlayers1([...new Set(addNewPlayer1)]);
        break;
      case 'players2':
        const addNewPlayer2 = [...players2, selection.value];
        // Only set the players list with unique players
        setPlayers2([...new Set(addNewPlayer2)]);
        break;
      case 'picks1':
        setPicks1([...picks1, selection.value]);
        break;
      case 'picks2':
        setPicks2([...picks2, selection.value]);
        break;
      default:
        console.error('Update Category not recognized');
    }
  };

  const fillRoster = (teamId: string, rosterToSet: string) => {
    getRoster(teamId).then((roster: any) => {
      const formattedRoster: object[] = [];

      roster.forEach((player: string) => {
        console.log({ value: player, label: player });
        formattedRoster.push({ value: player, label: player });
      });

      console.log(formattedRoster);
      if (rosterToSet === 'roster1') {
        setRoster1(formattedRoster);
      }
      if (rosterToSet === 'roster2') {
        setRoster1(roster);
      }
    });
  };

  useEffect(() => {
    getTeams().then((teamsRaw: object[]) => {
      const teams = teamsRaw.map((teamData: teamFormat) => {
        const teamObj = {
          value: teamData.user_id,
          label: teamData.metadata?.team_name,
        };
        return teamObj;
      });
      console.log(teams);
      setTeams(teams);
    });
    fillRoster('700570288613572608', 'roster1');
  }, []);

  return (
    <div className="fantasy-page">
      <h2 className="dd-title">Input Trade</h2>
      <div className="trade-input-box">
        <TradeInput
          receivingTeam={team2}
          teams={teams}
          roster={roster1}
          draftPicks={draftPicks}
          updateValues={['team1', 'players1', 'picks1', 'team2']}
          updateTrade={updateTrade}
        ></TradeInput>
        <TradeInput
          receivingTeam={team1}
          teams={teams}
          roster={roster2}
          draftPicks={draftPicks}
          updateValues={['team2', 'players2', 'picks2', 'team1']}
          updateTrade={updateTrade}
        ></TradeInput>
      </div>
      <div className={team1 ? '' : 'hide'}>
        <TradeString
          sendingTeam={team1}
          sendingPlayers={players1}
          receivingPlayers={players2}
          sendingPicks={picks1}
          receivingPicks={picks2}
        ></TradeString>
      </div>
      <div className={team2 ? '' : 'hide'}>
        <TradeString
          sendingTeam={team2}
          sendingPlayers={players2}
          receivingPlayers={players1}
          sendingPicks={picks2}
          receivingPicks={picks1}
        ></TradeString>
      </div>
      <div className="submit-trade-button">
        <PrimaryButton
          buttonText="Submit Trade"
          onClick={() => {
            alert('clicked');
          }}
        ></PrimaryButton>
      </div>
    </div>
  );
}

export default NewTrade;
