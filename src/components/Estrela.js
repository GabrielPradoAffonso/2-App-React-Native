import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import estrela from '../assets/assets/estrela.png';
import estrelaCinza from '../assets/assets/estrelaCinza.png';

export default function Estrela({ onPress, desabilitar = false, preenchida, grande = false }) {
    const estilos = estilosFuncao(grande);
    const getImage = () => {
        if (preenchida) {
            return estrela;
        }
        return estrelaCinza;
    };
    
    return <TouchableOpacity
        onPress={onPress}
        disabled={desabilitar}
    >
        <Image source={getImage()} style={estilos.estrela} />
    </TouchableOpacity>;
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        marginRight: 2,
        width: grande ? 20 : 12,
        height: grande ? 20 : 12,
    },
});