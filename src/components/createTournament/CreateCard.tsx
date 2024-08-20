import React, { FunctionComponent, useEffect, useState } from 'react'
import { Button, Col, Radio, Row } from 'antd';
import type { RadioChangeEvent } from 'antd';
import SingleEliminationRandom from './singleElimination/SingleEliminationRandom';
import SingleEliminationByAdmin from './singleElimination/SingleEliminationByAdmin';
import SingleEliminationAdminAndRandom from './singleElimination/SingleEliminationAdminAndRandom';
import { eightTeamData } from '../../mock/singleSelectedByAdmin';
import { eightSingleRandom, eightSingleRandomExtra } from "../../mock/singleRandom"
import { GroupTeam, TeamOption, GroupTeamTest } from '../../interface/tournaments';
import type { SelectProps } from 'antd';
import Logo from "../../assests/image/team-logo.png";
import DoubleEliminationRandom from './doubleElimination/DoubleEliminationRandom';
import DoubleEliminationByAdmin from './doubleElimination/DoubleEliminationByAdmin';
import DoubleEliminationAdminAndRandom from './doubleElimination/DoubleEliminationAdminAndRandom';
import { eightDouble, eightExtraDouble } from "../../mock/doubleData"
import { eightDoubleRandom } from "../../mock/doubleRandom"
import { eightDoubleSelect } from "../../mock/doubleSelectedByAdmin"
import SingleEliminationTournament from './singleElimination/SingleEliminationTournament';
import DoubleEliminationTournament from './doubleElimination/DoubleEliminationTournament';
import RoundRobinEliminationTournament from './roundRobinElimination/RoundRobinEliminationTournament';

type LabelRender = SelectProps['labelRender'];

interface IProps {
  type: string;
}

const teamList = [
  { value: 1, label: 'Team 1', emoji: "Logo" },
  { value: 2, label: 'Team 2', emoji: "Logo" },
  { value: 3, label: 'Team 3', emoji: "Logo" },
  { value: 4, label: 'Team 4', emoji: "Logo" },
  { value: 5, label: 'Team 5', emoji: "Logo" },
  { value: 6, label: 'Team 6', emoji: "Logo" },
  { value: 7, label: 'Team 7', emoji: "Logo" },
  { value: 8, label: 'Team 8', emoji: "Logo" },
]

