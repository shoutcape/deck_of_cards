import { Pressable, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Cards from './Cards';
import cardStyles from '../styles/cardStyles';

const CardView: React.FC = () => {
  const [cardState, setCardState] = useState<string>('_blank');
  const [cardDeck, setCardDeck] = useState<string[]>([]);
  const [reset, setReset] = useState<boolean>(false);

  const cardTypes = ['clubs', 'diamonds', 'hearts', 'spades'];

  const createCardDeck = () => {
    const cards: string[] = [];
    for (let i = 0; i < 52; i++) {
      const cardType = cardTypes[Math.floor(i / 13)];
      cards[i] = `_${(i % 13) + 1}_of_${cardType}`;
    }
    return cards;
  };

  const shuffleCardDeck = (freshCardDeck: string[]) => {
    for (let i = freshCardDeck.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = freshCardDeck[i];
      freshCardDeck[i] = freshCardDeck[j];
      freshCardDeck[j] = temp;
    }

    return freshCardDeck;
  };

  useEffect(() => {
    const freshCardDeck = createCardDeck();
    const shuffledCardDeck = shuffleCardDeck(freshCardDeck);
    setCardDeck(shuffledCardDeck);
    setCardState('_blank');
  }, [reset]);

  const dismissCard = () => {
    cardDeck.pop();
    if (cardDeck.length <= 0) {
      setCardState('_blank');
    } else {
      const length = cardDeck.length;
      const topCard = cardDeck[length - 1];
      setCardState(topCard);
    }
  };



  return (
    <View>
      <View style={cardStyles.container}>
        <Cards cardState={cardState} />
      </View>
      <View>
        <Pressable style={cardStyles.button} onPress={dismissCard}>
          <Text style={cardStyles.buttonText}>Next {cardDeck.length}</Text>
        </Pressable>
        {cardDeck.length <= 0 && (
          <Pressable style={cardStyles.button} onPress={() => setReset(!reset)}>
            <Text style={cardStyles.buttonText}>Reset</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default CardView;
