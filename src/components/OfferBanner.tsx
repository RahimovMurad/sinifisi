import { Image, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
export default function OfferBanner() {
  return <View style={styles.banner}>
    <View style={styles.copy}><Text style={styles.small}>Up to</Text><Text style={styles.title}><Text style={styles.accent}>40%</Text> Discount!</Text><Text style={styles.caption}>Limited-time furniture offers</Text><View style={styles.button}><Text style={styles.buttonLabel}>Shop Now</Text></View></View>
    <Image source={require('../../assets/images/offer.png')} style={styles.image} resizeMode="contain" />
  </View>;
}
const styles = StyleSheet.create({
  banner: { backgroundColor: '#212121', borderRadius: 22, padding: 17, minHeight: 153, marginTop: 18, marginBottom: 18, flexDirection: 'row', alignItems: 'center', overflow: 'hidden' },
  copy: { zIndex: 1, flex: 1 }, small: { color: '#fff', fontSize: 12, marginBottom: 4 }, title: { fontSize: 21, color: '#fff', fontWeight: '500' }, accent: { color: '#efa97b', fontSize: 21 }, caption: { color: '#eee', fontSize: 11, marginTop: 6, marginBottom: 10 },
  button: { backgroundColor: '#fff', alignSelf: 'flex-start', borderRadius: 13 }, buttonLabel: { color: '#151515', fontSize: 12, marginHorizontal: 20, marginVertical: 9 }, image: { width: '40%', height: 132, marginRight: -10 },
});
