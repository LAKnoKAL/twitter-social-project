import React from 'react'

import MainHeader from './components/MainHeader'
import MessagesList from './components/MessagesList'
import MessagesDialog from './components/MessagesDialog'

import './App.css'

function App() {
  return (
    <div className="App">
      <MainHeader />
      <MessagesList />
      <MessagesDialog />
    </div>
  )
}

export default App
