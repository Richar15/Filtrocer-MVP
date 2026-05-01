#!/bin/bash

# Script para iniciar la aplicación

echo "=========================================="
echo "  Iniciando Panel de Filtrocer"
echo "=========================================="

# Verificar si MongoDB está corriendo
echo "Verificando MongoDB..."
if ! pgrep -x mongod > /dev/null; then
    echo "⚠️  MongoDB no está corriendo"
    echo ""
    echo "Para iniciar MongoDB:"
    echo "  - Ubuntu/Debian: sudo systemctl start mongod"
    echo "  - macOS: brew services start mongodb-community"
    echo "  - Windows: MongoDB debería iniciarse automáticamente"
    echo ""
    read -p "¿Deseas continuar de todas formas? (s/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Ss]$ ]]; then
        exit 1
    fi
else
    echo "✓ MongoDB está corriendo"
fi

echo ""
echo "Iniciando aplicación en modo desarrollo..."
echo "La aplicación estará disponible en: http://localhost:3001"
echo ""
echo "Panel de Admin:"
echo "  URL: http://localhost:3001/admin"
echo "  Usuario: admin"
echo "  Contraseña: admin123"
echo ""
echo "Catálogo de productos: http://localhost:3001/catalogo"
echo ""
echo "Presiona Ctrl+C para detener la aplicación"
echo "=========================================="
echo ""

pnpm dev