const CreateCard: FunctionComponent<IProps> = (props: IProps) => {
  const [value, setValue] = useState<number>(1)
  const [matchJson, setMatchJson] = useState<GroupTeamTest[]>([])
  const [teamOptionList, setTeamOptionList] = useState<TeamOption[]>([])
  const [teamIsLocked, setTeamIsLocked] = useState<number[]>([])
  const [sortedRounds, setSortedRounds] = useState<number[]>([]);
  const [groupedMatches, setGroupedMatches] = useState<GroupTeamTest[][]>([]);
  const [matchJsonUpper, setMatchJsonUpper] = useState<GroupTeam[]>([])
  const [matchJsonLower, setMatchJsonLower] = useState<GroupTeam[]>([])
  const [sortedLowerRounds, setSortedLowerRounds] = useState<number[]>([]);
  const [groupedLowerMatches, setGroupedLowerMatches] = useState<GroupTeam[][]>([]);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    if (props.type === "single") {
      if (value === 1) {
        setMatchJson(eightSingleRandom?.results)
      } else {
        setTeamIsLocked([])
        // setMatchJson(eightTeamData?.results)
      }
    } else {
      if (value === 1) {
        // setMatchJson(eightDoubleRandom?.final.results)
        setMatchJsonUpper(eightDoubleRandom?.upper.results)
        setMatchJsonLower(eightDoubleRandom?.lower.results)
      } else {
        setTeamIsLocked([])
        // setMatchJson(eightDoubleSelect?.final.results)
        setMatchJsonUpper(eightDoubleSelect?.upper.results)
        setMatchJsonLower(eightDoubleSelect?.lower.results)
      }
    }
  }

  const fetchData = () => {
    const groupByRound = (matches: GroupTeamTest[]) => {
      return matches.reduce((acc, match) => {
        const round = match.round ?? 0;

        if (!acc[round]) {
          acc[round] = [];
        }

        acc[round].push(match);
        return acc;
      }, {} as Record<number, GroupTeamTest[]>);
    };

    if (props.type === "single") {
      const groupedMatchesRecord: Record<number, GroupTeamTest[]> = groupByRound(matchJson);

      const newSortedRounds = Object.keys(groupedMatchesRecord)
        .map(Number)
        .sort((a, b) => a - b);

      const newGroupedMatches = newSortedRounds.map(round => groupedMatchesRecord[round]);

      setSortedRounds(newSortedRounds);
      setGroupedMatches(newGroupedMatches);
    } else {

      // const groupedMatchesUpperRecord: Record<number, GroupTeam[]> = groupByRound(matchJsonUpper);
      // const newSortedUpperRounds = Object.keys(groupedMatchesUpperRecord)
      //   .map(Number)
      //   .sort((a, b) => a - b);
      // const newGroupedUpperMatches = newSortedUpperRounds.map(round => groupedMatchesUpperRecord[round]);

      // const groupedMatchesLowerRecord: Record<number, GroupTeam[]> = groupByRound(matchJsonLower);
      // const newSortedLowerRounds = Object.keys(groupedMatchesLowerRecord)
      //   .map(Number)
      //   .sort((a, b) => a - b);
      // const newGroupedLowerMatches = newSortedLowerRounds.map(round => groupedMatchesLowerRecord[round]);

      // setSortedRounds(newSortedUpperRounds);
      // setGroupedMatches(newGroupedUpperMatches);

      // setSortedLowerRounds(newSortedLowerRounds)
      // setGroupedLowerMatches(newGroupedLowerMatches)
    }

  }

  const onChangeMatchStart = (value: any, dateString: any, matchId: number | null) => {
    const matchIsSelected: GroupTeamTest[] = matchJson?.map((obj, index) => {
      if (obj.matchId === matchId) {
        return {
          ...obj,
          matchStart: dateString
        }
      }
      return obj
    })

    setMatchJson(matchIsSelected);
  };

  const onSelectedTeam = (value: any, matchId: number | null, matchIndex: number) => {
    if (props.type === "single") {
      const matchIsSelected: GroupTeamTest[] = matchJson?.map((obj, index) => {
        if (obj.matchId === matchId) {
          const newObj = { ...obj }
          newObj.match = obj.match.map((item, itemIndex) => {
            if (itemIndex === matchIndex) {
              return {
                ...item,
                teamId: value,
                teamName: teamOptionList.find((order) => order.value === value)?.label || ""
              }
            }
            return item
          })
          return newObj
        }
        return obj
      })

      setMatchJson(matchIsSelected);
    } else {
      const matchIsSelected: GroupTeam[] = matchJsonUpper?.map((obj, index) => {
        if (obj.matchId === matchId) {
          const newObj = { ...obj }
          newObj.match = obj.match.map((item, itemIndex) => {
            if (itemIndex === matchIndex) {
              return {
                ...item,
                teamId: value,
                teamName: teamOptionList.find((order) => order.value === value)?.label || ""
              }
            }
            return item
          })
          return newObj
        }
        return obj
      })
      setMatchJsonUpper(matchIsSelected)
    }
  }

  const labelRender: LabelRender = (props) => {
    const { label, value } = props
    return (
      <div className='label-select'>
        <img alt='team-logo' src={Logo} />
        <span style={{ color: '#fff' }}>{label}</span>
      </div>
    );
  };

  const shuffle = (array: TeamOption[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const onRandomTeam = () => {
    const teamIsNotLocked = teamList?.filter((element) => !teamIsLocked.includes(element.value));
    const copiedArray = Array.from(teamIsNotLocked);
    const shuffledArray = shuffle(copiedArray);

    if (props.type === "single") {
      const updatedMatchJson = matchJson.map(round => {
        if (round.round === 1) {
          const updatedMatches = round.match.map(item => {
            const checkLockedData = shuffledArray.find(x => x.value === item.teamId);
            if (checkLockedData) {
              return {
                ...item,
                teamId: null,
                teamName: null
              };
            }
            return item;
          });
          return {
            ...round,
            match: updatedMatches
          };
        }
        return round;
      });

      const randomTeams = updatedMatchJson.map(round => {
        const updatedMatches = round.match.map(item => {
          if (item.teamId === null) {
            const randomTeam = shuffledArray.pop()
            if (randomTeam) {
              return {
                ...item,
                teamId: randomTeam.value,
                teamName: randomTeam.label
              };
            }
          }
          return item;
        });
        return {
          ...round,
          match: updatedMatches
        };
      });
      setMatchJson(randomTeams)
    } else {
      const updatedMatchJson = matchJsonUpper.map(round => {
        if (round.round === 1) {
          const updatedMatches = round.match.map(item => {
            const checkLockedData = shuffledArray.find(x => x.value === item.teamId);
            if (checkLockedData) {
              return {
                ...item,
                teamId: null,
                teamName: null
              };
            }
            return item;
          });
          return {
            ...round,
            match: updatedMatches
          };
        }
        return round;
      });

      const randomTeams = updatedMatchJson.map(round => {
        const updatedMatches = round.match.map(item => {
          if (item.teamId === null) {
            const randomTeam = shuffledArray.pop()

            if (randomTeam) {
              return {
                ...item,
                teamId: randomTeam.value,
                teamName: randomTeam.label
              };
            }
          }
          return item;
        });
        return {
          ...round,
          match: updatedMatches
        };
      });
      console.log("randomTeams", randomTeams)
      setMatchJsonUpper(randomTeams)
    }
  };

  const onChangeLocked = (id: number | null) => {
    if (id === null) return
    setTeamIsLocked(prev => {
      if (prev.includes(id)) {
        return prev.filter((team) => team !== id);
      } else {
        return [...prev, id];
      }
    })
  }

  const onChangeScore = (matchId: number, nextMatch: number, teamId: number, score: number) => {
    // Step 1: Update the matchJson with the new score and determine winner/loser
    const updatedMatchJson = matchJson.map((match) => {
      if (match.matchId === matchId) {
        const updatedMatch = { ...match };
        updatedMatch.match = match.match.map((team) =>
          team.teamId === teamId ? { ...team, score } : team
        );

        const [team1, team2] = updatedMatch.match;

        if (team1.score !== null && team2.score !== null) {
          const team1Score = team1.score as number;
          const team2Score = team2.score as number;

          if (team1Score > team2Score) {
            updatedMatch.winnerId = team1.teamId;
            updatedMatch.loeserId = team2.teamId;
          } else if (team2Score > team1Score) {
            updatedMatch.winnerId = team2.teamId;
            updatedMatch.loeserId = team1.teamId;
          } else {
            updatedMatch.winnerId = null;
            updatedMatch.loeserId = null;
          }
        }

        return updatedMatch;
      }
      return match;
    });


    const orderTeams = updatedMatchJson.filter((x) => x.nextMatch === nextMatch)

    // Step 2: Update the next match with the winner
    const finalMatchJson = updatedMatchJson.map((match) => {
      if (match.matchId === nextMatch) {
        const winnerMatch = updatedMatchJson.find((m) => m.matchId === matchId);
        const indexes = orderTeams
          .map((x, index) => {
            if (x.matchId === winnerMatch?.matchId) {
              return index;
            }
            return null;
          })
          .find(index => index !== null);

        const winnerTeam = winnerMatch?.match.find((team) => team.teamId === winnerMatch.winnerId);

        const teamIndex = match?.match.findIndex((t, index) => index === indexes);
        if (teamIndex !== -1) {
          match.match[teamIndex] = {
            ...match.match[teamIndex],
            teamId: winnerTeam?.teamId || null,
            teamName: winnerTeam?.teamName || null,
            logoTeam: winnerTeam?.logoTeam || null,
          };
        }
      }
      return match;
    });

    setMatchJson(finalMatchJson);
  };

  useEffect(() => {
    let teamIdsInMatches: any
    if (props.type === "single") {
      teamIdsInMatches = matchJson.flatMap(result => result.match.map(m => m.teamId));
    } else {
      teamIdsInMatches = matchJsonUpper.flatMap(result => result.match.map(m => m.teamId));
    }
    const updatedTeamOptionList = teamList.filter(option => !teamIdsInMatches.includes(option.value));
    setTeamOptionList(updatedTeamOptionList)
  }, [matchJson, matchJsonUpper])

  useEffect(() => {
    setTeamOptionList(teamList)
    if (props.type === "single") {
      if (value === 1) {
        setMatchJson(eightSingleRandom?.results)
      } else {
        // setMatchJson(eightTeamData?.results)
      }
    } else {
      if (value === 1) {
        // setMatchJson(eightDoubleRandom?.final.results)
        setMatchJsonUpper(eightDoubleRandom?.upper.results)
        setMatchJsonLower(eightDoubleRandom?.lower.results)
      } else {
        // setMatchJson(eightDoubleSelect?.final.results)
        setMatchJsonUpper(eightDoubleSelect?.upper.results)
        setMatchJsonLower(eightDoubleSelect?.lower.results)
      }
    }
  }, [props.type, value])

  useEffect(() => {
    fetchData()
  }, [matchJson, matchJsonLower, matchJsonUpper, props.type, value])

  return (
    <>
      <Row gutter={[16, 16]} justify={"space-between"} align={"middle"} style={{ width: "100%" }}>
        <Col flex={"auto"}>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1} style={{ color: "#fff" }}>Random team</Radio>
            <Radio value={2} style={{ color: "#fff" }}>Select team by admin</Radio>
            <Radio value={3} style={{ color: "#fff" }}>Random + Select by admin team</Radio>
          </Radio.Group>
        </Col>
        {value === 3 && (
          <Col flex={"none"}>
            <Button onClick={onRandomTeam}>Random</Button>
          </Col>
        )}
      </Row>

      {props.type === "single" ? (
        <SingleEliminationTournament
          typeValue={value}
          sortedRounds={sortedRounds}
          groupedMatches={groupedMatches}
          teamOptionList={teamOptionList}
          onChangeMatchStart={onChangeMatchStart}
          onSelectedTeam={onSelectedTeam}
          labelRender={labelRender}
          onChangeLocked={onChangeLocked}
          teamIsLocked={teamIsLocked}
          teamList={teamList}
          onChangeScore={onChangeScore}
        />) : props.type === "double" ? (
          <DoubleEliminationTournament
            typeValue={value}
            matchFinal={matchJson}
            sortedRounds={sortedRounds}
            groupedMatches={groupedMatches}
            sortedLowerRounds={sortedLowerRounds}
            groupedLowerMatches={groupedLowerMatches}
            teamOptionList={teamOptionList}
            onChangeMatchStart={onChangeMatchStart}
            onSelectedTeam={onSelectedTeam}
            labelRender={labelRender}
            onChangeLocked={onChangeLocked}
            teamIsLocked={teamIsLocked}
            teamList={teamList}
          />
        ) : (
        <RoundRobinEliminationTournament
          typeValue={value}
          teamList={teamList}
          teamIsLocked={teamIsLocked}
          teamOptionList={teamOptionList}
          labelRender={labelRender}
        />
      )}

      {/* {props.type === "single" ? (
        value === 1 ? (
          <SingleEliminationRandom
            sortedRounds={sortedRounds}
            groupedMatches={groupedMatches}
            onChangeMatchStart={onChangeMatchStart}
          />
        ) : value === 2 ? (
          <SingleEliminationByAdmin
            sortedRounds={sortedRounds}
            groupedMatches={groupedMatches}
            teamOptionList={teamOptionList}
            onChangeMatchStart={onChangeMatchStart}
            onSelectedTeam={onSelectedTeam}
            labelRender={labelRender}
          />
        ) : (
          <SingleEliminationAdminAndRandom
            sortedRounds={sortedRounds}
            groupedMatches={groupedMatches}
            teamOptionList={teamOptionList}
            onChangeMatchStart={onChangeMatchStart}
            onSelectedTeam={onSelectedTeam}
            labelRender={labelRender}
            onChangeLocked={onChangeLocked}
            teamIsLocked={teamIsLocked}
            teamList={teamList}
          />
        )
      ) : value === 1 ? (
        <DoubleEliminationRandom
          matchFinal={matchJson}
          sortedRounds={sortedRounds}
          groupedMatches={groupedMatches}
          sortedLowerRounds={sortedLowerRounds}
          groupedLowerMatches={groupedLowerMatches}
          onChangeMatchStart={onChangeMatchStart}
        />
      ) : value === 2 ? (
        <DoubleEliminationByAdmin />
      ) : <DoubleEliminationAdminAndRandom />} */}
    </>
  )
}

export default CreateCard
