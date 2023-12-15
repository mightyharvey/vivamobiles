import PageManager from '../PageManager';
import MasonryGrid from './components/masonry-grid';
import FacetedSearch from './components/faceted-search';

export default class Brands extends PageManager {
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
          shop_by_brand: true,
          products: {
            limit: this.context.productsPerPage,
          },
        },
      },
      template: {
        productListing: 'brand/product-listing',
        sideBar: 'brand/sidebar',
      },
    };

    const containerSelectors = {
      productListing: '.product-grid-container',
      sideBar: '.collection-sidebar',
    };

    const loadMore = {
      template: 'brand/show-more',
    };

    new FacetedSearch(requestOptions, containerSelectors, this.context, loadMore, this.layout);
  }
}
