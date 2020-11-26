# Calculator Service

## Configuración inicial del proyecto

### Sin Docker
- Se requiere tener instalado nodeJs v12.13.0
- Instalar dependencias con `npm i`
- Crear archivo .env (Ejemplo en el archivo **.env.develop**)
- Ejecutar el comando `npm start`

### Con Docker 
- Construir imagen con el comando docker run joseg/calculator-service
- 

## Contratos

Los contratos de entrada y salida se encuentran documentados en el siguiente link   ***************


## Dependencias
El calculator-service no es capaz de resolver ninguna operación matemática por si solo, para una correcta ejecución se espera que se estén ejecutando los siguientes proyectos:

- sum
- rest
- mul
- div
- 
Es posible la ejecución individual (Sin que estén corriendo todos) siempre y cuando el cálculo a resolver no contenga una operación que no se esté ejecutando.

## Diagrama de la aplicación

AQUI VA LA FOTO

## Documentación adicional

El resto de la documentación puede ser encontrada en ***URL***


### Más información
Cualquier información extra contacte a José Gabriel Ortiz.




