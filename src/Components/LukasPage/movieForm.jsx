import React, { useState } from 'react';
import Slider from '@mui/material/Slider';
import './movie.css';

export default function movieForm() {
  let [movieArray, setMovieArray] = useState([
    { name: 'movie', colorType: 'color', seatNum: 'number' },
  ]);
  let [movie, setMovie] = useState(null);
  let [first, setFirst] = useState(1);
  let [number, setNumber] = useState(1);

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
  function setRepeatingColor(arr, m, color) {
    let tempC = color;
    arr.find((e) => {
      if (e.name === m) {
        tempC = e.colorType;
      }
    });
    return tempC;
  }
  function getMovie(event) {
    setMovie(event.target.value);
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
    color = setRepeatingColor(movieArray, movie, color);

    // this is set to avoid undefined errors.
    if (first == 1) {
      setMovieArray([{ name: movie, colorType: color, seatNum: number }]);
      setFirst(0);
    } else {
      setMovieArray(
        (movieArray = movieArray.concat({
          name: movie,
          colorType: color,
          seatNum: number,
        }))
      );
    }
    event.preventDefault();
    // setNumber(1);
    // setMovie('')
  }

  return (
    <>
      <div className="container">
        <div className="textCenter">
          The requirements for the text field are to have a different color for
          different characters, but if the character string exist then repeat
          the color. Also have a slider that displays it's number.
          <br />
          The idea I was going with to eventaully fill out is to make a movie
          form with how many tickets, then display them. Potentially move it to
          a database with a select option for the movies available, price,
          pagination to display all the current purchases, stuff like that.
        </div>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="form1">
            <div className="row">
              <div className="col-4 formSize1">
                <label>
                  Movie
                  <input
                    className="form-control"
                    type="text"
                    onChange={getMovie}
                  />
                </label>
              </div>

              {/* <br />
      <br /> */}
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
          <br />
          <div className="displayFlex">
            <div className="marginA">
              {/* if condition is used since we only are showing the array object after it's been defined with "handleSubmit" first execution */}
              {first != 1 &&
                movieArray.map(({ name, colorType, seatNum }) => (
                  <li key={name} className="listStyle">
                    Movie: <span style={{ color: colorType }}>{name} </span>
                    <br />
                    Tickets:{seatNum}
                    <br />
                    <br />
                  </li>
                ))}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
