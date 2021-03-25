import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Platform } from 'react-native';
import ContatoInput from '../components/ContatoInput';

const TelaContatoInput = () => {
    // React.useEffect(() => {
    //     if (route.params?.name) {
    //         console.log("UseEffect: " + route.params?.name);
    //     }
    // }, [route.params?.name]);

    const [contatos, setContatos] = useState([]);
    const [contadorContatos, setContadorContatos] = useState(0);

    const adicionarContato = (nome, telefone) => {
        setContatos(() => {
        console.log('Inserindo contato: {Nome: ' + nome, ' Telefone: ' + telefone + '}');

        let contato = {
            'nome': nome,
            'telefone': telefone
        }
        
        setContadorContatos(contadorContatos + 1);
        return [...contatos, {key: contadorContatos.toString(), value: contato}];
        });
    }

    return(
        <View style={styles.container}>
            <ContatoInput onAdicionarContato={adicionarContato} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 50,
        flex: 1
    },
    contatosFlatList: {
        width: '80%',
        alignSelf: 'center'
    }
});


export default TelaContatoInput;
