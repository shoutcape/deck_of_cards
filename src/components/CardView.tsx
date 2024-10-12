import { Pressable, Text, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import cardStyles from '../styles/cardStyles';
import Swiper from 'react-native-deck-swiper';
import Card from '../utils/card_svgs';

const CardView: React.FC = () => {
  const [cardDeck, setCardDeck] = useState<string[]>([]);
  const [reset, setReset] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [emptyDeck, setEmptyDeck] = useState<boolean>(false);
  const [cardCount, setCardCount] = useState<number>(52);
  const swiperRef = useRef(null);

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
    setEmptyDeck(false);
    setCardCount(52)
  }, [reset]);

  return (
    <View>
      <View style={cardStyles.container}>
        <Swiper
          key={reset ? 1 : 0}
          ref={swiperRef}
          backgroundColor='none'
          cards={['_blank', ...cardDeck]}
          renderCard={(card) => {
            return (
              <View style={cardStyles.card}>
                <Card cardState={card} />
              </View>
            );
          }}
          onSwipedAll={() => setEmptyDeck(true)}
          onSwiped={() => setCardCount(cardCount > 0 ? cardCount-1 : 0)}
          cardStyle={cardStyles.card}
          containerStyle={cardStyles.container}
          stackSize={2}
        />
      </View>
      <View>
        <Pressable
          style={[cardStyles.button, isClicked && cardStyles.buttonFocus]}
          onPressIn={() => setIsClicked(true)}
          onPressOut={() => setIsClicked(false)}
          onPress={() => swiperRef.current.swipeRight()}
        >
          <Text style={cardStyles.buttonText}>Next ({cardCount}) </Text>
        </Pressable>
        {emptyDeck && (
          <Pressable
            style={cardStyles.button}
            onPressIn={() => setIsClicked(true)}
            onPressOut={() => setIsClicked(false)}
            onPress={() => setReset(!reset)}
          >
            <Text style={cardStyles.buttonText}>Reset</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default CardView;
