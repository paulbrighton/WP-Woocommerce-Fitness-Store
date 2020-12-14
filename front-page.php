<?php get_header(); ?>
<p data-aos="fade-right">Add front page content here</p>

<div class="o-container u-margin-top-50 u-margin-bottom-50">
  <div class="o-row">
    <h1 data-aos="fade-right" class="c-page-header">Typography & Gutenberg Blocks</h1>
  </div>
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@medium animatedParent">
      <div class="c-text-type">
        <h1>H1: <span>
            <h1 class="span-header">The quick brown fox jumps over the lazy dog</h1>
          </span></h1>
      </div>
      <div class="c-text-type">
        <h2>H2: <span>
            <h2 class="span-header">The quick brown fox jumps over the lazy dog</h2>
          </span></h2>
      </div>
      <div class="c-text-type">
        <h3>H3: <span>
            <h3 class="span-header">The quick brown fox jumps over the lazy dog</h3>
          </span></h3>
      </div>
      <div class="c-text-type">
        <h4>H4: <span>
            <h4 class="span-header">The quick brown fox jumps over the lazy dog</h4>
          </span></h4>
      </div>
      <div class="c-text-type">
        <h5>H5: <span>
            <h5 class="span-header">The quick brown fox jumps over the lazy dog</h5>
          </span></h5>
      </div>
      <div class="c-text-type">
        <h6>H6: <span>
            <h6 class="span-header">The quick brown fox jumps over the lazy dog</h6>
          </span></h6>
      </div>
      <div class="c-text-type">
        <h3>Paragraph: </h3>
        <p>Varius molestias quaerat veniam est similique ducimus cupidatat laudantium conubia sociosqu nisi. Numquam praesentium, euismod elit, vel montes iusto laudantium excepturi phasellus et numquam. Aspernatur adipiscing dolor ab tortor facilis facilis ipsam? Consectetuer, magna hymenaeos hendrerit! Rutrum nesciunt nesciunt, nec? Aliquip dis duis nesciunt lobortis, nullam quidem nostra id beatae.</p>
      </div>
      <div class="c-text-type animated">
        <h3>Bold: </h3>
        <p><strong>Varius molestias quaerat veniam.</strong></p>
      </div>
      <div class="c-text-type">
        <h3>Italic: </h3>
        <p><em>Varius molestias quaerat veniam.</em></p>
      </div>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@medium">
      <?php the_content(); ?>
    </div>
  </div>
</div>

<div class="o-container u-margin-top-50 u-margin-bottom-50">
  <h1>Accordion</h1>
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12">
      <div class="c-accordion">
        <ul>
          <li>
            <a class="c-accordion--expand">
              <div class="c-accordion__btn"><span><i class="fas fa-angle-double-down fa-xs"></i></span></div>
              <div>
                <h2 class="c-accordion__header">Header 1</h2>
              </div>
            </a>
            <div class="c-accordion__body">
              <p>Maecenas aenean fames exercitationem, dui sapiente, natus nisl litora facilisi aspernatur lectus vivamus? Pretium eius! Iaculis id blanditiis, numquam expedita nostra? Deserunt dictumst! Cillum augue fames. Porttitor fringilla libero iste ante incidunt egestas diam! Suspendisse, velit. Laoreet in semper dapibus, praesent ipsam suspendisse eiusmod consequat, reiciendis. Illo sint, diamlorem eius.</p>
            </div>
          </li>
          <li>
            <a class="c-accordion--expand">
              <div class="c-accordion__btn"><span><i class="fas fa-angle-double-down fa-xs"></i></span></div>
              <h2 class="c-accordion__header">Header 2</h2>
            </a>
            <div class="c-accordion__body">
              <p>Maecenas aenean fames exercitationem, dui sapiente, natus nisl litora facilisi aspernatur lectus vivamus? Pretium eius! Iaculis id blanditiis, numquam expedita nostra? Deserunt dictumst! Cillum augue fames. Porttitor fringilla libero iste ante incidunt egestas diam! Suspendisse, velit. Laoreet in semper dapibus, praesent ipsam suspendisse eiusmod consequat, reiciendis. Illo sint, diamlorem eius.</p>
            </div>
          </li>
          <li>
            <a class="c-accordion--expand">
              <div class="c-accordion__btn"><span><i class="fas fa-angle-double-down fa-xs"></i></span></div>
              <h2 class="c-accordion__header">Header 3</h2>
            </a>
            <div class="c-accordion__body">
              <p>Maecenas aenean fames exercitationem, dui sapiente, natus nisl litora facilisi aspernatur lectus vivamus? Pretium eius! Iaculis id blanditiis, numquam expedita nostra? Deserunt dictumst! Cillum augue fames. Porttitor fringilla libero iste ante incidunt egestas diam! Suspendisse, velit. Laoreet in semper dapibus, praesent ipsam suspendisse eiusmod consequat, reiciendis. Illo sint, diamlorem eius.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Markup for cf7 -->
