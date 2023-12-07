import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useData = <T>(endpoint: string) => {
    // const controller = new AbortController();
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        apiClient
            .get(endpoint, {
                // signal: controller.signal,
            })
            .then((res) => {
                setData(res.data);
                setError("");
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        // return () => controller.abort();
    }, []);

    return { data, error, isLoading };
};

export default useData;
