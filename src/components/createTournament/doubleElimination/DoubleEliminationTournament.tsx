import React, { FunctionComponent } from 'react'
import { GroupTeam, IPropsDoubleRandom } from '../../../interface/tournaments'
import Logo from "../../../assests/image/team-logo.png";
import "../../styleCustom.scss"
import { DatePicker, Input, Select } from 'antd';
import dayjs from 'dayjs';
import * as Icon from '@ant-design/icons';

const DoubleEliminationTournament: React.FC<IPropsDoubleRandom> = ({
  typeValue,
  sortedRounds,
  groupedMatches,
  sortedLowerRounds,
  groupedLowerMatches,
  teamOptionList,
  matchFinal,
  onChangeMatchStart,
  onSelectedTeam,
  labelRender,
  onChangeLocked,
  teamIsLocked,
  teamList
}) => {

  return (
    <div className='card'>
      <div className='round-normal'>
        <div className='tour-card-upper'>
          {sortedRounds && sortedRounds?.map((round, index) => {
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
                                value={list.matchStart ? dayjs(list.matchStart, 'DD/MM/YYYY HH:mm') : null}
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
                                    {typeValue === 1 ? (
                                      <>
                                        <div className={`team-item ${list.winnerId !== null && list.winnerId === match.teamId ? "winner" : ""}`}>
                                          {match.teamName && (
                                            <img alt='teamLogo' src={Logo} />
                                          )}
                                          <p>{match.teamName}</p>
                                        </div>
                                        <div className={`team-score ${list.winnerId !== null && list.winnerId === match.teamId ? "winner-score" : ""}`}>
                                          <p>{match.score}</p>
                                        </div>
                                      </>
                                    ) : (
                                      <>
                                        <div className={`team-item`}>
                                          <Select
                                            style={{ width: "100%", height: "40px", borderRadius: "8px 0px 0px 8px" }}
                                            showSearch
                                            filterOption={(input, option) =>
                                              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                            }
                                            options={teamOptionList}
                                            optionRender={(option) => (
                                              <div style={{ display: "flex", alignItems: "center" }}>
                                                <img style={{ marginRight: "10px", borderRadius: "50%" }} alt='team-logo' src={Logo} />
                                                <span style={{ color: "#fff" }}>{option.data.label}</span>
                                              </div>
                                            )}
                                            value={teamList.find((x) => x.value === match.teamId)}
                                            labelRender={labelRender}
                                            dropdownStyle={{ backgroundColor: "#2a2a2a", color: "#ffffff" }}
                                            onChange={(value) => onSelectedTeam(value, list.matchId, matchIndex)}
                                          />
                                        </div>
                                        <div className={`team-score`}>
                                          {typeValue === 3 && (
                                            teamIsLocked?.find((x) => x === match.teamId) ? (
                                              <Icon.LockOutlined style={{ fontSize: '24px', color: '#ffffff' }} onClick={() => onChangeLocked(match.teamId)} />
                                            ) : (
                                              <Icon.UnlockOutlined style={{ fontSize: '24px', color: '#ffffff' }} onClick={() => onChangeLocked(match.teamId)} />
                                            )
                                          )}

                                        </div>
                                      </>
                                    )}
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
          {sortedLowerRounds && sortedLowerRounds?.map((round, index) => {
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
                            value={list.matchStart ? dayjs(list.matchStart, 'DD/MM/YYYY HH:mm') : null}
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
                                {typeValue === 1 ? (
                                  <>
                                    <div className={`team-item ${list.winnerId !== null && list.winnerId === match.teamId ? "winner" : ""}`}>
                                      {match.teamName && (
                                        <img alt='teamLogo' src={Logo} />
                                      )}
                                      <p>{match.teamName}</p>
                                    </div>
                                    <div className={`team-score ${list.winnerId !== null && list.winnerId === match.teamId ? "winner-score" : ""}`}>
                                      <p>{match.score}</p>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className={`team-item`}>
                                      <Select
                                        style={{ width: "100%", height: "40px", borderRadius: "8px 0px 0px 8px" }}
                                        showSearch
                                        filterOption={(input, option) =>
                                          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={teamOptionList}
                                        optionRender={(option) => (
                                          <div style={{ display: "flex", alignItems: "center" }}>
                                            <img style={{ marginRight: "10px", borderRadius: "50%" }} alt='team-logo' src={Logo} />
                                            <span style={{ color: "#fff" }}>{option.data.label}</span>
                                          </div>
                                        )}
                                        value={teamList.find((x) => x.value === match.teamId)}
                                        labelRender={labelRender}
                                        dropdownStyle={{ backgroundColor: "#2a2a2a", color: "#ffffff" }}
                                        onChange={(value) => onSelectedTeam(value, list.matchId, matchIndex)}
                                      />
                                    </div>
                                    <div className={`team-score`}>
                                      {typeValue === 3 && (
                                        teamIsLocked?.find((x) => x === match.teamId) ? (
                                          <Icon.LockOutlined style={{ fontSize: '24px', color: '#ffffff' }} onClick={() => onChangeLocked(match.teamId)} />
                                        ) : (
                                          <Icon.UnlockOutlined style={{ fontSize: '24px', color: '#ffffff' }} onClick={() => onChangeLocked(match.teamId)} />
                                        )
                                      )}
                                    </div>
                                  </>
                                )}
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
        {matchFinal && matchFinal?.map((list, index) => {
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
                            value={list.matchStart ? dayjs(list.matchStart, 'DD/MM/YYYY HH:mm') : null}
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
                                {typeValue === 1 ? (
                                  <>
                                    <div className={`team-item ${list.winnerId !== null && list.winnerId === match.teamId ? "winner" : ""}`}>
                                      {match.teamName && (
                                        <img alt='teamLogo' src={Logo} />
                                      )}
                                      <p>{match.teamName}</p>
                                    </div>
                                    <div className={`team-score ${list.winnerId !== null && list.winnerId === match.teamId ? "winner-score" : ""}`}>
                                      <p>{match.score}</p>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className={`team-item`}>
                                      <Select
                                        style={{ width: "100%", height: "40px", borderRadius: "8px 0px 0px 8px" }}
                                        showSearch
                                        filterOption={(input, option) =>
                                          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                        }
                                        options={teamOptionList}
                                        optionRender={(option) => (
                                          <div style={{ display: "flex", alignItems: "center" }}>
                                            <img style={{ marginRight: "10px", borderRadius: "50%" }} alt='team-logo' src={Logo} />
                                            <span style={{ color: "#fff" }}>{option.data.label}</span>
                                          </div>
                                        )}
                                        value={teamList.find((x) => x.value === match.teamId)}
                                        labelRender={labelRender}
                                        dropdownStyle={{ backgroundColor: "#2a2a2a", color: "#ffffff" }}
                                        onChange={(value) => onSelectedTeam(value, list.matchId, matchIndex)}
                                      />
                                    </div>
                                    <div className={`team-score`}>
                                      {typeValue === 3 && (
                                        teamIsLocked?.find((x) => x === match.teamId) ? (
                                          <Icon.LockOutlined style={{ fontSize: '24px', color: '#ffffff' }} onClick={() => onChangeLocked(match.teamId)} />
                                        ) : (
                                          <Icon.UnlockOutlined style={{ fontSize: '24px', color: '#ffffff' }} onClick={() => onChangeLocked(match.teamId)} />
                                        )
                                      )}
                                    </div>
                                  </>
                                )}
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

export default DoubleEliminationTournament