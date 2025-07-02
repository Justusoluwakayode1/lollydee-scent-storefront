
import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductCatalog from '@/components/ProductCatalog';
import AdminDashboard from '@/components/AdminDashboard';
import ChatBot from '@/components/ChatBot';
import Cart from '@/components/Cart';

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'admin' | 'cart'>('home');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Midnight Rose",
      price: 89.99,
      image: "/placeholder.svg",
      description: "A captivating blend of dark roses and mysterious spices",
      stock: 25,
      category: "Oriental"
    },
    {
      id: 2,
      name: "Ocean Breeze",
      price: 79.99,
      image: "/placeholder.svg",
      description: "Fresh aquatic notes with hints of sea salt and driftwood",
      stock: 18,
      category: "Fresh"
    },
    {
      id: 3,
      name: "Golden Amber",
      price: 95.99,
      image: "/placeholder.svg",
      description: "Warm amber with touches of vanilla and sandalwood",
      stock: 30,
      category: "Woody"
    }
  ]);

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100">
      <Header 
        currentView={currentView}
        setCurrentView={setCurrentView}
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
      />
      
      {currentView === 'home' && (
        <>
          <Hero />
          <ProductCatalog products={products} onAddToCart={addToCart} />
        </>
      )}
      
      {currentView === 'admin' && (
        <AdminDashboard products={products} setProducts={setProducts} />
      )}
      
      {currentView === 'cart' && (
        <Cart 
          items={cartItems}
          onRemoveItem={removeFromCart}
          onUpdateQuantity={updateQuantity}
          onBack={() => setCurrentView('home')}
        />
      )}
      
      <ChatBot />
    </div>
  );
};

export default Index;
