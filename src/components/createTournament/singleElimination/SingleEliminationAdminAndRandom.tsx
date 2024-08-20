import React, { useEffect, useState } from 'react';
import { eightTeamData, eightTeamExtraData } from "../../../mock/singleSelectedByAdmin"
import { MatchData, GroupTeam, MatchResults, TeamOption, IPropsSingleRandom } from '../../../interface/tournaments';
import Logo from "../../../assests/image/team-logo.png";
import "../../styleCustom.scss"
import { DatePicker, Input, Select, Space, Tag } from 'antd'
import * as Icon from '@ant-design/icons';

const SingleEliminationAdminAndRandom: React.FC<IPropsSingleRandom> = ({
  sortedRounds,
  groupedMatches,
  teamOptionList,
  onChangeMatchStart,
  onSelectedTeam,
  labelRender,
  onChangeLocked,
  teamIsLocked,
  teamList
}) => {

  return (
    <div className='tour-card'>
      {sortedRounds?.map((round, index) => {
        const currentMatches = groupedMatches?.[round - 1];
        const nextMatches = groupedMatches?.[sortedRounds[index + 1]] || [];
        const areLengthsEqual = currentMatches?.length === nextMatches?.length;

        return (
          <div key={round} className="round">
            <div className='round-header'>
              <p>Round {round}</p>
            </div>
            <div className='container create-container'>
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
                        {list.match?.map((match, matchIndex) => {
                          return (
                            <div key={matchIndex} className='match-item' >
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
                                {teamIsLocked?.find((x) => x === match.teamId) ? (
                                  <Icon.LockOutlined style={{ fontSize: '24px', color: '#ffffff' }} onClick={() => onChangeLocked(match.teamId)} />
                                ) : (
                                  <Icon.UnlockOutlined style={{ fontSize: '24px', color: '#ffffff' }} onClick={() => onChangeLocked(match.teamId)} />
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}
    </div >
  )
}

export default SingleEliminationAdminAndRandom