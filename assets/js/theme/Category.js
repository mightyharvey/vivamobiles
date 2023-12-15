import PageManager from '../PageManager';
import MasonryGrid from './components/masonry-grid';
import FacetedSearch from './components/faceted-search';

export default class Category extends PageManager {
  constructor() {
    super();
  }

  loaded(next) {

    if ($('body').data('layout') === 'masonry-grid') {
      this.layout = new MasonryGrid();
      this.layout.init();
    }

    if ($('.faceted-search').length) {
      this._initializeFacetedSearch();
    }
  
    next();
  }

  /* eslint-disable camelcase*/
  _initializeFacetedSearch() {
    const requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: this.context.productsPerPage,
          },
        },
      },
      template: {
        productListing: 'category/product-listing',
        sideBar: 'category/sidebar',
      },
    };

    const containerSelectors = {
      productListing: '.product-grid-container',
      sideBar: '.collection-sidebar',
    };

    const loadMore = {
      template: 'category/show-more',
    };

    new FacetedSearch(requestOptions, containerSelectors, this.context, loadMore, this.layout);
  }
}
