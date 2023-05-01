import { useState, useEffect } from 'react'
import messagesList from './data/messageList'
import { READ, UNREAD } from './constants';
import List from './components/List';
import Controls from './components/Controls';
import './App.css';

function App() {
  const [messages, setMessages] = useState(messagesList);

  useEffect(() => {
    const isAllMessagesRead = messages.every(({ status }) => status === READ);

    if (isAllMessagesRead) {
      alert('Parabéns! Você leu todas as suas mensagens!');
    }
  }, [messages]);

  const setMessageStatus = (messageId, newStatus) => {
    const updateMessages = messages.map((currentMessage) => {
      if (currentMessage.id === messageId) {
        return { ...currentMessage, status: newStatus };
      }
      return currentMessage;
    });

    setMessages(updateMessages);
  }

  const markAllAsRead = () => {
    const allAsRead = messages.map((message) => ({...message, status: READ}));
    setMessages(allAsRead);
  }

  const markAllAsUnread = () => {
    const allAsUnread = messages.map((message) => ({...message, status: UNREAD}));
    setMessages(allAsUnread);

  }

  return (
    <div className='App'>
      <header>
        <h1>TrybeMail</h1>
      </header>

      <Controls
        markAllAsRead={ markAllAsRead }
        markAllAsUnread={ markAllAsUnread }
      />

      <List
        messages={ messages }
        setMessageStatus={ setMessageStatus }
      />
    </div>
  )
}

export default App
