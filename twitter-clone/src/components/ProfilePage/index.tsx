import React from 'react';

import Feed from '../Feed';

import { 
    Container, 
    Banner, 
    Avatar,
    ProfileData,
    EditButton, 
    LocationIcon, 
    CakeIcon, 
    Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar perfil</EditButton>

              <h1>Antônio Kotsubo</h1>
              <h2>@im_tutuu</h2>

              <p>
                  Student at <a href="https://cotuca.unicamp.br/cotuca/">Technical Highschool of Campinas</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon/>
                      São Paulo, Brasil
                  </li>
                  <li>
                      <CakeIcon/>
                      Nascido(a) em 26 de outubro de 2003
                  </li>
              </ul>

              <Followage>
                  <span>
                      seguindo <strong>532</strong>
                  </span>
                  <span>
                      <strong>245 </strong> seguidores 
                  </span>
              </Followage>

          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;