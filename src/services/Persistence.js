const Local = {
  save: (list) => {
    localStorage.setItem('rgbApp', JSON.stringify(list));
  },
  load: () => {
    try {
      if (localStorage.getItem('rgbApp') == 'undefined')
        localStorage.setItem('rgbApp', JSON.stringify([]));
      return JSON.parse(localStorage.getItem('rgbApp'));
    } catch {
      return [];
    }
  },
};

export default Local;
