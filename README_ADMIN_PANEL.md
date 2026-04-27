# Panel de Administrador Filtrocer

## Instalación y Setup

### Requisitos
- Node.js 18+
- MongoDB 5.0+
- PNPM

### Pasos de instalación

1. **Instalar dependencias**
```bash
pnpm install
```

2. **Iniciar MongoDB**

En Linux/Mac:
```bash
# Si MongoDB está instalado localmente
mongod

# O si está como servicio
sudo systemctl start mongod
```

En Windows:
```bash
# Si está instalado como servicio
net start MongoDB

# O ejecutar manualmente
mongod
```

3. **Configurar variables de entorno**

El archivo `.env.local` ya está configurado con:
- MongoDB URI: `mongodb://localhost:27017/filtrocer`
- Usuario admin: `admin`
- Contraseña: `admin123`

Puedes cambiar estos valores en el archivo `.env.local` si lo deseas.

4. **Ejecutar en modo desarrollo**
```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`

## Acceso al Panel de Admin

1. Ir a: `http://localhost:3000/admin`
2. Iniciar sesión con:
   - Usuario: `admin`
   - Contraseña: `admin123`

## Funcionalidades

### Panel de Administrador (`/admin/panel`)
- **Agregar productos**: Sube nombre, descripción, precio (COP) e imagen
- **Editar productos**: Modifica cualquier campo, incluyendo la imagen
- **Eliminar productos**: Borra productos del catálogo
- **Gestión completa**: Interfaz intuitiva para gestionar tu inventario

### Catálogo de Productos (`/catalogo`)
- **Vista pública**: Muestra todos los productos disponibles
- **Filtrado automático**: Los cambios en el panel se reflejan inmediatamente
- **Diseño responsivo**: Se adapta a dispositivos móviles

## API Endpoints

### Autenticación
- `POST /api/auth/login` - Login del administrador
- `POST /api/auth/logout` - Logout del administrador

### Productos
- `GET /api/products` - Obtener todos los productos
- `POST /api/products` - Crear nuevo producto (requiere autenticación)
- `PUT /api/products` - Actualizar producto (requiere autenticación)
- `DELETE /api/products?id=productId` - Eliminar producto (requiere autenticación)

## Características de seguridad

- ✅ Autenticación por usuario y contraseña
- ✅ Tokens almacenados en cookies HTTP-Only
- ✅ Protección de endpoints de API
- ✅ Base de datos MongoDB segura

## Estructura del proyecto

```
app/
├── admin/
│   ├── page.tsx          # Página de login
│   └── panel/
│       └── page.tsx      # Panel de administrador
├── catalogo/
│   └── page.tsx          # Página del catálogo público
└── api/
    ├── auth/
    │   ├── login/route.ts
    │   └── logout/route.ts
    └── products/route.ts   # CRUD de productos

components/
├── admin/
│   ├── login-form.tsx    # Formulario de login
│   └── admin-panel.tsx   # Panel de gestión
└── product-catalog.tsx   # Componente del catálogo

lib/
└── db/
    ├── mongoose.ts       # Conexión a MongoDB
    └── models.ts         # Modelo de Producto
```

## Notas importantes

- Las imágenes se almacenan en base64 en MongoDB
- Los cambios en los productos se actualizan inmediatamente en el catálogo
- La sesión de admin expira en 7 días
- Siempre usa contraseñas seguras en producción

## Troubleshooting

### MongoDB no conecta
- Verifica que MongoDB está corriendo: `mongosh`
- Comprueba la URI en `.env.local`
- Intenta crear la BD manualmente: `mongosh filtrocer`

### Problemas con las imágenes
- Verifica que el archivo sea una imagen válida
- Máximo recomendado: 5MB
- Formatos soportados: JPG, PNG, GIF, WebP

### Error 401 en rutas de productos
- Verifica que estés logeado en el panel
- Comprueba que la cookie de sesión está configurada
- Intenta logout y login nuevamente
