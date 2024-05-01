import { Text, View, StyleSheet, Button } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from "@react-navigation/native";

function NoLogged() {
    const navigation = useNavigation();
    return (
      <View style={styles.content}>
         <Text style={styles.text}>
            Para ver esta pantalla tienes que inicar sesión
        </Text>
        <Button
            title="Ir al login"
            onPress={() => navigation.navigate('Account')}
        />
        
      </View>
      // <View style={styles.content}>
      //     <FontAwesome />
      // </View>
    )
}

const styles = StyleSheet.create({
    content: {
      marginVertical: 50,
      paddingHorizontal: 20,
    },
    text: {
      textAlign: "center",
      marginBottom: 10,
    },
  });

export default NoLogged