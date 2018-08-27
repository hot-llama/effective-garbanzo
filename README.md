# effective-garbanzo

1. Run yarn to install deps
2. gatsby develop to run.

```javascript
//
{
  locale: '-700',
  email: 'bob@joe.com',
  id: 12335435,
  settings: {
    1: [
      { id: 'alcohol', cell: [0, 0], size: 2, type: 'int' }
    ],
    2: [
      { id: 'pancakes', cell: [2, 1], size: 1, type: 'emoji' },
      { id: 'travel', cell: [2, 3], size: 3, type: 'string' }
    ]
  },
  customOptions: [],
}


// list of input options
[{ id: 'alcohol', defaultSize: 2, type: 'int' }]

//
{
  id: 123233545,
  createdOn: 1233456,
  userid: 'bob',
  data: {
    entry: 'killed clowns after 20 pancakes in canada'
    alcohol: 4,
    pancakes: 20,
    travel: 'Canada',
  }
}
```
