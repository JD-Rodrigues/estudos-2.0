<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel exercises</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Protest+Riot&family=Sen:wght@500&display=swap" rel="stylesheet">
        <!-- Styles -->
    </head>
    <body 
        style="
            box-sizing:border-box;
            display:flex;
            justify-content: center;
            align-items: center;
            column-gap: 10px;
        ">
        @foreach($people as $person) 
            @component('components.personCard')
                @slot('image')
                    {{$person['image']}}
                @endslot
                @slot('nome')
                    {{$person['nome']}}
                @endslot
                @slot('nasc')
                    {{$person['birth']}}
                @endslot
                @slot('idade')
                    {{$person['idade']}}
                @endslot
            @endcomponent
        @endforeach
    </body>
</html>
