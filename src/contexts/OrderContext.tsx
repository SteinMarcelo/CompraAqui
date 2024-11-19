import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Tipo de pedido
type Order = {
  address: string;
  city: string;
  state: string;
};

// Tipo do contexto de pedidos
type OrderContextType = {
  orders: Order[];
  addOrder: (order: Order) => void;
};

// Criação do contexto
const OrderContext = createContext<OrderContextType | undefined>(undefined);

// Hook para acessar o contexto
export const useOrderContext = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext must be used within an OrderProvider");
  }
  return context;
};

// Definição do OrderProvider
type OrderProviderProps = {
  children: React.ReactNode; // Definir o tipo de children como ReactNode
};

export const OrderProvider: React.FC<OrderProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const savedOrders = await AsyncStorage.getItem("orders");
      if (savedOrders) {
        setOrders(JSON.parse(savedOrders));
      }
    };
    fetchOrders();
  }, []);

  const addOrder = async (order: Order) => {
    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);
    await AsyncStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
