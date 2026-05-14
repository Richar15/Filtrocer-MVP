import SiteHeader from '@/components/site-header';
import ProductCatalog from '@/components/product-catalog';

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <SiteHeader activePage="catalogo" />
      <ProductCatalog />
    </div>
  );
}
