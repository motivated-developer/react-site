import React, { useState, useEffect } from 'react';
import './leagueOverview.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import TeamInfo from './teamInfo/teamInfo';
import { getTeams } from '../utils/sleeperGetters';
import { team } from '../interfaces/team.interface';

export default function LeagueOverview() {
  const [teams, setTeams] = useState<React.ReactNode[]>([]);

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

  useEffect(() => {
    getTeams().then((teamsData: team[]) => renderTeams(teamsData));
  }, []);

  return (
    <div className="league-overview-page">
      <h2 className="title">Dynasty Dawgs</h2>
      <img
        className="uga-background"
        src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-11/nakobe-dean-110221-getty-ftr_tuq4hsl74e41bou175ugmjci.jpg?itok=HVK0OFjD"
      ></img>
      <div className="content-box">
        <div className="teams-card">
          <Card>
            <CardContent>{teams}</CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
