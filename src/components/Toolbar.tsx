import { useContext } from "react";
import DataContext from './dataContext'
import { dataType } from "./dataContext";
import configContext from './configContext'
import { configType } from "./configContext";
import { getRandomInt } from "./utils";
import { FRENCH_KEYWORDS, ENGLISH_KEYWORDS, LIVES_BY_LEVELS, VISIBILITY, VERBOSE } from "./constants";
import './style.css';

function Toolbar() {
	const { data, setData } = useContext(DataContext);
	const { config, setConfig } = useContext(configContext);
	return (
		<div className="toolbar-container">
			<div className="toolbar-button-container">
				<button id="restart" className="toolbar-button" onClick={() => restartButton(data, setData, config)}>
					{config.keywords.restart.toUpperCase()}
				</button>
			</div>
			<div className="toolbar-button-container">
				<button id="level" className="toolbar-button" onClick={() => levelButton(config, setConfig)}>
					{config.keywords.level + " : " + config.keywords.levels[config.level].toUpperCase()}
				</button>
			</div>
			<div className="toolbar-button-container">
				<button id="language" className="toolbar-button" onClick={() => languageButton(config, setConfig)}>
					{config.keywords.language.toUpperCase()}
				</button>
			</div>
			<div className="toolbar-button-container" onClick={() => aboutButton()}>
				<button id="about" className="toolbar-button">
					{config.keywords.about}
				</button>
			</div>
		</div>
	);
}

function restartButton(data: dataType, setData: (value: dataType) => void, config: configType): any {
	// randomly select a new word
	let allWords: string[] = config.words[config.language]
	let newWord: string = data.word;
	while (newWord === data.word) {
		newWord = allWords[getRandomInt(0, allWords.length)]
	}
	// init the data state
	setData({
		word: newWord,
		knowledge: new Array(newWord.length).fill(VISIBILITY),
		lives: LIVES_BY_LEVELS[config.level],
		spaces: newWord.length
	});
	// clean keyboard buttons
	for (let i = 0; i < config.alphabet.length; i++) {
		const buttonLetter = document.getElementById("KB-" + config.alphabet[i]) as HTMLButtonElement | null;
		if (buttonLetter != null) {
			buttonLetter.disabled = false;
			buttonLetter.style.removeProperty("background-color") // remove inline CSS => goes back to its original style.css color
		}
	}
	if (VERBOSE) { console.log("Restart the game") };
}

function levelButton(config: configType, setConfig: (value: configType) => void) {
	// update the game level
	let newLevel = (config.level + 1) % 3;
	setConfig({ ...config, level: newLevel });
	// update level button
	let levelButton = document.getElementById("level");
	let levelName = config.keywords.levels[newLevel].toUpperCase();
	if (levelButton != null) { levelButton.innerHTML = config.keywords.level + " : " + levelName };
	if (VERBOSE) { console.log("Set level to " + levelName) };
}

function languageButton(config: configType, setConfig: (value: configType) => void) {
	// update the config state
	const newLanguage = (config.language === "french") ? "english" : "french";
	const newKeywords = (newLanguage === "french") ? FRENCH_KEYWORDS : ENGLISH_KEYWORDS;
	setConfig({ ...config, language: newLanguage, keywords: newKeywords })
	if (VERBOSE) { console.log("Switch to " + newLanguage.toUpperCase()) };
}

function aboutButton() {
	if (VERBOSE) { console.log("About") };
}

export default Toolbar;
