import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/useGames'

interface Props {
    game: Game
}

const GameCard = ({ game }: Props) => {
    return (
        <Card overflow={'hidden'}>
            <Image src={'https://img.opencritic.com/' + game.images.banner.sm}></Image>
            <CardBody>
                <Heading fontSize={'xl'} lineHeight='8'>
                    {game.name}
                </Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard