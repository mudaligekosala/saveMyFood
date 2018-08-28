import React from 'react';
import { StyleSheet,Modal,View,TextInput, TouchableOpacity,Text } from 'react-native';

const addValueModal =({ visible=true })=> {
    return(
        <View style={StyleSheet.container}>
            <Modal
                animationType='slide'
                transparent={false}
                visible={visible}
            >
                <View style={styles.subContainer}>
                    <TextInput
                        placeholder='what are you goinh to cook ?'
                    />
                     <TextInput
                        placeholder='00:00'
                    />
                    <TouchableOpacity>
                        <Text>Start</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin:30,
        backgroundColor:'#fff'
    },
    subContainer:{
        flex:1,
        backgroundColor:'#fff'
    }
})

export default addValueModal