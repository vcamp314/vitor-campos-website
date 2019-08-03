<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#000000" />

        <title>Vitor R. Campos - Software Developer</title> 
    </head>
    <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div class="react-content" id="root"></div>
    </body>
    <script src="/js/app.js"type="text/javascript"></script>
</html>
