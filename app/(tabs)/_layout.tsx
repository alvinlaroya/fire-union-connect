import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme, Image } from 'react-native';

import Colors from '@/constants/Colors';

const headerLogo = require('../../assets/images/icon.png');

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Image 
              style={{height: 25, width: 25, marginRight: 20}}
              source={require('../../assets/images/icon.png')}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} />,
          headerRight: () => (
            <Image 
              style={{height: 25, width: 25, marginRight: 20}}
              source={headerLogo}
            />
          ),
        }}
      />
    </Tabs>
  );
}
