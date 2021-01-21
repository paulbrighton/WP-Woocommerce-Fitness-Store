<?php

// Import php files from lib folder
require_once('lib/customize.php');
require_once('lib/helpers.php');
require_once('lib/enqueue-assets.php');
require_once('lib/sidebars.php');
require_once('lib/theme-support.php');
require_once('lib/navigation.php');
require_once('lib/comment-callback.php');
require_once('lib/images.php');
require_once('lib/translations.php');
require_once('lib/metaboxes.php');

function add_file_types_to_uploads($file_types){
  $new_filetypes = array();
  $new_filetypes['svg'] = 'image/svg';
  $file_types = array_merge($file_types, $new_filetypes );
  return $file_types;
}
add_filter('upload_mimes', 'add_file_types_to_uploads');

function mytheme_add_woocommerce_support() {
  add_theme_support( 'woocommerce' );
  }
add_action( 'after_setup_theme', 'mytheme_add_woocommerce_support' );


add_filter('loop_shop_columns', 'loop_columns', 999);
if (!function_exists('loop_columns')) {
	function loop_columns() {
		return 3; // 3 products per row
	}
}

add_theme_support( 'wc-product-gallery-zoom' );
add_theme_support( 'wc-product-gallery-lightbox' );
add_theme_support( 'wc-product-gallery-slider' );


add_filter('wpseo_breadcrumb_single_link', 'filter_breadcrumbs_for_h1', 10, 2);
function filter_breadcrumbs_for_h1($link_output, $link) {
	$link_output = preg_replace("/<span\s(.+?)>(.+?)<\/span>/is", "<h1 $1>$2</h1>", $link_output);
	return $link_output;
}
