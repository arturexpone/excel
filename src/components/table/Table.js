import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {shouldResize} from '@/components/table/table.functions';
import {resizeHandler} from '@/components/table/table.resize';
import {TableSelection} from '@/components/table/TableSelection';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            listeners: ['mousedown'],
        });
    }

    toHTML() {
        return createTable(20)
    }

    prepare() {
        this.selection = new TableSelection();
    }

    init() {
        super.init();

        this.selection = new TableSelection();
        const $cell = this.$root.find('[data-id="0:0"]');
        this.selection.select($cell);
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event);
        }
        //
        //
        // if (event.target.dataset.resize) {
        //     const $resizer = $(event.target);
        //     const $parent = $resizer.closest('[data-type="resizable"]');
        //     const coords = $parent.getCoords();
        //     const type = $resizer.data.resize;
        //     const sideProp = type === 'col' ? 'bottom' : 'right';
        //     let value;
        //
        //     $resizer.css({
        //         opacity: 1,
        //         [sideProp]: '-2000px',
        //     });
        //
        //     document.onmousemove = e => {
        //         if (type === 'col') {
        //             const delta = e.pageX - coords.right;
        //             value = coords.width + delta;
        //             $resizer.css({right: `${-delta}px`})
        //         } else {
        //             const delta = e.pageY - coords.bottom;
        //             value = coords.height + delta;
        //             $resizer.css({bottom: `${-delta}px`});
        //         }
        //     }
        //
        //     document.onmouseup = () => {
        //         document.onmousemove = null;
        //         document.onmouseup = null;
        //
        //
        //         if (type === 'col') {
        //             $parent.css({width: `${value}px`});
        //             this.$root
        //                 .findAll(`[data-col="${$parent.data.col}"]`)
        //                 .forEach(el => el.style.width = `${value}px`);
        //         }
        //
        //         if (type === 'row') {
        //             $parent.css({height: `${value}px`});
        //             this.$root
        //                 .findAll(`[data-col="${$parent.data.col}"]`)
        //                 .forEach(el => el.style.width = `${value}px`);
        //         }
        //
        //         $resizer.css({
        //             opacity: 0,
        //             bottom: 0,
        //             right: 0,
        //         });
        //     };
        // }
    }
}