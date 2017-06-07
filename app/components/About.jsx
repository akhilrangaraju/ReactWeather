var React = require('react');

var About = (props) => {
  return (
  <div>
    <h1 className="text-center">About page</h1>
    <p> This ia a React Web application deployed on Heroku.
     This Application will give you Live Weather in a City in Degrees Celcius</p>
    <p> Here are some of the tools I used:</p>
    <ul>
      <li>
        <a href="https://facebook.github.io/react">React</a> - This was the JavaScript Framework used.
      </li>
      <li>
        <a href="http://openweathermap.org">Open Weather Map</a> - I used this to search for Weather Data by City Name.
      </li>
    </ul>
  </div>
  );
};

module.exports = About;
