import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from 'expo-router';
import { useColorSelection } from '../context/ColorSelectionContext';

export default function Shopping() {
  const navigation = useNavigation();
  const { selectedColor } = useColorSelection();
  const [displayedImage, setDisplayedImage] = useState(require('../assets/images/black.png'));

  useEffect(() => {
    if (selectedColor) {
      setDisplayedImage(selectedColor.image);
    }
  }, [selectedColor]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={displayedImage}
      />

      <View style={styles.containerText}>
        <Text style={{ fontSize: 18 }}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={{ flexDirection: 'row', gap: 40, alignItems: 'center' }}>
          <Text style={{ fontSize: 20 }}>⭐️⭐️⭐️⭐️⭐️</Text>
          <Text style={{ fontSize: 16, color: 'black' }}>(Xem 828 đánh giá) </Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 40, alignItems: 'center' }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>1.790.000 đ</Text>
          <Text style={{ textDecorationLine: 'line-through' }}>1.790.000 đ</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 14,
              color: 'red',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            {' '}
            Ở đâu rẻ hơn hoàn tiền{' '}
          </Text>
          <Image
            style={{ width: 20, height: 20, resizeMode: 'contain' }}
            source={require('../assets/images/ask.png')}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonChoose}
          onPress={() => navigation.push('color_selection')}
        >
          <Text style={styles.textChoose}> 4 MÀU - CHỌN MÀU </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20,
    gap: 20,
  },
  img: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
  },
  containerText: {
    flexDirection: 'column',
    gap: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'red',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonChoose: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  textChoose: {
    color: 'black',
    fontSize: 16,
  },
});