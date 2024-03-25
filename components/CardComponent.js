import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CardComponent = ({nominal}) => {
  const dots = [];
  const [isNominalHidden, setIsNominalHidden] = useState(true);
  
  for (let i = 0; i < 8; i++) {
    dots.push(
      <View key={i} style={styles.dot}></View>
    );
  }

  nominalComponent = isNominalHidden ? dots : <Text style={[styles.colorWhite, styles.font16]}>{nominal}</Text>

  return (
    <ImageBackground style={ styles.container } 
                    imageStyle={{ borderRadius: 12}}
                    source={ require('../assets/card_bg.png') } 
                    resizeMode="cover">
      <View style={ [styles.justifySpaceBetween, styles.horizontal] }>
        <Text style={[styles.colorWhite, styles.font12]}>Taplus Pegawai BNI</Text>
        <TouchableOpacity>
          <Image source={ require('../assets/arrow_down.png') }/>
        </TouchableOpacity>
      </View>

      <View style={ [styles.horizontal, styles.alignCenter, styles.gap6] }>
        <Text style={[styles.colorWhite, styles.font16]}>Rp</Text>
        { nominalComponent }
        <TouchableOpacity onPress={() => setIsNominalHidden(!isNominalHidden)}>
          <Image source={ require('../assets/eye.png') } style={ styles.eyeIcon }></Image>
        </TouchableOpacity>
      </View>
    
      <View style={ [styles.horizontal, styles.justifySpaceBetween, styles.alignCenter] }>
        <View style={ [styles.horizontal, styles.gap6] }>
            <Text style={[styles.colorWhite, styles.font12]}>1812345678</Text>
            <TouchableOpacity>
              <Image source={ require('../assets/copy.png') }/>
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={[styles.horizontal, styles.poinContainer, styles.gap4, styles.alignCenter]}>
          <Image style={styles.poinImg} source={ require('../assets/poin.png') } />
          <Text style={styles.poinNumber}>3.100</Text>
          <Image source={ require('../assets/arrow_right.png') }></Image>
        </TouchableOpacity>
      </View>
    

    </ImageBackground>

    
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        marginTop: 20,
        gap: 10,
        padding: 10,
        borderRadius: 12
    },

    horizontal: {
        flexDirection: "row"
    },

    font12: {
      fontSize: 12
    },

    font16: {
      fontSize: 16
    },

    colorWhite: {
      color: 'white'
    },

    justifySpaceBetween: {
      justifyContent: 'space-between'
    },

    poinImg: {
      width: 32,
      height: 15
    },

    gap6: {
      gap: 6
    },

    gap4: {
      gap: 4
    },


    poinContainer: {
      backgroundColor: 'white',
      padding: 6,
      borderRadius: 12
    },

    alignCenter: {
      alignItems: 'center'
    },

    poinNumber: {
      fontSize: 11,
      color: '#FF6600'
    },

    dot: {
      backgroundColor: 'white',
      width: 4,
      height: 4,
      borderRadius: 9999
    },

    justifyCenter: {
      justifyContent: 'center'
    },

    eyeIcon: {
      width: 18,
      height: 18
    }

});

export default CardComponent;