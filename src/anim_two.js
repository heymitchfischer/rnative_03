import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Animated, Easing} from 'react-native';

class AnimTwo extends Component {
  constructor() {
    super();

    this.state = {
      redSquare: new Animated.Value(1)
    }
  }

  runAnimation = () => {
    Animated.timing(this.state.redSquare, {
      toValue: 0,
      duration: 2000
    }).start();
  }

  render() {
    return (
      <View>
        <Animated.View style={{
          opacity:this.state.redSquare,
          // left: this.state.redSquare.interpolate({
          //   inputRange:[0, 1],
          //   outputRange:[300, 0]
          // }),
          transform: [{
            rotateX: this.state.redSquare.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: ['0deg', '180deg', '0deg']
            })
          }]
        }}>
          <View style={styles.square}></View>
        </Animated.View>

        <Animated.Text style={{
          fontSize: this.state.redSquare.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [20, 5, 30]
          }),
          color: this.state.redSquare.interpolate({
            inputRange: [0, 1],
            outputRange: ['blue', 'red']
          })
        }}>
          <Text>Anim One</Text>
        </Animated.Text>

        <Button
          title="Run Animation"
          onPress={this.runAnimation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
});

export default AnimTwo;