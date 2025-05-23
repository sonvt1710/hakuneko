import WordPressMangastream from './templates/WordPressMangastream.mjs';

export default class DrakeScans extends WordPressMangastream {
    constructor() {
        super();
        super.id = 'drakescans';
        super.label = 'DrakeScans';
        this.tags = [ 'webtoon', 'english'];
        this.url = 'https://drakecomic.org';
        this.path = '/manga/list-mode/';
    }
}
