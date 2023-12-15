const changeWishlistPaginationLinks = (wishlistUrl, ...paginationItems) => $.each(paginationItems, (_, $item) => {
    if ($item.length && !$item.attr('href').includes('page=')) {
        const pageNumber = $item.attr('href');
        $item.attr('href', `${wishlistUrl}page=${pageNumber}`);
    }
});

/**
* helps to withdraw differences in structures around the stencil resource pagination
*/

export const wishlistPaginationHelper = () => {
    const $paginationItem = $('.pagination-item');

    if (!$paginationItem.length) return;

    const $nextItem = $('.pagination-item--next', $paginationItem);
    const $prevItem = $('.pagination-item--previous', $paginationItem);
    const currentHref = $('[data-pagination-current-page-link]').attr('href');
    const partialPaginationUrl = currentHref.split('page=').shift();

    changeWishlistPaginationLinks(partialPaginationUrl, $prevItem, $nextItem);
};
