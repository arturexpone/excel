import {DomListener} from './DomListener';

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
    }

    // returns the component template
    toHTML() {
        return ''
    }

    init() {
        this.initDOMListeners()
    }
}