import { View, Text } from 'react-native'
import React from 'react'
import InputArea from '../components/InputArea';
import OutputArea from '../components/OutputArea';
import Separator from '../components/Separator';
import KeypadArea from '../components/KepadArea';

const index = () => {
  return (
    <View>
      <Text>Calculator</Text>
      <Separator />
      <InputArea />
      <OutputArea />
      <Separator />
      <KeypadArea />
    </View>
  )
}

export default index