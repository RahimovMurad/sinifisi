import { Image, StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-paper';
import { Product } from '@/constants/furniture';
type Props = { item: Product };
export default function ProductCard({ item }: Props) {
  return <View style={styles.card}>
    <Image source={item.image} resizeMode={item.category === 'Chair' ? 'contain' : 'cover'} style={styles.image} accessibilityLabel={item.name} />
    <View style={styles.info}><View style={styles.copy}><Text style={styles.room}>{item.room}</Text><Text numberOfLines={2} style={styles.name}>{item.name}</Text><Text style={styles.price}>${item.price.toFixed(2)}</Text></View>
      <View pointerEvents="none" style={styles.heart}><Icon source={item.id === 1 ? 'heart' : 'heart-outline'} color={item.id === 1 ? '#ff4655' : '#222'} size={17} /></View>
    </View>
  </View>;
}
const styles = StyleSheet.create({
  card: { flex: 1, maxWidth: '48%', borderRadius: 15, backgroundColor: '#f6f6f6', overflow: 'hidden' }, image: { width: '100%', height: 142 },
  info: { backgroundColor: '#222', borderRadius: 13, padding: 10, flexDirection: 'row', minHeight: 77, alignItems: 'flex-start' }, copy: { flex: 1 },
  room: { color: '#eee', fontSize: 10, marginBottom: 3 }, name: { color: '#fff', fontSize: 12, lineHeight: 16 }, price: { color: '#fff', fontSize: 11, fontWeight: '600', marginTop: 3 },
  heart: { backgroundColor: '#f7f7f7', alignItems: 'center', justifyContent: 'center', width: 29, height: 29, borderRadius: 9, margin: 0, marginLeft: 3 },
});

