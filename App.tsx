import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Navigator } from './src/navigation/Navigator';

const  App = () => {
    return (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    );
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
