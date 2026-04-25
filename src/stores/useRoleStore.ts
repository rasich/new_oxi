import { create } from 'zustand'

type Store = {
	role: string | null
	setRole: (role: string) => void
}

export const useRoleStore = create<Store>()((set) => ({
	role: null,
	setRole: (role) => set(() => ({ role })),
}))
