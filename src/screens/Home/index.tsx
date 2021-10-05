import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';

import { useNavigation } from '@react-navigation/core';

import { styles } from './styles';

export function Home(){

    const [category, setCategory] = useState('');
    const navigation  = useNavigation();

    const appointments = [
        {
            id: '1',
            guild: { 
                id: '1',
                name: 'Lendários',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'Teste',
                icon: null,
                owner: false
            },
            category: '2',
            date: '22/06 às 20h40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }/* ,
        {
            id: '3',
            guild: {
                id: '1',
                name: 'Teste',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '4',
            guild: {
                id: '1',
                name: 'Teste',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '5',
            guild: {
                id: '1',
                name: 'Teste',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '6',
            guild: {
                id: '1',
                name: 'Teste',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '7',
            guild: {
                id: '1',
                name: 'Teste',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '8',
            guild: {
                id: '1',
                name: 'Teste',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '9',
            guild: {
                id: '1',
                name: 'Teste',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        {
            id: '10',
            guild: {
                id: '1',
                name: 'Teste',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20h40',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        } */
    ]

    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory(''): setCategory(categoryId);
    }

    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails');
    }

    function handLeAppointmentCreate(){
        navigation.navigate('AppointmentCreate');
    }

    return(
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd 
                    onPress={handLeAppointmentCreate}
                />
            </View>

            <View style={styles.categorySelect}>
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
            </View>

            <ListHeader
                title="Partidas Agendadas"
                subtitle="Total 6"
            />

            <FlatList
                data={appointments}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Appointment 
                        data={item} 
                        onPress={handleAppointmentDetails}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.matches}
                contentContainerStyle={{ paddingBottom: 69 }}
                showsVerticalScrollIndicator={false}
            />

        </Background>
    );
}