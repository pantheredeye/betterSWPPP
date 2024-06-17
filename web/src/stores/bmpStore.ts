import create from 'zustand'

interface Bmp {
  id: number;
  name: string;
  description: string;
  implemented: boolean;
  maintenanceRequired: boolean;
  repeatOccurrence: boolean;
  correctiveActionNeeded: string;
  notes: string;
}

interface BmpState {
  bmps: Bmp[];
  addBmp: (bmp: Bmp) => void;
  updateBmp: (bmpId: number, updatedData: Partial<Bmp>) => void;
  submitBmps: () => void;
}

const useBmpStore = create<BmpState>((set, get) => ({
  bmps: [],
  addBmp: (bmp) => set((state) => {
    const exists = state.bmps.some((existingBmp) => existingBmp.id === bmp.id);
    if (!exists) {
      return { bmps: [...state.bmps, bmp] };
    }
    return state;
  }),
  updateBmp: (bmpId, updatedData) => set((state) => {
    console.log(`Updating BMP in store: ${bmpId}`, updatedData)
    return {
      bmps: state.bmps.map((bmp) =>
        bmp.id === bmpId ? { ...bmp, ...updatedData } : bmp
      ),
    }
  }),
  submitBmps: () => {
    const { bmps } = get();
    console.log('Submitting BMPs:', bmps);
    // Add form submission logic here
  },
}));

export default useBmpStore;
