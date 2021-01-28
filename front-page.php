<?php get_header(); ?>
<div class="c-front-page">
  <div class="c-hero">
    <div style="background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('<?php the_field('hero_image'); ?>') center center; background-size: cover; background-repeat: no-repeat;" class="c-hero__image">
      <div class="c-hero__text">
        <h1>Karma</h1>
        <h2>Fitness &amp; Yoga</h2>
        <p>A collection of clothing and accessories for all your yoga and fitness needs.</p>
        <a class="c-button" href="">Start Shopping</a>
      </div>
      <div class="c-hero__scroll">
        <a href="#c-front-page__welcome" class="c-hero__scroll-btn">Scroll</a>
        <a href="#c-front-page__welcome" class="c-hero__scroll-btn">
          <?php if (get_field('hero_scroll_image')) : ?>
            <img class="c-hero__scroll-img bounce" src="<?php the_field('hero_scroll_image'); ?>" />
          <?php endif; ?>
        </a>
      </div>
    </div>
  </div>

  <div id="c-front-page__welcome" class="c-front-page__welcome">
    <div class="o-container c-front-page__welcome-text">
      <p>We design durable yoga and fitness apparel with a conscience - 100% made in the United Kingdom. Products by Karma Fitness plus all your favorite brands.</p>
      <p class="welcome-p"><span>NOTE:</span> This is a demo store so the products on sale are not purchasable, sorry.</p>
    </div>
  </div>

  <div class="c-front-page__collections o-container">
    <div class="c-heading">
      <h2 class="c-heading-with-underline">Our Collections</h2>
    </div>


    <div class="o-row">
      <div data-aos="fade-up-right" data-aos-duration="1000" class="c-front-page__collections--left o-row__col o-row-col-span-12 o-row__col--span-6@small">
        <div class="o-row">

          <div class="c-front-page__collections__collection c-front-page__collections__collection--womens">
            <a href="<?php echo get_term_link(150, 'product_cat') ?>">
              <?php
              $image = get_field('womens_image');
              $size = 'full'; // (thumbnail, medium, large, full or custom size)
              if ($image) {
                echo wp_get_attachment_image($image, $size);
              }
              ?>
              <div class="c-front-page__collections__collection--title">
                <p>Womens</p>
              </div>
            </a>
          </div>

        </div>

        <div class="o-row c-front-page__collections-row">
          <div class="c-front-page__collections__collection c-front-page__collections__collection--yoga">
            <a href="<?php echo get_term_link(152, 'product_cat') ?>">
              <?php
              $image = get_field('yoga_image');
              $size = 'full'; // (thumbnail, medium, large, full or custom size)
              if ($image) {
                echo wp_get_attachment_image($image, $size);
              }
              ?>
              <div class="c-front-page__collections__collection--title">
                <p>Yoga</p>
              </div>
            </a>
          </div>

          <div class="c-front-page__collections__collection c-front-page__collections__collection--accessories">
            <a href="<?php echo get_term_link(164, 'product_cat') ?>">
              <?php
              $image = get_field('accessories_image');
              $size = 'full'; // (thumbnail, medium, large, full or custom size)
              if ($image) {
                echo wp_get_attachment_image($image, $size);
              }
              ?>
              <div class="c-front-page__collections__collection--title">
                <p>Gear</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div data-aos="fade-up-left" data-aos-duration="1000" class="c-front-page__collections--right o-row__col o-row-col-span-12 o-row__col--span-6@small">
        <a href="<?php echo get_term_link(151, 'product_cat') ?>">
          <div class="c-front-page__collections__collection c-front-page__collections__collection--mens">
            <?php
            $image = get_field('mens_image');
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            if ($image) {
              echo wp_get_attachment_image($image, $size);
            }
            ?>
            <div class="c-front-page__collections__collection--title">
              <p>Mens</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>

  <div class="c-hero-with-text">
    <img class="c-hero-with-text__img" <?php awesome_acf_responsive_image(get_field('hero_text_overlay_image_gear'), 'thumb-640', '1440px'); ?> alt="text" />
    <div class="c-hero-with-text__overlay">
      <div class="c-hero-with-text__text">
        <h2>For all your yoga needs</h2>
        <a class="c-button" href="<?php echo get_term_link(152, 'product_cat') ?>">Shop Yoga Gear</a>
      </div>
    </div>
  </div>

  <div class="o-container c-single-product">
    <div class="c-heading">
      <h2 class="c-heading-with-underline">Featured Product</h2>
    </div>

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
          'p'              => 2857,
          'post_type'      => 'product'
        );
        $featured_product = new WP_Query($args);

        if ($featured_product->have_posts()) :

          while ($featured_product->have_posts()) : $featured_product->the_post();
        ?>

            <div class="c-single-product__details">
              <h2 class="woocommerce-loop-product__title"><?php the_title(); ?></h2>
              <?php the_excerpt(); ?>
              <p class="c-single-product__price">From <?php echo $product->get_price_html(); ?></p>
              <div class="c-single-product__btn">
                <a class="c-button" href="<?php the_permalink(); ?>">MORE INFO</a>
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

  <div class="c-reviews-container">
    <div class="c-heading">
      <h2 class="c-heading-with-underline c-heading-with-underline--dark">What Our Customers Think</h2>
    </div>
    <div class="o-container--full">
      <div class="slick-overflow c-slider--overflow">



        <div class="c-slider--arrows__item">
          <div class="c-reviews__card">
            <div class="c-reviews__rating">
              <?php if (get_field('review_rating_five_star')) : ?>
                <img src="<?php the_field('review_rating_five_star'); ?>" />
              <?php endif; ?>
            </div>
            <div class="c-reviews__body">
              <p>Fabulous fabrics, great fit and really comfortable while doing my yoga workout!</p>
            </div>
            <div class="c-reviews__user-img">
              <?php
              $image = get_field('user_image');
              $size = 'full'; // (thumbnail, medium, large, full or custom size)
              if ($image) {
                echo wp_get_attachment_image($image, $size);
              }
              ?>
            </div>

            <div class="c-reviews__user-details">
              <div class="c-reviews__user-name">
                <h4>Kimi B.</h4>
              </div>
              <div class="c-reviews__ussr-location">
                <p>Leeds, West Yorks</p>
              </div>
            </div>
          </div>
        </div>

        <div class="c-slider--arrows__item">
          <div class="c-reviews__card">
            <div class="c-reviews__rating">
              <?php if (get_field('review_rating_five_star')) : ?>
                <img src="<?php the_field('review_rating_five_star'); ?>" />
              <?php endif; ?>
            </div>
            <div class="c-reviews__body">
              <p>Couldn’t be happier with the service I recieved from Karma Fitness.</p>
            </div>
            <div class="c-reviews__user-img">
              <?php
              $image = get_field('user_image_2');
              $size = 'full'; // (thumbnail, medium, large, full or custom size)
              if ($image) {
                echo wp_get_attachment_image($image, $size);
              }
              ?>
            </div>

            <div class="c-reviews__user-details">
              <div class="c-reviews__user-name">
                <h4>Thais B.</h4>
              </div>
              <div class="c-reviews__ussr-location">
                <p>Wakefield, South Yorks</p>
              </div>
            </div>
          </div>
        </div>

        <div class="c-slider--arrows__item">
          <div class="c-reviews__card">
            <div class="c-reviews__rating">
              <?php if (get_field('review_rating_five_star')) : ?>
                <img src="<?php the_field('review_rating_five_star'); ?>" />
              <?php endif; ?>
            </div>
            <div class="c-reviews__body">
              <p>Superb service, items arrived quickly and love the fit of the dress!</p>
            </div>
            <div class="c-reviews__user-img">
              <?php
              $image = get_field('user_image_3');
              $size = 'full'; // (thumbnail, medium, large, full or custom size)
              if ($image) {
                echo wp_get_attachment_image($image, $size);
              }
              ?>
            </div>
            <div class="c-reviews__user-details">
              <div class="c-reviews__user-name">
                <h4>Tati S.</h4>
              </div>
              <div class="c-reviews__ussr-location">
                <p>Salvador, Bahia</p>
              </div>
            </div>
          </div>
        </div>

        <div class="c-slider--arrows__item">
          <div class="c-reviews__card">
            <div class="c-reviews__rating">
              <?php if (get_field('review_rating_five_star')) : ?>
                <img src="<?php the_field('review_rating_five_star'); ?>" />
              <?php endif; ?>
            </div>
            <div class="c-reviews__body">
              <p>I will definately be using this company again, five stars!</p>
            </div>
            <div class="c-reviews__user-img">
              <?php
              $image = get_field('user_image_4');
              $size = 'full'; // (thumbnail, medium, large, full or custom size)
              if ($image) {
                echo wp_get_attachment_image($image, $size);
              }
              ?>
            </div>

            <div class="c-reviews__user-details">
              <div class="c-reviews__user-name">
                <h4>Walter J.</h4>
              </div>
              <div class="c-reviews__ussr-location">
                <p>Sheffield, South Yorks</p>
              </div>
            </div>
          </div>
        </div>

        <div class="c-slider--arrows__item">
          <div class="c-reviews__card">
            <div class="c-reviews__rating">
              <?php if (get_field('review_rating_five_star')) : ?>
                <img src="<?php the_field('review_rating_five_star'); ?>" />
              <?php endif; ?>
            </div>
            <div class="c-reviews__body">
              <p>I will be shopping more here as soon as it's payday. Great experience.</p>
            </div>
            <div class="c-reviews__user-img">
              <?php
              $image = get_field('user_image_5');
              $size = 'full'; // (thumbnail, medium, large, full or custom size)
              if ($image) {
                echo wp_get_attachment_image($image, $size);
              }
              ?>
            </div>

            <div class="c-reviews__user-details">
              <div class="c-reviews__user-name">
                <h4>Billy K.</h4>
              </div>
              <div class="c-reviews__ussr-location">
                <p>Madrid, Spain</p>
              </div>
            </div>
          </div>
        </div>

        <div class="c-slider--arrows__item">
          <div class="c-reviews__card">
            <div class="c-reviews__rating">
              <?php if (get_field('review_rating_five_star')) : ?>
                <img src="<?php the_field('review_rating_five_star'); ?>" />
              <?php endif; ?>
            </div>
            <div class="c-reviews__body">
              <p>Well done Karma! Thanks for a great shopping experience!!!</p>
            </div>
            <div class="c-reviews__user-img">
              <?php
              $image = get_field('user_image_6');
              $size = 'full'; // (thumbnail, medium, large, full or custom size)
              if ($image) {
                echo wp_get_attachment_image($image, $size);
              }
              ?>
            </div>

            <div class="c-reviews__user-details">
              <div class="c-reviews__user-name">
                <h4>Mika B.</h4>
              </div>
              <div class="c-reviews__ussr-location">
                <p>Bradford, West Yorks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="o-container c-featured-products">
    <div class="c-heading">
      <h2 class="c-heading-with-underline">Our Best Selling Bags</h2>
    </div>
    <?php echo do_shortcode('[products limit="4" columns="4" category="bags-and-backpacks" cat_operator="AND"]') ?>
    <div class="c-featured-products__btn">
      <a class="c-button c-button--featured-products" href="">View all Bags</a>
    </div>
  </div>

  <div class="c-hero-with-text">
    <img class="c-hero-with-text__img" <?php awesome_acf_responsive_image(get_field('hero_text_overlay_image'), 'thumb-640', '1440px'); ?> alt="text" />
    <div class="c-hero-with-text__overlay">
      <div class="c-hero-with-text__text">
        <h2>Get the gear you need</h2>
        <a class="c-button" href="<?php echo get_term_link(153, 'product_cat') ?>">Shop Gym Equipment</a>
      </div>
    </div>
  </div>

  <div class="o-container c-gift-cards">
    <div class="o-row">
      <div class="o-row__col o-row-col-span-12 o-row__col--span-6@small c-gift-cards__text-container">
        <div class="c-gift-cards__text">
          <h2>Buy Gift Cards</h2>
          <p>Looking for that perfect present for one of your loved ones, treat them to a Karma Fitness gift card!</p>
          <div class="c-gift-cards__btn">
            <a href="<?php echo esc_url(get_permalink(3061)); ?>" class="c-button">Shop Gift Cards</a>
          </div>
        </div>
      </div>
      <div class="o-row__col o-row-col-span-12 o-row__col--span-6@small c-gift-cards__img-container">
        <div class="c-gift-cards__img">
          <?php
          $image = get_field('gift_card_image');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>
      </div>
    </div>
  </div>
</div>

<?php get_footer(); ?>