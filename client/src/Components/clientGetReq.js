import $ from 'jquery';

  const getItemSelection = (number) => {
    return new Promise ((resolve, reject) => {
      $.get(`http://localhost:3000/checkout/${number}`, (data) => {
      // console.log(data)
      // if (err){
      //   console.log(err, 'prmoise error')
      //   console.log(data, 'this is dstat error')
      //   reject(err);
      // }
      resolve(data);
      });
    })
  };


 export default getItemSelection;