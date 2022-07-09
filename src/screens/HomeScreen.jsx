import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { AdjustmentsIcon, ChevronDownIcon, SearchIcon, UserCircleIcon } from 'react-native-heroicons/outline';
import { Categories, FeaturedRow } from '../components';

const HomeScreen = () => {
  return (
    <SafeAreaView className='bg-white pt-5'>
      {/* Header */}
      <View className='flex-row pb-3 items-center mx-4 space-x-2'>
        <Image
          source={require('../../assets/techiemato.png')}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />

        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>
            Deliver Now!
          </Text>
          <Text className='font-bold text-xl'>
            Current Location
            <ChevronDownIcon size={20} color='#f43f5e' />
          </Text>
        </View>

        <UserCircleIcon size={35} color='#f43f5e' />
      </View>

      {/* Search */}
      <View className='flex-row items-center space-x-2 pb-2 mx-4'>
        <View className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
          <SearchIcon size={20} color='gray' />
          <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
        </View>
        <AdjustmentsIcon color='#f43f5e' />
      </View>

      {/* Feed */}
      <ScrollView
        className='bg-gray-100'
        contentContainerStyle={{
          paddingBottom: 100
        }}
      >
        <Categories />

        <FeaturedRow
          id='123'
          title='Featured'
          description='Paid placements from our partners'
        />
        <FeaturedRow
          id='1234'
          title='Tasty Discounts'
          description='Everyone&#39;s been enjoying these juicy discounts!'
        />
        <FeaturedRow
          id='12345'
          title='Offers near you!'
          description='why not support your local restaurant tonight!'
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen