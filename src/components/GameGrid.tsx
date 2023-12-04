import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react'

interface Game {
    id: number,
    name: string,
    tier: string,
    topCriticScore: number,
    firstReleaseDate: string
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient.get('/game/hall-of-fame')
            .then(res => {
                setGames(res.data)
                setError('')
                console.log(games)
            })
            .catch(err => {
                setError(err.message)
                console.log(error)
            })
    }, [])

    console.log(games)

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.topCriticScore} - {game.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid