import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity, Dimensions} from 'react-native';
import SuperText from './src/widgets/supertext';
import DeviceInfo from 'react-native-device-info';

class App extends Component {

  checkSupport = () => {
    if (Platform.OS === "ios") {
      if (Platform.Version > 12.1) {
        return false;
      }
    } else {
      if (Platform.Version > 28) {
        return false;
      }
    }

    return true;
  }

  render() {

    // console.warn(Dimensions.get('screen'));
    // console.warn(Dimensions.get('window'));
    console.warn(DeviceInfo.isLandscape());

    return (
      <View>

      { this.checkSupport() ?
        <SuperText style={styles.rogue}>
          { Platform.OS === "ios" ? 
            "Welcome to your IOS App"
          :
            "Welcome to your Android App"
          }
        </SuperText>
      :
        <Text>Sorry, not supported.</Text>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rogue: {
    ...Platform.select({
      ios: {
        backgroundColor: 'red'
      },
      android: {
        backgroundColor: 'blue'
      }
    })
  }
});

export default App;