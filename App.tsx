import {  NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigation/Navigator';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';




const  App = () => {
    return (
            <NavigationContainer  >
                <StatusBar style='dark' />
                <SafeAreaProvider>
                    <Navigator />
                </SafeAreaProvider>
            </NavigationContainer>

    );
}

export default App;

