import React, { useEffect, useState } from 'react'
import { Groups, RandomGroups, IpropsRoundRobin } from '../../../interface/tournaments'
import { Col, DatePicker, Input, Row, Select } from 'antd'
import { groupTeamRoundRobin, randomGroup } from '../../../mock/roundRobinView'
import Logo from "../../../assests/image/team-logo.png";
import "../../styleCustom.scss"
import * as Icon from "@ant-design/icons"
import SingleEliminationCustom from '../../viewTournament/SingleEliminationCustom';
import dayjs from 'dayjs';

const RoundRobinEliminationTournament: React.FC<IpropsRoundRobin> = ({ 
  typeValue,
  teamIsLocked,
  teamList,
  teamOptionList,
  labelRender 
}) => {
  const [groupList, setGroupList] = useState<Groups | null>(null)
  const [groupMatch, setGroupMatch] = useState<RandomGroups[]>([])

  useEffect(() => {
    setGroupList(groupTeamRoundRobin)
    setGroupMatch(randomGroup)
  }, [])

  return (
    <div className='round-robin'>
      <h1>Group Stage</h1>
      <div className='group-stage-select'>
        <div>
          <p>Group</p>
          <Select style={{ height: "46px" }} />
        </div>
        <div>
          <p>Upper line count</p>
          <Select style={{ height: "46px" }} />
        </div>
        <div>
          <p>Lower line count</p>
          <Select style={{ height: "46px" }} />
        </div>
        <div>
          <p>Best of</p>
          <Select style={{ height: "46px" }} />
        </div>
      </div>
      <h1>Group Stage</h1>
      <div className='group'>
        <Row gutter={[24, 24]} className='group-stage'>
          <Col xl={8} md={12} xs={24} className='group-name'>
            <p>{groupList?.firstGroup.groupName}</p>
            {groupList?.firstGroup.groupList.map((list, index) => (
              <div
                key={index}
                className="name-list"
                style={{ backgroundColor: index === 0 ? "#2a2a2a" : index === 1 || index === 2 ? "#D5F87C" : "#7A6FEE" }}
              >
                <div className='name'>
                  {list.name && <img alt="logo" src={Logo} />}
                  <p>{list.name}</p>
                </div>
                <div className='score'>
                  <div>
                    <p>{list.firstScore}</p>
                  </div>
                  <div>
                    <p>{list.secondScore}</p>
                  </div>
                  <div className='third-score'>
                    <p>{list.thirdScore}</p>
                  </div>
                  <div>
                    <p>{list.totalScore}</p>
                  </div>
                </div>
              </div>
            ))}
          </Col>
          <Col xl={8} md={12} xs={24} className='group-name'>
            <p>{groupList?.secondGroup.groupName}</p>
            {groupList?.secondGroup.groupList.map((list, index) => (
              <div
                key={index}
                className="name-list"
                style={{ backgroundColor: index === 0 ? "#2a2a2a" : index === 1 || index === 2 ? "#D5F87C" : "#7A6FEE" }}
              >
                <div className='name'>
                  {list.name && <img alt="logo" src={Logo} />}
                  <p>{list.name}</p>
                </div>
                <div className='score'>
                  <div>
                    <p>{list.firstScore}</p>
                  </div>
                  <div>
                    <p>{list.secondScore}</p>
                  </div>
                  <div className='third-score'>
                    <p>{list.thirdScore}</p>
                  </div>
                  <div>
                    <p>{list.totalScore}</p>
                  </div>
                </div>
              </div>
            ))}

          </Col>
          <Col xl={8} md={12} xs={24} className='group-table'>

          </Col>
        </Row>
        <div className='group-match'>
          {groupMatch?.map((match) => (
            <div className='group-match-column'>
              <div className='group-match-header'>
                <p>{match.groupMatch}</p>
                <Icon.DownOutlined className='down-icon' />
              </div>
              <div className='container'>
                {match?.groupList.map((list, roundIndex) => (
                  <div key={roundIndex} className={`container-match round-robin`}>
                    <div className="item round-robin" >
                      <div className='select-time'>
                        <p>Match {list.bo} <span> (Start date)</span></p>
                        <DatePicker
                          showTime={{ format: 'HH:mm' }}
                          format="DD/MM/YYYY HH:mm"
                          className='date'
                          // onChange={(value, dateString) => onChangeMatchStart(value, dateString, list.matchId)}
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
                                      // onChange={(value) => onSelectedTeam(value, list.matchId, matchIndex)}
                                    />
                                  </div>
                                  <div className={`team-score`}>
                                    {typeValue === 3 && (
                                      teamIsLocked?.find((x) => x === match.teamId) ? (
                                        <Icon.LockOutlined 
                                        style={{ fontSize: '24px', color: '#ffffff' }} 
                                        // onClick={() => onChangeLocked(match.teamId)} 
                                        />
                                      ) : (
                                        <Icon.UnlockOutlined style={{ fontSize: '24px', color: '#ffffff' }} 
                                        // onClick={() => onChangeLocked(match.teamId)} 
                                        />
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
          ))}
        </div>
        <div className='playoff-line'>
          <p><span>Playoffs</span></p>
        </div>
        <div>
          <SingleEliminationCustom />
        </div>
      </div>
    </div>
  )
}

export default RoundRobinEliminationTournament