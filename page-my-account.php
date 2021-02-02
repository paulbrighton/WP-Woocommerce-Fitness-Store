<?php
/*
* Template Name: Account Page
*/

get_header(); ?>
<div class="o-container u-margin-bottom-70 u-margin-top-50">
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12">
      <div class="woocommerce-header woocommerce-header--account">
        <h1>My Account</h1>
      </div> 
      <?php echo do_shortcode('[woocommerce_my_account]'); ?>
    </div>
  </div>
</div>
<?php get_footer(); ?>