import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { Profile } from '../../components/Profile';
import { ListHeader } from '../../components/ListHeader';
import { Appointment, AppointmentProps } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { Load } from '../../components/Load';

import { useNavigation } from '@react-navigation/core';

import { styles } from './styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';

export function Home(){

    const [category, setCategory] = useState('');
    const [loading,  setLoading] = useState(true);
    const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

    const navigation  = useNavigation();
    
    function handleCategorySelect(categoryId: string){
        categoryId === category ? setCategory(''): setCategory(categoryId);
    }

    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails');
    }

    function handLeAppointmentCreate(){
        navigation.navigate('AppointmentCreate');
    }

    async function loadAppointments(){

        const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
        const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

        if(category){
            setAppointments(storage.filter(item => item.category === category));
        }
        else{
            setAppointments(storage);
        }

        setLoading(false);
        
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

            { loading ? <Load /> :
                <>
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
                </>
                }

        </Background>
    );
}