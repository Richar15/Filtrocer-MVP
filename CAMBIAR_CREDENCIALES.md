# Cambiar Credenciales de Admin

## Cambiar Usuario y Contraseña

Para cambiar las credenciales de acceso al panel de administrador:

1. Abre el archivo `.env.local` en la raíz del proyecto
2. Modifica estas líneas:

```env
ADMIN_USERNAME=admin        # Cambia "admin" por tu usuario
ADMIN_PASSWORD=admin123     # Cambia "admin123" por tu contraseña
```

Ejemplo:
```env
ADMIN_USERNAME=miUsuario
ADMIN_PASSWORD=MiContraseña123
```

3. Guarda el archivo
4. Reinicia la aplicación: `pnpm dev`

## ⚠️ Recomendaciones de Seguridad

### Para Contraseñas Fuertes:
- ✅ Usa al menos 12 caracteres
- ✅ Incluye mayúsculas y minúsculas
- ✅ Incluye números
- ✅ Incluye caracteres especiales (!@#$%^&*)
- ❌ No uses información personal
- ❌ No uses palabras del diccionario

### Ejemplo de Contraseña Fuerte:
```
Admin#2024!Seguro@MuyFuerte
```

## Cambiar Dirección MongoDB

Si necesitas conectar a un MongoDB diferente:

1. Edita `.env.local`
2. Modifica:

```env
MONGODB_URI=mongodb://localhost:27017/filtrocer
```

Ejemplos:
```env
# MongoDB en servidor remoto
MONGODB_URI=mongodb://usuario:contraseña@miserror.com:27017/filtrocer

# MongoDB con autenticación
MONGODB_URI=mongodb+srv://usuario:contraseña@cluster.mongodb.net/filtrocer?retryWrites=true&w=majority

# MongoDB en puerto diferente
MONGODB_URI=mongodb://localhost:27018/filtrocer
```

## Estructura de .env.local Completo

```env
# Base de datos MongoDB
MONGODB_URI=mongodb://localhost:27017/filtrocer

# Credenciales del administrador
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

## ⚠️ IMPORTANTE EN PRODUCCIÓN

Si vas a subir esto a producción:

1. **NUNCA** commits `.env.local` a Git
2. **SIEMPRE** crea contraseñas muy fuertes
3. Usa variables de entorno en tu hosting
4. En Vercel, Netlify, etc., agrega las variables en "Environment Variables"
5. Considera usar JWT tokens en lugar de cookies simples

## Resetear Credenciales

Si olvidas la contraseña:
1. Abre `.env.local`
2. Cambia ADMIN_PASSWORD a lo que desees
3. Guarda
4. Reinicia la app
5. Usa las nuevas credenciales

---

¿Necesitas ayuda? Revisa `README_ADMIN_PANEL.md` o `SETUP_INSTRUCTIONS.md`
