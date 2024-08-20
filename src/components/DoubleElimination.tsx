import { DoubleEliminationBracket, Match, createTheme } from 'react-tournament-brackets';
import { doubleData } from '../mock/double-simple-data';

export const DoubleElimination = () => {

  const WhiteTheme = createTheme({
    textColor: { main: '#000000', highlighted: '#da96c6', dark: '#FF0707' },
    matchBackground: { wonColor: '#daebf9', lostColor: '#96c6da' },
    score: {
      background: { wonColor: '#87b2c4', lostColor: '#87b2c4' },
      text: { highlightedWonColor: '#7BF59D', highlightedLostColor: '#FB7E94' },
    },
    border: {
      color: '#CED1F2',
      highlightedColor: '#da96c6',
    },
    roundHeaders: { background: '#da96c6', fontColor: '#000' },
    connectorColor: '#CED1F2',
    connectorColorHighlight: '#da96c6',
    svgBackground: '#FAFAFA',
  });

  return (
    <DoubleEliminationBracket
      matches={doubleData}
      matchComponent={Match}
      options={{
        style: {
          roundHeader: {
            backgroundColor: WhiteTheme.roundHeaders.background,
            fontColor: WhiteTheme.roundHeaders.background,
          },
          connectorColor: WhiteTheme.textColor.highlighted,
          connectorColorHighlight: WhiteTheme.textColor.dark,
        },
      }}
    />
  );
};