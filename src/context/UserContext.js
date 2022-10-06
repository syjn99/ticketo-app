import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [userBalance, setUserBalance] = useState(0);
  const [userTickets, setUserTickets] = useState([]);



  return (
    <UserContext.Provider value={{ isLoading, userAddress, userBalance, userTickets }}>
      {children}
    </UserContext.Provider>
  )
}