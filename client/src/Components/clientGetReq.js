import $ from 'jquery';

 const getItemSelection = function (number, callback) {
  $.get(`http://localhost:3000/checkout/${number}`, (data) => {
    console.log(data)
    callback(null, data);
  });
};


 export default getItemSelection;