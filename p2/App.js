import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Danny *</Text>

      {/* Dua kotak dengan tata letak Flexbox */}
      <View style={styles.boxContainer}>
        <View style={styles.box1}>
          <View style={styles.box1Overlay} />
        </View>
        <View style={styles.box2}>
          <View style={styles.box2Overlay} />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa', // Latar belakang abu-abu terang
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24, // Ukuran font 24
    color: 'blue', // Warna biru
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row', // Tata letak horizontal
    justifyContent: 'space-between', // Jarak merata di antara kotak
    width: '70%', // Lebar kontainer diatur
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#FF6347', // Warna dasar (Tomato)
    borderRadius: 10, // Sudut melengkung
    overflow: 'hidden', // Memastikan overlay mengikuti bentuk kotak
    shadowColor: '#000', // Bayangan hitam
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  box1Overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Warna overlay putih semi-transparan
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#4682B4', // Warna dasar (Steel Blue)
    borderRadius: 10, // Sudut melengkung
    overflow: 'hidden', // Memastikan overlay mengikuti bentuk kotak
    shadowColor: '#000', // Bayangan hitam
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  box2Overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Warna overlay hitam semi-transparan
  },
});
