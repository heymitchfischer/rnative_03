import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

class App extends Component {
  render() {
    return (
      <View>

        <Icon.Button
          name="logo-facebook"
          backgroundColor='#3b5998',
          onPress={() => {
            console.log('touched');
          }}
        >
          <Text style={{
            color: "#fff",
            fontSize: 15
          }}>Login with Facebook</Text>
        </Icon.Button>

        {/*<TouchableOpacity
          onPress={() => {
            console.warn("Touched");
          }}
        >
          <Icon
            name="md-home"
            size={60}
            color="#911"
            style={{
              borderWidth: 1,
              borderColor: "#000",
              padding: 10,
              textAlign: "center",
              backgroundColor: "lightgrey"
            }}
          />
        </TouchableOpacity>*/}

        <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default App;