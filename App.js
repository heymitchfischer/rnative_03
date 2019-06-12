import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';

import {connect} from 'react-redux';
import {getArticles} from './src/actions';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(getArticles());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50
  }
});

function mapStateToProp(state) {
  console.log(state);
  return {
    articles: state.articles
  }
}

export default connect(mapStateToProp)(App);