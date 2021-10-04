import React from 'react';
import { FlatList, View } from 'react-native';
import { Guild, GuildProps } from '../Guild';
import { ListDivider } from '../ListDivider';

import { styles } from './styles';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds( { handleGuildSelect }: Props){
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '3',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '4',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '5',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '6',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        }
    ];
    
    return(
        <View style={styles.container}>
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
        </View>
    )

}