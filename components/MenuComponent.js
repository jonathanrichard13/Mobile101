import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, Dimensions } from "react-native";

const data = [
  {
    id: 1,
    image:  require('../assets/transfer.png'),
    name: "Transfer"
  },
  {
    id: 2,
    image: require('../assets/ewallet.png'),
    name: "E-Wallet"
  },
  {
    id: 3,
    image: require('../assets/pembayaran.png'),
    name: "Pembayaran"
  },
  {
    id: 4,
    image: require('../assets/pembelian.png'),
    name: "Pembelian"
  },
  {
    id: 5,
    image: require('../assets/investasi.png'),
    name: "Investasi"
  },
  {
    id: 6,
    image: require('../assets/lifestyle.png'),
    name: "Lifestyle"
  },
  {
    id: 7,
    image: require('../assets/life-goals.png'),
    name: "Life Goals"
  },
  {
    id: 8,
    image: require('../assets/gaming.png'),
    name: "Gaming"
  },
];

const numColumns = 4
const itemWidth = Dimensions.get('window').width / numColumns;

const MenuComponent = () => {

  const renderItem = ({ item }) => {
    return (
        <View style={styles.menuContainer}>
            <Image source={item.image} style={styles.menuImg}></Image>
            <Text style={styles.menuText}>{item.name}</Text>
        </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%"
  },

  menuContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: itemWidth,
    marginTop: 18,
  },

  menuImg: {
    width: 54,
    height: 54,
  },
  
  menuText: {
    color: 'rgba(58, 53, 65, 0.68)',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.80,
  }
});

export default MenuComponent;
