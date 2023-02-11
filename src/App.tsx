import { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

enum SortType {
  NONE,
  ALPHABET,
  LENGTH,
}

type ReorderOptions = {
  sortType: SortType;
  isReversed: boolean;
};

export function getReorderedGoods(
  goods: string[],
  { sortType, isReversed }: ReorderOptions,
) {
  const visibleGoods = [...goods];

  visibleGoods.sort((good1, good2) => {
    switch (sortType) {
      case SortType.ALPHABET:
        return good1.localeCompare(good2);

      case SortType.LENGTH:
        return good1.length - good2.length;

      default:
        return 0;
    }
  });

  if (isReversed) {
    visibleGoods.reverse();
  }

  return visibleGoods;
}

export const App: React.FC = () => {
  const [reorderOptions, setReorderOptions] = useState({
    sortType: SortType.NONE,
    isReversed: false,
  });

  const reoderedGoods = getReorderedGoods(goodsFromServer, reorderOptions);

  const sortAlphabetically = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.remove('is-light');
    document.querySelector('.buttons')?.children[1].classList.add('is-light');

    setReorderOptions((state) => ({
      ...state,
      sortType: SortType.ALPHABET,
    }));
  };

  const sortByLength = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.remove('is-light');
    document.querySelector('.buttons')?.children[0].classList.add('is-light');

    setReorderOptions((state) => ({
      ...state,
      sortType: SortType.LENGTH,
    }));
  };

  const reverse = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.classList.toggle('is-light');

    setReorderOptions((state) => ({
      ...state,
      isReversed: !state.isReversed,
    }));
  };

  const reset = () => {
    document.querySelector('.buttons')?.children[0].classList.add('is-light');
    document.querySelector('.buttons')?.children[1].classList.add('is-light');
    document.querySelector('.buttons')?.children[2].classList.add('is-light');

    setReorderOptions({
      sortType: SortType.NONE,
      isReversed: false,
    });
  };

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="
            button
            is-info
            is-light
          "
          onClick={(e) => {
            sortAlphabetically(e);
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="
            button
            is-success
            is-light
          "
          onClick={(e) => {
            sortByLength(e);
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="
            button
            is-warning
            is-light
          "
          onClick={(e) => {
            reverse(e);
          }}
        >
          Reverse
        </button>

        {reoderedGoods.toString() !== goodsFromServer.toString() && (
          <button
            type="button"
            className="
            button
            is-danger
            is-light
          "
            onClick={reset}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {reoderedGoods.map((good) => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
