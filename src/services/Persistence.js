const Local = {
  save: (list) => {
    localStorage.setItem('rgbApp', JSON.stringify(list));
  },
  load: () => {
    try {
      return JSON.parse(localStorage.getItem('rgbApp'));
    } catch(exception) {
      console.log(exception);
      return [];
    }
  },
};

export default Local;
