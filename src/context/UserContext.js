import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [userBalance, setUserBalance] = useState(0);
  const [userTickets, setUserTickets] = useState([]);

  const connect = () => {
    setIsLoading(true);
    setUserAddress('0x12345678910');
    setIsLoading(false);
  }

  return (
    <UserContext.Provider value={{ isLoading, userAddress, userBalance, userTickets, connect }}>
      {children}
    </UserContext.Provider>
  )
}