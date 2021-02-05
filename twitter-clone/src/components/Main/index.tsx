import React from 'react';

import { Container, Header, BackIcon, ProfileInfo } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button> 

            <ProfileInfo>
                <strong>Antônio Hideto Borges Kotsubo</strong>
                <span>111 Tweets</span>
            </ProfileInfo>
        </Header>

        {/* <ProfilePage /> */}

        {/* <BottomMenu>
            <HomeIcon />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu> */}
    </Container>
  );
}

export default Main;