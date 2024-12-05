"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const drawnCards = new Set<string>();

export function TarotCard() {
    const [card, setCard] = useState<string | null>(null);
    const [cardDescription, setCardDescription] = useState<string | null>(null);

    useEffect(() => {
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
        let selectedCard = cardNames[getRandomInt(cardNames.length)];

        while (drawnCards.has(selectedCard)) {
            selectedCard = cardNames[getRandomInt(cardNames.length)];
        }

        drawnCards.add(selectedCard);
        setCard(selectedCard);
        setCardDescription(cards[selectedCard]);
    }, []);

    if (!card || !cardDescription) return null;

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{card}</CardTitle>
                    {/* <CardDescription>{cardDescription}</CardDescription> */}
                </CardHeader>
                <CardContent>
                    <Image src="/image.png" alt="image" width={200} height={200} />
                </CardContent>
                <CardFooter>
                    {/* <p>Card Footer</p> */}
                    <CardDescription>{cardDescription}</CardDescription>

                </CardFooter>
            </Card>
        </div>
    )
}