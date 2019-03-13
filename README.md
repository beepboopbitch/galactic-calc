# _Date Calculator_

#### By _**Aurora Shido-Wagenet, Nayomi Morita**_

## Description

_A website to find the day of the week for any given date._

## Specs

Specification | Input | Output
------------- | ----- | ------
Take number input from user | select: 8 / 10 / 1998 | Date {Month: 8, Day: 10, Year: 1998}
Return date to user | Date {Month: 8, Day: 10, Year: 1998} | Show 8/10/1998
Count number of days in current month | Day: 10 | const daysNumb = 10
Count number of days from past months in the year | Month: 8 | const monthsNum = 181
Count number of days from past years | Year: 1998 | let yearsNum = 728905
Add number of days to allow for leap years | let yearsNum = 728905 | let yearsNum = 729404
Add number of days all together | yearsNum + monthsNUm + daysNum | const daysSum = 729595
Divide days by 7 to get day of the week number | daysSum % 7 | const finalDay = 6
Check what day of the week the day is | if (finalDay == 6)... | const dayOfWeek = Saturday
Return day to user | dayOfWeek = Saturday | show Saturday


<!-- ## Setup/Installation Requirements

* _Use your command terminal (gitbash if you're using a windows machine) to clone the latest commit from Github, using the url provided_
* _Open with a text editor such as Atom to view the code_
* _Then, open the file labeled "index.html" with your preferred web browser, such as Chrome, to view the actual page_

## Known Bugs

_there are currently no known bugs._

## Support and contact details
_If you encounter any bugs or issues not documented during your experience, please feel free to contact me at my email: nathans-email@email.com_

## Technologies used

_This application was created using HTML, CSS, Bootstrap, Javascript and Jquery_
_Music royalty-free from BenSound and Purple-Planet.com_

### License

Copyright (c) 2019 **_ Aurora Shido-Wagenet, Nathan Nielson, Nayomi Morita, Slater Smith, Epicodus_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. -->
