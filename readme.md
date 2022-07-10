Aplicación de prueba para medir en Raspberry Pi el nivel de ruido en una habitación.

Se necesita una Raspberry pi y una webcam compatible.

Idea:

- La idea es tener una raspberry con una webcam enchufada por USB.
- Mediante soundmeter (https://github.com/shichao-an/soundmeter) extraemos el valor de ruido y lo añadimos a un log con el comando ```soundmeter --log /var/www/html/rms.txt --daemonize```. Este comando deja a soundmeter corriendo en segundo plano y añadiendo el valor de ruido en un log en la carpeta indicada.
- El archivo index.php hace llamadas cada 0,5s vía AJAX a bash.php que es quien recoge el último valor del log.
- Al mismo tiempo cada 60s se llama a borrar.php para que elimine el contenido del log y que no crezca mucho el fichero de logs.
- Canvas JS y sus live charts nos ayudan a mostrar el contenido en formato gráfico.
- Además, el color lde valor indicado varía segun el nivel de ruido.