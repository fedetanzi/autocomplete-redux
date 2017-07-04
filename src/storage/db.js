import store from 'store'

export const clearDB = (key) => {
    if (key) {
        return store.remove(key)
    }
    store.clear()
};

export const getFromDB = (key) => {
    return store.get(key)
};

export const saveToDB = (key, value) => {
    store.set(key, value)
};
