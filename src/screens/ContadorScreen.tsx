import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ContadorScreen = () => {
  const [contador, setContador] =  useState(10);
  
  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>Contador: {contador}</Text>
        
        <View style={styles.fabLocation}>
            <TouchableOpacity onPress={ () => setContador( contador + 1 ) }>
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }> + </Text>
                </View>
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default ContadorScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        top: -15,
        textAlign: 'center',
    },
    fabLocation: {
        position: 'absolute',
        bottom: 25,
        activeOpacity: 0.75
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
})