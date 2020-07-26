import React from 'react';

import Button from '../Button';

import {
  Container,
  Topsite,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topsite>
        <Logo />
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Email</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritos</span>
        </MenuButton>

        <MenuButton className="active">
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Twittar</span>
        </Button>
      </Topsite>

      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Marcelo Bonilla</strong>
          <span>@marcelokanu</span>
        </ProfileData>
        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
