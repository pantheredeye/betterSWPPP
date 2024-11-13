// src/stores/bmpStore.ts
import { create } from 'zustand';

interface BmpResponses {
  [key: number]: {
    [key: string]: string | boolean;
  };
}

interface BmpStore {
  bmpResponses: BmpResponses;
  updateBmpResponse: (bmpId: number, responses: Partial<BmpResponses[number]>) => void;
  getFilteredResponses: () => Partial<BmpResponses[number]>[];
  submitBmps: () => void;
}

const useBmpStore = create<BmpStore>((set, get) => ({
  bmpResponses: {},
  updateBmpResponse: (bmpId, responses) => set(state => ({
    bmpResponses: {
      ...state.bmpResponses,
      [bmpId]: {
        ...state.bmpResponses[bmpId],
        ...responses,
      },
    },
  })),
  getFilteredResponses: () => {
    const bmpResponses = get().bmpResponses;
    return Object.entries(bmpResponses).reduce((acc, [bmpId, responses]) => {
      if (Object.keys(responses).some(key => responses[key] !== '' && responses[key] !== false)) {
        acc.push({ bmpId, ...responses });
      }
      return acc;
    }, [] as Partial<BmpResponses[number]>[]);
  },
  submitBmps: () => {
    const filteredResponses = get().getFilteredResponses();
    console.log('Submitting BMPs:', filteredResponses);
    // Add form submission logic here
  }
}));

export default useBmpStore;
