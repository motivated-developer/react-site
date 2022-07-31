import React, { useState, useEffect } from 'react';
import './leagueOverview.css';
import playerData from '../playerData/playerData.ts';

import OverviewCard from './overviewCard/overviewCard';
import TeamInfo from './teamInfo/teamInfo';
import PlayerInfo from './playerInfo/playerInfo';
import { getTeams, getSingleTeam } from '../utils/sleeperGetters';
import { team } from '../interfaces/team.interface';

interface player {
  full_name: string;
  weight: string;
}

export default function LeagueOverview() {
  const [teams, setTeams] = useState<React.ReactNode[]>([]);
  const [roster, setRoster] = useState<React.ReactNode[]>([]);
  const [rosterOpen, toggleRosterOpen] = useState<boolean>(true);

  const renderTeams = (teamsData: team[]) => {
    let tempTeams: React.ReactNode[] = [];

    teamsData.map((team: team) => {
      tempTeams.push(
        <TeamInfo
          key={team.metadata.team_name + Math.random()}
          teamName={team.metadata.team_name}
          owner={team.display_name}
          record="6-4"
          pointsFor={156}
          pointsAgainst={122}
        ></TeamInfo>
      );
      // Why doesn't this solution work?
      // It only sets the last team in the array
      //   setTeams([
      //     teams,
      //     <TeamInfo
      //       key={team.metadata.team_name + Math.random()}
      //       teamName={team.metadata.team_name}
      //       owner={team.display_name}
      //       record="6-4"
      //       pointsFor={156}
      //       pointsAgainst={122}
      //     ></TeamInfo>,
      //   ]);
    });
    setTeams(tempTeams);
  };

  const loadTeamRosterContent = (userId: string) => {
    let tempRoster: React.ReactNode[] = [];

    getSingleTeam(userId).then((roster) => {
      console.log('roster', roster);
      roster[0].players.map((playerNum: string) => {
        const playerInfo: player = playerData[playerNum];
        console.log(playerInfo);
        tempRoster.push(
          <PlayerInfo
            key={playerInfo.full_name + Math.random()}
            name={playerInfo.full_name}
            weight={playerInfo.weight}
          ></PlayerInfo>
        );
      });
    });
    setRoster(tempRoster);
  };

  useEffect(() => {
    getTeams().then((teamsData: team[]) => renderTeams(teamsData));
    loadTeamRosterContent('609863126183112704');
  }, []);

  return (
    <div className="league-overview-page">
      <h1 className="title">
        <b>Dynasty Dawgs</b>
      </h1>
      <img
        className="uga-background"
        src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-11/nakobe-dean-110221-getty-ftr_tuq4hsl74e41bou175ugmjci.jpg?itok=HVK0OFjD"
      ></img>
      <div>
        <OverviewCard title="Teams" content={teams}></OverviewCard>
        <div className={rosterOpen ? '' : 'hidden'}>
          <OverviewCard title={''} content={roster}></OverviewCard>
        </div>
      </div>
    </div>
  );
}
