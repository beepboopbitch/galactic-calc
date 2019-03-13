import './css/styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input, yearCalc, monthCalc, daysCalc } from './backEnd.js';

$(function(){
  $(".submit").click(function(){
    const day = $(".day").val();
    const month = $(".month").val();
    const year = $(".year").val();
    const newInput = new Input(month, day, year);
    const yearDays = yearCalc(newInput);
    const monthDays = monthCalc(newInput);
    let days = daysCalc(newInput, yearDays, monthDays);
    $(".return").text(days);
  });
});
