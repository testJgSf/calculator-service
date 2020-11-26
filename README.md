# Calculator Service

## Configuración inicial del proyecto

### Sin Docker
- Se require tener instalado nodeJs v12.13.0
- Instalar dependencias con `npm i`
- Crear archivo .env (Ejemplo en el archivo **.env.local**)
- Ejecutar el comando `npm start`

### Con Docker 
- Construir imagen con el comando `docker build -t joseg/calculator-service-1.0.0 .`
- Asignar el tag que se desee utilizar, para este ejemplo es "joseg/calculator-service-1.0.0"
- Verificar que la imagen se haya construido con el comando `docker images`
- De aparecer la imagen creada ejecutar `docker run -p 3000:3000 -d joseg/calculator-service-1.0.0`


## Contratos

Los contratos de entrada y salida se encuentran documentados en el siguiente link:   [Contratos](https://app.swaggerhub.com/apis-docs/test_jg_sf/calculator-service/1.0.0)



## Dependencias
El calculator-service no es capaz de resolver ninguna operación matemática por si solo, para una correcta ejecución se espera que se estén ejecutando los siguientes proyectos:

- sum  [Servicio de suma](https://github.com/testJgSf/sum-service)
- subtraction  [Servicio de resta](https://github.com/testJgSf/subtraction-service)
- multiplication  [Servicio de multiplicación](https://github.com/testJgSf/multiplication-service)
- division  [Servicio de division](https://github.com/testJgSf/division-service)

Es posible la ejecución individual (Sin que estén corriendo todos) siempre y cuando el cálculo a resolver no contenga una operación que no se esté ejecutando.

## Diagrama de la aplicación

AQUI VA LA FOTO

## Documentación adicional

El resto de la documentación puede ser encontrada en el siguiente enlace [Documentación](https://github.com/testJgSf/calculator-documentation)


### Más información
Cualquier información extra contacte a José Gabriel Ortiz.




