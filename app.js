var redGreyLine = document.createElement('span');
redGreyLine.innerHTML = "<span class='red-grey_line'><p class='dot'>&nbsp;</p></span>";

var greenLine = document.createElement('span');
greenLine.innerHTML = "<span class='green-line'></span>";

var blueLine = document.createElement('span');
blueLine.innerHTML = "<span class='blue-line'></span>";


//Adding the newly created elements to the DOM 
var container = document.querySelector('.container');
container.appendChild(redGreyLine); 
container.appendChild(greenLine);
container.appendChild(blueLine);
