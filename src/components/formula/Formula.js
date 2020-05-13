import {ExcelComponent} from '@core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className = 'excel__formula';

    constructor($root, option) {
        super($root, {
            name: 'Formula',
            listeners: ['input'],
            ...option,
        });
    }

    toHTML() {
        return `
        <div class="info">fx</div>
        
        <div class="input" contenteditable="true" spellcheck="false"></div>`
    }

    onInput(event) {
        const text = event.target.textContent.trim();
        this.emitter.emit('it is working', text);
    }

    onClick() {
    }
}