import React, { useState } from "react";
import { TextInput, View, Text, Image, TouchableOpacity, FlatList, Keyboard } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import  Icon  from "react-native-vector-icons/FontAwesome.js";
import StarRating from 'react-native-star-rating';
import axios from "axios";

import { styles } from './css/ListBookStyles.js';

export default function ListBook () {

    const [pesquisarLivro, setPesquisaLivro] = useState ('');
    const [data,  setData] = useState([]);
        
    const realizarPesquisa = async () => {
        try {
            console.log('Pesquisa sendo realizada...', pesquisarLivro);
            const resposta = await axios.get(`https://hn.algolia.com/api/v1/search?query=${pesquisarLivro}`);
            const hits = resposta.data.hits;

            //Verifica se o array não é NULL.
            if (hits) {
                const livros = hits.map(info => ({
                    author: info.author,
                    title: info.title,
                    url: info.url,
                }));

                setData(livros);

            } else {
                setData([]);
                setClassificacoes([]);
            }

            Keyboard.dismiss();

        } catch (error) {
            console.error(error);
        }
    }

    return(
        <LinearGradient 
            start={{x:0, y:0.5}} 
            end={{x:0, y:0}} 
            colors={['#D8BFD8', '#F0F8FF']} 
            style={styles.backGround}
            >
            <View style={styles.containerPrincipal}>
                <Text style={styles.titulo}> LitSpot </Text>
                <Icon name="list" size={28} bottom={43} left={115}/>

                <TouchableOpacity onPress={realizarPesquisa}>
                    <View style={styles.containerImagem}>
                        <Image
                            source={require('./icon/noun-search-1141152.png')}
                            style={styles.iconePesquisa}
                        />
                    </View>
                </TouchableOpacity>
                    
                <View style={styles.containerBusca}>
                    <TextInput 
                        placeholder="O que deseja PESQUISAR..."
                        value={pesquisarLivro}
                        onChangeText={(novaPesquisa) => setPesquisaLivro(novaPesquisa)}
                        onSubmitEditing={realizarPesquisa}
                    /> 
                </View>

                <FlatList
                    data={data}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({item}) => (
                        <View style={styles.campoInformacao}>
                            <View>
                                <Text style={styles.nome}> Titulo: </Text>
                                <Icon name="book" size={18} bottom={18} color="black"/>
                                <Text style={styles.informacao} numberOfLines={2}>{item.title}</Text>
                            </View>
                                    
                            <View> 
                                <Text style={styles.nome}> Autor: </Text>
                                <Icon name="user" size={18} bottom={20} color="black"/>
                                <Text style={styles.informacao} numberOfLines={2}>{item.author}</Text>
                            </View>

                            <View> 
                                <Text style={styles.nome}> Url: </Text>
                                <Icon name="link" size={18} bottom={19} color="black"/>
                                <Text style={styles.informacaoU} numberOfLines={3}>{item.url}</Text>
                            </View>

                            <View> 
                                <Text style={styles.nome}> Rate: </Text>
                                    <Icon name="comment" size={18} bottom={19}/>
                                    <TouchableOpacity>
                                        <StarRating
                                            maxStars={5}
                                            starSize={22}
                                            fullStarColor="gold"
                                            emptyStarColor="black"
                                        />
                                    </TouchableOpacity>
                            </View>  
                        </View>
                    )}
                />
            </View>
        </LinearGradient>     
    );
}