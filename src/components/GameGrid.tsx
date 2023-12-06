import { Image, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'


const GameGrid = () => {
    const { games, error } = useGames()

    console.log(games)

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(game => <li key={game.id}>
                    <div>
                        {game.topCriticScore} - {game.name} ({game.id})
                    </div>
                    <div>
                        {new Date(game.firstReleaseDate).toString()}
                    </div>
                    <Image src={'https://img.opencritic.com/' + game.images.box.og} alt={game.name + ' Banner'} />
                </li>)}
            </ul>
        </>
    )
}

export default GameGrid