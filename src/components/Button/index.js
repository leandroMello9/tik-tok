import React from 'react';

import { AntDesign } from '@expo/vector-icons';
import { ButtonContainer } from './styles';

const Button = () => {
  return (
    <ButtonContainer>
      <AntDesign name="plus" size={22} color="#000" />
    </ButtonContainer>
  );
};

export default Button;
