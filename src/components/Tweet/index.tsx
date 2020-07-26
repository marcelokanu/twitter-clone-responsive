import React from 'react';

import {
  Container,
  Retweeted,
  TwitterIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <TwitterIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Marcelo Bonilla</strong>
            <span>@marcelokanu</span>
            <Dot />
            <time>26 de jul</time>
          </Header>

          <Description>Twitter de Marcelo</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <LikeIcon />
              989 likes
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
