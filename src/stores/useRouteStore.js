import { create } from "zustand";
import { LAST_NEWS, CHAT, LOGIN, MY_POSTS } from "../constants/routes";

export const useRouteStore = create((set) => ({
  currentRoute: LAST_NEWS,
  setRoute(route) {
    set({ currentRoute: route });
  },
}));
