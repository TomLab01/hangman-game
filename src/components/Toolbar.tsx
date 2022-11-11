import React from 'react';
import './style.css';

function Toolbar() {
  return (
    <div className="toolbar-container">
        <div className="container">
            <div className="toolbar-box"> <button>Restart</button> </div>
            <div className="toolbar-box"> <button>Level : Easy</button> </div>
            <div className="toolbar-box"> <button>FRENCH</button> </div>
            <div className="toolbar-box"> <button>About</button> </div>
        </div>
    </div>

  );
}

export default Toolbar;
