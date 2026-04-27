# Guía de Instalación de MongoDB

## En Linux (Ubuntu/Debian)

```bash
# Importar la clave GPG
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# Agregar el repositorio
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# Actualizar y instalar
sudo apt-get update
sudo apt-get install -y mongodb-org

# Iniciar MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# Verificar que está corriendo
sudo systemctl status mongod
```

## En macOS

```bash
# Usando Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Iniciar MongoDB
brew services start mongodb-community

# Verificar que está corriendo
brew services list
```

## En Windows

1. Descargar MongoDB Community Edition desde: https://www.mongodb.com/try/download/community
2. Ejecutar el instalador
3. Seguir los pasos de instalación
4. MongoDB se instalará como servicio de Windows
5. Verificar que está corriendo: Services > MongoDB

## Verificar conexión

Una vez MongoDB está corriendo:

```bash
mongosh
```

Si ves el prompt `test>` significa que está corriendo correctamente.

Para crear la base de datos:
```bash
mongosh
use filtrocer
db.createCollection("products")
```

## Después de instalar MongoDB

1. Asegúrate de que MongoDB está corriendo
2. Vuelve a la carpeta del proyecto
3. Ejecuta: `pnpm dev`
4. Accede a: `http://localhost:3000/admin`

Usuario: `admin`
Contraseña: `admin123`
