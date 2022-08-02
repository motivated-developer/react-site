import React, { useState, useEffect } from 'react';
import './leagueOverview.css';

import RosterDisplay from './rosterDisplay/rosterDisplay';
import OverviewCard from './overviewCard/overviewCard';
import TeamInfo from './teamInfo/teamInfo';
import { getTeams, getSingleTeam } from '../utils/sleeperGetters';
import { team } from '../interfaces/team.interface';

export default function LeagueOverview() {
  const [teams, setTeams] = useState<React.ReactNode[]>([]);
  const [roster, setRoster] = useState<React.ReactNode>();
  const [rosterOpen, toggleRosterOpen] = useState<boolean>(false);

  const renderTeams = (teamsData: team[]) => {
    let tempTeams: React.ReactNode[] = [];

    teamsData.map((team: team) => {
      console.log(team);
      tempTeams.push(
        <TeamInfo
          key={team.user_id + Math.random()}
          userId={team.user_id}
          teamName={team.metadata.team_name}
          owner={team.display_name}
          record="6-4"
          pointsFor={156}
          pointsAgainst={122}
          handleRosterClick={loadRoster}
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
    getSingleTeam(userId).then((roster) => {
      console.log('roster', roster);
      const content: any = <RosterDisplay roster={roster}></RosterDisplay>;
      setRoster(content);
    });
    console.log('Roster has been set');
  };

  const loadRoster = (rosterId: string) => {
    toggleRosterOpen(true);
    loadTeamRosterContent(rosterId);
  };

  useEffect(() => {
    getTeams().then((teamsData: team[]) => renderTeams(teamsData));
    // loadTeamRosterContent('609863126183112704');
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
      <div className="page-content">
        <OverviewCard
          title="Teams"
          content={teams}
          isClosable={false}
        ></OverviewCard>
        <div className={rosterOpen ? '' : 'hidden'}>
          <OverviewCard
            title={'Roster'}
            content={roster}
            isClosable={true}
            closeRoster={() => toggleRosterOpen(false)}
          ></OverviewCard>
        </div>
      </div>
    </div>
  );
}
