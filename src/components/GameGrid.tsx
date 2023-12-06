import { SimpleGrid, Text } from '@chakra-ui/react'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'
import GameCardSkeleton from './GameCardSkeleton'
import GameCardContainer from './GameCardContainer'


const GameGrid = () => {
    const { data: games, error, isLoading } = useGames()
    const skeleton = [1, 2, 3, 4, 5, 6]

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} padding={'10px'} spacing={10}>
                {isLoading && skeleton.map(sk => (
                    <GameCardContainer>
                        <GameCardSkeleton key={sk} />
                    </GameCardContainer>
                ))}
                {games.map(game => (
                    <GameCardContainer>
                        <GameCard game={game} key={game.id} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid