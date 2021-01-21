</main>

<footer class="c-footer" id="footer" role="contentinfo">
  <!-- <?php get_template_part('template-parts/footer/widgets') ?> -->
  <div class="c-footer__logo u-flex u-justify-center">
    <?php if (has_custom_logo()) {
      the_custom_logo();
    } else { ?>
      <a class="c-footer__blogname" href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html(bloginfo('name')); ?></a>
    <?php } ?>
  </div>
  <div class="c-footer__nav">
          <?php
          if (has_nav_menu('footer')) {
            wp_nav_menu(array(
              'theme_location' => 'footer'
            ));
          }
          ?>
        </div>
  <?php get_template_part('template-parts/footer/site-info') ?>
</footer>

<?php wp_footer(); ?>
</body>

</html>