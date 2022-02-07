interface IHall {
  id: string | number
  name: string
  seat: number
}

export const halls: IHall[] = [
  {
    id: 1,
    name: 'Hall 1',
    seat: 120
  },
  {
    id: 2,
    name: 'Hall 2',
    seat: 120
  },
  {
    id: 3,
    name: 'Hall 3',
    seat: 120
  },
]