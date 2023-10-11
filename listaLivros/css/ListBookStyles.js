    import { StyleSheet } from 'react-native';

    export const styles = StyleSheet.create({
        backGround:{
            flex: 1
        },

        containerPrincipal:{
            flex: 1,
            justifyContent: 'center',
        },

        titulo:{
            textAlign: 'center',
            color: '#000',
            fontWeight: 'bold',
            fontSize: 40,
            padding: 6,
            left: 10,
            marginTop: '12%'
        },

        containerImagem:{
            backgroundColor: '#bfd8bf',
            borderColor: '#000',
            borderWidth: 1,
            borderRadius: 15,
            alignItems: 'center',
            maxWidth: '15%',
            maxHeight: '120%',
            top: '20%',
            left: '82%'
        },

        iconePesquisa:{
            width: 50,
            height: 50
        },

        containerBusca:{
            backgroundColor: '#fff',
            borderRadius: 15,
            borderColor: '#fff',
            borderWidth: 5,
            padding: 12,
            left: '4%',
            bottom: 42,
            maxWidth: '76%',
            height: 52,
        },

        campoInformacao:{
            backgroundColor: '#fff',
            borderRadius: 15,
            borderWidth: 1.1,
            borderColor: '#708090',
            padding: '4%',
            bottom: 10,
            marginTop: '3%',
            maxWidth: '94%',
            maxHeight: 'auto',
            marginRight: '5%',
            elevation: 2,
            marginLeft: '5%'
        },

        nome:{
            fontSize: 15,
            left: '5%'
        },

        informacao:{
            fontSize: 13,
            bottom: '20%',
            left: '4%'
        },

        informacaoU:{
            fontSize: 13,
            bottom: '16%',
            left: '3%'
        }

        
    });