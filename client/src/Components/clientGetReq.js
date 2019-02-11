import $ from 'jquery';

  const getItemSelection = (number) => {
    return new Promise ((resolve, reject) => {
      $.get(`http://localhost:3000/checkout/${number}`, (data) => {
        resolve(data);
      });
    })
  };


 export default getItemSelection;