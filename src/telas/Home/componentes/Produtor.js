import React, { useState, useEffect, useReducer, useMemo } from "react";
import { Text, Image, SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import Avaliation from "../../../components/avaliation";

const distanciaMetros = (distancia) => {
    return `${distancia}m`;
}

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    const [selecionado, inverterSelecionado] = useReducer((selecionado)=> !selecionado, false);
    const [tamanho, setTamanho] = useState(48);

    useEffect(() => {
        setTamanho(selecionado ? 52 : 48);
    }, [selecionado]);

    const handlePress = () => {
        inverterSelecionado(!selecionado);
    };

    const distanciaText = useMemo(() => distanciaMetros(distancia), [distancia]);

    return (
        <TouchableOpacity style={estilos.card} onPress={handlePress}>
            <Image
                source={imagem}
                style={{ ...estilos.imagem, width: tamanho, height: tamanho }}
                accessibilityLabel={nome}
            />
            <SafeAreaView style={estilos.informacoes}>
                <SafeAreaView>
                    <Text style={{ ...estilos.nome, fontSize: selecionado ? 18 : 14 }}>{nome}</Text>
                    <Avaliation quantidade={estrelas} editavel={selecionado} grande={selecionado} />
                </SafeAreaView>
                <Text style={{ ...estilos.distancia, fontSize: selecionado ? 16 : 12 }}>{distanciaText}</Text>
            </SafeAreaView>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    card: {
        backgroundColor: "#F6F6F6",
        marginVertical: 20,
        marginHorizontal: 16,
        borderRadius: 10,
        flexDirection: "row",

        //IOS
        shadowColor: "#000",
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
        fontWeight: "bold",
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    },
});
