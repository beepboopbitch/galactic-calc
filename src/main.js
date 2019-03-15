import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, lifeLeft, dayAge, daysLeft, yourPlanetAge, timeLeftOnYourPlanet } from './backEnd.js';

$(function(){
  $(".submit").click(function(){
    console.log(alert("yo"))
    event.preventDefault();
    const planet = $(".planet").val();
    const age = $(".age").val();
    const newInput = new Input(age, planet);
    let plonet = yourPlanetAge(age, planet);
    $("#output").text(plonet);
    console.log(alert(newInput(age, planet)))
  });
});
