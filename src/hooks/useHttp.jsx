import { useCallback } from "react";

export const useHttp = () => {
  const request = useCallback(
    async (
      url,
      method = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      try {
        const resource = await fetch(url, { method, body, headers });

        if (!resource.ok) {
          throw new Error(
            `Ошибка по запросу: ${url}, статус: ${resource.status}`
          );
        }

        const data = await resource.json();

        return data;
      } catch (e) {
        throw new Error();
      }
    },
    []
  );
  return { request };
};
