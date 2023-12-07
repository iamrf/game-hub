import React from 'react'
import useGenres from '../hooks/useGenrs'
import { List, ListItem, SkeletonText, Spinner, Text } from '@chakra-ui/react'

const Aside = () => {
    const { data: genres, error, isLoading } = useGenres()
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <List>
            {error && <Text>{error}</Text>}
            {isLoading && skeleton.map(sk => <ListItem marginY={4} key={sk}>
                <SkeletonText width={40} marginY={2} />
            </ListItem>)}
            <ul>{genres.map(genre => <ListItem marginY={4} key={genre.id}>{genre.name}</ListItem>)}</ul>
        </List>
    )
}

export default Aside