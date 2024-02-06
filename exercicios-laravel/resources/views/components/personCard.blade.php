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
        <article
            style="
                box-sizing:border-box;
                width: 200px;
                height: 300px;
                border: solid red;
                padding: 10px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-align: center;
            "
        >
            <img 
                src=""
                style="
                    width: 150px;
                    height: 150px;
                    border: solid green;
                    border-radius: 50%;
                    background-image: url({{$image}}); 
                    background-size: cover;
                    background-position: center;
                "
            >
            <h3
                style="line-height: 0"
            >
                <strong>Nome: </strong>{{$nome}}
            </h3>
            <p><strong>Data de nascimento: </strong>{{$nasc}}</p>
            <small><strong>Idade: </strong>{{$idade}}</small>
        </article>
</html>
