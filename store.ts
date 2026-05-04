import { create } from 'zustand';
import { UserSettings, SavedItem } from './types';

interface AppState {
  theme: 'light' | 'dark' | 'auto';
  timezone: string;
  savedItems: SavedItem[];
  currentChannel: string | null;
  notificationsEnabled: boolean;
  setTheme: (theme: 'light' | 'dark' | 'auto') => void;
  setTimezone: (timezone: string) => void;
  addSavedItem: (item: SavedItem) => void;
  removeSavedItem: (id: string) => void;
  setCurrentChannel: (channelId: string | null) => void;
  toggleNotifications: () => void;
}

export const useAppStore = create<AppState>((set) => ({
  theme: 'dark',
  timezone: 'America/Los_Angeles',
  savedItems: [],
  currentChannel: null,
  notificationsEnabled: true,
  setTheme: (theme) => set({ theme }),
  setTimezone: (timezone) => set({ timezone }),
  addSavedItem: (item) => set((state) => ({ 
    savedItems: [item, ...state.savedItems] 
  })),
  removeSavedItem: (id) => set((state) => ({
    savedItems: state.savedItems.filter(item => item.id !== id)
  })),
  setCurrentChannel: (channelId) => set({ currentChannel: channelId }),
  toggleNotifications: () => set((state) => ({
    notificationsEnabled: !state.notificationsEnabled
  })),
}));