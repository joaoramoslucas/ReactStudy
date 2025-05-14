import { s } from "./s";

import { Text, TextInput, TouchableOpacity, View } from "react-native";

export function Home() {
    return (
        <View style={s.container}>

            <Text style={s.eventName}>
                Nome do Evento
            </Text>

            <Text style={s.eventDate}>
                Sexta-Feira, 4 de novembro, 20:00
            </Text>

            <TextInput
                style={s.input}
                placeholder="Digite o nome que deseja adicionar"
                placeholderTextColor='#414141'
            />

            <TouchableOpacity style={s.button}>
                <Text style={s.buttonText}>
                    Adicionar
                </Text>
            </TouchableOpacity>

        </View>
    );
}