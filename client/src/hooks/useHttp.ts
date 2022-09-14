import axios, { AxiosError } from "axios";
import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const request = useCallback(
    async (url: string, method = "get", data: {}, headers: {}) => {
      setLoading(true);
      try {
        const response = await axios({ method, url, data, headers });

        return response.data;
      } catch (error) {
        const errors = error as Error | AxiosError;
        if (!axios.isAxiosError(errors)) {
          setError((error as Error).message);
        } else {
          const errResponse = errors.response?.data;

          if (errResponse) {
            setError((errResponse as Error).message);
          }
        }

        throw error;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const clearError = useCallback(() => setError(""), []);

  return {
    loading,
    request,
    error,
    clearError,
  };
};
