import React from 'react'
import { Box } from 'reoil'
import Content from '../components/Content'
import Image from '../components/Image'
import MainLayout from '../components/MainLayout'
import Sidebar from '../components/Sidebar'
import Title from '../components/Title'
import { theme } from '../theme'
import { FaUserPlus, FaRegHandshake } from 'react-icons/fa'

// 首页
const JoinPage = () => {
  return(
    <MainLayout row>
      <Sidebar titles={['涧行者简介', '涧行团队']}>
      </Sidebar>

      <Box stretch>

        <Title>涧行者简介</Title>
        <Content>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae ab culpa quaerat laborum ratione assumenda quam vero? Fuga nesciunt, voluptates in obcaecati ea aliquid impedit itaque nobis magnam molestias quaerat.
        </Content>
        {/* <Box center>
          <Image src='https://i.loli.net/2020/09/26/VHlkZx1ongGdrzP.png' />
        </Box> */}


        <Title>涧行团队</Title>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo harum, voluptates libero autem nulla sint officiis unde in repellendus, eos dolore quidem fugiat ut! Aliquam minus tenetur ratione laborum ullam?
        </Content>
        {/* <Box center>
          <Image src='https://images.pexels.com/photos/1173777/pexels-photo-1173777.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
        </Box> */}

      </Box>

    </MainLayout>
  )
}

export default JoinPage
