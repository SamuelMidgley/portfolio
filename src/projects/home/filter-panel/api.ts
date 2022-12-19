export interface IFilter {
  name: string
  options: string[]
  key: string
}

const filters: IFilter[] = [
  {
    name: 'Programming Languages',
    options: ['Python', 'JS', 'C#', 'Go'],
    key: 'c90b6720-695f-480f-99ac-86c31f2da6e3',
  },
  {
    name: 'Technologies & Skills',
    options: ['React', '.NET Core', 'PyTorch', 'ML', 'ThreeJS'],
    key: '07fed847-a6e0-4498-9fec-6ededc8e4826',
  },
  {
    name: 'Other',
    options: ['HTML', 'CSS'],
    key: 'c29e4d58-bf65-49dc-a417-dded75821d08',
  },
]

export default filters
