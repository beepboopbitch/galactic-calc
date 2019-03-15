import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, lifeLeft, dayAge, daysLeft, yourPlanetAge, timeLeftOnYourPlanet } from './backEnd.js';

$(function(){
  $(".submit").click(function(){
    event.preventDefault();
    const planet = $(".planet").val();
    const age = $(".age").val();
    const newInput = new Input(age, planet);
    let yourPlanet = yourPlanetAge(newInput);
    let yourTime = timeLeftOnYourPlanet(newInput);
    $("span#output").text("Your are " + yourPlanet + " on " + planet + ", and have about " + yourTime + " years of expected life left.");
  });
});
