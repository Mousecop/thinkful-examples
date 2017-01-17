
// data
var dataSource1 = [
    {
      id: '0',
      firstName: 'Juan',
      lastName: 'Doe',
      age: 32
    },
    {
      id: '1',
      firstName: 'Jane',
      lastName: 'Doe',
      age: 31
    },
    {
      id: '2',
      firstName: 'Janice',
      lastName: 'Doe',
      age: 30
    },
    {
      id: '3',
      firstName: 'Jake',
      lastName: 'Doe',
      age: 29
    },
  ];

var dataSource2 = [
    {
      id: '0',
      occupation: 'architect',
      address: {
        street: '123 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '1',
      occupation: 'architect',
      address: {
        street: '234 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '2',
      occupation: 'architect',
      address: {
        street: '345 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '3',
      occupation: 'architect',
      address: {
        street: '456 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
  ];



function mergeData(d1, d2) {
  var d3 = [];
  d1.forEach(function (item) {
    var newItem = item;
    // doing stuff
    var other = d2.find(function (item_) {
      return item.id === item_.id;
    });

    // comibe other and newItem
    Object.keys(other).forEach(function (key) {
      newItem[key] = other[key];
    });

    d3.push(newItem);
  });

  // return the new combined array objects
  return d3;
}



console.log(mergeData(dataSource1, dataSource2));
