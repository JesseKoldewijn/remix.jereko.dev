import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type PersistantCoreState = {
  foo: number;
};

type SessionCoreState = {
  bar: number;
};

type CoreState = {
  persistant: PersistantCoreState;
  session: SessionCoreState;
  incrementFoo: () => void;
  incrementBar: () => void;
  resetStore: () => void;
};

export const useCoreStore = create<CoreState>()(
  persist(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (set, get) => ({
      persistant: {
        foo: 0,
      },
      session: {
        bar: 0,
      },
      incrementFoo: () => {
        set((state) => {
          const { persistant, ...rest } = state;
          persistant.foo++;
          return {
            ...rest,
            persistant,
          };
        });
      },
      incrementBar: () => {
        set((state) => {
          const { session, ...rest } = state;
          session.bar++;

          return {
            ...rest,
            session,
          };
        });
      },
      resetStore: () => {
        set({
          persistant: {
            foo: 0,
          },
          session: {
            bar: 0,
          },
        });
      },
    }),
    {
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => {
        return {
          persistant: state.persistant,
          session: {
            bar: 0,
          },
        };
      },
      name: "core-store",
    },
  ),
);
