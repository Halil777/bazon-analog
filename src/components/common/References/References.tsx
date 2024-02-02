import React from 'react';
import * as S from './References.styles';

export const References: React.FC = () => {
  return (
    <S.ReferencesWrapper>
      <S.Text>
        Made by{' '}
        <a href="https://github.com/GeekSpace-Team" target="_blank" rel="noreferrer">
          GeekSpace{' '}
        </a>
        in 2024 &copy;
      </S.Text>
    </S.ReferencesWrapper>
  );
};
