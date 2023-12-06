import useData from "./useData";

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

const useGames = () => useData<Game>("game/hall-of-fame");

export default useGames;
