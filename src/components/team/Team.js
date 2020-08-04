import React from 'react'

function Team(props) {

    let shotPercentageDiv

    if (props.stats.shots) {
        const shotPercentage = Math.round((props.stats.score / props.stats.shots) * 100)
        shotPercentageDiv = (
            <div>
                <p>Shooting %:   {shotPercentage}</p>
            </div>
        )
    }

    return (
        <div className='Team'>
            <h2>{props.teamName}</h2>

            <div className='logo'>
                <img src={props.teamLogo} alt='logo for {props.teamName}' />
            </div>
            <br />
            <div>
                <p>Shots:   {props.stats.shots}</p>
            </div>

            <div>
                <p>Score:   {props.stats.score}</p>
            </div>

            {shotPercentageDiv}

            <button className='shootButton' onClick={props.shotHandler}>Shoot!</button>
        </div>

    )
}

export default Team;
