import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class TransactionScreen extends React.Component {
    constructor(){
      super();
      this.state = {
        text: ""
      }
    }

    render() {
      const text = this.state.text;
    
      <View>
        <Text style={styles.displayText}>Do you want to write a story??</Text>
      </View>
        
      }
    }

  const styles = StyleSheet.create({
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    }
  });