import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';

import { api } from '../../services/api';

import { styles } from './styles';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds( { handleGuildSelect }: Props){

    const [guilds, setGuilds ] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    async function fetchGuilds(){

        try{
            
            const response = await api.get('/users/@me/guilds');
            setGuilds(response.data);

        } catch(error){
            throw new Error(`Não foi possível carregar os servidores - ${error}`);
        } finally{
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchGuilds();
    }, []);
    
    return(
        <View style={styles.container}>
            {
                loading ? <Load /> :
                <FlatList
                    data={guilds}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>(
                        <Guild 
                            data={item}
                            onPress={() => handleGuildSelect(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <ListDivider isCentered />}
                    ListHeaderComponent={() => <ListDivider isCentered />}
                    style={styles.guilds}
                    contentContainerStyle={{ paddingBottom: 69, paddingTop: 104  }}
                /> 
            }

        </View>
    )

}