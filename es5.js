'use strict';

function rotate(el, deg) {
    el.setAttribute('transform', 'rotate(' + deg + ' 50 50)');
}

function TClock() {
    let myView = null,
        myDiffTime = null;

    this.start = function (view, diffTime) {
        myView = view;
        myDiffTime = diffTime;
    }

    this.updateView = function () {

        if (myView) {
            myView.update(myDiffTime);
        }
    }
}

function TClockViewSVG() {
    let myField = null,
        sec = null,
        min = null,
        hour = null;

    this.start = function (field) {
        myField = field;

        hour = myField.querySelector('.hours');
        min = myField.querySelector('.minutes');
        sec = myField.querySelector('.seconds');
    }

    this.update = function (diffTime) {
        let d = new Date();
        d.setHours(d.getHours() + diffTime);

        rotate(sec, 6 * d.getSeconds());
        rotate(min, 6 * d.getMinutes());
        rotate(hour, 30 * (d.getHours() % 12) + d.getMinutes() / 2);
    }
}

function TClockControllerButtons() {
    let myModel = null,
        myField = null;

    this.start = function (model, field) {
        myModel = model;
        myField = field;

        let startButton = myField.querySelector('.start'),
            stopButton = myField.querySelector('.stop'),
            timer;

        startButton.addEventListener('click', function () {
            timer = setInterval(function () {
                myModel.updateView();
            }, 1000);
        });

        stopButton.addEventListener('click', function () {
            clearInterval(timer);
        });
    }
}

let model = new TClock(),
    view = new TClockViewSVG(),
    controller = new TClockControllerButtons(),
    diffTime = 0;

let container = document.querySelector('.svgClock1');

model.start(view, diffTime);
view.start(container);
controller.start(model, container);

let model2 = new TClock(),
    view2 = new TClockViewSVG(),
    controller2 = new TClockControllerButtons(),
    diffTime2 = -8;

let container2 = document.querySelector('.svgClock2');

model2.start(view2, diffTime2);
view2.start(container2);
controller2.start(model2, container2);