<?php get_header(); ?>
<p data-aos="fade-right">Add front page content here</p>

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
    <h1>Contact Form 1</h1>
    <p class="c-contact-form-subtitle">Three column for name, email and subject.</p>
    <?php echo do_shortcode('[contact-form-7 id="7" title="Contact form 1"]') ?>
  </div>
</div>
<?php get_footer(); ?>