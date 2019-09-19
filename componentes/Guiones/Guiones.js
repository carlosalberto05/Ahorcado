import React, {Component} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

class Guiones extends Component {
constructor(props){
    super(props);
}

getGuionesConLetterSpacing(){
    return this.props.palabraAdivinadaHastaElMomento.split('').join('');
}

render() {
    return (
        <Text style={styles.guiones}>{this.getGuionesConLetterSpacing()}</Text>
        );
    }
}

export default Guiones;

const styles = StyleSheet.create({
  guiones: {
    fontSize: 40,
    textAlign: 'center',
},
});
