import PageManager from '../PageManager';
import { wishlistPaginationHelper } from './utils/pagination-utils';

export default class WishList extends PageManager {
    constructor() {
        super();
        this.onReady();
    }

    onReady() {
        if ($('[data-pagination-wishlist]').length) {
            wishlistPaginationHelper();
        }
    }
}
