import { create } from "zustand";

interface DogImage {
  id: string;
  url: string;
}

interface DogStore {
  dogs: DogImage[];
  fetchDogs: () => Promise<void>;
  removeDog: (id: string) => Promise<void>;
  likeDog: (id: string) => Promise<void>;
}

export const useDogStore = create<DogStore>((set) => ({
  dogs: [],
  fetchDogs: async () => {
    try {
      const response = await fetch("https://api.thedogapi.com/v1/images/search?limit=50", {
        headers: {
          "x-api-key": "live_45xrgxu57jeBuzwnpMIiUiOVCx20RQEWGFYKZrfvSVUZDhpl3Z6VJx1cgdqNB8gL",
        },
      });
      const data = await response.json();
      set({ dogs: data });
    } 
    catch (error) {
      console.error("Ошибка:", error);
    }
  },
  removeDog: async (dogId: string) => {
    console.log('dog removed: ' + dogId)
  },
  likeDog: async (dogId: string) => {
    console.log("dog liked: " + dogId)
  }
}));