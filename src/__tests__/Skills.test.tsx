/**
 * @file __tests__/Skills.test.tsx
 * @description Unit tests for the Skills component.
 */

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import Skills from '../components/Skills';

// Mock react-intersection-observer so inView is always true in tests
jest.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: jest.fn(), inView: true }),
}));

describe('Skills component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Skills />
      </Provider>
    );
  });

  it('renders the skills section', () => {
    expect(screen.getByTestId('skills')).toBeInTheDocument();
  });

  it('displays the section heading', () => {
    expect(screen.getByText(/Skills & Tools/i)).toBeInTheDocument();
  });

  it('renders every skill group', () => {
    [
      'Core Frontend',
      'React Ecosystem',
      'Styling & Design',
      'API & Data Handling',
      'Performance',
      'Workflow',
      'Build & Deployment',
      'AI-Assisted Development',
    ].forEach(title => expect(screen.getByText(title)).toBeInTheDocument());
  });

  it('renders key skills', () => {
    ['TypeScript', 'Redux Toolkit', 'React Query (Basic)', 'GitHub Copilot'].forEach(skill =>
      expect(screen.getAllByText(skill).length).toBeGreaterThan(0)
    );
  });
});
