const defaultState = {
  favouriteShows: []
};

export const state = () => defaultState;

export const mutations = {
  addFavourite(state, showId) {
    if (!state.favouriteShows.includes(showId)) {
      state.favouriteShows.push(showId)
    }
  },
  removeFavourite(state, showId) {
    if (state.favouriteShows.includes(showId)) {
      state.favouriteShows.splice(state.favouriteShows.indexOf(showId), 1)
    }
  }
};

export const actions = {
  toggleFavourite({ commit, getters }, showId) {
    console.log(showId)
    if (getters.isFavourite(showId)) {
      commit('removeFavourite', showId);
    } else {
      commit('addFavourite', showId);
    }
  }
};

export const getters = {
  isFavourite: (state) => (showId) => state.favouriteShows.includes(showId)
}