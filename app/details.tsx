import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';

import * as Linking from "expo-linking";

import { Button } from 'react-native-paper';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import { useLocalSearchParams } from "expo-router";

export default function ModalScreen() {
  const params = useLocalSearchParams();
  const { indexValue } = params;

  const [agencies, setAgencies] = useState([
    {
      office: "Office of the Provincial Fire Marshal",
      address: "Marc II Bldg. Brgy. Poblacion, Aringay, La Union",
      email: "phq_lu@yahoo.com",
      coordinates: {
        lat: 16.395081,
        long: 120.356826
      },
      contact: ["09171862711"],
    },
    {
      office: "Agoo FS",
      address: "Brgay. San Nicolas East, Agoo, La Union",
      email: "bfpagoo@yahoo.com",
      coordinates: {
        lat: 16.320902,
        long: 120.363002
      },
      contact: ["09171839711", "091234567890"],
    },
    {
      office: "Aringay FS",
      address: "Brgy. Poblacion, Aringay, La Union",
      email: "aringayfirestationlu@yahoo.com",
      coordinates: {
        lat: 16.39601,
        long: 120.354938
      },
      contact: ["09171841711"],
    },
    {
      office: "Bacnotan FS ",
      address: "Brgy. Nagsimbaanan, Bacnotan, La Union",
      email: "bacnotan_firestation@yahoo.com",
      coordinates: {
        lat: 16.719675,
        long: 120.352218
      },
      contact: ["09171842711"],
    },
    {
      office: "Bagulin FS",
      address: "Brgy Suyo, Bagulin, La Union",
      email: "bfpbagulin_firestation@yahoo.com",
      coordinates: {
        lat: 16.603334,
        long: 120.43492
      },
      contact: ["09178065470"],
    },
    {
      office: "Balaoan FS ",
      address: "Brgy. Antonino, Balaoan, La Union",
      email: "balaoanbest@gmail.com",
      coordinates: {
        lat: 16.822423,
        long: 120.40227
      },
      contact: ["09171843711"],
    },
    {
      office: "Bangar FS ",
      address: "Maria Cristina East, Bangar, La Union",
      email: "bangarlu.firestation@gmail.com",
      coordinates: {
        lat: 16.898443,
        long: 120.432208
      },
      contact: [" 09171845711"],
    },
    {
      office: "Bauang FS",
      address: "Disso-or, Bauang, La Union",
      email: "bauangfirestationlaunion@yahoo.com",
      coordinates: {
        lat: 16.541657,
        long: 120.32568
      },
      contact: ["09171846711"],
    },
    {
      office: "Burgos FS",
      address: "New Poblacion, Burgos, La Union",
      email: "burgosfirestationlu@gmail.com",
      coordinates: {
        lat: 16.520927,
        long: 120.455982
      },
      contact: ["09178154494"],
    },
    {
      office: "Caba FS ",
      address: "Brgy. Poblacion Norte, Caba, La Union",
      email: "bfpcabafirestationlaunion@yahoo.com",
      coordinates: {
        lat: 16.431319,
        long: 120.344806
      },
      contact: ["09178405664"],
    },
    {
      office: "Luna FS",
      address: "Salcedo, Luna, La Union",
      email: "lunafire2021@gmail.com",
      coordinates: {
        lat: 16.853989,
        long: 120.378484
      },
      contact: ["09171848711", "09513523271"],
    },
    {
      office: "Naguilian FS",
      address: "Brgy. Ortiz, Naguilian, La Union",
      email: "naguilianfirestationlu_bfp@yahoo.com",
      coordinates: {
        lat: 16.53175,
        long: 120.38956
      },
      contact: ["09171849711"],
    },
    {
      office: "Pugo FS",
      address: "Brgy. Cares, Pugo, La Union",
      email: "pugofslu@yahoo.com",
      coordinates: {
        lat: 16.332356,
        long: 120.479877
      },
      contact: ["09272553556", "09171859711"],
    },
    {
      office: "Rosario FS",
      address: "Poblacion East, Rosario, La Union",
      email: "bfprosariolu@yahoo.com.ph",
      coordinates: {
        lat: 16.230211,
        long: 120.487158
      },
      contact: ["09171851711"],
    },
    {
      office: "San Fernando City FS",
      address: "Quezon Ave Barangay 1, San Fernando City, La Union",
      email: "bfp_sfcfs@yahoo.com",
      coordinates: {
        lat: 16.618311,
        long: 120.317483
      },
      contact: ["09171838711"],
    },
    {
      office: "San Gabriel FS",
      address: "Poblacion, San Gabriel, La Union",
      email: "sangabrielfirestation@yahoo.com",
      coordinates: {
        lat: 16.673745,
        long: 120.401554
      },
      contact: ["09171852711"],
    },
    {
      office: "San Juan FS",
      address: "Brgy. Ili Norte, San Juan, La Union",
      email: "bfp_sanjuanlufs@yahoo.com",
      coordinates: {
        lat: 16.670663,
        long: 120.337543
      },
      contact: ["09171853711"],
    },
    {
      office: "Santo Tomas FS",
      address: "Brgy. Patac, Sto Tomas, La Union",
      email: "firestationsantotomas@gmail.com",
      coordinates: {
        lat: 16.283279,
        long: 120.38917
      },
      contact: ["09459627533", "09171854711"],
    },
    {
      office: "Santol FS",
      address: "Poblacion, Santol, La Union",
      email: "santolbfp050623@gmail.com",
      coordinates: {
        lat: 16.771924,
        long: 120.459248
      },
      contact: ["09178130270"],
    },
    {
      office: "Sudipen FS",
      address: "Poblacion, Sudipen, La Union",
      email: "sudipenfirestation@gmail.com",
      coordinates: {
        lat: 16.90453,
        long: 120.46288
      },
      contact: ["09171855711"],
    },
    {
      office: "Tubao FS",
      address: "Brgy. Poblacion, Tubao, La Union",
      email: "bfp_tubao2014@yahoo.com",
      coordinates: {
        lat: 16.346221,
        long: 120.413209
      },
      contact: ["09171858711"],
    },
  ]);

  const openAddressOnMap = (office: string, lat: number, lng: number) => {
    const scheme = Platform.select({
      ios: 'maps:0,0?q=',
      android: 'geo:0,0?q=',
    });
    const latLng = `${lat},${lng}`;
    const url = Platform.select({
      ios: `${scheme}${office}@${latLng}`,
      android: `${scheme}${latLng}(${office})`,
    });
    Linking.openURL(url);
  };

  const callContact = (number: string) => {
    Linking.openURL(`tel:${number}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{agencies[indexValue].office}</Text>
      <View style={{ marginTop: 40 }}>
        <View>
          <Text style={styles.detailsLabel}>Addres:</Text>
          <Text style={styles.detailsValue}>{agencies[indexValue].address}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.detailsLabel}>Email:</Text>
          <Text style={styles.detailsValue}>{agencies[indexValue].email}</Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.detailsLabel}>Location:</Text>
          <Button
            icon="map-marker"
            mode="contained"
            style={{
              marginTop: 10
            }}
            contentStyle={{
              height: 55
            }}
            onPress={() => openAddressOnMap(agencies[indexValue].office, agencies[indexValue].coordinates.lat, agencies[indexValue].coordinates.long)}
          >
            Show Map Location
          </Button>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.detailsLabel}>Contacts:</Text>
          <View style={{ marginTop: 10 }}>
            {agencies[indexValue].contact.map((contact, i) => (
              <Button
                key={i}
                icon="phone"
                mode="contained"
                style={{
                  marginTop: 10
                }}
                contentStyle={{
                  height: 55
                }}
                onPress={() => callContact(contact)}
              >
                {contact}
              </Button>
            ))}
          </View>
        </View>
      </View>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailsLabel: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  detailsValue: {
    fontSize: 18,
    marginTop: 5
  }
});
