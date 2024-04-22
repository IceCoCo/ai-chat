import create from 'zustand';


type KnowledgeMessage = {
    content: string;
    id: string;
    sender: 'user' | 'bot';
    timestamp: number;
  };

type KnowledgeState = {
  addMessage: (message: KnowledgeMessage) => void;
  messages: KnowledgeMessage[];
};

export const useKnowledgeStore = create<KnowledgeState>((set) => ({
  addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
  messages: [],
}));