<!-- <div class="c-cf7form__inputs">
  <div class="c-cf7form__input">
    <label> Name
      [text* your-name] </label>
  </div>
  <div class="c-cf7form__input">
    <label> Email
      [email* your-email] </label>
  </div>
  <div class="c-cf7form__input">
    <label> Subject
      [text* your-subject] </label>
  </div>
</div>

<label> Message
    [textarea your-message 40x5] </label>

[submit "Submit"] -->

<div class="c-contact-form">
  <div class="o-container">
    <div class="o-row">
      <div class="contact__header">
        <h1>Contact Form 1</h1>
        <p class="c-contact-form-subtitle">Three column for name, email and subject.</p>
      </div>
    </div>
    <div class="o-row">
      <div class="o-row__col o-row__col--span-12">
        <?php echo do_shortcode('[contact-form-7 id="7" title="Contact form 1"]') ?>
      </div>
    </div>
  </div>
</div>

<div class="o-container c-repsonsive-grid u-margin-top-50 u-margin-bottom-50">
  <h1 class="c-page-header">Responsive Grid</h1>
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12 span-12 o-grid__col">
      <p>Span-12</p>
    </div>
  </div>
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-1@large span-1 o-grid__col">
      <p>Span-1</p>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-11@large span-11 o-grid__col">
      <p>Span-11</p>
    </div>
  </div>
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-2@large span-2 o-grid__col">
      <p>Span-2</p>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-10@large span-10 o-grid__col">
      <p>Span-10</p>
    </div>
  </div>
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-3@large span-3 o-grid__col">
      <p>Span-3</p>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-9@large span-9 o-grid__col">
      <p>Span-9</p>
    </div>
  </div>
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-4@large span-4 o-grid__col">
      <p>Span-4</p>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-8@large span-8 o-grid__col">
      <p>Span-8</p>
    </div>
  </div>
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-5@large span-5 o-grid__col">
      <p>Span-5</p>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-7@large span-7 o-grid__col">
      <p>Span-7</p>
    </div>
  </div>
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-6@large span-6 o-grid__col">
      <p>Span-6</p>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-6@large span-6-2 o-grid__col">
      <p>Span-6</p>
    </div>
  </div>
</div>

<div class="o-container--full c-repsonsive-grid--full">
  <h2>Responsive Full Width Grid</h2>
  <div class="o-row o-row--full">
    <div class="o-row__col o-row__col--span-12 span-12 o-grid__col o-grid__col--full">
      <p>Span-12</p>
    </div>
  </div>
  <div class="o-row o-row--full">
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-1@large span-1 o-grid__col o-grid__col--full">
      <p>Span-1</p>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-11@large span-11 o-grid__col o-grid__col--full">
      <p>Span-11</p>
    </div>
  </div>
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-2@large span-2 o-grid__col o-grid__col--full">
      <p>Span-2</p>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-10@large span-10 o-grid__col o-grid__col--full">
      <p>Span-10</p>
    </div>
  </div>
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-3@large span-3 o-grid__col o-grid__col--full">
      <p>Span-3</p>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-9@large span-9 o-grid__col o-grid__col--full">
      <p>Span-9</p>
    </div>
  </div>
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-4@large span-4 o-grid__col o-grid__col--full">
      <p>Span-4</p>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-8@large span-8 o-grid__col o-grid__col--full">
      <p>Span-8</p>
    </div>
  </div>
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-5@large span-5 o-grid__col o-grid__col--full">
      <p>Span-5</p>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-7@large span-7 o-grid__col o-grid__col--full">
      <p>Span-7</p>
    </div>
  </div>
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-6@large span-6 o-grid__col o-grid__col--full">
      <p>Span-6</p>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@small o-row__col--span-6@large span-6-2 o-grid__col o-grid__col--full">
      <p>Span-6</p>
    </div>
  </div>
