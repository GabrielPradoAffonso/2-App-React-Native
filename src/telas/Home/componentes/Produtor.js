import React, { useState } from "react";
import { Text, Image, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";

import Avaliation from "../../../components/avaliation";

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    const [selecionado, setSelecionado] = useState(false);


    return <TouchableOpacity style={estilos.card} onPress={() => setSelecionado(!selecionado)}>
        <Image source={imagem} style={estilos.imagem} accessibilityLabel={nome} />
        <SafeAreaView style={estilos.informacoes}>
            <SafeAreaView>
                <Text style={estilos.nome}>{ nome }</Text>
                <Avaliation 
                quantidade={estrelas}
                editavel={selecionado}
                grande={selecionado} 
                />
            </SafeAreaView>
            <Text style={estilos.distancia}>{ distancia }</Text>
        </SafeAreaView>
    </TouchableOpacity>
}

const estilos = StyleSheet.create ({
   card: {
    backgroundColor: "#F6F6F6",
    marginVertical: 20,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: "row",
    
    //IOS
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    //Android
    elevation: 10,
   },
   imagem: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
   },
   informacoes: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 14,
   },
   nome: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "bold"
   },
   distancia: {
    fontSize: 12,
    lineHeight: 19,
   }
});