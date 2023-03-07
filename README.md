# API-RESTful-
M1gu3120/API-RESTful-con-operaciones-CRUD- con Nodejs y Javascrip

estos son los pasos para poder crear la API_RESTful:

primero Para instalar y ejecutar el  servidor, se deben seguir los siguientes pasos:

Asegurarse de tener Node.js y npm (Node Package Manager) instalados en su computadora. Si no los tiene instalados, descárguelos e instálelos desde el sitio web oficial de Node.js.

Descargar o clonar el código fuente del servidor desde el repositorio de GitHub.

Navegar hasta el directorio raíz del proyecto usando la terminal o línea de comandos.

Ejecutar el comando npm install en la terminal para instalar todas las dependencias del proyecto.

Ejecutar el comando npm start en la terminal para iniciar el servidor. Este comando iniciará el servidor en el puerto 4000, como se define en el código fuente.

En un navegador web, vaya a la URL http://localhost:4000 para ver si el servidor está funcionando. Si todo está configurado correctamente, debería ver un mensaje que dice "El server esta corriendo exitosamente es http://localhost:4000".

Para detener el servidor, simplemente presione Ctrl + C en la terminal.

Con estos pasos, debería poder instalar y ejecutar el servidor sin problemas. Recuerde que si desea cambiar el puerto de escucha, puede hacerlo editando la variable port en el archivo index.js antes de iniciar el servidor.

Además de los pasos mencionados anteriormente, es importante destacar que este código de servidor es una plantilla básica que se puede extender y modificar para adaptarse a necesidades específicas.

Por ejemplo, para agregar nuevas rutas a la aplicación, se deben crear nuevos archivos en la carpeta ./routes y agregarlos al archivo ./routes/index.js. Dentro de cada archivo de ruta, se pueden definir varias rutas y manejar diferentes tipos de solicitudes HTTP (GET, POST, PUT, DELETE, etc.). También es posible agregar middleware personalizado para procesar la solicitud antes de que llegue a la ruta.

En cuanto a la gestión de errores, este servidor utiliza dos middlewares personalizados (boomerrorHandler y errorHandler) para manejar errores HTTP y otros errores generales. Si ocurre un error, el middleware apropiado se ejecutará para enviar una respuesta de error al cliente. En caso de que se produzca un error de registro, el middleware logErrors registrará información detallada sobre el error en la consola.

En resumen, este código proporciona una plantilla básica para crear un servidor Express y se puede extender y personalizar según las necesidades de cada proyecto. Es importante entender los conceptos detrás del servidor y la estructura del código fuente para poder modificarlo y expandirlo de manera efectiva.

el código define las rutas y los manejadores de las solicitudes HTTP relacionadas con los productos de una tienda. Se usa el módulo express para crear un enrutador y se importa la clase ProductService del archivo productService.js para realizar las operaciones CRUD en la base de datos.

Además, se utilizan los middlewares validatorHandler y los esquemas definidos en productShema.js para validar los datos enviados en las solicitudes.

Se definen los siguientes manejadores de ruta:

GET /: Devuelve todos los productos almacenados en la base de datos.
GET /:id: Devuelve el producto con el identificador id.
POST /: Crea un nuevo producto con los datos proporcionados en el cuerpo de la solicitud.
PATCH /:id: Actualiza el producto con el identificador id con los datos proporcionados en el cuerpo de la solicitud.
DELETE /:id: Elimina el producto con el identificador id.
Estos manejadores de ruta interactúan con la instancia de ProductService para realizar las operaciones correspondientes en la base de datos.

Finalmente, se exporta el enrutador creado para su uso en otro archivo. Se menciona que las pruebas se hicieron con Insomnia, una herramienta para realizar solicitudes HTTP y probar APIs , en el código se usó la librería Faker para generar datos falsos de productos con diferentes atributos como id, imágenes, precio, nombre, descripción, fecha y hora. Faker es una librería muy útil para generar datos de prueba en situaciones en las que no se dispone de una base de datos real o cuando se quiere crear datos falsos para pruebas unitarias o de integración. Faker permite generar datos de diferentes tipos, como nombres, direcciones, fechas, números de teléfono, correos electrónicos, etc. y se puede instalar fácilmente a través de npm.

acontinuacion mostrare screenshot de como realizar las peticiones en Insomnia




