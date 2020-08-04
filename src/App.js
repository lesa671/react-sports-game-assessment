import React from 'react'
import './App.css'
import Game from './components/game/Game'
import logo1 from './assets/images/LeprechaunPlayingBasketball.png'
import logo2 from './assets/images/unicorn-basketball-player.png'
import logo3 from './assets/images/dragon_playing_basketball.png'
import logo4 from './assets/images/grim_reaper_playing_basketball.png'

function App() {
  const leprechauns = {
    name: 'Dublin Leprechauns',
    logoSrc: logo1
  }

  const unicorns = {
    name: 'Indus Valley Unicorns',
    logoSrc: logo2

  }

  const dragons = {
    name: 'Valyria Dragons',
    logoSrc: logo3

  }

  const reapers = {
    name: 'Hanau Grim Reapers',
    logoSrc: logo4

  }

  return (
    <div className="App">
      
      <Game
        venue='The Crystal Ballroom'
        homeTeam={unicorns}
        visitingTeam={leprechauns}
      />
      <Game
        venue='Endtimes Arena'
        homeTeam={reapers}
        visitingTeam={dragons}
      />
    </div>
  );
}

export default App;

// Credit citation - I received help fixing some errors in my code:
// Jon Taylor (facilitator) showed me that my Team and Scoreboard components didn't need to be in the App component as they were already called in the Game component, which is in turn then called by the App component
// Jon Taylor (facilitator) and Colin Stachelrodt (classmate) helped me get the images and audio to work properly
// Many thanks to them both!
