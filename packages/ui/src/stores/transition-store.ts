import { create } from "zustand";

interface TransitionState {
  isPending: boolean;
  startAppTransition: ((fn: () => void) => void) | null;
  navigate: ((fn: () => void) => void) | null;
}

export const useTransitionStore = create<TransitionState>(() => ({
  isPending: false,
  startAppTransition: null,
  navigate: null,
}));
