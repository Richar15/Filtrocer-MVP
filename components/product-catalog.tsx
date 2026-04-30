'use client';

import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt: string;
}

export default function ProductCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        }
      } catch (err) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <Skeleton className="h-8 w-64 mx-auto mb-8 rounded-lg" />
          <div className="flex gap-4 overflow-x-auto pb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-64 w-48 rounded-2xl flex-shrink-0" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-6 pb-16 md:pt-10 md:pb-24 px-4 relative overflow-hidden" style={{ backgroundColor: 'rgb(248, 250, 252)' }}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-40 -left-40 w-96 h-96 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumb / Navegación */}
        <div className="mb-8 flex items-center gap-4 flex-wrap">
          <a
            href="/"
            className="group flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, rgb(0, 119, 182), rgb(0, 96, 150))',
              color: 'white',
              boxShadow: '0 6px 20px rgba(0, 119, 182, 0.35)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 30px rgba(0, 119, 182, 0.5)';
              (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, rgb(2, 96, 145), rgb(0, 75, 120))';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(0, 119, 182, 0.35)';
              (e.currentTarget as HTMLElement).style.background = 'linear-gradient(135deg, rgb(0, 119, 182), rgb(0, 96, 150))';
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Inicio
          </a>

          {/* Separador animado */}
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgb(0, 119, 182)', opacity: 0.4 }} />
            <svg className="w-5 h-5" style={{ color: 'rgb(0, 119, 182)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgb(0, 119, 182)', opacity: 0.4 }} />
          </div>

          <div
            className="flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-base"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 119, 182, 0.12), rgba(0, 119, 182, 0.06))',
              color: 'rgb(0, 119, 182)',
              border: '2px solid rgba(0, 119, 182, 0.3)',
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Catálogo
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10 relative z-10">
          <div className="mb-4 inline-block px-4 py-1.5 rounded-full" style={{ backgroundColor: 'rgba(0, 119, 182, 0.1)' }}>
            <span className="text-[#0077B6] font-bold text-xs md:text-sm uppercase tracking-widest flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              Nuestros Productos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-[#0077B6] to-slate-800">
            Soluciones de Purificación
          </h2>
          <div className="flex justify-center mb-8">
            <div className="h-1.5 w-24 rounded-full bg-gradient-to-r from-[#0077B6] to-[#00A8E8]"></div>
          </div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgb(100, 116, 139)' }}>
            Descubre nuestra gama completa de equipos con tecnología de ozono para agua pura y segura, diseñados para tu bienestar.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-8">
            {error}
          </div>
        )}

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay productos disponibles en este momento.
            </p>
          </div>
        ) : (
          <>
            {/* Sección Informativa sobre Ozono */}
            <div className="mb-20 rounded-[2.5rem] overflow-hidden relative group" style={{ 
              background: 'linear-gradient(145deg, rgb(240, 249, 255) 0%, rgb(224, 242, 254) 100%)',
              boxShadow: '0 20px 40px rgba(0, 119, 182, 0.08)'
            }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0077B6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 relative z-10">
                {/* Contenedor Izquierdo - Texto */}
                <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center lg:col-span-3 relative">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-white/40 rounded-br-full -z-10 blur-2xl"></div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#0077B6] to-[#023E8A]">
                    El Poder del Ozono
                  </h3>
                  <div className="space-y-6" style={{ color: 'rgb(30, 41, 59)' }}>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-[#0077B6]/10 p-2 rounded-xl text-[#0077B6]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                      </div>
                      <p className="text-base md:text-lg leading-relaxed flex-1">
                        <span className="font-bold text-slate-800">El Ozono es un potente oxidante y fuerte desinfectante.</span> Una forma natural de oxígeno con el poder de eliminar bacterias, virus y hongos sin dejar residuos químicos.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-[#0077B6]/10 p-2 rounded-xl text-[#0077B6]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                      <p className="text-base md:text-lg leading-relaxed font-semibold flex-1">
                        Cada vaso de agua tratada con ozono es más pura, segura, fresca y saludable para ti y tu familia.
                      </p>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1 bg-[#0077B6]/10 p-2 rounded-xl text-[#0077B6]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      </div>
                      <p className="text-sm md:text-base leading-relaxed flex-1 text-slate-600">
                        En el tratamiento del agua, el ozono actúa como el agente oxidante natural más rápido y efectivo que existe. Es un poderoso bactericida y virulicida que destruye los microorganismos por oxidación.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contenedor Derecho - Imagen */}
                <div className="flex items-center justify-center p-8 md:p-12 lg:col-span-2 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)' }}>
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#0077B6]/20 rounded-full blur-3xl"></div>
                  <div className="relative w-full h-72 md:h-96 flex items-center justify-center z-10 transition-transform duration-700 group-hover:scale-105">
                    <img
                      src="/10.png"
                      alt="Poder del Ozono"
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Catálogo de Productos */}
          <div className="overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            <div className="flex gap-4 sm:gap-6 min-w-min pb-6">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="flex-shrink-0 w-[85vw] sm:w-[20rem] flex flex-col rounded-2xl overflow-hidden transition-all duration-500 group cursor-pointer border relative snap-start h-full"
                  style={{ 
                    backgroundColor: 'rgb(255, 255, 255)', 
                    borderColor: 'rgba(0, 119, 182, 0.1)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 119, 182, 0.12)';
                    e.currentTarget.style.borderColor = 'rgba(0, 119, 182, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.03)';
                    e.currentTarget.style.borderColor = 'rgba(0, 119, 182, 0.1)';
                  }}
                  onClick={(e) => {
                    if ((e.target as HTMLElement).closest('a')) return;
                    setSelectedProduct(product);
                  }}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden w-full h-56 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-4">
                    <div className="absolute inset-0 bg-[#0077B6] opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-10"></div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700 drop-shadow-md relative z-20"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="p-4 sm:p-5 flex flex-col flex-grow bg-white w-full border-t border-slate-100">
                    <div className="mb-4 flex-grow">
                      <h4 className="font-bold text-lg sm:text-xl leading-tight mb-2 group-hover:text-[#0077B6] transition-colors duration-300" style={{ color: 'rgb(15, 23, 42)' }}>
                        {product.name}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                        {product.description}
                      </p>
                    </div>
                    
                    <div className="mt-auto pt-2">
                        {/* Price */}
                        <div className="mb-4">
                          <p className="text-xl sm:text-2xl font-black text-[#0077B6] flex items-baseline gap-1">
                            <span className="text-sm sm:text-base font-semibold">$</span>
                            {product.price.toLocaleString('es-CO')}
                          </p>
                        </div>

                      {/* CTA Button */}
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent('Hola, me interesa este producto: ' + product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full px-3 py-2.5 text-white text-center font-bold text-xs sm:text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group/btn"
                          style={{ 
                            background: 'linear-gradient(135deg, rgb(0, 119, 182), rgb(2, 62, 138))',
                            boxShadow: '0 4px 15px rgba(0, 119, 182, 0.3)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 119, 182, 0.4)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 119, 182, 0.3)';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
                          <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                          <span className="relative z-10">Consultar Ahora</span>
                        </a>
                      </div>
                    </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botón Flotante WhatsApp */}
          <div className="mt-12 flex justify-center">
            <a
              href="https://wa.me/573116835639?text=Hola,%20quisiera%20más%20información%20sobre%20los%20productos"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg transition-all duration-500 flex items-center justify-center hover:scale-110 group/wa overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(37, 211, 102, 0.6)';
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(37, 211, 102, 0.4)';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover/wa:scale-150 transition-transform duration-500 rounded-full"></div>
              <svg className="w-7 h-7 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>

          {/* Modal de Detalle de Producto */}
          <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
            <DialogContent className="sm:max-w-2xl w-11/12">
              {selectedProduct && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-[#0077B6] font-bold">{selectedProduct.name}</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="flex justify-center items-center bg-slate-50 p-6 rounded-xl border border-slate-100">
                      <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-auto max-h-64 object-contain drop-shadow-md" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="mb-6 flex-grow min-w-0">
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">Descripción del Producto</h4>
                        <p className="text-slate-600 leading-relaxed whitespace-pre-wrap break-words text-sm md:text-base">
                          {selectedProduct.description}
                        </p>
                      </div>
                      
                      <div className="mt-auto">
                        <p className="text-3xl font-black text-[#0077B6] flex items-baseline gap-1 mb-6">
                          <span className="text-xl font-semibold">$</span>
                          {selectedProduct.price.toLocaleString('es-CO')}
                        </p>
                        
                        <a
                          href={`https://wa.me/?text=${encodeURIComponent('Hola, me interesa este producto: ' + selectedProduct.name)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-4 py-3 text-white text-center font-bold text-sm md:text-base rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02]"
                          style={{ 
                            background: 'linear-gradient(135deg, rgb(0, 119, 182), rgb(2, 62, 138))',
                            boxShadow: '0 4px 15px rgba(0, 119, 182, 0.3)'
                          }}
                        >
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                          Consultar Ahora
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          </>
        )}
      </div>
    </section>
  );
}