</div>

<div class="o-container u-margin-top-50 u-margin-bottom-50">
  <div class="o-row">
    <h1>Animate on Scroll with AOS</h1>
  </div>
  <div class="o-row c-animate">
    <div data-aos="fade-right" class="c-animate__text o-row__col o-row__col--span-12 u-flex u-flex-direction-column u-justify-center u-align-middle o-row__col--span-6@medium">
      <h2><?php the_field('animation_title') ?></h2>
      <h3><?php the_field('animation_subtitle') ?></h3>
    </div>
    <div data-aos="fade-left" class="o-row__col o-row__col--span-12 o-row__col--span-6@medium">
      <div class="c-animate__image">
        <?php
        $image = get_field('animation_image');
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>

  <div class="o-row u-flex-direction-row-reverse c-animate-reverse">
    <div data-aos="flip-right" class="c-animate-reverse__text o-row__col o-row__col--span-12 u-flex u-flex-direction-column u-justify-center u-align-middle o-row__col--span-6@medium">
      <h2><?php the_field('animation_title') ?></h2>
      <h3><?php the_field('animation_subtitle') ?></h3>
    </div>
    <div data-aos="flip-left" class="o-row__col o-row__col--span-12 o-row__col--span-6@medium">
      <div class="c-animate-reverse__image">
        <?php
        $image = get_field('animation_image');
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>

  <div class="o-row c-animate">
    <div data-aos="fade-up" data-aos-duration="1500" class="c-animate__text o-row__col o-row__col--span-12 u-flex u-flex-direction-column u-align-middle u-justify-center o-row__col--span-6@medium">
      <h2><?php the_field('animation_title') ?></h2>
      <h3><?php the_field('animation_subtitle') ?></h3>
    </div>
    <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" class="o-row__col o-row__col--span-12 o-row__col--span-6@medium">
      <div class="c-animate__image">
        <?php
        $image = get_field('animation_image');
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>

  <div class="o-row u-flex-direction-row-reverse c-animate-reverse">
    <div data-aos="zoom-in-left" data-aos-duration="1000" class="c-animate__text o-row__col o-row__col--span-12 u-flex u-flex-direction-column u-justify-center u-align-middle o-row__col--span-6@medium">
      <h2><?php the_field('animation_title') ?></h2>
      <h3><?php the_field('animation_subtitle') ?></h3>
    </div>
    <div data-aos="zoom-in-right" data-aos-duration="1000" class="o-row__col o-row__col--span-12 o-row__col--span-6@medium">
      <div class="c-animate__image">
        <?php
        $image = get_field('animation_image');
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>
</div>

<div class="hero-with-nav-overlay">
  <div class="o-container">
    <h2>Hero with Logo and Nav Overlay</h2>
  </div>
  <?php if (wp_is_mobile()) : ?>
    <div style="background: url('<?php the_field('home_hero_mobile'); ?>') center center; background-size: cover; background-repeat: no-repeat;" class="c-header__hero">
    <?php else : ?>
      <div style="background: url('<?php the_field('home_hero'); ?>') center center; background-size: cover; background-repeat: no-repeat;" class="c-header__hero">
      <?php endif; ?>
      <div class="c-header__overlay">
        <div class="o-row c-header__info">
          <div class="o-row__col o-row__col--span-8 o-row__col--span-7@medium o-row__col--span-8@xlarge">
            <div class="c-header__logo">
              <?php if (has_custom_logo()) {
                the_custom_logo();
              } else { ?>
                <a class="c-header__blogname" href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html(bloginfo('name')); ?></a>
              <?php } ?>
            </div>
          </div>
          <div class="o-row__col o-row__col--span-4 o-row__col--span-5@medium o-row__col--span-4@xlarge">
            <div class="c-header__nav">
              <div class="c-header__nav--mobile">
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
                <?php if (has_nav_menu('primary')) {
                  wp_nav_menu(array(
                    'theme_location' => 'primary',
                    'menu_class' => 'nav-menu--desktop'
                  ));
                }
                ?>
              </div>
            </div>
          </div>
        </div>
        <div class="c-header__text">
          <h1><?php the_field('home_hero_text'); ?></h1>
        </div>

      </div>
      <?php if (wp_is_mobile()) : ?>
      <?php else : ?>
      </div>
    <?php endif; ?>
    </div>
</div>


