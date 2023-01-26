import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const RiddleCard = (props) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const { riddle, answer } = props;

  return (
    <TouchableOpacity onPress={() => setIsAnswerVisible(!isAnswerVisible)}>
      <View>
        {isAnswerVisible ? (
          <Text>{answer}</Text>
        ) : (
          <Text>{riddle}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default RiddleCard;
