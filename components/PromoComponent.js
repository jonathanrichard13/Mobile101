import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, Dimensions } from "react-native";

const PromoComponent = () => {

  return (
    <View style={styles.container}>
        <Text style={styles.promoText}>Promo & Informasi</Text>
        <Image style={styles.bannerImg} source={ require('../assets/banner.png') }/>
    </View>
  );
}; 

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    // backgroundColor: 'blue'

  },

  promoText: {
    color: 'rgba(58, 53, 65, 0.87)',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19.60
  },

  bannerImg: {
    width: '100%',
    height: 150,
    // backgroundColor: 'red',
    objectFit: 'contain',
  }

});

export default PromoComponent;
