import { useState } from 'react';
import { bind } from './core/styles/bind';
import styles from './hello-world.module.css';
import Logo from './assets/technology.svg';
const cx = bind(styles);

const items = [
  {
    label: '🪄 Typescript',
    id: 'typescript',
    description: 'A superset of JavaScript that adds static typing to improve code safety and maintainability.',
  },
  {
    label: '🔬 EsLint',
    id: 'eslint',
    description: 'A linting tool that helps identify and fix code errors and stylistic issues.',
  },
  { label: '🧹 Prettier', id: 'prettier', description: 'A code formatter that ensures consistent code style.' },
  {
    label: '🚀 Husky',
    id: 'husky',
    description: 'A pre-commit hook that automatically runs Prettier and ESLint before each commit.',
  },
  {
    label: '📍 Styles',
    id: 'styles',
    description: 'Contains a binder bassed on classnames/bind and theme definition.',
  },
  { label: '🌏 i18n', id: 'i18n', description: 'A library for implementing translations in React applications.' },
  {
    label: '🧱 Routes',
    id: 'routes',
    description: 'Uses react-router-dom, a library for writing unit tests for React components.',
  },
  { label: '⚗️ Testing', id: 'testing', description: 'Includes: jest, react-testing-library and cypress.' },
  {
    label: '📧 Alias',
    id: 'alias',
    description: 'Configure aliases to simplify import paths and improve code readability.',
  },
];

export const HelloWorldPage = () => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <main className={cx('wrapper')}>
      <header className={cx('header')}>
        <img className={cx('logo')} src={Logo} />
        <p className={cx('caption')}>
          <span className={cx('strong')}>React Template</span> made by{' '}
          <span className={cx('strong', 'primary')}>Maria Moran</span>
        </p>
      </header>

      <section className={cx('section', 'hero')}>
        <h1 className={cx('title')}>React Template</h1>
        <p className={cx('description')}>
          Start developing your React applications quickly, efficiently and securely with this template.
        </p>
        <div className={cx('links')}>
          <a target="_blank" className={cx('link')} href="https://github.com/mariamoraan">
            <span className={cx('strong')}>😼 Author Github</span>
            <span>
              Check my github: <span className={cx('primary', 'strong')}>mariamoraan</span>
            </span>
          </a>
          <a target="_blank" className={cx('link')} href="https://x.com/_mariamoraan">
            <span className={cx('strong')}>🐦 Author Twitter</span>
            <span>
              Check my twitter: <span className={cx('primary', 'strong')}>@_mariamoraan</span>
            </span>
          </a>
        </div>
        <p className={cx('powered-by')}>Powered by Vite</p>
        <a
          target="_blank"
          href="https://github.com/mariamoraan/react-template"
          className={cx('button', 'primary-button', 'give-me-star')}
        >
          ⭐️ Give me a star ⭐️
        </a>
      </section>

      <section className={cx('section', 'how-to-start')}>
        <h2 className={cx('title')}>
          How to start <span className={cx('primary', 'strong')}>?</span>
        </h2>
        <ol className={cx('steps')}>
          <li className={cx('step')}>
            <p>1. Install dependencies with npm</p>
            <code className={cx('code')}>npm run install</code>
          </li>
          <li className={cx('step')}>
            <p>2. Start the development server</p>
            <code className={cx('code')}>npm run dev</code>
          </li>
          <li className={cx('step')}>
            <p>
              3. Open the application at{' '}
              <a target="_blank" href="http://localhost:3000">
                http://localhost:3000
              </a>
            </p>
          </li>
        </ol>
      </section>

      <section className={cx('section', 'whats-in')}>
        <h2 className={cx('title')}>
          Whats in <span className={cx('primary', 'strong')}>?</span>
        </h2>
        <div className={cx('content')}>
          <ul className={cx('items')}>
            {items.map((item) => (
              <li key={item.id}>
                <button
                  className={cx('item', selectedItem.id === item.id && 'selected')}
                  onClick={() => setSelectedItem(item)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          <div className={cx('description')}>
            <h3 className={cx('item')}>{selectedItem.label}</h3>
            <p className={cx('item-description')}>{selectedItem.description}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
