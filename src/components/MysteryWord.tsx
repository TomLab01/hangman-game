import { useContext } from "react";
import dataContext from './dataContext'
import { wordFilter } from "./utils";
import './style.css';

function MysteryWord() {
	const { data } = useContext(dataContext);
	let known_letters = wordFilter(data.word, data.knowledge);
	return (
		<div className="word-container">
			<div className="container">
				{known_letters.map((elt, idx) => (
					<div className='word-letter' key={idx}>{elt}</div>
				))}
			</div>
		</div>

	);
}

export default MysteryWord;
