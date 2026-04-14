import Image from "next/image"
import { Phone, MapPin, Wrench, Settings, Headphones, ShoppingCart, RefreshCw, CheckCircle, CreditCard, Shield } from "lucide-react"

export default function FiltrocerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-filtrocer.png"
            alt="Filtrocer"
            width={50}
            height={50}
          />
          <div className="text-2xl font-extrabold text-[#0077B6] tracking-tight">FILTROCER</div>
        </div>
        <a
          href="https://share.google/norgFDiIbB1Vl0Lpz"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 text-white bg-gradient-to-r from-[#1877F2] to-[#0D65D9] rounded-full hover:shadow-lg hover:scale-105 transition-all text-sm font-semibold"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
          <span className="hidden sm:inline">Siguenos</span>
        </a>
      </header>

      {/* Hero */}
      <section className="px-4 md:px-8 py-16 md:py-24 text-center bg-gradient-to-b from-[#CAF0F8] to-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#0077B6] mb-4 text-balance">
            Necesitas un purificador de agua?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6 text-pretty">
            Adquierelo facil y rapido para tu hogar o negocio
          </p>
          <div className="inline-block px-6 py-3 bg-[#00B4D8] text-white font-bold rounded-xl text-lg">
            Sin cuota inicial + Instalacion gratis
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="px-4 md:px-8 py-16 bg-[#CAF0F8]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0077B6] mb-10">
            Por que elegirnos?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm">
              <div className="w-12 h-12 flex-shrink-0 bg-[#0077B6] rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-gray-700">Sin cuota inicial</span>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm">
              <div className="w-12 h-12 flex-shrink-0 bg-[#0077B6] rounded-full flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-gray-700">Instalacion gratis</span>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm">
              <div className="w-12 h-12 flex-shrink-0 bg-[#0077B6] rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-gray-700">1 año de garantia</span>
            </div>
            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm">
              <div className="w-12 h-12 flex-shrink-0 bg-[#0077B6] rounded-full flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <span className="font-semibold text-gray-700">Pago en cuotas</span>
            </div>
          </div>
          <div className="mt-8 p-6 bg-[#0077B6] text-white text-center rounded-2xl font-bold text-lg">
            Obten tu equipo sin pagar nada el dia de la instalacion
          </div>
        </div>
      </section>

      {/* Productos */}
      <section className="px-4 md:px-8 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0077B6] mb-10">
            Algunos de nuestros equipos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/1.png"
                alt="Filtro de agua"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/2.png"
                alt="Cocina moderna"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/3.png"
                alt="Purificador moderno"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/4.png"
                alt="Filtro premium"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
              <Image
                src="/5.png"
                alt="Purificador instalado"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="px-4 md:px-8 py-16 bg-[#f8fdff]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0077B6] mb-10">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div className="p-6 bg-white rounded-2xl shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all border-2 border-transparent hover:border-[#00B4D8]">
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-full flex items-center justify-center">
                <ShoppingCart className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-700">Venta</h3>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all border-2 border-transparent hover:border-[#00B4D8]">
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-full flex items-center justify-center">
                <Wrench className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-700">Instalacion</h3>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all border-2 border-transparent hover:border-[#00B4D8]">
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-full flex items-center justify-center">
                <RefreshCw className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-700">Mantenimiento</h3>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all border-2 border-transparent hover:border-[#00B4D8]">
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-full flex items-center justify-center">
                <Settings className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-700">Repuestos</h3>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all border-2 border-transparent hover:border-[#00B4D8]">
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-[#0077B6] to-[#00B4D8] rounded-full flex items-center justify-center">
                <Headphones className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-700">Servicio tecnico</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="px-4 md:px-8 py-16 bg-[#0077B6] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Contactanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-white/10 rounded-2xl">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Phone className="w-5 h-5" />
                <h3 className="font-medium opacity-90">Telefonos</h3>
              </div>
              <p className="text-xl font-semibold">311 683 5639</p>
              <p className="text-xl font-semibold">310 722 8069</p>
            </div>
            <div className="p-6 bg-white/10 rounded-2xl">
              <div className="flex items-center justify-center gap-3 mb-2">
                <MapPin className="w-5 h-5" />
                <h3 className="font-medium opacity-90">Direccion</h3>
              </div>
              <p className="text-lg">Calle Cartagenita, frente al antiguo Colegio Pablo Sexto, Cerete, Cordoba</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-b from-[#CAF0F8] to-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#0077B6] mb-4 text-balance">
          Empieza a disfrutar agua pura hoy
        </h2>
        <p className="text-gray-600 text-lg">Escribenos por WhatsApp para mas informacion</p>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-8 bg-gray-900 text-white text-center">
        <p className="text-sm text-gray-400">2026 Filtrocer - Todos los derechos reservados</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/573116835639"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all animate-pulse"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}
