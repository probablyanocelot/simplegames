import Image from "next/image";


import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"


export function TarotCard() {

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }

    const cards = {
        'The Fool': 'A card representing new beginnings, having faith in the future, and being inexperienced.',
        'The Magician': 'A card representing skill, logic, and intellect.',
        'The High Priestess': 'A card representing intuition, mystery, and the subconscious mind.',
        'The Empress': 'A card representing fertility, femininity, and abundance.',
        'The Emperor': 'A card representing authority, structure, and control.',
        'The Hierophant': 'A card representing tradition, conformity, and morality.',
        'The Lovers': 'A card representing love, harmony, and relationships.',
        'The Chariot': 'A card representing determination, willpower, and control.',
        'Strength': 'A card representing courage, bravery, and inner strength.',
        'The Hermit': 'A card representing introspection, solitude, and inner guidance.',
        'Wheel of Fortune': 'A card representing change, cycles, and inevitable fate.',
        'Justice': 'A card representing fairness, truth, and law.',
        'The Hanged Man': 'A card representing suspension, restriction, and letting go.',
    };

    const cardNames = Object.keys(cards);
    const card = cardNames[getRandomInt(cardNames.length)];
    const cardDescription = cards[card];

    console.log(`Card: ${card}, Description: ${cardDescription}`);

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{card}</CardTitle>
                    <CardDescription>{cardDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image src="/image.png" alt="image" width={200} height={200} />
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </div>
    )
}