import React, { useState, useCallback } from 'react';
import nanoid from 'nanoid';
import useLazyLoading from '../utils/useLazyLoading';

// App.js
export default function App() {
  const [items, setItems] = useState(Array(50).fill('').map(nanoid));

  // функция "доклеивающая" элементы массива
  const appendItems = useCallback(() => {
    setItems([...items, ...Array(10).fill('').map(nanoid)]);
  }, [items, setItems]);

  // custom-hook отслеживающий скролл посредством референции и функции
  // обработчика скролл эвента
  const [onScroll, containerRef] = useLazyLoading({
    appendItems,
    delay: 1200,
  });

  return (
    <div className="App">
      <Container ref={containerRef} onScroll={onScroll}>
        <List items={items} />
      </Container>
    </div>
  );
}

