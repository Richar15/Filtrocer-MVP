import Image from "next/image"
import { Wrench, Headphones, ShoppingCart } from "lucide-react"

export default function FiltrocerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-full overflow-hidden bg-white p-1 border-2 border-[#0077B6]">
            <Image
              src="/logo-filtrocer.png"
              alt="Filtrocer"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <div className="text-xl md:text-2xl font-extrabold text-[#0077B6] tracking-tight">FILTROCER</div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://www.facebook.com/filtrocer/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 text-white bg-[#1877F2] rounded-full hover:bg-[#165FD9] hover:scale-105 transition-all text-sm font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="hidden sm:inline">Facebook</span>
          </a>
          <a
            href="https://wa.me/573116835639"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 text-white bg-[#25D366] rounded-full hover:bg-[#20bd5a] hover:scale-105 transition-all text-sm font-semibold"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </header>

      {/* SECCIÓN 1: HERO */}
      <section className="px-4 md:px-8 py-12 md:py-28 text-center bg-gradient-to-b from-[#CAF0F8] to-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0077B6] mb-4 text-balance leading-tight">
            Agua pura para tu hogar
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 text-pretty leading-relaxed max-w-2xl mx-auto">
            Sistema de purificación con instalación sin costo. Financiamiento flexible sin cuota inicial.
          </p>
          <a
            href="https://wa.me/573116835639"
            className="inline-block px-6 sm:px-8 py-3 sm:py-3.5 bg-[#0077B6] text-white font-bold rounded-xl text-base sm:text-lg hover:bg-[#005a94] transition-colors shadow-lg hover:shadow-xl"
          >
            Consultar ahora
          </a>
        </div>
      </section>

      {/* SECCIÓN 2: ¿POR QUÉ ELEGIRNOS? */}
      <section className="px-4 md:px-8 py-12 md:py-16 bg-[#f8fdff]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0077B6] mb-8 md:mb-12">
            Por qué elegirnos
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Bullet 1 */}
            <div className="p-5 sm:p-6 bg-white rounded-2xl shadow-sm border-l-4 border-[#00B4D8]">
              <h3 className="font-bold text-gray-800 mb-2 text-base sm:text-lg">Sin compromiso financiero</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Cero cuota inicial. Paga en cuotas cómodas sin sorpresas. Equipo funcionando desde el día uno.
              </p>
            </div>

            {/* Bullet 2 */}
            <div className="p-5 sm:p-6 bg-white rounded-2xl shadow-sm border-l-4 border-[#00B4D8]">
              <h3 className="font-bold text-gray-800 mb-2 text-base sm:text-lg">Expertos en instalación</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Instalación profesional sin costo. Equipo verificado y calibrado antes de entregarle.
              </p>
            </div>

            {/* Bullet 3 */}
            <div className="p-5 sm:p-6 bg-white rounded-2xl shadow-sm border-l-4 border-[#00B4D8]">
              <h3 className="font-bold text-gray-800 mb-2 text-base sm:text-lg">Respaldo completo</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Un año de garantía. Mantenimiento y repuestos. Soporte técnico disponible siempre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: SOBRE NUESTRO SERVICIO */}
      <section className="px-4 md:px-8 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0077B6] mb-6 md:mb-8">
            Nuestros equipos
          </h2>
          
          <p className="text-gray-700 text-center mb-10 md:mb-12 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Cada purificador está diseñado para eliminar contaminantes, cloro y sedimentos. Tecnología de filtración múltiple que garantiza agua segura para beber y cocinar. Modelos adaptados a diferentes necesidades de hogar y negocio.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mb-10 md:mb-12">
            {/* Service 1 */}
            <div className="p-5 sm:p-6 bg-[#CAF0F8] rounded-2xl">
              <div className="w-12 h-12 bg-[#0077B6] rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-base sm:text-lg">Equipo de calidad</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Sistemas certificados. Filtros de larga duración. Diseño moderno que complementa tu hogar.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-5 sm:p-6 bg-[#CAF0F8] rounded-2xl">
              <div className="w-12 h-12 bg-[#0077B6] rounded-full flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-base sm:text-lg">Servicio completo</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Instalación profesional. Capacitación de uso. Mantenimiento preventivo incluido el primer año.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-5 sm:p-6 bg-[#CAF0F8] rounded-2xl">
              <div className="w-12 h-12 bg-[#0077B6] rounded-full flex items-center justify-center mb-4">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2 text-base sm:text-lg">Soporte constante</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Atención por teléfono y WhatsApp. Asistencia técnica rápida. Repuestos disponibles siempre.
              </p>
            </div>
          </div>

          {/* Galería de productos */}
          <div className="mt-10 md:mt-12">
            <h3 className="text-lg sm:text-xl font-bold text-[#0077B6] mb-6 text-center">Algunos de nuestros equipos</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
                  <Image
                    src={`/${num}.png`}
                    alt={`Purificador modelo ${num}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: CIERRE / CTA */}
      <section className="px-4 md:px-8 py-12 md:py-16 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Agua pura empieza hoy
          </h2>
          <p className="text-base sm:text-lg mb-8 opacity-95 max-w-xl mx-auto">
            Escribenos por WhatsApp. Te asesoramos sin costo sobre el equipo ideal.
          </p>
          <a
            href="https://wa.me/573116835639"
            className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0077B6] font-bold rounded-xl text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            Consultar ahora
          </a>
        </div>
      </section>

      {/* SECCIÓN 5: RESEÑAS */}
      <section className="px-4 md:px-8 py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0077B6] mb-2">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-center text-gray-600 mb-10 md:mb-12 text-sm sm:text-base">
            Experiencias reales de quienes ya confían en nosotros
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Reseña 1 */}
            <div className="p-6 sm:p-8 bg-[#CAF0F8] rounded-2xl border-l-4 border-[#0077B6]">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                La instalación fue rápida y sin desorden. El agua cambió notablemente en sabor y calidad. Recomiendo totalmente el servicio.
              </p>
              <p className="font-semibold text-gray-800 text-sm">María García</p>
            </div>

            {/* Reseña 2 */}
            <div className="p-6 sm:p-8 bg-[#CAF0F8] rounded-2xl border-l-4 border-[#0077B6]">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                Excelente atención. El equipo funciona perfecto. Financiamiento sin complicaciones y muy accesible.
              </p>
              <p className="font-semibold text-gray-800 text-sm">Carlos López</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: PREGUNTAS FRECUENTES */}
      <section className="px-4 md:px-8 py-12 md:py-16 bg-[#f8fdff]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0077B6] mb-10 md:mb-12">
            Preguntas frecuentes
          </h2>

          <div className="space-y-4 md:space-y-6">
            {/* Pregunta 1 */}
            <div className="p-5 sm:p-6 bg-white rounded-2xl shadow-sm border-l-4 border-[#00B4D8]">
              <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-2 md:mb-3">¿Es para mí este servicio?</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Sí. Si quieres agua segura en casa o negocio, sin preocupaciones por calidad o contaminación. Tenemos opciones para diferentes espacios y presupuestos. Asesoramos sin costo.
              </p>
            </div>

            {/* Pregunta 2 */}
            <div className="p-5 sm:p-6 bg-white rounded-2xl shadow-sm border-l-4 border-[#00B4D8]">
              <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-2 md:mb-3">¿Cómo empezamos?</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Contactanos por WhatsApp. Nos cuentas tus necesidades. Hacemos propuesta sin obligación. Si aceptas, agenda instalación. Todo rápido y simple.
              </p>
            </div>

            {/* Pregunta 3 */}
            <div className="p-5 sm:p-6 bg-white rounded-2xl shadow-sm border-l-4 border-[#00B4D8]">
              <h3 className="font-bold text-gray-800 text-base sm:text-lg mb-2 md:mb-3">¿Y si tengo dudas con el equipo?</h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Tenemos garantía un año. Soporte técnico disponible. Mantenimiento y repuestos sin problema. Tu equipo funcionando siempre en óptimas condiciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-6 md:py-8 bg-gradient-to-r from-[#0077B6] to-[#00B4D8] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-4">
            {/* Ubicación */}
            <div>
              <p className="text-xs sm:text-sm leading-relaxed opacity-90">
                <span className="font-semibold">📍 Calle Cartagenita</span> frente al antiguo colegio Pablo Sexto, Cereté - Córdoba, Colombia
              </p>
            </div>

            {/* Contacto */}
            <div className="text-xs sm:text-sm">
              <p className="opacity-90">
                <span className="font-semibold">📞</span> 
                <a href="tel:573116835639" className="hover:text-[#CAF0F8] transition-colors ml-1">
                  311 683 5639
                </a>
                {' '} | {' '}
                <a href="tel:573107228069" className="hover:text-[#CAF0F8] transition-colors">
                  310 722 8069
                </a>
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/20 pt-3 text-center text-xs text-white/80">
            <p>© 2026 FILTROCER - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/573116835639"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all animate-pulse"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}
