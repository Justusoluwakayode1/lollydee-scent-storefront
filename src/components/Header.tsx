
import { ShoppingCart, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  currentView: 'home' | 'admin' | 'cart';
  setCurrentView: (view: 'home' | 'admin' | 'cart') => void;
  cartItemsCount: number;
}

const Header = ({ currentView, setCurrentView, cartItemsCount }: HeaderProps) => {
  return (
    <header className="bg-black/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-yellow-400">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent cursor-pointer"
            onClick={() => setCurrentView('home')}
          >
            LOLLYDEE PERFUME
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              className={`text-yellow-100 hover:text-yellow-400 transition-colors ${
                currentView === 'home' ? 'text-yellow-400 font-semibold' : ''
              }`}
              onClick={() => setCurrentView('home')}
            >
              Home
            </button>
            <button className="text-yellow-100 hover:text-yellow-400 transition-colors">
              Collections
            </button>
            <button className="text-yellow-100 hover:text-yellow-400 transition-colors">
              About
            </button>
            <button className="text-yellow-100 hover:text-yellow-400 transition-colors">
              Contact
            </button>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentView('cart')}
              className="relative hover:bg-yellow-400/20 text-yellow-100 hover:text-yellow-400"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {cartItemsCount}
                </span>
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-yellow-400/20 text-yellow-100 hover:text-yellow-400"
            >
              <User className="h-5 w-5" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentView('admin')}
              className={`hover:bg-yellow-400/20 text-yellow-100 hover:text-yellow-400 ${
                currentView === 'admin' ? 'bg-yellow-400/20 text-yellow-400' : ''
              }`}
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
