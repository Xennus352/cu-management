"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type UseFetch = {
  data: undefined | [];
  loading: boolean;
  error: string | null;
};

export const useFetch = (url: string): UseFetch => {
  const [data, setData] = useState<undefined | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
