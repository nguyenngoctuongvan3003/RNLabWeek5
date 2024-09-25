import React from 'react';
import { Stack } from 'expo-router';
import { ColorSelectionProvider } from '../context/ColorSelectionContext';


function RootLayout() {
  return (
    <ColorSelectionProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="color_selection" />
      </Stack>
    </ColorSelectionProvider>
  );
}

export default RootLayout;