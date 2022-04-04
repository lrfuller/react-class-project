import React, { useState, useEffect } from 'react';
import formPage from './formPage';
import Slider from '@mui/material/Slider';
import Table from './table';
import './movie.css';

export default function movieForm({ parentArrChange }) {
  let [movieArray, setMovieArray] = useState([]);
  // let [movieArray, setMovieArray] = useState([
  //   { name: 'Bill', colorType: 'black', seatNum: '2', movie: 'Batman' },
  // ]);
  let [movie, setMovieID] = useState(1);
  let [name, setName] = useState(null);
  let [first, setFirst] = useState(1);
  let [number, setNumber] = useState(1);
  let [availableMovies, setAvailableMovies] = useState([
    { id: 1, movie: 'The Batman' },
    { id: 2, movie: 'Spider-Man: No Way Home' },
    { id: 3, movie: 'Jujutsu Kaisen 0' },
  ]);
  let [displayMovies, setDisplayMovies] = useState(null);
  const [isInitialRender, setIsInitialRender] = useState(true);

  // https://stackoverflow.com/questions/1484506/random-color-generator
  function createColor() {
    var letters = '0123456789ABCDEF';
    var colorType = '#';
    for (var i = 0; i < 6; i++) {
      colorType += letters[Math.floor(Math.random() * 16)];
    }
    return colorType;
  }

  //if name repeats, set the color to the same
  function setRepeatingColor(arr, n, color) {
    let tempC = color;
    arr.find((e) => {
      if (e.name === n) {
        tempC = e.colorType;
      }
    });
    return tempC;
  }
  function getName(event) {
    setName(event.target.value);
  }
  function getMovie(event) {
    setMovieID(event.target.value);
  }

  function displayMovieName(m) {
    return availableMovies[m].movie;
  }

  const handleSliderChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setNumber(newValue);
    }
  };

  // first generate a color, then set the values
  function handleSubmit(event) {
    let color = createColor();
    //find if the name repeats
    color = setRepeatingColor(movieArray, name, color);

    // this is set to avoid undefined errors.
    if (first == 1) {
      let tempArr = {
        name: name,
        colorType: color,
        seatNum: number,
        movie: movie,
      };
      setMovieArray([tempArr]);
      setFirst(0);
      parentArrChange([tempArr], 0);
    } else {
      setMovieArray(
        (movieArray = movieArray.concat({
          name: name,
          colorType: color,
          seatNum: number,
          movie: movie,
        }))
      );
      parentArrChange(movieArray, 0);
    }

    // parentArr = movieArray;

    event.preventDefault();
    // setNumber(1);
    // setName('')
  }

  //stopped loading...

  useEffect(() => {
    //only run once
    if (isInitialRender) {
      setIsInitialRender(false);
      setDisplayMovies(
        availableMovies.length > 0 &&
          availableMovies.map((movie, i) => {
            return (
              <option key={i} value={movie.id}>
                {movie.movie}
              </option>
            );
          }, this)
      );
    }
  });

  return (
    <>
      <div className="Lcontainer">
        <br />
        <form className="Lform" onSubmit={handleSubmit}>
          <div>
            <div className="row">
              <div className="col-4 formSize1">
                <label>
                  Name
                  <input
                    className="form-control"
                    type="text"
                    onChange={getName}
                  />
                </label>
              </div>

              <div className="col-4 formSize1">
                <label>Tickets</label> {number}
                <Slider
                  className="smTMargin"
                  value={number}
                  min={1}
                  step={1}
                  max={10}
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                  aria-labelledby="non-linear-slider"
                />
              </div>
              <div className="col-4 formSize1">
                <label>
                  Movie
                  <select
                    className="form-select"
                    onChange={getMovie}
                    value={movie}
                  >
                    {displayMovies}
                  </select>
                </label>
              </div>
            </div>
            <br />
            <div>
              <input
                className="btn btn-primary submitSize1"
                type="submit"
                value="Submit"
              />
            </div>
          </div>
        </form>
        <div className="displayFlex">
          <div className="marginA">
            {/* if condition is used since we only are showing the array object after it's been defined with "handleSubmit" first execution */}
            {first != 1 &&
              movieArray.map(({ name, colorType, seatNum, movie }) => (
                <li key={name} className="listStyle">
                  Name: <span style={{ color: colorType }}>{name} </span>
                  <br />
                  Tickets:{seatNum}
                  <br />
                  Movie: {displayMovieName(movie - 1)}
                  <br />
                  <br />
                </li>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
