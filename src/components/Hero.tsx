
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent leading-tight">
            Discover Your
            <br />
            Signature Scent
          </h1>
          
          <p className="text-xl text-yellow-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience luxury perfumes crafted with the finest ingredients. 
            Each fragrance tells a unique story that becomes part of yours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Explore Collection
            </Button>
            <Button variant="outline" size="lg" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 px-8 py-3 rounded-full text-lg font-semibold">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="flex flex-col items-center p-6 bg-black/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-400/20">
              <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-3 rounded-full mb-4">
                <Sparkles className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-100">Premium Quality</h3>
              <p className="text-yellow-200 text-center">Hand-selected ingredients from around the world</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-black/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-400/20">
              <div className="bg-gradient-to-r from-amber-400 to-yellow-500 p-3 rounded-full mb-4">
                <Heart className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-100">Made with Love</h3>
              <p className="text-yellow-200 text-center">Each bottle crafted with passion and expertise</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-black/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-yellow-400/20">
              <div className="bg-gradient-to-r from-yellow-500 to-amber-400 p-3 rounded-full mb-4">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-100">Award Winning</h3>
              <p className="text-yellow-200 text-center">Recognized by perfume connoisseurs worldwide</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-amber-400/20 rounded-full opacity-50 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-yellow-500/20 rounded-full opacity-50 animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
