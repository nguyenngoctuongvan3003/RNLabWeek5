import React from 'react';
import { SafeAreaView } from 'react-native';
import Shopping from '../components/Shopping';

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Shopping />
    </SafeAreaView>
  );
}