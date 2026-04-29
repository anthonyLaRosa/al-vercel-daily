import { create } from "zustand";

type TransitionId = "route" | "search" | "paywall";

interface TransitionState {
  status: {
    isPending: boolean;
    id: TransitionId;
  };
  startAppTransition: ((fn: () => void, id?: TransitionId) => void) | null;
  navigate: ((fn: () => void) => void) | null;
}

export const useTransitionStore = create<TransitionState>(() => ({
  status: {
    isPending: false,
    id: "route",
  },
  startAppTransition: null,
  navigate: null,
}));
