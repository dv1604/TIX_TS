import ASSESTS from "../../../assests";
import {faker} from '@faker-js/faker';

export interface NewsArticle {
    id: Number;
    title: string;
    description: string;
    image: string;
    category: 'Spotlight' | 'News' | "Video";
    keywords: string[];
}

const generateLongDescription = () => {
    return Array.from({ length: 3})
        .map(() => faker.lorem.sentences(10))
        .join("\n\n"); 
};

export const articles:NewsArticle[] = [
    {
        id: 1,
        title: "Spider-Man: No Way Home Releases Latest Trailer",
        description:generateLongDescription(),
        image: ASSESTS.images.news1,
        category: "Spotlight",
        keywords: ["Spider-Man", "Peter Parker"],
    },
    {
        id: 2,
        title: "Facts About the Movie Yowis Ben Finale You Need to Know Before Watching!",
        description:generateLongDescription(),
        image:ASSESTS.images.news2,
        category: "Spotlight",
        keywords: ["Yowis Ben","Film Indonesia"],
    },
    {
        id: 3,
        title: "Ghostbusters: Afterlife Introduces a Variety of New Ghosts",
        description:generateLongDescription(),
        image: ASSESTS.images.news3,
        category: "News",
        keywords: ["Ghostbusters"],
    },
    {
        id: 4,
        title: "House of Gucci: The Story of Gucci's Sole Heir in 1955",
        description:generateLongDescription(),
        image: ASSESTS.images.gucci2,
        category: "News",
        keywords: ["House of Gucci", "Lady Gaga"],
    },
    {
        id: 5,
        title: "Donnie Yen's Action in the Latest Hong Kong Action Movie",
        description:generateLongDescription(),
        image: ASSESTS.images.donnie_yen,
        category: "News",
        keywords: [],
    },
]

export const extractkeywords = (articles:NewsArticle[]) => {
    const keywordArray = new Set<string>();
    articles.forEach((article)=>{
        article.keywords.forEach((keyword) => keywordArray.add(keyword));
    })

    return Array.from(keywordArray);
};