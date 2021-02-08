<?php

function _themename_register_menus() {
  register_nav_menus( array(
    'primary' => esc_html__('Primary Menu', '_themename'),
    'privacy' => esc_html__('Privacy Menu', '_themename'),
    'footer' => __( 'Footer Menu', '_themename' ),
  ));
}

add_action( 'init', '_themename_register_menus' );