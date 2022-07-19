function useTimestamp<T extends object>(obj: T) {
  return {
    ...obj,
    createdAt: Date.now(),
  } as T & { createdAt: number }; // type assertion
}

export default useTimestamp;