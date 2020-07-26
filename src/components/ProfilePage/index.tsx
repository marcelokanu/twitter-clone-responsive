import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Marcelo Bonilla</h1>
        <h2>@marcelokanu</h2>

        <p>
          Javascript developer GitHub:{' '}
          <a href="http://www.github.com/marcelokanu">marcelokanu</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Campo Grande, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 12 de novembro de 1982
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>100</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed></Feed>
    </Container>
  );
};

export default ProfilePage;
