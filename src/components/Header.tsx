import { useContext } from "react";
import configContext from './configContext'
import './style.css';

function Header() {
  const props = useContext(configContext);
  return (
    <div className='header-container'>
      <h1 className="title">{props.config.keywords.title.toUpperCase()}</h1>
    </div>
  );
}

export default Header;