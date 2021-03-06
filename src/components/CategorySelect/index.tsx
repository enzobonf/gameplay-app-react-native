import React from 'react';
import { View, ScrollView } from 'react-native';

import { styles } from './styles';
import { categories } from '../../Utils/categories';
import { Category } from '../Category';

type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
}

export function CategorySelect({ 
    categorySelected,
    setCategory,
    hasCheckBox = false,
}: Props){
    return(
        <View style={styles.container}>
            <ScrollView 
                horizontal
                style={styles.container}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingRight: 40}}
            >
                {
                    categories.map(category=>{
                        return(
                            <Category
                                key={category.id}
                                title={category.title}
                                icon={category.icon}
                                checked={category.id === categorySelected}
                                onPress={() => setCategory(category.id)}
                                hasCheckBox={hasCheckBox}
                            />
                        );
                    })
                }
            </ScrollView>
        </View>
    )
}