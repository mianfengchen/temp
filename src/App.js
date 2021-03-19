import React from 'react';
import styled from 'styled-components';

import { Button, Form, Input, Modal } from 'antd';
import Footer from './components/footer';
import Header from './components/header';

import './App.css';

const CenterBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 60%;
  height: 320px;

  h2 {
    margin-bottom: 8px;
    font-size: 36px;
    font-weight: 600;
  }

  p { 
    margin-bottom: 16px;
    font-size: 14px;
  }

`;


function App() {
  return (
    <div className="App">
      <Header />
      <CenterBox>
        <h2>There is the heading</h2>
        <p>there is a small piece of text</p>
        <Button size="large" type="primary">Invite</Button>

        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="fullname"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input placehode="Full name"/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input placeholder="Confirm email" />
            </Form.Item>


            <Form.Item>
              <Button type="primary" htmlType="submit">
                Send
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </CenterBox>
      <Footer />
    </div>
  );
}

export default App;
