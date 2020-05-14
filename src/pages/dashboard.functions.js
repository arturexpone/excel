import {storage} from '@core/utils';

export function toHTML(key) {
    const model = storage(key);
    const id = key.split(':')[1];
    return `
        <li class="db__record">
            <a href="#excel/${id}">${model.title}</a>
            <strong>12.06.2k20</strong>
        </li>`

}

function getAllKeys() {
    const keys =[];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key.includes('excel')) {
            continue
        }
        keys.push(key);
    }
    return keys;
}

export function createRecordsTable() {
    const keys = getAllKeys();
    console.log(keys)
    if (!keys.length) {
        return `<p>You haven't created any tables yet</p>`;
    }
    return `
        <div class="db__list-header">
            <span>TITLE</span>
            <span>DATE OF CREATION</span>
        </div>
        
        <ul class="db__list">
           ${keys.map(toHTML).join('')} 
        </ul>`;
}