import { Slot } from 'expo-router';
import { AuthContextProvider } from '../services/authContext';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <AuthContextProvider>
      <Slot />
    </AuthContextProvider>
  );
}