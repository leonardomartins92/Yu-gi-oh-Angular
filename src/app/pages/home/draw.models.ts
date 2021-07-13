export interface Draw {
    success?: boolean;
    deck_id?: string;
    cards: CardDeck[];
}

export interface CardDeck {
    code: string;
    image: string;
    images: {
        svg: string;
        png: string;
    };
    value: string;
    suit: string;
}