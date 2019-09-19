/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import Ahorcado from './componentes/Ahorcado/Ahorcado';

export default class App extends Component {
  render() {
    return (
    <Ahorcado/> 
    );
  }
}