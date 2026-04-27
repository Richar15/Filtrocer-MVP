'use client';

import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

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
    <section className="py-12 px-4" style={{ backgroundColor: 'rgb(248, 250, 252)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb / Navegación */}
        <div className="mb-10 flex items-center gap-4 flex-wrap">
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
        <div className="text-center mb-16">
          <div className="mb-4 inline-block">
            <span className="text-[#0077B6] font-bold text-xs uppercase tracking-widest">Nuestros Productos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ color: 'rgb(15, 23, 42)' }}>
            Soluciones de Purificación
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-20 rounded-full" style={{ backgroundColor: 'rgb(0, 119, 182)' }}></div>
          </div>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgb(100, 116, 139)' }}>
            Descubre nuestra gama completa de equipos con tecnología de ozono para agua pura y segura
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
            <div className="mb-16 rounded-3xl overflow-hidden border-2" style={{ backgroundColor: 'rgb(225, 242, 251)', borderColor: 'rgb(0, 119, 182)' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Contenedor Izquierdo - Texto */}
                <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight" style={{ color: 'rgb(0, 119, 182)' }}>
                    El Poder del Ozono
                  </h3>
                  <div className="space-y-5" style={{ color: 'rgb(15, 23, 42)' }}>
                    <p className="text-base md:text-lg leading-relaxed">
                      <span className="font-bold">El Ozono es un potente oxidante y fuerte desinfectante.</span> El ozono, una forma natural de oxígeno, tiene el poder de eliminar bacterias, virus y hongos sin dejar residuos químicos.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed font-semibold">
                      Cada vaso de agua tratada con ozono es más pura, segura, fresca y saludable.
                    </p>
                    <p className="text-sm md:text-base leading-relaxed">
                      En el tratamiento del agua, el ozono actúa como el agente oxidante natural más rápido y efectivo que existe, es un poderoso bactericida, virulicida, fungicida, destruye los microorganismos por oxidación.
                    </p>
                  </div>
                </div>

                {/* Contenedor Derecho - Imagen */}
                <div className="flex items-center justify-center p-8 md:p-12" style={{ backgroundColor: 'rgb(241, 245, 249)' }}>
                  <div className="relative w-full h-72 md:h-80 flex items-center justify-center">
                    <img
                      src="/10.png"
                      alt="Poder del Ozono"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Catálogo de Productos */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-4 min-w-min">
              {products.map((product) => (
                <div
                  key={product._id}
                  className="flex-shrink-0 w-80 sm:w-96 rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer border"
                  style={{ 
                    backgroundColor: 'rgb(255, 255, 255)', 
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.05)';
                  }}
                >
                  <div className="flex h-48">
                    {/* Product Image - Izquierda */}
                    <div className="relative overflow-hidden w-40 sm:w-48 flex items-center justify-center rounded-l-2xl flex-shrink-0" style={{ backgroundColor: 'rgb(241, 245, 249)' }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 p-2"
                      />
                    </div>

                    {/* Product Info - Derecha */}
                    <div className="p-4 flex flex-col justify-between flex-grow">
                      <div>
                        <h4 className="font-bold text-sm sm:text-base mb-1 line-clamp-2" style={{ color: 'rgb(15, 23, 42)' }}>
                          {product.name}
                        </h4>
                        <p className="text-xs mb-2 line-clamp-2" style={{ color: 'rgb(100, 116, 139)' }}>
                          {product.description}
                        </p>
                      </div>
                      
                      {/* Price */}
                      <div className="mb-3 pb-2" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
                        <p className="text-xs" style={{ color: 'rgb(100, 116, 139)' }}>Precio</p>
                        <p className="text-lg font-bold" style={{ color: 'rgb(0, 119, 182)' }}>
                          ${product.price.toLocaleString('es-CO')}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <a
                        href="https://wa.me/?text=Hola,%20me%20interesa%20este%20producto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full px-3 py-2 text-white text-center font-semibold text-xs sm:text-sm rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                        style={{ backgroundColor: 'rgb(0, 119, 182)' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgb(2, 96, 145)'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgb(0, 119, 182)'}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Consultar
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
              className="fixed bottom-8 right-8 z-50 p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110"
              style={{
                backgroundColor: 'rgb(37, 211, 102)',
                boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(37, 211, 102, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(37, 211, 102, 0.3)';
              }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>


          </>
        )}
      </div>
    </section>
  );
}
