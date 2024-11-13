
import { MostKistened } from "./MostListened";
import { newRelease } from "./NewRelease";
import { recommendedSongs } from "./songs";


export const songsWithCategory = [
    {
        title: 'Recommended for you',
        songs: recommendedSongs
    },

    {
        title: 'New Release',
        songs: newRelease
    },

    {
        title: 'Most listened',
        songs: MostKistened
    },
]