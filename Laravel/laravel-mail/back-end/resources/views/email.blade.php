<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Body</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; padding: 20px;">

    <div style="max-width: 600px; margin: 0 auto; background-color: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
        
        <header style="background-color: #3498db; color: #fff; text-align: center; padding: 15px;">
            <h1>Olá, {{$data['email']}}</h1>
        </header>

        <section style="padding: 20px;">
            <p>{{$data['message']}}</p>
        </section>

        <footer style="background-color: #3498db; color: #fff; text-align: center; padding: 15px;">
            <p>Thank you for reading!</p>
        </footer>

    </div>

</body>
</html>
