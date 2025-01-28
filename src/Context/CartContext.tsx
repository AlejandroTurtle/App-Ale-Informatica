import React, {createContext, useContext, useState} from 'react';
import {Linking} from 'react-native';

// Definição do tipo do carrinho
type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: string;
  photos: string[];
  description: string;
  category: string | null;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  incrementItem: (id: number) => void;
  decrementItem: (id: number) => void;
  removeItem: (id: number) => void;
  totalItems: number;
  sendCartToWhatsApp: () => void;
  totalPrice: number;
};

// Contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider
export const CartProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? {...cartItem, quantity: cartItem.quantity + item.quantity}
            : cartItem,
        );
      }

      return [...prevCart, item];
    });
  };

  const incrementItem = (id: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };

  const decrementItem = (id: number) => {
    setCart(prevCart =>
      prevCart
        .map(item =>
          item.id === id && item.quantity > 1
            ? {...item, quantity: item.quantity - 1}
            : item,
        )
        .filter(item => item.quantity > 0),
    );
  };

  const totalPrice = cart.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0,
  );

  const removeItem = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const sendCartToWhatsApp = () => {
    const message = cart
      .map(item => `- ${item.quantity}x ${item.name} - R$ ${item.price}`)
      .join('%0A');
    const totalPrice = cart
      .reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0,
      )
      .toFixed(2);
    const whatsappMessage = `Olá, gostaria de comprar os seguintes itens:%0A${message}%0A%0ATotal: R$ ${totalPrice}`;
    const url = `https://wa.me/5531991599292?text=${whatsappMessage}`; // Substitua pelo número correto.
    Linking.openURL(url).catch(err =>
      console.error('Erro ao abrir o WhatsApp', err),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementItem,
        decrementItem,
        removeItem,
        totalItems,
        sendCartToWhatsApp,
        totalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};
