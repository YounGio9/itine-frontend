const saveInStorage = (key, value) => {
  if (key) localStorage.setItem(key, value);
};

const saveInStorageJson = (key, jsonValue) => {
  console.log(jsonValue);
  if (typeof jsonValue !== 'string' && typeof jsonValue !== 'undefined')
    localStorage.setItem(key, JSON.stringify(jsonValue));
};

const getInStorage = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    return null;
  }
};

const getInStorageJson = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
};

export { saveInStorage, getInStorage, getInStorageJson, saveInStorageJson };
