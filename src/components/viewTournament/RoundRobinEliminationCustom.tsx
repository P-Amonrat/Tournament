import React, { Fragment, useEffect, useState } from 'react'
import { Groups, RandomGroups, RandomTableGroup } from '../../interface/tournaments'
import { Col, Row } from 'antd'
import { groupTeamRoundRobin, randomGroup, groupTeamTable, groupsRandomTable } from '../../mock/roundRobinView'
import Logo from "../../assests/image/team-logo.png";
import "../styleCustom.scss"
import * as Icon from "@ant-design/icons"
import SingleEliminationCustom from './SingleEliminationCustom';
import DoubleEliminationCustom from './DoubleEliminationCustom';

const RoundRobinEliminationCustom = () => {
  const [groupList, setGroupList] = useState<Groups | null>(null)
  const [groupMatch, setGroupMatch] = useState<RandomGroups[]>([])
  const [toggleList, setToggleList] = useState<number[]>([])
  const [groupTable, setGroupTable] = useState<RandomTableGroup | null>(null)

  const onToggleMatch = (groupIndex: number) => {
    if (groupIndex === null) return
    setToggleList(prev => {
      if (prev.includes(groupIndex)) {
        return prev.filter((team) => team !== groupIndex);
      } else {
        return [...prev, groupIndex];
      }
    })
  }

  useEffect(() => {
    setGroupList(groupTeamRoundRobin)
    setGroupMatch(randomGroup)
    setGroupTable(groupsRandomTable)
  }, [])

  return (
    <div className='round-robin'>
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
          <Col xl={8} md={24} xs={24} className='group-table'>
            <div style={{ margin: '20px 0', position: 'relative' }}>
              <table style={{ width: '100%', tableLayout: 'fixed' }}>
                <tbody>
                  {groupTable?.rows.map((row, rowIndex) => (
                    <Fragment key={rowIndex}>
                      <tr >
                        <th style={{ padding: '8px', textAlign: 'center' }}>
                          <img alt="logo" src={Logo} />
                        </th>
                        {row.data.map((cellData, cellIndex) => (
                          <>
                            <td key={cellIndex} style={{ padding: '8px', textAlign: 'center' }}>
                              <p>{cellData.score}</p>
                              <span>{cellData.date}</span>
                            </td>
                            {/* <td></td> */}
                            {cellIndex < row.data.length - 1 && <td></td>}
                          </>
                        ))}
                      </tr>
                      <tr></tr>
                    </Fragment>
                  ))}
                </tbody>
                <tfoot style={{ width: '100%', tableLayout: 'fixed' }}>
                  <tr>
                    <th style={{ padding: '8px', textAlign: "center" }}></th>
                    {groupTable?.headers.map((header, index) => (
                      <>
                        <th key={index} style={{ padding: '8px', textAlign: 'center' }}>
                          <img alt="logo" src={Logo} />
                        </th>
                        {index < groupTable.headers.length - 1 && <th></th>}
                      </>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
            {/* <div className='group-column'>
              {groupTable?.team.verticalTeam.map((list, teamIndex) => (
                <div className='group-logo' key={teamIndex}>
                  <img alt='logo' src={Logo} />
                </div>
              ))}
            </div>
            <div className='group-score'>
              {groupTable?.team.verticalTeam.map((team, index) => {
                const startIndex = index * groupTable.team.verticalTeam.length;
                const endIndex = startIndex + groupTable.team.verticalTeam.length;
                const scoresForTeam = groupTable?.score.slice(startIndex, endIndex);

                return (
                  <div className='group-score-column' key={index}>
                    {scoresForTeam.map((score, scoreIndex) => (
                      <div className='score-text' key={scoreIndex}>
                        <p>{score.score}</p>
                        <span>{score.date}</span>
                      </div>
                    ))}
                  </div>
                )
              })}
            </div> */}
          </Col>
        </Row>
        <div className='group-match'>
          {groupMatch?.map((match, groupIndex) => (
            <>
              <div className='group-match-column desktop'>
                <div className='group-match-header'>
                  <p>{match.groupMatch}</p>
                </div>
                <div className='container'>
                  {match?.groupList.map((list, roundIndex) => (
                    <div key={roundIndex} className={`container-match round-robin`}>
                      <div className="item round-robin" >
                        <div className='match-time'>
                          <p>M{list.matchId} : {list.matchStart} </p>
                          <div className='circle'></div>
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
              <div className='group-match-column mobile'>
                <div className='group-match-header'>
                  <p>{match.groupMatch}</p>
                  {toggleList.includes(groupIndex) ? (
                    <Icon.UpOutlined className='down-icon' onClick={() => onToggleMatch(groupIndex)} />
                  ) : <Icon.DownOutlined className='down-icon' onClick={() => onToggleMatch(groupIndex)} />}
                </div>
                {toggleList.includes(groupIndex) && (
                  <div className='container'>
                    {match?.groupList.map((list, roundIndex) => (
                      <div key={roundIndex} className={`container-match round-robin`}>
                        <div className="item round-robin" >
                          <div className='match-time'>
                            <p>M{list.matchId} : {list.matchStart} </p>
                            <div className='circle'></div>
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
                )}
              </div>
            </>
          ))}
        </div>
        <div className='playoff-line'>
          <p><span>Playoffs</span></p>
        </div>
        <div>
          <SingleEliminationCustom />
          {/* <DoubleEliminationCustom /> */}
        </div>
      </div>
    </div>
  )
}

export default RoundRobinEliminationCustom