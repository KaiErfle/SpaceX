import React from 'react';
import Input from '../comps/Input';
import Chat from '../comps/Chat'
import ChatPage from '../pages/ChatPage'

export default {
    title:"Input",
    component:Input
};

export const InputPage = () => <Input />

export const ReadPage = () => <Chat />

export const ReloadPage = () => <ChatPage />