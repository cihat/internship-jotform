
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: false;
}

async function fetchData<T extends object | any[]>(input: RequestInfo, init?: RequestInit): Promise<T> {
  const res = await fetch(input, init?? {});
  return res.json() as T
}

export { fetchData };

export type { Todo };
