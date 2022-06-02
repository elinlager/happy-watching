const defaultState = {
  favouriteShows: []
};

export const state = () => defaultState;

export const mutations = {
  addFavourite(state, showId) {
    if (!state.favouriteShows.includes(showId)) {
      state.favouriteShows.push(showId.toString())
    }
  },
  removeFavourite(state, showId) {
    if (state.favouriteShows.includes(showId.toString())) {
      state.favouriteShows.splice(state.favouriteShows.indexOf(showId.toString()), 1)
    }
  }
};

export const actions = {
  toggleFavourite({ commit, getters }, showId) {
    if (getters.isFavourite(showId)) {
      commit('removeFavourite', showId);
    } else {
      commit('addFavourite', showId);
    }
  }
};

export const getters = {
  isFavourite: (state) => (showId) => state.favouriteShows.includes(showId.toString())
}