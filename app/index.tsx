import { useRootNavigationState, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from './context/AuthContext';

export default function Index() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const rootNavigationState = useRootNavigationState();

  useEffect(() => {
    // 🔐 kontrollo nëse navigation është inicializuar
    if (!rootNavigationState?.key) return;

    if (isAuthenticated === false) {
      router.replace('/(auth)/login');
    } else if (isAuthenticated === true) {
      router.replace('/(tabs)');
    }
  }, [isAuthenticated, rootNavigationState]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}