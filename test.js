'use strict';

function rotate(el, deg) {
    el.setAttribute('transform', 'rotate(' + deg + ' 50 50)')
}

function TClock() {
    let myView = null;

    this.start = function (view) {
        myView = view;
    }

    this.updateView = function () {

        if (myView) {
            myView.update();
        }
    }
}

function TClockViewSVG() {
    let myModel = null,
        myField = null,
        sec = null,
        min = null,
        hour = null;

    this.start = function (model, field) {
        myModel = model;
        myField = field;

        hour = myField.querySelector('.hours');
        min = myField.querySelector('.minutes');
        sec = myField.querySelector('.seconds');
    }

    this.update = function () {
        let d = new Date();

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
    controller = new TClockControllerButtons();

let container = document.querySelector('.svgClock1');

model.start(view);
view.start(model, container);
controller.start(model, container);

let model2 = new TClock(),
    view2 = new TClockViewSVG(),
    controller2 = new TClockControllerButtons();

let container2 = document.querySelector('.svgClock2');

model2.start(view2);
view2.start(model2, container2);
controller2.start(model2, container2);
