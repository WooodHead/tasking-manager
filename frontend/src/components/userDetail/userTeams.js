import React from 'react';
import { TeamCard } from '../teamsAndOrgs/teams';

export const UserTeams = ({ teams }) => {
  return (
    <div className="cf db">
      {teams && teams.slice(0, 6).map((team, n) => <TeamCard team={team} key={n} />)}
    </div>
  );
};
