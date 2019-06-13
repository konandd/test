import renderer from 'react-test-renderer';

const { expect } = global;
export const toMatchSnapshot = (name, component) => {
  expect(
    renderer
      .create(component)
      .toJSON(),
  ).toMatchSnapshot('react-test-renderer');
};
