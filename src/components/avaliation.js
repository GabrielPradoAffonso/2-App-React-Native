import React, { useState } from "react";
import { Text, Image, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";

import Estrela from "./Estrela";

export default function Estrelas({
    quantidade: quantidadeAntiga,
    editar = true,
    grande = true,
}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);

    const RenderEstrelas = () => {
        const listaEstrelas = [];
        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <Estrela
                    key={i}
                    onPress={() => setQuantidade(i + 1)}
                    desabilitada={!editar}
                    preenchida={i < quantidade}
                    grande={grande}
                />
            );
        }
        return listaEstrelas;
    };

    return <SafeAreaView style={estilos.estrelas}>
        <RenderEstrelas />
    </SafeAreaView>;
}

const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: "row",
        marginRight: 26
    },
});
