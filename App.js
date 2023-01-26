import React from 'react';
import { View, Text } from 'react-native';
import RiddleCard from './components/RiddleCard';

const riddles = [
  { id: 1, riddle: "What starts with an E, ends with an E, but only contains one letter?", answer: "Envelope" },
  { id: 2, riddle: "What has a heart that doesn't beat?", answer: "An artichoke" },
  { id: 3, riddle: "I am not alive, but I grow; I don't have lungs, but I need air; I don't have a mouth, but water kills me. What am I?", answer: "Fire" }
];

const App = () => {
  return (
    <View>
      <Text>Riddle Card App</Text>
      {riddles.map((riddle) => (
        <RiddleCard key={riddle.id} riddle={riddle.riddle} answer={riddle.answer} />
      ))}
    </View>
  );
};

export default App;