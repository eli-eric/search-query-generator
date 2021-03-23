# search-query-generator
Generates PaNOSC Search Api queries

## Usage
Needs two parameters, config and filters, e.g.:
```
const config = {
  skip: 0,
  limit: 10,
  include: [
    ['members', 'person'],
    ['members', 'affiliation'],
    ['datasets', 'parameters'],
  ],
}

const filters = [
  {
    target: ['datasets', 'parameters'],
    operator: 'and',
    filters: [
      {
        name: 'wavelength',
        value: [700, 900],
        operator: 'between',
        unit: 'nm'
      },
      {
        name: 'photon_energy',
        value: [800, 900],
        operator: 'between',
        unit: 'eV',
      },
    ],
  },
  {target: ['datasets', 'techniques'], value: 'x-ray absorption'},
  {
    target: ['members', 'person'],
    value: 'Bob',
    name: 'fullName',
  },
  {name: 'title', value: 'recoil', operator: 'ilike'},
  {name: 'type', value: 'proposal'},
]

const query = generator(config, filters)
```
