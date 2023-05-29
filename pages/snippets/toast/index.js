import { CodeSection } from 'react-code-section-lib';
export default function Index() {
  const value = ` import { render, screen } from '@testing-library/react';
 import App from './App';
  
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });`;
  return (
    <div>
      <h3>Toast</h3>
      <div>A simple reusable notification toasts</div>
      <CodeSection showLineNumbers theme="dark" lang="react">
        {value}
      </CodeSection>
    </div>
  );
}
