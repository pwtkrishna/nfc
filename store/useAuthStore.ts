import { create } from "zustand";
import { persist } from "zustand/middleware";

type User = {
  id: string;
  name: string;
  email: string;
  token: string;
};

type AuthStore = {
  user: User | null;
  isGuest: boolean;
  login: (user: User) => void;
  logout: () => void;
  setGuest: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isGuest: false,
      login: (user) => set({ user, isGuest: false }),
      logout: () => set({ user: null, isGuest: false }),
      setGuest: () => set({ user: null, isGuest: true }),
    }),
    {
      name: "auth-store",
      partialize: (state) => ({ user: state.user, isGuest: state.isGuest }),
    }
  )
);

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// type User = {
//   id: string;
//   name: string;
//   email: string;
//   token: string;
// };

// type AuthStore = {
//   user: User | null;
//   isGuest: boolean;
//   login: (user: User) => void;
//   logout: (user: User) => void;
//   setGuest: () => void;
// };

// export const useAuthStore = create<AuthStore>()(
//   persist(
//     (set) => ({
//       user: null,
//       isGuest: false,

//       login: (user) => set({ user, isGuest: false }),

//       logout: () => set({ user: null, isGuest: false }),

//       setGuest: () => set({ user: null, isGuest: true }),
//     }),
//     {
//       name: "auth-store",
//       partialize: (state) => ({ user: state.user, isGuest: state.isGuest }),
//     }
//   )
// );
