import { Text, View, Button } from 'react-native';
import { RootStackScreenProps } from '../types';

export default function LandingScreen({ navigation } :RootStackScreenProps<'Landing'> ) {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button
        title='Register'
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title='Login'
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}