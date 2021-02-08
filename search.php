<?php get_header(); ?>
<div class="o-container c-product-search u-margin-bottom-40 u-margin-top-40">
  <div class="o-row">
    <?php if (is_active_sidebar('primary-sidebar')) { ?>
      <div class="o-row__col o-row__col--span-12 o-row__col--span-4@small o-row__col--span-3@large">
        <?php get_sidebar() ?>
      </div>
    <?php } ?>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-8@small o-row__col--span-9@large">
      <header class="woocommerce-products-header">
        <?php if (apply_filters('woocommerce_show_page_title', true)) : ?>
          <h1 class="woocommerce-products-header__title page-title"><?php echo $wp_query->found_posts; ?> <?php _e('search results for', 'locale'); ?>: <?php echo get_search_query(); ?></h1>
        <?php endif; ?>

        <?php
        /**
         * Hook: woocommerce_archive_description.
         *
         * @hooked woocommerce_taxonomy_archive_description - 10
         * @hooked woocommerce_product_archive_description - 10
         */
        do_action('woocommerce_archive_description');
        ?>
      </header>
      <div class="o-row c-product-search__row">
        <?php if (have_posts()) : ?>
          <?php while (have_posts()) : the_post(); ?>
            <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-4@medium o-row__col--span-3@large c-product-search__card">
              <li <?php wc_product_class('', $product); ?>>
                <?php
                /**
                 * Hook: woocommerce_before_shop_loop_item.
                 *
                 * @hooked woocommerce_template_loop_product_link_open - 10
                 */
                do_action('woocommerce_before_shop_loop_item');

                /**
                 * Hook: woocommerce_before_shop_loop_item_title.
                 *
                 * @hooked woocommerce_show_product_loop_sale_flash - 10
                 * @hooked woocommerce_template_loop_product_thumbnail - 10
                 */
                do_action('woocommerce_before_shop_loop_item_title');

                /**
                 * Hook: woocommerce_shop_loop_item_title.
                 *
                 * @hooked woocommerce_template_loop_product_title - 10
                 */
                do_action('woocommerce_shop_loop_item_title');

                /**
                 * Hook: woocommerce_after_shop_loop_item_title.
                 *
                 * @hooked woocommerce_template_loop_rating - 5
                 * @hooked woocommerce_template_loop_price - 10
                 */
                do_action('woocommerce_after_shop_loop_item_title');

                /**
                 * Hook: woocommerce_after_shop_loop_item.
                 *
                 * @hooked woocommerce_template_loop_product_link_close - 5
                 * @hooked woocommerce_template_loop_add_to_cart - 10
                 */
                do_action('woocommerce_after_shop_loop_item');
                ?>
                <a class="c-button c-button__search" href="<?php echo get_permalink(); ?>">View Product</a>
              </li>
            </div>
          <?php endwhile; ?>
        <?php endif; ?>
      </div>
      <div class="c-product-search__pagination">
        <?php the_posts_pagination(array(
          'prev_text' => __('←', '_themename'),
          'next_text' => __('→', '_themename'),
        ));; ?>
      </div>
    </div>
  </div>
</div>
<?php get_footer(); ?>