import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MD3LightTheme, PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const theme = { ...MD3LightTheme, colors: { ...MD3LightTheme.colors, primary: '#945235', secondaryContainer: '#f4f3f2', background: '#ffffff' }, roundness: 3 };
export default function RootLayout() {
  return <SafeAreaProvider><PaperProvider theme={theme}><StatusBar style="dark" /><Stack screenOptions={{ headerShown: false }} /></PaperProvider></SafeAreaProvider>;
}
