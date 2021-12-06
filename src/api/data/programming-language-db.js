import mock from '../mock';

const ProgrammingLanguageDB = [
  {
    key: 1,
    title: 'PHP',
    route: 'PHPRoute',
  },
  {
    key: 2,
    title: 'Javascript',
    route: 'JavascriptRoute',
  },
  {
    key: 3,
    title: 'C',
  },
  {
    key: 4,
    title: 'C++',
  },
  {
    key: 5,
    title: 'C#',
  },
  {
    key: 6,
    title: 'Java',
  },
  {
    key: 7,
    title: 'Phyton',
  },
];

mock.onGet('/api/programming-language').reply(() => {
  return [200, ProgrammingLanguageDB];
});
