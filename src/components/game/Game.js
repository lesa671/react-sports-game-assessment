import React from 'react';
import Team from '../team/Team';
import ScoreBoard from '../scoreboard/ScoreBoard';
import  soundShot from '../../assets/audio/zapsplat_magic_wand_whoosh_burst_005_12550.mp3'
import soundScore from '../../assets/audio/PrincessBrideSword.wav'

class Game extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            resetCount: 0,
            homeTeamStats: {
                shots: 0,
                score: 0,
            },

            visitingTeamStats: {
                shots: 0,
                score: 0,
            },

        }

        this.shotSound = new Audio(soundShot)
        this.scoreSound = new Audio(soundScore)
    }


    shoot = (team) => {
        const teamStatsKey = `${team}TeamStats`
        let score = this.state[teamStatsKey].score
        this.shotSound.play()

        if (Math.random() > 0.5) {
            score += 1

            setTimeout(() => {
                this.scoreSound.play()
            }, 300)
        }

        this.setState((state, props) => ({
            [teamStatsKey]: {
                shots: state[teamStatsKey].shots + 1,
                score: score,
            }
        }))
    }

    resetGame = () => {
        this.setState((state, props) => ({
            resetCount: state.resetCount + 1,
            homeTeamStats: {
                shots: 0,
                score: 0,
            },
            visitingTeamStats: {
                shots: 0,
                score: 0,
            },
        }))
    }

    render() {
        return (
            <div className='Game'>
                <ScoreBoard
                    visitingTeamStats={this.state.visitingTeamStats}
                    homeTeamStats={this.state.homeTeamStats}
                />
                <h1>Welcome to {this.props.venue}</h1>
                <div className='stats'>
                    <Team teamName={this.props.visitingTeam.name}
                        teamLogo={this.props.visitingTeam.logoSrc}
                        stats={this.state.visitingTeamStats}
                        shotHandler={() => this.shoot('visiting')}
                    />

                    <div className='versus'>
                        <h1>VS</h1>
                        <div>
                            <p>Resets:   {this.state.resetCount}</p>
                            <button className='resetButton' onClick={this.resetGame}>Reset Game</button>
                        </div>
                    </div>

                    <Team teamName={this.props.homeTeam.name}
                        teamLogo={this.props.homeTeam.logoSrc}
                        stats={this.state.homeTeamStats}
                        shotHandler={() => this.shoot('home')}
                    />
                </div>
            </div>
        )

    }
}

export default Game;