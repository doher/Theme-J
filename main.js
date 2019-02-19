// setInterval(function () {

//     var d = new Date()
//     rotate(sec, 6 * d.getSeconds())
//     rotate(min, 6 * d.getMinutes())
//     rotate(hour, 30 * (d.getHours() % 12) + d.getMinutes() / 2)
// }, 1000);

// function rotate(el, deg) {
//     el.setAttribute('transform', 'rotate(' + deg + ' 50 50)')
// }

'use strict';

function drawClock() {
    const svgContainer = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
        clockFace = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
        arrows = document.createElementNS("http://www.w3.org/2000/svg", "g"),
        hourArrow = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
        minuteArrow = document.createElementNS("http://www.w3.org/2000/svg", "rect"),
        secondArrow = document.createElementNS("http://www.w3.org/2000/svg", "line");

    svgContainer.setAttribute('viewBox', '0 0 100 100');
    svgContainer.setAttribute('id', 'clock');

    clockFace.setAttribute('id', 'face');
    clockFace.setAttribute("cx", "50");
    clockFace.setAttribute("cy", "50");
    clockFace.setAttribute("r", "45");

    arrows.setAttribute('id', 'arrows');

    hourArrow.setAttribute('id', 'hour');
    hourArrow.setAttribute('x', '48.5');
    hourArrow.setAttribute('y', '12.5');
    hourArrow.setAttribute('width', '5');
    hourArrow.setAttribute('height', '40');
    hourArrow.setAttribute('rx', '2.5');
    hourArrow.setAttribute('ry', '2.55');

    minuteArrow.setAttribute('id', 'minute');
    minuteArrow.setAttribute('x', '48');
    minuteArrow.setAttribute('y', '12.5');
    minuteArrow.setAttribute('width', '3');
    minuteArrow.setAttribute('height', '40');
    minuteArrow.setAttribute('rx', '2');
    minuteArrow.setAttribute('ry', '2');

    secondArrow.setAttribute('id', 'second');
    secondArrow.setAttribute('x1', '50');
    secondArrow.setAttribute('y1', '50');
    secondArrow.setAttribute('x2', '50');
    secondArrow.setAttribute('y2', '16');

    arrows.appendChild(hourArrow);
    arrows.appendChild(minuteArrow);
    arrows.appendChild(secondArrow);
    svgContainer.appendChild(clockFace);
    svgContainer.appendChild(arrows);
    document.body.appendChild(svgContainer);
}

drawClock();