<div class="o-container u-margin-bottom-50">
  <h2>Hero with Text Overlay</h2>
</div>
<div class="c-hero-with-text">
  <div style="background: url('<?php the_field('hero_text_overlay_img'); ?>') center center; background-size: cover; background-repeat: no-repeat;" class="c-hero-with-text__image">
    <div class="c-hero-with-text__text">
      <h1>Hero Header</h1>
      <p>Assumenda netus voluptatem ultrices, distinctio, dignissim! Wisi tempore dignissim leo modi scelerisque laoreet dui conubia diam, impedit nobis, accumsan porta, esse!</p>
      <a class="c-hero-with-text__btn" href="">Read More</a>
    </div>
  </div>
</div>

<div class="o-container u-margin-top-50 u-margin-bottom-50">
  <div class="o-row c-text-img-right">
    <div class="c-text-img-right__text o-row__col o-row__col--span-12 u-flex u-flex-direction-col u-justify-center u-align-middle o-row__col--span-6@medium">
      <h2>Text with Image Right</h2>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@medium">
      <div class="c-text-img-right__image">
        <?php
        $image = get_field('animation_image');
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>

  <div class="o-row u-flex-direction-row-reverse c-text-img-left">
    <div class="c-text-img-left__text o-row__col o-row__col--span-12 u-flex u-flex-direction-col u-justify-center u-align-middle o-row__col--span-6@medium">
      <h2>Text with Image Left</h2>
    </div>
    <div class="o-row__col o-row__col--span-12 o-row__col--span-6@medium">
      <div class="c-text-img-left__image">
        <?php
        $image = get_field('animation_image');
        $size = 'full';
        if ($image) {
          echo wp_get_attachment_image($image, $size);
        }
        ?>
      </div>
    </div>
  </div>
</div>

<div class="c-full-width-text-img__container">
  <div class="o-container--full c-full-width-text-img__header">
    <h2>Full Width Text with Image </h2>
  </div>
  <!-- Full Width Image with Text -->
  <div class="c-full-width-text-img">
    <div class="c-full-width-text-img__image">
      <?php
      $image = get_field('full_width_text_image');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>

    <div class="c-full-width-text-img__text">
      <div class="c-full-width-text-img__text-container">
        <h3 class="c-full-width-text-img__title">Full Width Text with Image Left</h3>
        <p class="c-full-width-text-img__text-body">Malesuada asperiores, mattis suspendisse ornare accusamus senectus lectus quasi praesentium,</p>
        <a href="" class="c-button c-button--gradient">Read More</a>
      </div>
    </div>
  </div>

  <!-- Full Width Image with Text Reversed -->
  <div class="c-full-width-text-img-reversed">
    <div class="c-full-width-text-img-reversed__image">
      <?php
      $image = get_field('full_width_text_image');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>

    <div class="c-full-width-text-img-reversed__text">
      <div class="c-full-width-text-img-reversed__text-container">
        <h3 class="c-full-width-text-img-reversed__title">Full Width Text with Image Right</h3>
        <p class="c-full-width-text-img-reversed__text-body">Malesuada asperiores, mattis suspendisse ornare accusamus senectus lectus quasi praesentium,</p>
        <a href="" class="c-button c-button--gradient">Read More</a>
      </div>
    </div>
  </div>
</div>

