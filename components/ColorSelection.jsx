import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useColorSelection } from '../context/ColorSelectionContext';
import { useNavigation } from 'expo-router';

export default function ColorSelection({ onColorSelect }) {
  const { setSelectedColor } = useColorSelection();
  const navigation = useNavigation();
  const [localSelectedColor, setLocalSelectedColor] = useState(null);

  const colors = [
    { name: 'Black', image: require('../assets/images/black.png') },
    { name: 'White', image: require('../assets/images/white.png') },
    { name: 'Red', image: require('../assets/images/red.png') },
    { name: 'Blue', image: require('../assets/images/blue.png') },
  ];

  const handleColorSelect = (color) => {
    setLocalSelectedColor(color);
    if (onColorSelect) {
      onColorSelect(color);
    }
  };

  useEffect(() => {
    if (localSelectedColor) {
      setSelectedColor(localSelectedColor);
    }
  }, [localSelectedColor]);

  const handleDone = () => {
    navigation.goBack();
  };

  const getImageSource = (color) => {
    return color ? color.image : require('../assets/images/black.png');
  };

  const getColorName = (color) => {
    return color ? color.name : 'Black';
  };

  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <View style={{ flex: 1 }} >
          <Image
            style={styles.image}
            source={getImageSource(localSelectedColor)}
          />
        </View>

        <View>
          <Text style={styles.productName}>Điện Thoại Vsmart Joy 3</Text>
          <Text style={styles.productDescription}>Hàng chính hãng</Text>
          <Text style={styles.productDescription}>Màu: <Text style={{ fontWeight: 'bold' }}>{getColorName(localSelectedColor)}</Text></Text>
          <Text style={styles.productDescription}>Cung cấp bởi <Text style={{ fontWeight: 'bold' }}>Tiki Tradding</Text></Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>1.790.000đ </Text>
        </View>
      </View>
      <View style={styles.colorContainer}>
        <Text style={styles.chooseColorText}>Chọn một màu bên dưới:</Text>
        <View style={styles.colorOptions}>
          {colors.map((color) => (
            <TouchableOpacity
              key={color.name}
              style={[
                styles.colorBox,
                { backgroundColor: color.name.toLowerCase() },
                localSelectedColor === color && { borderWidth: 2, borderColor: 'black' },
              ]}
              onPress={() => handleColorSelect(color)}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleDone}>
          <Text style={styles.buttonText}>Xong</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  product: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 18,
    marginTop: 10,
  },
  productDescription: {
    fontSize: 16,
    fontWeight: '300',
  },
  colorContainer: {
    backgroundColor: '#C4C4C4',
    padding: 10,
    height: '100%',
  },
  chooseColorText: {
    fontSize: 18,
    fontWeight: '500',
    marginVertical: 10,
  },
  colorOptions: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
  },
  colorBox: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
  },
  button: {
    marginTop: 50,
    backgroundColor: '#1952E294',
    padding: 15,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});