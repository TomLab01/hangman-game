import { useContext } from "react";
import dataContext from './dataContext'
import configContext from './configContext'
import './style.css';

function HangmanPicture() {
	const { data } = useContext(dataContext);
	const { config } = useContext(configContext);
	// middle of the game (show hearts)
	if (data.lives > 0 && data.spaces > 0) {
		return (
			<div className='hangman-container'>
				{new Array(data.lives).fill(0).map((elt, idx) => (
					<img className="heart-icon" src="/images/heart_icon.png" alt="" key={idx} />
				))}
			</div>
		)
	}
	// end of the game with DEFEAT
	else if (data.lives === 0) {
		return (
			<div className='hangman-container'>
				<p id="hangman-text-defeat">{config.keywords.defeat.toUpperCase()}</p>
			</div>
		)
	}
	// end of the game with VICTORY
	else {
		return (
			<div className='hangman-container'>
				<p id="hangman-text-victory">{config.keywords.victory.toUpperCase()}</p>
			</div>
		)
	}
}

export default HangmanPicture;
