import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, lifeLeft, dayAge, daysLeft, yourPlanetAge, timeLeftOnYourPlanet } from './backEnd.js';

$(function(){
  $(".submit").click(function(){
    event.preventDefault();
    let planet = $(".planet").val();
    let age = $(".age").val();
    let newInput = new Input(age, planet);
    let yourPlanet = yourPlanetAge(newInput);
    $("span#output").text("Your are " + yourPlanet + " on " + planet);
  });
});
