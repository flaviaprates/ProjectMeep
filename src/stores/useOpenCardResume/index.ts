import create, { SetState } from "zustand";

import { State } from "./types";

export const useOpenCardResume = create<State>((set: SetState<State>) => {
  function setOpenCardResume(openCardResume: boolean): void {
    set({ openCardResume });
  }

  return {
    openCardResume: false,
    setOpenCardResume,
  };
});
