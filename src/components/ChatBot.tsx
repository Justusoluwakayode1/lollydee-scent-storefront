
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your LOLLYDEE PERFUME assistant. How can I help you find your perfect fragrance today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response (replace with n8n webhook call)
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getBotResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('price') || input.includes('cost')) {
      return "Our perfumes range from $79.99 to $95.99. Each fragrance is crafted with premium ingredients and offers exceptional value for luxury quality.";
    } else if (input.includes('recommend') || input.includes('suggest')) {
      return "I'd love to help you find the perfect scent! What type of fragrance do you prefer? Fresh and light, warm and oriental, or woody and sophisticated?";
    } else if (input.includes('shipping') || input.includes('delivery')) {
      return "We offer free shipping on orders over $50! Standard delivery takes 3-5 business days, and express delivery is available for next-day arrival.";
    } else if (input.includes('ingredients') || input.includes('made')) {
      return "Our perfumes are crafted with the finest natural and synthetic ingredients sourced globally. Each fragrance is carefully blended by master perfumers to ensure exceptional quality and longevity.";
    } else {
      return "Thank you for your question! I'm here to help with anything about our fragrances, pricing, shipping, or recommendations. What would you like to know more about?";
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col bg-black border border-yellow-400">
      <CardHeader className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black rounded-t-lg">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Bot className="h-5 w-5" />
            LOLLYDEE Assistant
          </CardTitle>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="sm"
            className="text-black hover:bg-black/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-sm text-black/80">Powered by n8n workflows</p>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col p-0 bg-black">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              {message.isBot && (
                <div className="bg-yellow-400 rounded-full p-2 flex-shrink-0">
                  <Bot className="h-4 w-4 text-black" />
                </div>
              )}
              
              <div
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.isBot
                    ? 'bg-white text-black border border-yellow-400/30'
                    : 'bg-gradient-to-r from-yellow-400 to-amber-500 text-black'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              
              {!message.isBot && (
                <div className="bg-yellow-400 rounded-full p-2 flex-shrink-0">
                  <User className="h-4 w-4 text-black" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-2 justify-start">
              <div className="bg-yellow-400 rounded-full p-2">
                <Bot className="h-4 w-4 text-black" />
              </div>
              <div className="bg-white p-3 rounded-lg border border-yellow-400/30">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <form onSubmit={handleSendMessage} className="p-4 border-t border-yellow-400/30">
          <div className="flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about our fragrances..."
              className="flex-1 bg-white text-black border-yellow-400/50 focus:border-yellow-400"
              disabled={isTyping}
            />
            <Button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-black"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ChatBot;
