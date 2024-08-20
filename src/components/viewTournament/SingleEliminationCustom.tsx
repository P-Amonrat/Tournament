import React, { useEffect, useState } from 'react';
import { eightTeamData, eightTeamExtraData, sixteenTeamData, sixteenExtraTeamData, thirtyTwoTeamsData, thirtyTwoExtraTeamsData, sixtyFourTeamsData } from "../../mock/singleData"
import { MatchData, GroupTeam } from '../../interface/tournaments';
import Logo from "../../assests/image/team-logo.png";
import "../styleCustom.scss"

const SingleEliminationCustom = () => {

  const groupByRound = (matches: GroupTeam[]) => {
    return matches.reduce((acc, match) => {
      const round = match.round ?? 0;

      if (!acc[round]) {
        acc[round] = [];
      }

      acc[round].push(match);
      return acc;
    }, {} as Record<number, GroupTeam[]>);
  };

  const groupedMatches = groupByRound(eightTeamExtraData.results);
  const sortedRounds = Object.keys(groupedMatches)
    .map(Number) // Convert keys to numbers
    .sort((a, b) => a - b);

  return (
    <div className='tour-card'>
      {sortedRounds.map((round, index) => {
        const currentMatches = groupedMatches[round];
        const nextMatches = groupedMatches[sortedRounds[index + 1]] || [];
        const areLengthsEqual = currentMatches.length === nextMatches.length;

        return (
          <div key={round} className="round">
            <div className='round-header'>
              <p>Round {round}</p>
            </div>
            <div className='container'>
              {currentMatches.map((list, roundIndex) => (
                <div key={roundIndex} className={`container-match ${areLengthsEqual ? "extra" : "normal"}`}>
                  <div className="item view" >
                    <div className='match-time'>
                      <p>M{list.matchId} : {list.matchStart} </p>
                      <div className='circle'></div>
                    </div>
                    <div className='match-status'>
                      <div className='status'>{list.status}</div>
                      <p>{list.duration}</p>
                    </div>
                    <div className={`round-match`}>
                      <div className='match-bo'>
                        <p>Bo {list.bo}</p>
                      </div>
                      <div className='match'>
                        {list.match?.map((match, matchIndex) => (
                          <div key={matchIndex} className='match-item'>
                            <div className={`team-item ${list.winnerId !== null && list.winnerId === match.teamId ? "winner" : ""}`}>
                              {match.teamName && (
                                <img alt='teamLogo' src={Logo} />
                              )}
                              <p>{match.teamName}</p>
                            </div>
                            <div className={`team-score ${list.winnerId !== null && list.winnerId === match.teamId ? "winner-score" : ""}`}>
                              <p>{match.score}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SingleEliminationCustom