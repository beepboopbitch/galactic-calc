import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, lifeLeft, dayAge, daysLeft, mercuryAge, lifeLeftOnMercury, venusAge, lifeLeftOnVenus, marsAge, lifeLeftOnMars, jupiterAge, lifeLeftOnJupiter } from './backEnd.js';

$(function(){
  $(".submit").click(function(){
    const newInput = new Input(age, planet, planetAge, lifeLeftOnPlanet);
    const planet = $(".planet").val("");
    const age = $(".age").val();
  });
});
