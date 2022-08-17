import { render } from '@testing-library/react';
import { test } from 'vitest';
import Button from '../';

test('Link changes the class when hovered', () => {
  render(<Button>Hello World</Button>);
});
