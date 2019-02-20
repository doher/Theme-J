'use strict';

class TClock {
    constructor(view, diffTime) {
        let _view = view,
            _diffTime = diffTime;

        this.getView = function () {
            return _view;
        }

        this.getDiffTime = function () {
            return _diffTime;
        }
    }

    updateView() {
        let view = this.getView(),
            diffTime = this.getDiffTime();

        if (view) {
            view.update(diffTime);
        }
    }
}

class TClockViewSVG {
    constructor(field, diffTime) {
        let _field = field,
            _diffTime = diffTime;

        this.getField = function () {
            return _field;
        }

        this.getDiffTime = function () {
            return _diffTime;
        }
    }

    update() {
        let field = this.getField(),
            diffTime = this.getDiffTime(),
            seconds = field.querySelector('.seconds'),
            minutes = field.querySelector('.minutes'),
            hours = field.querySelector('.hours'),
            date = new Date();

        date.setHours(date.getHours() + diffTime);

        this.rotate(seconds, 6 * date.getSeconds());
        this.rotate(minutes, 6 * date.getMinutes());
        this.rotate(hours, 30 * (date.getHours() % 12) + date.getMinutes() / 2);
    }

    rotate(element, degree) {
        element.setAttribute('transform', 'rotate(' + degree + ' 50 50)');
    }
}

class TClockControllerButtons {
    constructor(model, field) {
        let _model = model,
            _field = field;

        this.getModel = function () {
            return _model;
        }

        this.getField = function () {
            return _field;
        }
    }

    start() {
        let field = this.getField(),
            model = this.getModel(),
            startButton = field.querySelector('.start'),
            stopButton = field.querySelector('.stop'),
            timer;

        startButton.addEventListener('click', function () {
            timer = setInterval(function () {
                model.updateView();
            }, 1000);
        });

        stopButton.addEventListener('click', function () {
            clearInterval(timer);
        });
    }
}

let diffTimeMinsk = 0,
    divMinsk = document.querySelector('.minskClock'),
    viewClockMinsk = new TClockViewSVG(divMinsk, diffTimeMinsk),
    modelClockMinsk = new TClock(viewClockMinsk, diffTimeMinsk),
    controllerClockMinsk = new TClockControllerButtons(modelClockMinsk, divMinsk);

modelClockMinsk.updateView();
controllerClockMinsk.start();

let diffTimeNY = -8,
    divNY = document.querySelector('.newYorkClock'),
    viewClockNY = new TClockViewSVG(divNY, diffTimeNY),
    modelClockNY = new TClock(viewClockNY, diffTimeNY),
    controllerClockNY = new TClockControllerButtons(modelClockNY, divNY);

modelClockNY.updateView();
controllerClockNY.start();