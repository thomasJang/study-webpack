import _ from 'lodash';
import ax5 from 'ax5core/dist/ax5core.js';

function component () {
    var element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack', '!!!!'], ' ') + ax5.util.number("12343", {"money": true});

    return element;
}

document.body.appendChild(component());