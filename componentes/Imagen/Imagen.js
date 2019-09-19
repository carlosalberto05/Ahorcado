import React, { Component } from 'react';
import {Platform, StyleSheet, View, Text, Image} from 'react-native';

class Imagen extends Component {
     constructor(props){
         super(props);

     }

    render() {
    return (
            <Image style={styles.imagen}
                source={IMAGENES[this.props.numFallos.toString()]} />
        );
    }
}

export default Imagen;

const styles = StyleSheet.create({
    imagen: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
    margin: 30,
    borderColor: 'yellow',
    borderWidth: 2,
    backgroundColor: 'blue',
    }
});

const IMAGENES = {
'0': require('../../img/0.png'),
'1': require('../../img/1.png'),
'2': require('../../img/2.png'),
'3': require('../../img/3.png'),
'4': require('../../img/4.png'),
'5': require('../../img/5.png'),
'6': require('../../img/6.png'),
};