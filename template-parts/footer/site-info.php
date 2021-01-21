<?php
$site_info = get_theme_mod('_themename_site_info', '');
$built_by_info = get_theme_mod('_themename_built_by_info', '');
?>

<?php if ($site_info) { ?>
  <div class="c-site-info__divider"></div>
  <div class="c-site-info">
    <div class="o-container--full">
      <div class="o-row">
        <div class="o-row__col o-row__col--span-12 o-row__col--span-4@small c-site-info__text">
          <?php
          $allowed = array('a' => array(
            'href'    =>  array(),
            'title'   =>  array()
          ));
          echo wp_kses($site_info, $allowed)
          ?>
        </div>
        <div class="o-row__col o-row__col--span-12 o-row__col--span-4@small c-built-by-info__text">
          <?php
          $allowed = array('a' => array(
            'href'    =>  array(),
            'title'   =>  array()
          ));
          echo wp_kses($built_by_info, $allowed)
          ?>
        </div>
        <div class="o-row__col o-row__col--span-12 o-row__col--span-4@small c-footer__social">
        <div class="c-social-icon__wrapper"> 
            <a href="/"><i class="fab fa-instagram"></i></a>
          </div>
          <div class="c-social-icon__wrapper">
            <a href="/"><i class="fab fa-dribbble"></i></a>
          </div>
          <div class="c-social-icon__wrapper"> 
            <a href="/"><i class="fab fa-twitter"></i></a>
          </div>
          <div class="c-social-icon__wrapper"> 
            <a href="/"><i class="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php } ?>