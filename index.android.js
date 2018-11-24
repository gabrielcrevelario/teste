/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import axios from 'axios';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';

const URI ='https://ddm-project.herokuapp.com/api/2/all';
export default class teste extends Component {
  state = 
   { 
    anuncio: {},
    anuncios: []
};

  async findAnuncios () {
    axios.get(URI).then(
        (res) => {
            const anuncios = res.data;
            this.setState({anuncios})
        }
    )
    }; 

  render() {
        return (
            <View>
            <ListView
              dataSource={this.state.anuncios}
              renderRow={( anuncio => <Text>{anuncio.title}</Text>)}
    
          />
            </View>   
    
        )
   
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('teste', () => teste);
