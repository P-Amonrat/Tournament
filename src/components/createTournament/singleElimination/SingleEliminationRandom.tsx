import React, { useEffect, useState } from 'react';
import { MatchData, GroupTeam } from '../../../interface/tournaments';
import Logo from "../../../assests/image/team-logo.png";
import "../../styleCustom.scss"
import { DatePicker, Input } from 'antd'
import type { DatePickerProps } from 'antd'

interface IPropsRandom {
  sortedRounds: number[]
  groupedMatches: GroupTeam[][]
  onChangeMatchStart: Function
};

const SingleEliminationRandom: React.FC<IPropsRandom> = ({
  sortedRounds,
  groupedMatches,
  onChangeMatchStart
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
            <div className='container'>
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
  )
}

export default SingleEliminationRandom