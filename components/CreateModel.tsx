import { create } from 'zustand';

interface CreateModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const CreateModal = create<CreateModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));


export default CreateModal;
