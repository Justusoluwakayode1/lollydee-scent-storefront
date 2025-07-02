
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  stock: number;
  category: string;
}

interface ProductCatalogProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductCatalog = ({ products, onAddToCart }: ProductCatalogProps) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
            Our Signature Collection
          </h2>
          <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
            Discover our carefully curated selection of luxury fragrances, each one unique and unforgettable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-2xl transition-all duration-300 border border-yellow-400/20 bg-black/80 backdrop-blur-sm overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <Button size="sm" variant="secondary" className="flex-1 bg-yellow-400/90 text-black hover:bg-yellow-400">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </div>
                </div>
                <Badge className="absolute top-4 left-4 bg-yellow-400 text-black hover:bg-yellow-500">
                  {product.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-yellow-100">{product.name}</h3>
                <p className="text-yellow-200 mb-4 text-sm leading-relaxed">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-yellow-400">₦{product.price.toLocaleString()}</span>
                  <span className="text-sm text-yellow-300">{product.stock} in stock</span>
                </div>
                
                <Button 
                  onClick={() => onAddToCart(product)}
                  className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black font-semibold py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
