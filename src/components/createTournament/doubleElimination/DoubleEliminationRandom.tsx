import React, { FunctionComponent } from 'react'
import { GroupTeam, TeamOption } from '../../../interface/tournaments'
import Logo from "../../../assests/image/team-logo.png";
import "../../styleCustom.scss"
import { DatePicker, Input } from 'antd';

interface IPropsRandom {
  sortedRounds: number[]
  groupedMatches: GroupTeam[][]
  sortedLowerRounds: number[]
  groupedLowerMatches: GroupTeam[][]
  matchFinal: GroupTeam[]
  onChangeMatchStart: Function
}

const DoubleEliminationRandom: React.FC<IPropsRandom> = ({
  sortedRounds,
  groupedMatches,
  sortedLowerRounds,
  groupedLowerMatches,
  matchFinal,
  onChangeMatchStart
}) => {

  return (
    <div className='card'>
      <div className='round-normal'>
        <div className='tour-card-upper'>
          {sortedRounds?.map((round, index) => {
            const currentMatches = groupedMatches?.[round - 1];
            const nextMatches = groupedMatches?.[sortedRounds[index + 1]] || [];
            const areLengthsEqual = currentMatches?.length === nextMatches?.length;

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
                  {currentMatches?.map((list, roundIndex) => (
                    // <div key={roundIndex} className={`container-match ${nextMatches[0]?.matchId === null ? "double" : list.matchId === null ? "" : areLengthsEqual ? "extra" : "normal"}`}>
                    <div key={roundIndex} className={`container-match ${areLengthsEqual ? "create-extra" : "create-normal"}`}>
                      <div className="item create" >
                        {list.matchId !== null && (
                          <>
                            <div className='select-time'>
                              <p>Match {list.bo} <span> (Start date)</span></p>
                              <DatePicker
                                showTime={{ format: 'HH:mm' }}
                                format="DD/MM/YYYY HH:mm"
                                className='date'
                                onChange={(value, dateString) => onChangeMatchStart(value, dateString, list.matchId)}
                                placeholder='DD/MM/YYYY HH:mm'
                              />
                            </div>
                            <div className='best-of'>
                              <p>Best of</p>
                              <Input placeholder='Best of' />
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
          {sortedLowerRounds?.map((round, index) => {
            const currentMatches = groupedLowerMatches?.[round - 1];
            const nextMatches = groupedLowerMatches?.[sortedLowerRounds[index]] || [];
            const areLengthsEqual = currentMatches?.length === nextMatches?.length;

            return (
              <div key={round} className="round">
                {index === 0 && (
                  <div className='match-header'>
                    <p>Lower line</p>
                  </div>
                )}
                <div className='container' style={{ marginTop: index !== 0 ? "54px" : "" }}>
                  {currentMatches?.map((list, roundIndex) => (
                    <div key={roundIndex} className={`container-match ${areLengthsEqual ? "create-extra" : "create-normal"}`}>
                      <div className="item create" >
                        <div className='select-time'>
                          <p>Match {list.bo} <span> (Start date)</span></p>
                          <DatePicker
                            showTime={{ format: 'HH:mm' }}
                            format="DD/MM/YYYY HH:mm"
                            className='date'
                            onChange={(value, dateString) => onChangeMatchStart(value, dateString, list.matchId)}
                            placeholder='DD/MM/YYYY HH:mm'
                          />
                        </div>
                        <div className='best-of'>
                          <p>Best of</p>
                          <Input placeholder='Best of' />
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
        {matchFinal?.map((round, index) => {
          return (
            <div key={index} className="round"
              style={{
                backgroundColor: sortedRounds.length % 2 === 0 ? "#0e0e0e" : undefined,
                borderRadius: sortedRounds.length % 2 === 0 ? "16px" : undefined
              }}>
              <div className='round-header'>
                <p>Round {sortedRounds.length + 1}</p>
              </div>
              <div className='container-create' style={{ marginTop: index !== 0 ? "54px" : "" }}>
                <div className={`container-match`}>
                  <div className="item create" >
                    {round.matchId !== null && (
                      <>
                        <div className='select-time'>
                          <p>Match {round.bo} <span> (Start date)</span></p>
                          <DatePicker
                            showTime={{ format: 'HH:mm' }}
                            format="DD/MM/YYYY HH:mm"
                            className='date'
                            onChange={(value, dateString) => onChangeMatchStart(value, dateString, round.matchId)}
                            placeholder='DD/MM/YYYY HH:mm'
                          />
                        </div>
                        <div className='best-of'>
                          <p>Best of</p>
                          <Input placeholder='Best of' />
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

export default DoubleEliminationRandom