import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'
import CriticScore from './CriticScore'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card overflow={'hidden'}>
            <Image src={'https://img.opencritic.com/' + game.images.banner.sm}></Image>
            <CardBody>
                <HStack>
                    <Heading fontSize={'xl'} lineHeight='8'>
                        {game.name}
                    </Heading>
                    <CriticScore score={game.topCriticScore} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard