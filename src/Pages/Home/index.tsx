import {
  View,
  ScrollView,
  FlatList
} from 'react-native'
import { Title } from '../../components/Title'
import { Card } from '../../components/Card'

import { style } from './style'

import { categories, friendRequests, thanks } from '../../Utils/data';
import { Thanks } from '../../components/Thanks';

function Home() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={{backgroundColor: '#FFF'}}>
        <View style={style.section}>
          <Title 
            label='Presenteie um amigo'
            rightIcon='chevron-right'
          />
          <View style={style.horizontalList}>
            <FlatList 
              data={friendRequests}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={
                ({ item }) => (
                  <Card 
                    user={item.user}
                    product={{
                      name: item.productName,
                      image: item.productImage
                    }}
                    showUser={true}
                  />
                )
              }
              ItemSeparatorComponent={() => {
                return (
                  <View style={{paddingHorizontal: 5}} />
                )
              }}
            />
          </View>
        </View>

        <View style={style.section}>
          <Title 
            label='Que tal uma surpresinha?'
            subtitle='Dê uma olhada nessas ideias'
            rightIcon='chevron-right'
          />
          <View style={style.horizontalList}>
            <FlatList 
              data={categories}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={
                ({ item }) => (
                  <Card 
                    product={{
                      name: item.label,
                      image: item.image
                    }}
                  />
                )
              }
              ItemSeparatorComponent={() => {
                return (
                  <View style={{paddingHorizontal: 5}} />
                )
              }}
            />
          </View>
        </View>

        <View style={style.section}>
          <Title
            label='Agradecimentos'
          />
          <View style={style.verticalList}>
            <FlatList 
              data={thanks}
              keyExtractor={item => item.id}
              renderItem={
                ({ item }) => (
                  <Thanks 
                    userSender={item.userSender}
                    userReceiver={item.userReceiver}
                    message={item.message}
                    photo={item.photo}
                    created_at={item.created_at}
                  />
                )
              }
              ItemSeparatorComponent={() => {
                return (
                  <View style={{paddingVertical: 10}} />
                )
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export { Home }