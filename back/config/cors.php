<?php
//https://freek.dev/948-handling-cors-in-a-laravel-application
//https://stackoverflow.com/questions/60996419/laravel-7-passport-blocked-by-cors-policy/60996583#60996583
return [

    //https://stackoverflow.com/questions/61050343/cors-error-in-laravel-7-using-laravel-lighthouse
    //Only chnage paths here, no additional CORS files or Kernel.php changes needed!

    'paths' => ['api/*', 'sanctum/csrf-cookie', 'graphql'],

    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => false,
    'max_age' => false,
    'supports_credentials' => false,

];
