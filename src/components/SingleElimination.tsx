import { SingleEliminationBracket, DoubleEliminationBracket, Match, SVGViewer, createTheme } from 'react-tournament-brackets';
import { mockData, singleData, smallSingleData, fiveTeamsData, sixTeamsData, soloWalk, simpleBracket, twelveTeamsData, twentyTeamsData } from "../mock/single-simple-data"
import "./style.scss"
import Logo from "../assests/image/team-logo.png"

const GlootTheme = createTheme({
  textColor: { main: '#FFFFFF', highlighted: '#D5F87C', dark: '#3E414D' },
  matchBackground: { wonColor: '#daebf9', lostColor: '#96c6da' },
  score: {
    background: { wonColor: '#87b2c4', lostColor: '#87b2c4' },
    text: { highlightedWonColor: '#7BF59D', highlightedLostColor: '#FB7E94' },
  },
  border: {
    color: '#CED1F2',
    highlightedColor: '#da96c6',
  },
  roundHeaders: { background: '#000000' },
  connectorColor: '#CED1F2',
  connectorColorHighlight: '#da96c6',
  svgBackground: '#000000',
  canvasBackground: "#000000",
});

const roundTextGenerator = (currentRoundNumber: number, roundsTotalNumber: number) => {
  return `Round ${currentRoundNumber}`;
};

export const SingleElimination = () => (

  <SingleEliminationBracket
    matches={twelveTeamsData}
    // theme={GlootTheme}
    // matchComponent={Match}
    options={{
      style: {
        roundHeader: {
          backgroundColor: GlootTheme.roundHeaders.background,
          fontColor: GlootTheme.textColor.highlighted,
          roundTextGenerator,
        },
        spaceBetweenColumns: 100,
        connectorColor: GlootTheme.textColor.main,
        connectorColorHighlight: GlootTheme.textColor.highlighted,
        horizontalOffset: 20,
        width: 400, //width all
        roundSeparatorWidth: 100, //width of double line
        boxHeight: 150, //heigh of eact match
      },
    }}
    matchComponent={({
      match,
      onMatchClick,
      onPartyClick,
      onMouseEnter,
      onMouseLeave,
      topParty,
      bottomParty,
      topWon,
      bottomWon,
      topHovered,
      bottomHovered,
      topText,
      bottomText,
      connectorColor,
      computedStyles,
      teamNameFallback,
      resultFallback,
    }) => (
      <div className='match-row'>
        <div className='header-match'>
          <div className='time-detail'>
            <p>{`M${match.id} : ${new Date(match.startTime).toLocaleString()}`}</p>
            <div className='circle-icon'></div>
          </div>
          <div className='status'>
            <div className='start-badge'>Start in</div>
            <p>58:32 m.</p>
          </div>
        </div>
        <div className='match-item'>
          <div className='bo-border'>
            <p>Bo</p>
          </div>
          {topParty.resultText === 'Bye' ? (
            <div className='team-detail'>
              <div
                onMouseEnter={() => onMouseEnter(topParty.id)}
                style={{ display: 'flex' }}
              >
                <div className={`team-name ${topParty.isWinner ? 'team-win-bye' : ''}`}>
                  {topParty.name !== "TBD" && (
                    <>
                      <img alt='teamLogo' src={Logo} />
                      <p>{topParty.name}</p>
                    </>
                  )}
                </div>
                <div className={`team-score ${topParty.isWinner ? 'score-win-bye' : ''}`}>
                  <p>{topParty.score}</p>
                </div>
              </div>
              {/* <div
                onMouseEnter={() => onMouseEnter(bottomParty.id)}
                style={{ display: 'flex' }}
              >
                <div className={`team-name ${bottomParty.isWinner ? 'team-win' : ''}`}>
                  {bottomParty.name !== "TBD" && (
                    <>
                      <img alt='teamLogo' src={Logo} />
                      <p>{bottomParty.name}</p>
                    </>
                  )}
                </div>
                <div className={`team-score ${bottomParty.isWinner ? 'score-win' : ''}`}>
                  <p>{bottomParty.score}</p>
                </div>
              </div> */}
            </div>
          ) : <div className='team-detail'>
            <div
              onMouseEnter={() => onMouseEnter(topParty.id)}
              style={{ display: 'flex' }}
            >
              <div className={`team-name ${topParty.isWinner ? 'team-win' : ''}`}>
                {topParty.name !== "TBD" && (
                  <>
                    <img alt='teamLogo' src={Logo} />
                    <p>{topParty.name}</p>
                  </>
                )}
              </div>
              <div className={`team-score ${topParty.isWinner ? 'score-win' : ''}`}>
                <p>{topParty.score}</p>
              </div>
            </div>
            <div
              onMouseEnter={() => onMouseEnter(bottomParty.id)}
              style={{ display: 'flex' }}
            >
              <div className={`team-name ${bottomParty.isWinner ? 'team-win' : ''}`}>
                {bottomParty.name !== "TBD" && (
                  <>
                    <img alt='teamLogo' src={Logo} />
                    <p>{bottomParty.name}</p>
                  </>
                )}
              </div>
              <div className={`team-score ${bottomParty.isWinner ? 'score-win' : ''}`}>
                <p>{bottomParty.score}</p>
              </div>
            </div>
          </div>}
          {/* <div className='team-detail'>
              <div
                onMouseEnter={() => onMouseEnter(topParty.id)}
                style={{ display: 'flex' }}
              >
                <div className={`team-name ${topParty.isWinner ? 'team-win' : ''}`}>
                  {topParty.name !== "TBD" && (
                    <>
                      <img alt='teamLogo' src={Logo} />
                      <p>{topParty.name}</p>
                    </>
                  )}
                </div>
                <div className={`team-score ${topParty.isWinner ? 'score-win' : ''}`}>
                  <p>{topParty.score}</p>
                </div>
              </div>
              <div
                onMouseEnter={() => onMouseEnter(bottomParty.id)}
                style={{ display: 'flex' }}
              >
                <div className={`team-name ${bottomParty.isWinner ? 'team-win' : ''}`}>
                  {bottomParty.name !== "TBD" && (
                    <>
                      <img alt='teamLogo' src={Logo} />
                      <p>{bottomParty.name}</p>
                    </>
                  )}
                </div>
                <div className={`team-score ${bottomParty.isWinner ? 'score-win' : ''}`}>
                  <p>{bottomParty.score}</p>
                </div>
              </div>
          </div> */}
        </div>
      </div>

    )}
  />
);