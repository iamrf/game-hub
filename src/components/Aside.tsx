import React from 'react'
import useGenres from '../hooks/useGenrs'
import { SkeletonText, Text } from '@chakra-ui/react'

const Aside = () => {
    const { data: genres, error, isLoading } = useGenres()
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    console.log(genres)

    return (
        <>
            {error && <Text>{error}</Text>}
            {isLoading && skeleton.map(sk => <li key={sk}>
                <SkeletonText width={40} marginY={2} />
            </li>)}
            <ul>{genres.map(genre => <li key={genre.id}>{genre.name}</li>)}</ul>
        </>
    )
}

export default Aside