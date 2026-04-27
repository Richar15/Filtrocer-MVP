'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Trash2, Edit2, Plus, LogOut, Package, X } from 'lucide-react';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt: string;
}

export default function AdminPanel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: null as File | null,
  });
  const [submitting, setSubmitting] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);
  const [priceDisplay, setPriceDisplay] = useState('');
  const router = useRouter();

  // Formatea número a string con separador de miles colombiano (puntos)
  const formatPrice = (raw: string): string => {
    const digits = raw.replace(/\D/g, '');
    if (!digits) return '';
    return Number(digits).toLocaleString('es-CO');
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, ''); // solo dígitos
    setFormData({ ...formData, price: raw });
    setPriceDisplay(raw ? Number(raw).toLocaleString('es-CO') : '');
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (err) {
      setError('Error al cargar los productos');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/admin');
  };

  const handleOpenDialog = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData({
        name: product.name,
        description: product.description,
        price: product.price.toString(),
        image: null,
      });
      setPriceDisplay(Number(product.price).toLocaleString('es-CO'));
    } else {
      setEditingProduct(null);
      setFormData({ name: '', description: '', price: '', image: null });
      setPriceDisplay('');
    }
    setDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('description', formData.description);
      data.append('price', formData.price);

      if (editingProduct) {
        data.append('id', editingProduct._id);
        if (formData.image) data.append('image', formData.image);

        const response = await fetch('/api/products', { method: 'PUT', body: data });
        if (response.ok) {
          setDialogOpen(false);
          fetchProducts();
        } else {
          const err = await response.json();
          setError(err.error || 'Error al actualizar el producto');
        }
      } else {
        if (!formData.image) { setError('La imagen es obligatoria'); return; }
        data.append('image', formData.image);

        const response = await fetch('/api/products', { method: 'POST', body: data });
        if (response.ok) {
          setDialogOpen(false);
          fetchProducts();
        } else {
          const err = await response.json();
          setError(err.error || 'Error al crear el producto');
        }
      }
    } catch (err) {
      setError('Ocurrió un error inesperado');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (productId: string) => {
    try {
      const response = await fetch(`/api/products?id=${productId}`, { method: 'DELETE' });
      if (response.ok) {
        setDeleteConfirm(null);
        fetchProducts();
      } else {
        setError('Error al eliminar el producto');
      }
    } catch (err) {
      setError('Ocurrió un error inesperado');
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #0077B6 100%)' }}>

      {/* Header */}
      <header className="sticky top-0 z-40 px-4 py-3 flex items-center justify-between"
        style={{
          background: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #0077B6, #00B4D8)' }}>
            <Package className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-black text-white leading-none">Panel Admin</h1>
            <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {products.length} producto{products.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Botón Agregar */}
          <button
            onClick={() => handleOpenDialog()}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #0077B6, #00B4D8)',
              boxShadow: '0 4px 12px rgba(0,119,182,0.4)',
            }}
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Agregar</span>
          </button>

          {/* Botón Cerrar sesión */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105"
            style={{
              background: 'rgba(239,68,68,0.2)',
              border: '1px solid rgba(239,68,68,0.4)',
            }}
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Salir</span>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="px-4 py-6 max-w-6xl mx-auto">

        {/* Error */}
        {error && (
          <div className="mb-4 px-4 py-3 rounded-xl text-sm font-medium text-red-200 flex items-center gap-2"
            style={{ backgroundColor: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)' }}>
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
            <button onClick={() => setError('')} className="ml-auto"><X className="w-4 h-4" /></button>
          </div>
        )}

        {/* Banner instructivo */}
        <div className="mb-5 px-4 py-3 rounded-2xl flex items-start gap-3"
          style={{
            background: 'linear-gradient(135deg, rgba(0,119,182,0.25), rgba(0,180,216,0.15))',
            border: '1px solid rgba(0,180,216,0.35)',
          }}>
          <div className="w-8 h-8 flex-shrink-0 rounded-xl flex items-center justify-center mt-0.5"
            style={{ backgroundColor: 'rgba(0,180,216,0.3)' }}>
            <svg className="w-4 h-4" style={{ color: '#00B4D8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-bold" style={{ color: '#90e0ef' }}>¿Cómo gestionar tu catálogo?</p>
            <p className="text-xs mt-0.5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Usa el botón <span className="font-semibold" style={{ color: '#00B4D8' }}>+ Agregar</span> para subir nuevos productos con imagen, nombre, descripción y precio.
              Los productos que agregues aquí aparecerán automáticamente en el catálogo público de la tienda.
            </p>
          </div>
        </div>

        {/* Estado de carga */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden animate-pulse"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', height: '100px' }} />
            ))}
          </div>
        ) : products.length === 0 ? (
          /* Vacío */
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
              <Package className="w-8 h-8" style={{ color: 'rgba(255,255,255,0.3)' }} />
            </div>
            <p className="text-white font-semibold mb-1">Sin productos aún</p>
            <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Agrega tu primer producto para comenzar
            </p>
            <button
              onClick={() => handleOpenDialog()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #0077B6, #00B4D8)', boxShadow: '0 6px 20px rgba(0,119,182,0.4)' }}
            >
              <Plus className="w-4 h-4" /> Agregar producto
            </button>
          </div>
        ) : (
          /* Grid de productos - cards compactos tipo catálogo */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {products.map((product) => (
              <div key={product._id}
                className="rounded-2xl overflow-hidden flex transition-all duration-300 hover:scale-[1.02]"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.07)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                }}>

                {/* Imagen - lado izquierdo */}
                <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center m-3 rounded-xl overflow-hidden"
                  style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-1"
                  />
                </div>

                {/* Info - lado derecho */}
                <div className="flex flex-col justify-between py-3 pr-3 flex-1 min-w-0">
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-white leading-snug line-clamp-2">
                      {product.name}
                    </h3>
                    <p className="text-xs mt-0.5 line-clamp-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {product.description}
                    </p>
                    <p className="text-sm font-black mt-1" style={{ color: '#00B4D8' }}>
                      ${product.price.toLocaleString('es-CO')}
                    </p>
                  </div>

                  {/* Acciones */}
                  <div className="flex gap-1.5 mt-2">
                    <button
                      onClick={() => handleOpenDialog(product)}
                      className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                      style={{
                        backgroundColor: 'rgba(0,119,182,0.3)',
                        border: '1px solid rgba(0,119,182,0.5)',
                        color: '#90cdf4',
                      }}
                    >
                      <Edit2 className="w-3 h-3" /> Editar
                    </button>
                    <button
                      onClick={() => setDeleteConfirm(product._id)}
                      className="flex-1 flex items-center justify-center gap-1 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105"
                      style={{
                        backgroundColor: 'rgba(239,68,68,0.2)',
                        border: '1px solid rgba(239,68,68,0.4)',
                        color: '#fca5a5',
                      }}
                    >
                      <Trash2 className="w-3 h-3" /> Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Modal: Confirmación de eliminación */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}>
          <div className="w-full max-w-sm rounded-2xl p-6 bg-white shadow-2xl">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
              <Trash2 className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900 mb-1">¿Eliminar producto?</h3>
            <p className="text-sm text-center text-gray-500 mb-6">Esta acción no se puede deshacer.</p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-red-600 hover:bg-red-700 transition-all"
              >
                Sí, eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Crear / Editar producto */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-sm mx-4 rounded-2xl p-0 overflow-hidden border-0"
          style={{ boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>

          {/* Header del modal */}
          <div className="px-6 py-5 text-white"
            style={{ background: 'linear-gradient(135deg, #0077B6, #00B4D8)' }}>
            <DialogHeader>
              <DialogTitle className="text-lg font-black text-white">
                {editingProduct ? 'Editar producto' : 'Nuevo producto'}
              </DialogTitle>
              <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {editingProduct ? 'Modifica los datos del producto' : 'Completa los datos del nuevo producto'}
              </p>
            </DialogHeader>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4 bg-white">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-sm font-semibold text-gray-700">Nombre del producto</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Ej: Purificador Ózone Pro"
                required
                className="h-10 rounded-xl text-sm border-gray-200"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="description" className="text-sm font-semibold text-gray-700">Descripción</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Describe el producto brevemente..."
                required
                className="rounded-xl text-sm border-gray-200 resize-none"
                rows={3}
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="price" className="text-sm font-semibold text-gray-700">
                Precio
                <span className="ml-1 text-xs font-normal text-gray-400">COP</span>
              </Label>
              <div className="relative flex items-center">
                {/* Bandera Colombia + símbolo */}
                <div className="absolute left-3 flex items-center gap-1.5 pointer-events-none select-none">
                  <span className="text-base leading-none">🇨🇴</span>
                  <span className="text-sm font-bold text-gray-400">$</span>
                </div>
                <input
                  id="price"
                  type="text"
                  inputMode="numeric"
                  value={priceDisplay}
                  onChange={handlePriceChange}
                  placeholder="0"
                  required
                  className="w-full h-10 pl-14 pr-3 rounded-xl text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent transition-all"
                />
              </div>
              {priceDisplay && (
                <p className="text-xs text-gray-400 mt-1">
                  Valor: <span className="font-semibold text-[#0077B6]">${priceDisplay} COP</span>
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="image" className="text-sm font-semibold text-gray-700">
                Imagen {!editingProduct && <span className="text-red-500">*</span>}
              </Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => setFormData({ ...formData, image: e.target.files?.[0] || null })}
                required={!editingProduct}
                className="h-10 rounded-xl text-sm border-gray-200 file:mr-3 file:py-1 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700"
              />
              {editingProduct && formData.image === null && (
                <p className="text-xs text-gray-400">Deja vacío para conservar la imagen actual</p>
              )}
            </div>

            <div className="flex gap-3 pt-1">
              <button
                type="button"
                onClick={() => setDialogOpen(false)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02] disabled:opacity-60"
                style={{
                  background: 'linear-gradient(135deg, #0077B6, #00B4D8)',
                  boxShadow: '0 4px 14px rgba(0,119,182,0.4)',
                }}
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Guardando...
                  </span>
                ) : editingProduct ? 'Guardar cambios' : 'Agregar producto'}
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
