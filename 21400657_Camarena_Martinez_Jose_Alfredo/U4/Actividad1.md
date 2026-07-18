# Actividad 1: Flujo e interacción Cliente-Servidor para un CRUD de películas

### 1. Crear una película
*   **Descripción:** Crear un nuevo registro de película en la base de datos de la tienda.
*   **Método HTTP:** `POST`
*   **URI:** `/peliculas`
*   **Json enviado:**
```json
{
  "id": 1,
  "nombre": "Interstellar",
  "director": "Christopher Nolan",
  "año": 2014,
  "duración": 169,
  "genero": "Ciencia Ficción"
}
```
*   **Json recibido:**
```json
{
  "code": 200,
  "msg": "Película creada exitosamente"
}
```

### 2. Consulta una película por su id
*   **Descripción:** Obtener los datos completos de una película en específico utilizando su identificador único.
*   **Método HTTP:** `GET`
*   **URI:** `/peliculas/1`
*   **Json enviado:**
```json
{}
```
*   **Json recibido:**
```json
{
  "code": 200,
  "data": {
    "id": 1,
    "nombre": "Interstellar",
    "director": "Christopher Nolan",
    "año": 2014,
    "duración": 169,
    "genero": "Ciencia Ficción"
  }
}
```

### 3. Actualiza el año, director y duración de una película por su id
*   **Descripción:** Modificar la información parcial (año, director y duración) de una película ya existente mediante su identificador.
*   **Método HTTP:** `PUT`
*   **URI:** `/peliculas/1`
*   **Json enviado:**
```json
{
  "año": 2015,
  "director": "C. Nolan",
  "duración": 170
}
```
*   **Json recibido:**
```json
{
  "code": 200,
  "msg": "Película actualizada"
}
```

### 4. Borra una película por su id
*   **Descripción:** Eliminar el registro de una película del sistema utilizando su identificador.
*   **Método HTTP:** `DELETE`
*   **URI:** `/peliculas/1`
*   **Json enviado:**
```json
{}
```
*   **Json recibido:**
```json
{
  "code": 200,
  "msg": "Película eliminada"
}
```
