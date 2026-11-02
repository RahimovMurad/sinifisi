import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
export default function Header() {
  return <View>
    <View style={styles.row}>
      <View accessibilityLabel="Furniture home" style={styles.logo}><View style={styles.dots}>{[0,1,2,3].map(i => <View key={i} style={[styles.dot, { opacity: 1 - i * .18 }]} />)}</View></View>
      <Image source={require('../../assets/images/avatar.png')} style={styles.avatar} accessibilityLabel="Profile photo" />
    </View>
    <Text style={styles.title}>Find unique furniture{'\n'}for your home</Text>
  </View>;
}
const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 25, marginTop: 12 },
  logo: { width: 44, height: 44, borderRadius: 13, backgroundColor: '#f8f8f8', alignItems: 'center', justifyContent: 'center' },
  dots: { width: 19, flexDirection: 'row', flexWrap: 'wrap', gap: 3 }, dot: { width: 8, height: 8, borderRadius: 3, backgroundColor: '#79523b' },
  avatar: { width: 44, height: 44, borderRadius: 13 }, title: { fontSize: 27, lineHeight: 34, fontWeight: '600', letterSpacing: -.65, color: '#121212', marginBottom: 21 },
});
