import React, {Component} from 'react';
import {StyleSheet, View, Text, Animated} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      larAnimada: new Animated.Value(150), //inicializa a largura
      altAnimada: new Animated.Value(50), //inicializa a altura
    };
    //configura a animação
    Animated.timing(this.state.altAnimada, {
      toValue: 150, //valor inicial
      duration: 2000, //tempo necessário
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: this.state.larAnimada,
            height: this.state.altAnimada,
            backgroundColor: '#4169E1',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#FFFFFF', fontSize: 22, textAlign: 'center'}}>
            Carregando...
          </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
