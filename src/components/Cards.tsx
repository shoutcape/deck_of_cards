import { View } from 'react-native';
import cardStyles from '../styles/cardStyles';
import Card from '../utils/card_svgs';

interface CardProps {
  cardState: string;
  secondCardState: string;
}

const Cards: React.FC<CardProps> = (props: CardProps) => {
  const { cardState, secondCardState } = props;

  return (
    <View style={cardStyles.card}>
      <Card  cardState={cardState} />
      <Card  cardState={secondCardState} />
    </View>
  );
};

export default Cards
