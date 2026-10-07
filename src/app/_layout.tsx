import { Stack } from 'expo-router';

import { Colors } from '@/constants/theme';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: Colors.light.background },
        headerStyle: { backgroundColor: Colors.light.accent },
        headerTintColor: '#FFFFFF',
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
      <Stack.Screen name="medicines" options={{ title: 'Medicines' }} />
      <Stack.Screen name="details" options={{ title: 'Medicine Details' }} />
      <Stack.Screen name="about" options={{ title: 'About MedGuide' }} />
      <Stack.Screen name="explore" options={{ title: 'Explore' }} />
    </Stack>
  );
}
