import { View } from 'react-native';
import cardStyles from '../styles/cardStyles';
import Card from '../utils/card_svgs';

interface CardProps {
  cardState: string;
}

const Cards: React.FC<CardProps> = (props: CardProps) => {
  const { cardState } = props;

  return (
    <View style={cardStyles.card}>
      <Card cardState={cardState} />
    </View>
  );
};

export default Cards
