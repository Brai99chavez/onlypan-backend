# OnlyPan (servidor)

API de la tienda online OnlyPan: productos, usuarios, carrito, pedidos y pagos.

## Qué es

El servidor del proyecto en equipo OnlyPan (2022), la tienda online de una panadería. Lo usa [onlypan-frontend](https://github.com/Brai99chavez/onlypan-frontend).

## Qué hace

- Productos: listado, búsqueda, filtros por tipo y precio, alta, edición y baja.
- Usuarios: registro e ingreso con JWT, ingreso con Google y roles de administrador.
- Carrito, favoritos, reseñas con puntaje y pedidos con estado.
- Pagos con Stripe (en modo de prueba).
- Mail de bienvenida con Nodemailer.

## Tecnologías

Node.js, Express, Sequelize y PostgreSQL. JWT y bcrypt para las sesiones, Stripe para los pagos y Nodemailer para los mails.

## Cómo correrlo

Necesitás Node.js y una base PostgreSQL.

```bash
git clone https://github.com/Brai99chavez/onlypan-backend.git
cd onlypan-backend
npm install
```

Copiá `.env.example` a `.env` y completá `DATABASE_URL` (la dirección de tu base) y `STRIPE_SECRET_KEY` (tu clave de prueba de Stripe). Para los mails hacen falta `CLIENT_ID`, `CLIENT_SECRET`, `REDIRECT_URI` y `REFRESH_TOKEN` de Gmail.

```bash
npm start
```

Arranca en el puerto 3001. Ojo: cada vez que arranca borra las tablas y las vuelve a crear con 30 productos de ejemplo.
