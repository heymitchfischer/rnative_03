import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Animated, Easing} from 'react-native';

class AnimOne extends Component {
  constructor() {
    super();

    this.state = {
      redSquare: new Animated.Value(1)
    }

    // this.state = {
    //   redSquare: new Animated.ValueXY(0,0)
    // }

    // this.redSquare = new Animated.ValueXY(0,0);
  }

  // runAnimation = () => {
  //   Animated.timing(this.state.redSquare, {
  //     toValue: {x:100, y:300},
  //     duration: 2000,
  //     delay: 1000,
  //     easing: Easing.elastic(10)
  //   }).start();
  // }

  runAnimation = () => {
    Animated.timing(this.state.redSquare, {
      toValue: 0,
      duration: 2000,
      delay: 1000,
      // easing: Easing.elastic(10)
    }).start();
  }

  render() {
    return (
      <View>
        {/*<Animated.View style={this.state.redSquare.getLayout()}>*/}
        <Animated.View style={{
          opacity:this.state.redSquare
        }}>
          <View style={styles.square}></View>
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
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
});

export default AnimOne;