import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Default } from '../stories/titleSection.stories';

describe('Renders title section component', () => {

    test('with default', () => {
      const { container, getByTestId } = render(<Default />);
      expect(container).toBeTruthy();
      const title = getByTestId('default-title')
      expect(title.classList.contains('title-section-atom')).toBe(true)
    });
  });