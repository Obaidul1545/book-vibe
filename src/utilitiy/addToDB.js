const getStoredBook = () => {
  const storeBookStr = localStorage.getItem('readList');
  if (storeBookStr) {
    const storedBookData = JSON.parse(storeBookStr);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();
  if (storedBookData.includes(id)) {
    alert('Already exsit');
  } else {
    storedBookData.push(id);
    const data = JSON.stringify(storedBookData);
    localStorage.setItem('readList', data);
  }
};

export { addToStoredDB, getStoredBook };
