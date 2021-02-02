<div class="o-container u-margin-top-70 u-margin-bottom-40 o-single-post-<?php echo $layout; ?>">
  <div class="o-row">
    <div class="o-row__col o-row__col--span-12">
      <main role="main">
        <div class="content-none-search">
          <p><?php echo apply_filters('_themename_no_posts_text', esc_html__('Whoops, something went wrong. Why not try searching for some interesting content.', '_themename')) ?></p>
          <?php get_search_form( true ); ?>
        </div>
      </main>
    </div>
  </div>
</div>
