const ApiService = {

  get(url) {
    let myData = undefined;
    fetch(url)
      .then(res => res.json())
      .then(data => myData = data)
      // eslint-disable-next-line no-console
      .catch(err => console.log(err));
    return myData;
  }

};
