import React from 'react'
import { MatchData, GroupTeam } from '../../interface/tournaments';
import { eightDouble, eightExtraDouble } from "../../mock/doubleData"
import Logo from "../../assests/image/team-logo.png";
import "../styleCustom.scss"

const DoubleEliminationCustom = () => {
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

  const groupedUpperMatches = groupByRound(eightDouble.upper.results);
  const sortedUpperRounds = Object.keys(groupedUpperMatches)
    .map(Number)
    .sort((a, b) => a - b);

  const groupedLowerMatches = groupByRound(eightDouble.lower.results);
  const sortedLowerRounds = Object.keys(groupedUpperMatches)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div className='card'>
      <div className='round-normal'>
        <div className='tour-card-upper'>
          {sortedUpperRounds.map((round, index) => {
            const currentMatches = groupedUpperMatches[round];
            const nextMatches = groupedUpperMatches[sortedUpperRounds[index + 1]] || [];
            const areLengthsEqual = currentMatches.length === nextMatches.length;

            return (
              <div key={round} className="round">
                <div className='round-header'>
                  <p>Round {round}</p>
                </div>
                {index === 0 && (
                  <div className='match-header'>
                    <p>Upper line</p>
                  </div>
                )}
                <div className='container' style={{ marginTop: index !== 0 ? "54px" : "" }}>
                  {currentMatches.map((list, roundIndex) => (
                    // <div key={roundIndex} className={`container-match ${nextMatches[0]?.matchId === null ? "double" : list.matchId === null ? "" : areLengthsEqual ? "extra" : "normal"}`}>
                    <div key={roundIndex} className={`container-match ${list.matchId === null ? "" : areLengthsEqual ? "extra" : "normal"}`}>
                      <div className="item" >
                        {list.matchId !== null && (
                          <>
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
                          </>
                        )}

                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        {/* <div className='line'></div> */}
        <div className='tour-card-lower'>
          {sortedLowerRounds.map((round, index) => {
            const currentMatches = groupedLowerMatches[round];
            const nextMatches = groupedLowerMatches[sortedLowerRounds[index + 1]] || [];
            const areLengthsEqual = currentMatches.length === nextMatches.length;

            return (
              <div key={round} className="round">
                {index === 0 && (
                  <div className='match-header'>
                    <p>Lower line</p>
                  </div>
                )}
                <div className='container' style={{ marginTop: index !== 0 ? "54px" : "" }}>
                  {currentMatches.map((list, roundIndex) => (
                    <div key={roundIndex} className={`container-match ${areLengthsEqual ? "extra" : "normal"}`}>
                      <div className="item" >
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
      </div>
      <div className='round-final'>
        {eightDouble?.final.results.map((round, index) => {
          return (
            <div key={index} className="round"
            style={{
              backgroundColor: sortedUpperRounds.length % 2 === 0 ? "#0e0e0e" : undefined,
              borderRadius: sortedUpperRounds.length % 2 === 0 ? "16px" : undefined
            }}>
              <div className='round-header'>
                <p>Round {sortedUpperRounds.length + 1}</p>
              </div>
              <div className='container' style={{ marginTop: index !== 0 ? "54px" : "" }}>
                <div className={`container-match`}>
                  <div className="item view" >
                    {round.matchId !== null && (
                      <>
                        <div className='match-time'>
                          <p>M{round.matchId} : {round.matchStart} </p>
                          <div className='circle'></div>
                        </div>
                        <div className='match-status'>
                          <div className='status'>{round.status}</div>
                          <p>{round.duration}</p>
                        </div>
                        <div className={`round-match`}>
                          <div className='match-bo'>
                            <p>Bo {round.bo}</p>
                          </div>
                          <div className='match'>
                            {round.match?.map((match, matchIndex) => (
                              <div key={matchIndex} className='match-item'>
                                <div className={`team-item ${round.winnerId !== null && round.winnerId === match.teamId ? "winner" : ""}`}>
                                  {match.teamName && (
                                    <img alt='teamLogo' src={Logo} />
                                  )}
                                  <p>{match.teamName}</p>
                                </div>
                                <div className={`team-score ${round.winnerId !== null && round.winnerId === match.teamId ? "winner-score" : ""}`}>
                                  <p>{match.score}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div >

  )
}

export default DoubleEliminationCustom