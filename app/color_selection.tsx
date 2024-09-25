import React from 'react';
import ColorSelection from '../components/ColorSelection';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';

export default function ColorSelectionScreen() {
  const searchParams = useLocalSearchParams();
  const onColorSelect = searchParams.onColorSelect;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ColorSelection onColorSelect={onColorSelect} />
    </SafeAreaView>
  );
}