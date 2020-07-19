<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
     <meta charset="<?php bloginfo('charset'); ?>" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <meta http-equiv="X-UA-Compatible" content="IE=edge" />   
     <meta name="author" content="Wolfactive - HuyNguyen - PhuongNam">     
  	  <link rel="profile" href="https://wolfactive.net/">
     <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
     <link rel="preload" href="<?php echo get_theme_file_uri('dist/css/webfonts/fa-brands-400.woff2') ?>" as="font" type="font/woff2" crossorigin>
     <link rel="preload" href="<?php echo get_theme_file_uri('dist/css/webfonts/fa-regular-400.woff2') ?>" as="font" type="font/woff2" crossorigin>
     <link rel="preload" href="<?php echo get_theme_file_uri('dist/css/webfonts/fa-solid-900.woff2') ?>" as="font" type="font/woff2" crossorigin>
     <link rel="stylesheet" href="<?php echo get_theme_file_uri('dist/css/main.css') ?>">     
     <script defer type='text/javascript' src="<?php echo get_theme_file_uri('dist/js/root.js') ?>"></script>
     <!-- Add the slick-theme.css if you want default styling -->
      <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css"/>
     <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<section class="header">
   <div class="container--fix">
      <div class="header__clock">
         <div id="clockbox"></div>
      </div>
      <div class="header__news">
      </div>
   </div>
</section>

