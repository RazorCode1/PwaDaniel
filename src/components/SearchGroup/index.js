import React, { useContext } from 'react';
import ThemeContext from '../../utils/ThemeContext';

const SearchGroup = props => {
  const themeContext = useContext(ThemeContext);

  return (
    <div>
      
      <label className={`text-${themeContext.textColor}`}>Busca una ciudad:</label>
      <div className="input-group">
        <input defaultValue={props.defaultValue}
          className="form-control"
          type="text"
          placeholder="nombre de la ciudad"
          aria-label="buscar ciudad"
          onChange={event => props.onChange(event.target.value.trim())} // send input value to page
          onKeyDown={event => props.keyPressed(event.keyCode)} // send keyCode to page
        />

        <div className="input-group-append">
          {props.showSearchButton ?
            <button className="btn btn-primary btn-sm" type="search" onClick={() => props.searchButtonPressed()}>
              <i className="material-icons">Buscar</i>
            </button>
            :
            <button className="btn btn-success btn-sm" onClick={() => props.locateMeButtonPressed()}>
              <i className="material-icons">location_searching</i>
            </button>
          }
        </div>
      </div>

    </div>
  )
};

export default SearchGroup
