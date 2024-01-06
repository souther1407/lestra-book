import { create } from "zustand";
export const useUserStore = create((set) => ({
  credentials: null,
  setCredentials(credentials) {
    set({ credentials });
  },
}));
