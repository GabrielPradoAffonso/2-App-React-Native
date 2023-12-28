import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, Image, StyleSheet, FlatList } from 'react-native';

import Produtor from "./Produtor";
import { carregaProdutores } from "../../../servicos/carregaDados";

export default function Produtores({ topo: Topo })  {
    const[titulo, setTitulo] = useState('');
    const[lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo)
        setLista(retorno.lista)
    }, []);

    const topoDaLista = () => {
        return <>
            <Topo />
            <Text style={estilo.titulo}>{titulo}</Text>
        </>
    }

    return  <FlatList
                data={lista}
                renderItem={({ item }) => <Produtor {...item} />}
                keyExtractor={({nome}) => nome}
                ListHeaderComponent={topoDaLista} />
}

const estilo = StyleSheet.create({
    titulo: {
        color: "black",
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
    },
    lista: {

    }
})
