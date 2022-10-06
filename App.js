import { UserProvider } from './src/context/UserContext';
import AppNav from './src/navigation/AppNav';

export default function App() {
  return (
    <UserProvider>
      <AppNav />
    </UserProvider>
  );
}
