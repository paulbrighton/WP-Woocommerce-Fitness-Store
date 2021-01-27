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