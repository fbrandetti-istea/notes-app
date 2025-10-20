# My Keep Clone

Esta es una mini aplicación de notas al estilo Google Keep.
La aplicación permite crear y eliminar notas, mostrándolas con un diseño responsivo.

---

## Funcionalidades

- Crear y eliminar notas.
- Diseño responsivo similar a Google Keep.
- Backend en Node.js + Express con MySQL.
- Frontend en HTML + Javascript.
- Totalmente contenerizada con Docker Compose.

---

## Requisitos previos

Para poder correr la aplicación vas a necesitar lo siguiente:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Asegurarte de que los puertos **8080** y **9000** estén libres en tu máquina.

---

## Configuración y ejecución

1. **Construir y levantar todos los servicios**

```bash
docker compose up --build
```

Esto iniciará:

- `mysql` → Base de datos MySQL
- `rest` → API Node.js en el puerto **8080**
- `web` → Aplicación web en el puerto **9000**

3. **Abrir la aplicación en el navegador**

```
http://localhost:9000
```

4. **Acceder a la API directamente (opcional)**
Se puede acceder a la REST API directamente llamando a cualquiera de los siguientes endpoints:

- Listar notas: `GET http://localhost:8080/api/notas`
- Agregar nota: `POST http://localhost:8080/api/notas`
- Actualizar nota: `PUT http://localhost:8080/api/notas/:id`
- Eliminar nota: `DELETE http://localhost:8080/api/notas/:id`

## Créditos
Aplicación realizada por Franco Brandetti para trabajo evaluativo de Ingeniería del Software de ISTEA.