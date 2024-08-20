import type { SelectProps } from 'antd'
type LabelRender = SelectProps['labelRender'];

export interface MatchData {
  teamId: number | null,
  teamName: string | null,
  logoTeam: string | null,
  score: number | null
}

export interface GroupTeam {
  matchId: number | null,
  round: number | null,
  winnerId: number | null,
  loeserId: number | null,
  matchStart: string | null,
  matchEnd: string | null,
  status: string | null,
  duration: string | null,
  bo: number | null,
  match: MatchData[]
}

export interface MatchResults {
  results: GroupTeam[]
}

export interface GroupTeamTest {
  matchId: number | null,
  nextMatch: number | null
  round: number | null,
  winnerId: number | null,
  loeserId: number | null,
  matchStart: string | null,
  matchEnd: string | null,
  status: string | null,
  duration: string | null,
  bo: number | null,
  match: MatchData[]
}

export interface MatchResultsTest {
  results: GroupTeamTest[]
}

export interface DoubleMatchResults {
  upper: MatchResults,
  lower: MatchResults,
  final: MatchResults
}

export interface TeamOption {
  value: number;
  label: string;
  emoji: string
};

export interface TeamScore {
  name: string,
  logo: string,
  firstScore: string,
  secondScore: string,
  thirdScore: string,
  totalScore: string
}

export interface GroupOrder {
  groupName: string
  groupList: TeamScore[]
}

export interface Groups {
  firstGroup: GroupOrder,
  secondGroup: GroupOrder
}

export interface GroupList {
  matchId: number | null,
  winnerId: number | null,
  loeserId: number | null,
  matchStart: string | null,
  matchEnd: string | null,
  status: string | null,
  duration: string | null,
  bo: number | null,
  match: MatchData[]
}

export interface RandomGroups {
  groupMatch: string,
  groupList: GroupList[]
}

export interface TeamsTable {
  name: string | null,
  logo: string | null
}

export interface ScoreTeamsTable {
  score: string | null,
  date: string | null
}

export interface RowsHeaderTable {
  rowHeader: TeamsTable
  data: ScoreTeamsTable[]
}

export interface RandomTableGroup {
  headers: TeamsTable[]
  rows: RowsHeaderTable[]
}


export interface IProps {
  sortedRounds: number[]
  groupedMatches: GroupTeam[][]
  teamOptionList: TeamOption[]
  onChangeMatchStart: Function
  onSelectedTeam: Function
  labelRender: LabelRender
}

export interface IPropsSingleRandom {
  typeValue: number
  sortedRounds: number[]
  groupedMatches: GroupTeamTest[][]
  teamOptionList: TeamOption[]
  onChangeMatchStart: Function
  onSelectedTeam: Function
  labelRender: LabelRender,
  onChangeLocked: Function,
  teamIsLocked: number[],
  teamList: TeamOption[]
  onChangeScore: Function
}

export interface IPropsDoubleRandom {
  typeValue: number
  sortedRounds: number[]
  groupedMatches: GroupTeam[][]
  sortedLowerRounds: number[]
  groupedLowerMatches: GroupTeam[][]
  teamOptionList: TeamOption[]
  matchFinal: GroupTeam[]
  onChangeMatchStart: Function,
  onSelectedTeam: Function
  labelRender: LabelRender
  onChangeLocked: Function
  teamIsLocked: number[],
  teamList: TeamOption[]
}

export interface IpropsRoundRobin {
  typeValue: number
  teamIsLocked: number[]
  teamList: TeamOption[]
  teamOptionList: TeamOption[]
  labelRender: LabelRender
}