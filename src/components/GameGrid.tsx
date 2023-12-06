import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'


const GameGrid = () => {
    const { games, error, isLoading } = useGames()
    const skeleton = [1, 2, 3, 4, 5, 6]

    console.log(games)

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={'10px'} spacing={10}>
                {isLoading && skeleton.map(sk => <GameCardSkeleton key={sk} />)}
                {games.map(game => <GameCard game={game} key={game.id} />)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid