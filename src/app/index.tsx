import { type ComponentRef, useState } from 'react';
import { FlatList, PanResponder, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { Chip, Icon, Searchbar, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@/components/Header';
import OfferBanner from '@/components/OfferBanner';
import ProductCard from '@/components/ProductCard';
import { categories, Category, filterProducts } from '@/constants/furniture';
function createCategoryDrag() {
  let scroll: ComponentRef<typeof ScrollView> | null = null;
  let offset = 0;
  let start = 0;
  const responder = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gesture) => Math.abs(gesture.dx) > 8 && Math.abs(gesture.dx) > Math.abs(gesture.dy),
    onPanResponderGrant: () => { start = offset; },
    onPanResponderMove: (_, gesture) => scroll?.scrollTo({ x: Math.max(0, start - gesture.dx), animated: false }),
  });
  return {
    panHandlers: responder.panHandlers,
    setScroll: (instance: ComponentRef<typeof ScrollView> | null) => { scroll = instance; },
    setOffset: (value: number) => { offset = value; },
  };
}
export default function HomeScreen() {
  const [category, setCategory] = useState<Category>('All');
  const [categoryDrag] = useState(createCategoryDrag);
  const filtered = filterProducts(category, '', false);
  const header = <View>
    <Header />
    <View style={styles.searchRow}><Searchbar placeholder="Search furniture.." accessibilityLabel="Search furniture" value="" editable={false} focusable={false} accessibilityState={{ disabled: true }} style={styles.search} inputStyle={styles.searchInput} iconColor="#888" elevation={0} />
      <View accessibilityLabel="Filter" accessibilityState={{ disabled: true }} style={[styles.filter, styles.filterIcon]}><Icon source="tune-variant" color="#fff" size={22} /></View>
    </View>
    <OfferBanner />
    <View style={styles.section}><Text style={styles.sectionTitle}>Popular Items</Text><View style={styles.viewAll}><Text style={styles.viewLabel}>View all</Text><Icon source="chevron-right" size={16} color="#777" /></View></View>
    {}
    <View {...(Platform.OS === 'web' ? categoryDrag.panHandlers : {})}><ScrollView ref={categoryDrag.setScroll} horizontal directionalLockEnabled onScroll={event => { categoryDrag.setOffset(event.nativeEvent.contentOffset.x); }} scrollEventThrottle={16} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>{categories.map(item => <Chip key={item} selected={category === item} showSelectedCheck={false} accessibilityState={{ selected: category === item }} onPress={() => setCategory(item)} style={[styles.chip, category === item && styles.selectedChip]} textStyle={[styles.chipLabel, category === item && styles.selectedText]}>{item}</Chip>)}</ScrollView></View>
    <Text accessibilityLiveRegion="polite" style={styles.count}>{category === 'All' ? 'All furniture' : category} · {filtered.length} items</Text>
  </View>;
  return <SafeAreaView style={styles.safe}><View style={styles.container}>
    <FlatList data={filtered} numColumns={2} keyExtractor={item => String(item.id)} ListHeaderComponent={header} columnWrapperStyle={styles.row} contentContainerStyle={styles.list} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}
      renderItem={({ item }) => <ProductCard item={item} />}
      ListEmptyComponent={<View style={styles.empty}><Text variant="titleMedium">No furniture found</Text></View>} />

  </View></SafeAreaView>;
}
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' }, container: { flex: 1, width: '100%', maxWidth: 460, alignSelf: 'center' }, list: { paddingHorizontal: 18, paddingBottom: 24 },
  searchRow: { flexDirection: 'row', gap: 10, alignItems: 'center' }, search: { flex: 1, borderRadius: 14, backgroundColor: '#f6f6f6', height: 52 }, searchInput: { fontSize: 13, minHeight: 52 }, filter: { width: 52, height: 52, borderRadius: 13, margin: 0 },
  filterIcon: { backgroundColor: '#945235', alignItems: 'center', justifyContent: 'center' },
  section: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 9 }, sectionTitle: { fontSize: 18, fontWeight: '600' }, viewAll: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingVertical: 12 }, viewLabel: { color: '#777', fontSize: 11, marginHorizontal: 0 },
  categories: { gap: 8, paddingBottom: 12 }, chip: { borderRadius: 12, backgroundColor: '#f4f4f4', minWidth: 112, height: 44, justifyContent: 'center' }, selectedChip: { backgroundColor: '#945235' }, chipLabel: { textAlign: 'center', fontSize: 13, color: '#111', marginHorizontal: 16 }, selectedText: { color: '#fff' }, saleChip: { alignSelf: 'flex-start', marginBottom: 10 },
  count: { fontSize: 11, color: '#888', marginBottom: 10 }, row: { gap: 13, marginBottom: 13 }, empty: { alignItems: 'center', paddingVertical: 40 }, emptyText: { color: '#777', marginVertical: 10 }, dialog: { backgroundColor: '#fff', maxWidth: 420, width: '90%', alignSelf: 'center' },
});



