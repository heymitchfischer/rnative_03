import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Animated, Easing} from 'react-native';

class AnimThree extends Component {
  constructor() {
    super();

    this.state = {
      redSquare: new Animated.Value(1),
      blueSquare: new Animated.ValueXY(0, 0),
      greenSquare: new Animated.ValueXY(0, 0)
    }
  }

  runAnimation = () => {
    Animated.sequence([
      Animated.timing(this.state.redSquare, {
        toValue: 0
      }),
      Animated.parallel([
        Animated.spring(this.state.blueSquare, {
          toValue: {x:200, y:300}
        }),
        Animated.spring(this.state.greenSquare, {
          toValue: {x:250, y:400}
        })
      ])
    ]).start();
  }

  render() {
    return (
      <View>

        <Animated.View style={this.state.blueSquare.getLayout()}>
          <View style={styles.squareTwo}></View>
        </Animated.View>

        <Animated.View style={this.state.greenSquare.getLayout()}>
          <View style={styles.squareThree}></View>
        </Animated.View>

        <Animated.View style={{
          opacity: this.state.redSquare
        }}>
          <View style={styles.squareOne}></View>
        </Animated.View>
        <Button
          title="Run Animation"
          onPress={this.runAnimation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  squareOne: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    position:'absolute'
  },
  squareTwo: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    position:'absolute'
  },
  squareThree: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    position:'absolute'
  }
});

export default AnimThree;