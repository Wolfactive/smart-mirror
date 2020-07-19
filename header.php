<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
     <meta charset="<?php bloginfo('charset'); ?>" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />   
     <meta name="author" content="Wolfactive - HuyNguyen - PhuongNam">     
  	<link rel="profile" href="https://wolfactive.net/">
     <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
     <link rel="preload" href="<?php echo get_theme_file_uri('dist/scss/lib/fontawsome/webfonts/fa-brands-400.woff2') ?>" as="font" type="font/woff2" crossorigin>
     <link rel="preload" href="<?php echo get_theme_file_uri('dist/scss/lib/fontawsome/webfonts/fa-regular-400.woff2') ?>" as="font" type="font/woff2" crossorigin>
     <link rel="preload" href="<?php echo get_theme_file_uri('dist/scss/lib/fontawsome/webfonts/fa-solid-900.woff2') ?>" as="font" type="font/woff2" crossorigin>
     <link rel="stylesheet" href="<?php echo get_theme_file_uri('dist/css/main.css') ?>">     
     <script defer type='text/javascript' src="<?php echo get_theme_file_uri('dist/js/root.js') ?>"></script>
     <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<section class="header">
  <div class="main--background">
    <div class="header__contain container">
  	   <div class="header__item">
  	      <a href="<?php echo site_url(); ?>" class="d--block logo mr-auto">
            <?php
             $custom_logo_id = get_theme_mod( 'custom_logo' );
             $image = wp_get_attachment_image_src( $custom_logo_id , 'full' );
                ?>
  	        <img src="<?php echo $image[0]; ?>" alt="logo-nha-pho-sai-gon">
  	      </a>
  	   </div>
  	   <div class="header__item dp--none">
  	      <?php
  	       wp_nav_menu(array(
  		    'theme_location' => 'headerMenuLocation' ));
  	      ?>
  	   </div>
  	   <div class="header__item d--none dp--block">
  	      <button class="btn text--light" id="navBtn" aria-label="btn-navbar">
  	          <i class="fas fa-bars icon--text"></i>
  	      </button>
  	   </div>
  	</div>
  </div>
    <div class="main--background" id="headerNavBar">
     <div class="container navbar__mb">
       <?php
       wp_nav_menu(array(
      'theme_location' => 'headerMenuLocation' ));
      ?>
    </div>
  </div>
</section>
