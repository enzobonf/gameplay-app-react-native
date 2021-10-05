import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Background } from '../components/Background';
import { SignIn } from '../screens/SignIn';

import { UseAuth } from '../hooks/auth';
import { AuthRoutes } from './app.routes';

export function Routes(){

    const { user } = UseAuth();

    return(
        <Background>
            <NavigationContainer>
                { user.id ? <AuthRoutes /> : <SignIn />}
            </NavigationContainer>
        </Background>
    )
    
}