'use client'

import { List, Typography ,Button} from 'antd';
import { useKnowledgeStore } from '@/store/knowledge';

const KnowledPage = () => {
  const messages = useKnowledgeStore((state) => state.messages);

  const addMessage = useKnowledgeStore((state) => state.addMessage);

  const handleSend = () => {
    addMessage({ content: 'Hello, world!',id: '1', sender: 'user',  timestamp: Date.now() });
  };
  return (
    <>
      <List
        dataSource={messages}
        renderItem={(message) => (
          <List.Item>
            <Typography.Text>{message.content}</Typography.Text>
          </List.Item>
        )}
      />
      <Button onClick={handleSend}>Send</Button>
    </>
  );
};

export default KnowledPage;