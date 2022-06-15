import React from "react";
import "./index.css";

export const App = () => {
  return (
    <>
      <header>
          <h1>todos</h1>  
      </header>

      <div className="input-area container">
        <input type="text" placeholder="Enter your todo" />
        <button className="add-btn">+</button>
      </div>

      <div className="added-area container">
        <ul>
          <li>
            <div className="list-row">
              <input type="checkbox" id="checkbox" value="" />
              <p>くろしろにごはん</p>
              <button>x</button>
            </div>
          </li>
          <li>
            <div className="list-row">
              <input type="checkbox" id="checkbox" value="" />
              <p>ちゅーる2000個献上</p>
              <button>x</button>
            </div>
          </li>
        </ul>
      </div>

    </>
  )
};