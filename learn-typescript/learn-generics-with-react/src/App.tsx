import React, { useEffect, useState } from 'react';
import Generics from './components/Generics';
import { fetchData } from './components/FetchWithTS';
import type { Todo } from './components/FetchWithTS';

interface Props {
  name?: string | null;
}

const App: React.FC<Props> = () => {
  const [data, setData] = useState([] as Todo[]);
  useEffect(() => {
    const fetch = async () => {
      setData(await fetchData<Todo[]>('https://jsonplaceholder.typicode.com/todos'));
    };
    fetch();
  }, []);

  

  return (
    <div>
      <Generics />
      <h2>Fetch with TS</h2>
      <code>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </code>
    </div>
  );
};

export default App;