<div class="c-selection">
    <div class="o-container c-selection__container c-front-page">
      <h2>Card Layout</h2>
      <div class="o-row">

        <div class="o-row__col o-row__col--span-12 o-row__col--span-4@medium c-selection__card">
          <h3 class="c-selection__card-title"><?php the_field('selection_card_title'); ?></h3>
          <div class="c-selection__card-icon u-margin-bottom-25 u-margin-top-15">
            <?php
            $image = get_field('selection_card_image');
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            if ($image) {
              echo wp_get_attachment_image($image, $size);
            }
            ?>
          </div>
          <p class="c-selection__card-text"><?php the_field('selection_card_text'); ?></p>
          <div class="c-button__container u-flex u-justify-center">
            <a href="<?php the_field('selection_card_button_link'); ?>" class="c-button--selection-card"><?php the_field('selection_card_button_text'); ?></a>
          </div>
        </div>

        <div class="o-row__col o-row__col--span-12 o-row__col--span-4@medium c-selection__card">
          <h3 class="c-selection__card-title"><?php the_field('selection_card_title'); ?></h3>
          <div class="c-selection__card-icon u-margin-bottom-25 u-margin-top-15">
            <?php
            $image = get_field('selection_card_image');
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            if ($image) {
              echo wp_get_attachment_image($image, $size);
            }
            ?>
          </div>
          <p class="c-selection__card-text"><?php the_field('selection_card_text'); ?></p>
          <div class="c-button__container u-flex u-justify-center">
            <a href="<?php the_field('selection_card_button_link'); ?>" class="c-button--selection-card"><?php the_field('selection_card_button_text'); ?></a>
          </div>
        </div>

        <div class="o-row__col o-row__col--span-12 o-row__col--span-4@medium c-selection__card">
          <h3 class="c-selection__card-title"><?php the_field('selection_card_title'); ?></h3>
          <div class="c-selection__card-icon u-margin-bottom-25 u-margin-top-15">
            <?php
            $image = get_field('selection_card_image');
            $size = 'full'; // (thumbnail, medium, large, full or custom size)
            if ($image) {
              echo wp_get_attachment_image($image, $size);
            }
            ?>
          </div>
          <p class="c-selection__card-text"><?php the_field('selection_card_text'); ?></p>
          <div class="c-button__container u-flex u-justify-center">
            <a href="<?php the_field('selection_card_button_link'); ?>" class="c-button--selection-card"><?php the_field('selection_card_button_text'); ?></a>
          </div>
        </div>

      </div>
    </div>
  </div>

  <div class="o-container u-margin-top-50 u-margin-bottom-50">
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12">
      <h1 class="c-page-header">Slick Sliders</h1>
    </div>
  </div>
  <div class="o-row u-margin-bottom-50">
    <div class="o-row__col o-row__col--span-12">
      <h2 class="c-slider__header">Slider with dots</h2>
      <div class="slider-dots c-slider--dots">
        <div class="c-slider__item">
          <?php
          $image = get_field('slider_image_1');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>

        <div class="c-slider__item">
          <?php
          $image = get_field('slider_image_2');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>

        <div class="c-slider__item">
          <?php
          $image = get_field('slider_image_3');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>
      </div>
    </div>
  </div>

  <div class="o-row u-margin-bottom-50">
    <div class="o-row__col o-row__col--span-12">
      <h2 class="c-slider__header">Slider with Arrows Inside</h2>
      <div class="slider-arrows c-slider--arrows-inside">
        <div class="c-slider--arrows__item">
          <?php
          $image = get_field('slider_image_1');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>

        <div class="c-slider--arrows__item">
          <?php
          $image = get_field('slider_image_2');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>

        <div class="c-slider--arrows__item">
          <?php
          $image = get_field('slider_image_3');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>
      </div>
    </div>
  </div>

  <div class="o-row">
    <div class="o-row__col o-row__col--span-12">
      <h2 class="c-slider__header">Slider with Arrows Outside</h2>
      <div class="slider-arrows c-slider--arrows-outside">
        <div class="c-slider--arrows__item">
          <?php
          $image = get_field('slider_image_1');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>

        <div class="c-slider--arrows__item">
          <?php
          $image = get_field('slider_image_2');
          $size = 'full'; // (thumbnail, medium, large, full or custom size)
          if ($image) {
            echo wp_get_attachment_image($image, $size);
          }
          ?>
        </div>

        <div class="c-slider--arrows__item">
          <?php
          $image = get_field('slider_image_3');
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

<div class="container-full u-margin-bottom-50">
  <h2 class="c-slider__header">Slider with Overflow</h2>
  <div class="slick-overflow c-slider--overflow">
    <div class="c-slider--arrows__item">
      <?php
      $image = get_field('slider_image_1');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>

    <div class="c-slider--arrows__item">
      <?php
      $image = get_field('slider_image_2');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>

    <div class="c-slider--arrows__item">
      <?php
      $image = get_field('slider_image_3');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>

    <div class="c-slider--arrows__item">
      <?php
      $image = get_field('slider_image_1');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>

    <div class="c-slider--arrows__item">
      <?php
      $image = get_field('slider_image_2');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>

    <div class="c-slider--arrows__item">
      <?php
      $image = get_field('slider_image_3');
      $size = 'full'; // (thumbnail, medium, large, full or custom size)
      if ($image) {
        echo wp_get_attachment_image($image, $size);
      }
      ?>
    </div>
  </div>
</div>

<?php get_footer(); ?>