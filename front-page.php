<?php get_header(); ?>
<div class="c-hero">
  <div style="background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('<?php the_field('hero_image'); ?>') center center; background-size: cover; background-repeat: no-repeat;" class="c-hero__image">
    <div class="c-hero__text">
      <h1>Karma</h1>
      <h2>Fitness &amp; Yoga</h2>
      <p>A collection of clothing and accessories for all your yoga and fitness needs.</p>
      <a class="c-button" href="">Start Shopping</a>
    </div>
  </div>
</div>

  <div class="c-front-page__welcome">
    <div class="o-container c-front-page__welcome-text">
      <p data-aos="slide-up">We design durable yoga and fitness apparel with a conscience - 100% made in the United Kingdom. Products by Karma Fitness plus all your favorite brands.</p>
    </div>
  </div>

  <!-- <div class="o-container c-featured-products">
    <h2>Shop Bags</h2>
    <?php echo do_shortcode('[products limit="4" columns="4" category="bags-and-backpacks" cat_operator="AND"]') ?>
  </div> -->

  <!-- <div class="c-hero-with-text">
    <img class="c-hero-with-text__img" <?php awesome_acf_responsive_image(get_field('hero_text_overlay_image'), 'thumb-640', '1440px'); ?> alt="text" />
    <div class="c-hero-with-text__overlay">
      <div class="c-hero-with-text__text">
        <h2>For all your yoga needs</h2>
        <a class="c-button" href="">Shop Yoga Gear</a>
      </div>
    </div>
  </div> -->

  <div class="o-container c-single-product">
    <h3>Featured Product</h3>
    <div class="o-row">
      <div data-aos="fade-right" data-aos-duration="1000" class="c-single-product__img o-row__col o-row__col--span-6@small">
          <?php
          $image = get_field('featured_product_image');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" class="o-row__col o-row__col--span-12 o-row__col--span-6@small c-single-product__text">
        <?php
        $args = array(
          'p'              => 2852,
          'post_type'      => 'product'
        );
        $featured_product = new WP_Query($args);

        if ($featured_product->have_posts()) :

          while ($featured_product->have_posts()) : $featured_product->the_post();
        ?>

            <div class="c-single-product__details">
              <h3 class="woocommerce-loop-product__title"><?php the_title(); ?></h3>
              <?php the_excerpt(); ?>
              <p class="c-single-product__price">From <?php echo $product->get_price_html(); ?></p>
              <div class="c-single-product__btn">
                <a class="c-button c-button--narrow" href="<?php the_permalink(); ?>">MORE INFO</a>
              </div>
              
            </div>
        <?php
          endwhile;
        endif;
        wp_reset_query();
        ?>
      </div>
    </div>
  </div>

  <?php get_footer(); ?>