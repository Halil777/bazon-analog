import React from 'react';
import * as S from './References.styles';
import { FacebookOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

export const References: React.FC = () => {
  return (
    <S.ReferencesWrapper>
      <S.Text>
        Made by{' '}
        <a href="https://altence.com" target="_blank" rel="noreferrer">
          GeekSpace{' '}
        </a>
        in 2023 &copy;. Based on{' '}
        <a href="https://ant.design/" target="_blank" rel="noreferrer">
          Ant-design.
        </a>
      </S.Text>
      <S.Icons>
        <a href="https://github.com/Halil777/bazon-analog" target="_blank" rel="noreferrer">
          <GithubOutlined />
        </a>
        <a href="https://github.com/Halil777/bazon-analog" target="_blank" rel="noreferrer">
          <TwitterOutlined />
        </a>
        <a href="https://github.com/Halil777/bazon-analog" target="_blank" rel="noreferrer">
          <FacebookOutlined />
        </a>
        <a href="https://github.com/Halil777/bazon-analog" target="_blank" rel="noreferrer">
          <LinkedinOutlined />
        </a>
      </S.Icons>
    </S.ReferencesWrapper>
  );
};
