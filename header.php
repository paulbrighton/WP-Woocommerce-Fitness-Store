<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <?php wp_body_open(); ?>
  <header role="banner" class="c-header__main">
    <div class="c-header o-container-full u-flex u-align-justify u-align-middle">

      <div class="c-header__logo o-row__col o-row__col--span-3">
        <?php if (has_custom_logo()) {
          the_custom_logo();
        } else { ?>
          <a class="c-header__blogname" href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html(bloginfo('name')); ?></a>
        <?php } ?>
      </div>

      <div class="c-header__nav o-row__col--span-9 o-row__col o-row__col--span-6@medium">

        <div class="c-header__nav--mobile">
        <div class="c-header__icon--mobile c-search__btn"><i class="fas fa-search"></i></div>
        <?php if (is_user_logged_in()) { ?>
          <div class="c-header__icon--mobile c-account__btn"><a href="<?php echo get_permalink(get_option('woocommerce_myaccount_page_id')); ?>"><i class="fas fa-user"></i><a></div>
        <?php } else { ?>
          <div class="c-header__icon--mobile c-account__btn"><a href="<?php echo get_permalink(get_option('woocommerce_myaccount_page_id')); ?>"><i class="fas fa-user-slash"></i><a></div>
        <?php } ?>
        <div class="c-header__icon--mobile c-cart__btn--mobile"><a href="<?php echo get_permalink(get_option('woocommerce_cart_page_id')); ?>"><i class="fas fa-shopping-cart"></i></a></div>
          <a class="openbtn"><i class="fas fa-bars"></i></a>
          <div id="myNav" class="overlay">
            <a href="javascript:void(0)" class="closebtn"><i class="fas fa-times"></i></a>
            <div class="overlay-content">
              <nav>
                <?php if (has_nav_menu('primary')) {
                  wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'nav-menu'
                  ));
                }
                ?>
              </nav>
            </div>
          </div>
        </div>

        <div class="c-header__nav--desktop">
          <?php
          if (has_nav_menu('primary')) {
            wp_nav_menu(array(
              'theme_location' => 'primary',
              'container'      => '',
              'menu_class'     => 'navigation-main',
            ));
          }
          ?>
        </div>
      </div>
      <div class="c-header__icons o-row__col o-row__col--span-0  o-row__col o-row__col--span-3@medium">
        <div class="c-header__icon c-search__btn"><i class="fas fa-search"></i></div>
        <?php if (is_user_logged_in()) { ?>
          <a href="<?php echo get_permalink(get_option('woocommerce_myaccount_page_id')); ?>" class="c-header__icon c-account__btn"><i class="fas fa-user"></i><a>
        <?php } else { ?>
          <a href="<?php echo get_permalink(get_option('woocommerce_myaccount_page_id')); ?>" class="c-header__icon c-account__btn"><i class="fas fa-user-slash"></i><a>
        <?php } ?>
        <a href="<?php echo get_permalink(get_option('woocommerce_cart_page_id')); ?>" class="c-header__icon c-cart__btn"><i class="fas fa-shopping-cart"></i></a>
      </div>
    </div>
  </header>
  <div class="o-container c-header-search-form">
    <?php get_template_part('searchform') ?>
  </div>
  <div class="c-header__info">
    <div class="o-container c-header__info-content">
      <div class="o-row u-justify-spaced">
        <p>Free delivery when you spend over £30</p>
        <p>|</p>
        <p>Free returns</p>
        <p>|</p>
        <p>Big discounts on high street brands</p>
      </div>
    </div>
  </div>

  <main id="content" role="main">