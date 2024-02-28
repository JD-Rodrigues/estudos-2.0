<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário de Login</title>
    <style>
        /* Adicione estilos CSS conforme necessário */
    </style>
</head>
<body>

    <h2>Formulário de Login</h2>
    @if($errors->any())
        <ul>
            @foreach($errors->all() as $error)
             <li>{{$error}}</li>
            @endforeach
        </ul>
    @endif
    <form action="/login" method="POST">
        
        @csrf
        <div>
            <label for="login">Login:</label>
            <input type="text" id="login" value="{{ old('login') }}"  name="login" required>
        </div>
        <div>
            <label for="senha">Senha:</label>
            <input type="password" id="senha"  name="senha" required>
        </div>
        <div>
            <button type="submit">Entrar</button>
        </div>
        
    </form>

    {{Session::get('senha')}}

</body>
</html>
