import React, { useState, useEffect } from 'react';
import './leagueOverview.css';

import RosterDisplay from './rosterDisplay/rosterDisplay';
import OverviewCard from './overviewCard/overviewCard';
import TeamInfo from './teamInfo/teamInfo';
import { getTeams, getSingleTeam } from '../utils/sleeperGetters';
import { team } from '../interfaces/team.interface';
import LoadingSpinner from '../loadingSpinner/loadingSpinner';

export default function LeagueOverview() {
  const totalTeams: number = 8;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [teams, setTeams] = useState<React.ReactNode[]>([]);
  const [roster, setRoster] = useState<React.ReactNode>();
  const [rosterOpen, toggleRosterOpen] = useState<boolean>(false);

  const renderTeams = (teamsData: team[]) => {
    teamsData.map(async (team: team) => {
      console.log(team);
      const teamStats = await getSingleTeam(team.user_id);
      const stats = teamStats[0];
      console.log('teamStats', stats);
      if (teams.length < totalTeams) {
        setTeams((oldTeams) => [
          ...oldTeams,
          <TeamInfo
            key={team.user_id + Math.random()}
            userId={team.user_id}
            teamName={team.metadata.team_name}
            owner={team.display_name}
            record={`${stats.settings.wins}-${stats.settings.losses}`}
            streak={stats.metadata.streak}
            pointsFor={stats.settings.fpts}
            waiverPosition={stats.settings.waiver_position}
            totalMoves={stats.settings.total_moves}
            // pointsAgainst={122}
            handleRosterClick={loadRoster}
          ></TeamInfo>,
        ]);
      }
    });
    console.log('done loading');
  };

  const loadTeamRosterContent = (userId: string) => {
    getSingleTeam(userId).then((roster) => {
      console.log('roster', roster);
      const content: any = <RosterDisplay roster={roster}></RosterDisplay>;
      setRoster(content);
      setIsLoading(false);
    });
  };

  const loadRoster = (rosterId: string) => {
    setIsLoading(true);
    toggleRosterOpen(true);
    loadTeamRosterContent(rosterId);
  };

  useEffect(() => {
    getTeams().then((teamsData: team[]) => {
      renderTeams(teamsData);
    });
  }, []);

  return (
    <div className="league-overview-page">
      <h1 className="title">
        <b>Dynasty Dawgs</b>
      </h1>
      <div className={`victory-text ${rosterOpen ? 'hidden' : ''}`}>
        <i>
          <b>The Road To Title '23</b>
        </i>
      </div>
      {/* <img
        className="uga-background"
        src="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2021-11/nakobe-dean-110221-getty-ftr_tuq4hsl74e41bou175ugmjci.jpg?itok=HVK0OFjD"
      ></img> */}
      <div className="page-content">
        {teams.length < totalTeams ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <OverviewCard
            title="Teams"
            content={teams}
            isClosable={false}
          ></OverviewCard>
        )}
        <div className="homepage-graphic">
          <img
            className="winding-road"
            src="https://www.seekpng.com/png/full/108-1083570_curved-road-winding-road-with-white-background.png"
          ></img>
          <img
            className="trophy"
            src="https://superbowl4pancare.com.au/wp-content/uploads/2021/12/6C2CC36D-993B-479E-8A83-4950293371C4.png"
          ></img>
        </div>
        {teams && isLoading ? (
          <div id="roster-loading">
            <LoadingSpinner></LoadingSpinner>
          </div>
        ) : (
          <div className={rosterOpen ? 'roster-card' : 'hidden'}>
            <OverviewCard
              title={'Roster'}
              content={roster}
              isClosable={true}
              closeRoster={() => toggleRosterOpen(false)}
            ></OverviewCard>
          </div>
        )}
      </div>
    </div>
  );
}
