import React, { CSSProperties } from 'react'
import { Html,Body,Container,Text,Tailwind,Link,Preview } from '@react-email/components'
const WelcomeTemplate = () => {
  return (
    <Html>
        <Preview>Welcome aboard !</Preview>
        <Tailwind>
        <Body className='bg-white'>
            <Container>
                <Text className=' font-semibold text-4xl text-red-500'>Welcome to our platform </Text>
                <Text>We are glad to have you on board</Text>
                <Link href='https://example.com'>Click here to get started</Link>
            </Container>
            </Body>
            </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
    background: '#fff',
};

const heading:CSSProperties={
    color:'#FF0000',
    fontSize:'24px',
    fontWeight:'bold',
    textAlign:'center'

}

export default WelcomeTemplate