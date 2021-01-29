<?php
/*
* Change delimiter character from / to >
*/
add_filter( 'woocommerce_breadcrumb_defaults', 'my_change_breadcrumb_delimiter' );

function my_change_breadcrumb_delimiter( $defaults ) {
	// Change the breadcrumb delimiter from '/' to '>'
	$defaults['delimiter'] = ' » ';
	return $defaults;
}

/*
* Register new Widget area for Product Cat sort dropdown.
*/
add_action( 'widgets_init', 'wb_extra_widgets' );

function wb_extra_widgets() {
	register_sidebar( array(
		'id'            => 'prod_sort',
		'name'          => __( 'Product Cat Sort', 'themename' ),
		'description'   => __( 'This should show below Shop Title', 'themename' ),
		'before_widget'	=> '<div class="category-list-dropdown-container"><div class="category-list-dropdown">',
		'after_widget'	=> '</div></div>',
		'before_title'  => '<h3 class="product-cat-title">',
		'after_title'   => '</h3>'
	) );
}

add_action( 'woocommerce_before_shop_loop','wb_prod_sort' ); // Hook it after headline and before loop

//  Position the Product Category Sort dropdown.

function wb_prod_sort() {
	if ( is_active_sidebar( 'prod_sort' ) ) {
		dynamic_sidebar( 'prod_sort' );
	}
}