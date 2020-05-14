import {ExcelComponent} from '@core/ExcelComponent';
import {$} from '@core/dom';

export class Formula extends ExcelComponent {
    static className = 'excel__formula';

    constructor($root, option) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown'],
            ...option,
        });
    }

    toHTML() {
        return `
        <div class="info">fx</div>
        <div id='formula' class="input" contenteditable="true" spellcheck="false"></div>
        `
    }

    init() {
        super.init();
        this.$formula = this.$root.find('#formula');

        this.$on('table:select', $cell => {
            this.$formula.text($cell.text());
        });

        this.$subscribe(state => {
            this.$formula.text(state.currentText);
        })
    }

    onInput(event) {
        this.$emit('formula:input', $(event.target).text());
    }

    onClick() {
    }

    onKeydown(event) {
        const keys = ['Enter', 'Tab'];
        if (keys.includes(event.key)) {
            event.preventDefault();
            this.$emit('formula:done');
        }
    }
}