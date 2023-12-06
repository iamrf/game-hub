import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Banner {
    og: string;
    sm: string;
}

export interface GameImage {
    banner: Banner;
    box: Banner;
}

export interface Game {
    id: number;
    name: string;
    tier: string;
    topCriticScore: number;
    firstReleaseDate: string;
    images: GameImage;
}

const useGames = () => {
    const controller = new AbortController();
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        apiClient
            .get("/game/hall-of-fame", { signal: controller.signal })
            .then((res) => {
                setGames(res.data);
                setError("");
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });

        return () => controller.abort();
    }, []);

    return { games, error, isLoading };
};

export default useGames;
