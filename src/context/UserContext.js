import axios from 'axios';
import { createContext, useState } from 'react';
import { KLIP_URL, API_PREPARE, API_RESULT } from '../api/apiLinks';
import * as Linking from 'expo-linking';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userAddress, setUserAddress] = useState('');
  const [userBalance, setUserBalance] = useState(0);
  const [userTickets, setUserTickets] = useState([]);

  const paramsConnect = { "bapp": { "name": "Ticketo" }, "callback": { "success": '', "fail": '' }, "type": "auth" }

  const connect = async () => {
    setIsLoading(true);
    await axios.post(API_PREPARE, paramsConnect)
      .then((res) => {
        const { request_key } = res.data;
        Linking.openURL(`${KLIP_URL}${request_key}`);

        let timerId = setInterval(() => {
          axios.get(`${API_RESULT}${request_key}`)
            .then((res) => {
              if (res.data.result) {
                setUserAddress(res.data.result.klaytn_address);
                clearInterval(timerId);
              }
            })
        }, 1000);
      })
      .catch((error) => console.log(error));
    setIsLoading(false);
  }

  return (
    <UserContext.Provider value={{ isLoading, userAddress, userBalance, userTickets, connect }}>
      {children}
    </UserContext.Provider>
  )
}