import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SuperText = (props) => {
  return (
    <Text style={[styles.superText, props.style]}>
      {props.children}
    </Text>
  )
}

const styles = StyleSheet.create({
  superText: {
    backgroundColor: 'blue',
    fontSize: 20,
    color: "#fff",
    padding: 10,
    width: 300
  }
});

export default SuperText;