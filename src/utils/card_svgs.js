// Clubs
import TwoOfClubs from '../../assets/svg_cards/2_of_clubs.svg';
import ThreeOfClubs from '../../assets/svg_cards/3_of_clubs.svg';
import FourOfClubs from '../../assets/svg_cards/4_of_clubs.svg';
import FiveOfClubs from '../../assets/svg_cards/5_of_clubs.svg';
import SixOfClubs from '../../assets/svg_cards/6_of_clubs.svg';
import SevenOfClubs from '../../assets/svg_cards/7_of_clubs.svg';
import EightOfClubs from '../../assets/svg_cards/8_of_clubs.svg';
import NineOfClubs from '../../assets/svg_cards/9_of_clubs.svg';
import TenOfClubs from '../../assets/svg_cards/10_of_clubs.svg';
import JackOfClubs from '../../assets/svg_cards/jack_of_clubs2.svg';
import QueenOfClubs from '../../assets/svg_cards/queen_of_clubs2.svg';
import KingOfClubs from '../../assets/svg_cards/king_of_clubs2.svg';
import AceOfClubs from '../../assets/svg_cards/ace_of_clubs.svg';

// Diamonds
import TwoOfDiamonds from '../../assets/svg_cards/2_of_diamonds.svg';
import ThreeOfDiamonds from '../../assets/svg_cards/3_of_diamonds.svg';
import FourOfDiamonds from '../../assets/svg_cards/4_of_diamonds.svg';
import FiveOfDiamonds from '../../assets/svg_cards/5_of_diamonds.svg';
import SixOfDiamonds from '../../assets/svg_cards/6_of_diamonds.svg';
import SevenOfDiamonds from '../../assets/svg_cards/7_of_diamonds.svg';
import EightOfDiamonds from '../../assets/svg_cards/8_of_diamonds.svg';
import NineOfDiamonds from '../../assets/svg_cards/9_of_diamonds.svg';
import TenOfDiamonds from '../../assets/svg_cards/10_of_diamonds.svg';
import JackOfDiamonds from '../../assets/svg_cards/jack_of_diamonds2.svg';
import QueenOfDiamonds from '../../assets/svg_cards/queen_of_diamonds2.svg';
import KingOfDiamonds from '../../assets/svg_cards/king_of_diamonds2.svg';
import AceOfDiamonds from '../../assets/svg_cards/ace_of_diamonds.svg';

// Hearts
import TwoOfHearts from '../../assets/svg_cards/2_of_hearts.svg';
import ThreeOfHearts from '../../assets/svg_cards/3_of_hearts.svg';
import FourOfHearts from '../../assets/svg_cards/4_of_hearts.svg';
import FiveOfHearts from '../../assets/svg_cards/5_of_hearts.svg';
import SixOfHearts from '../../assets/svg_cards/6_of_hearts.svg';
import SevenOfHearts from '../../assets/svg_cards/7_of_hearts.svg';
import EightOfHearts from '../../assets/svg_cards/8_of_hearts.svg';
import NineOfHearts from '../../assets/svg_cards/9_of_hearts.svg';
import TenOfHearts from '../../assets/svg_cards/10_of_hearts.svg';
import JackOfHearts from '../../assets/svg_cards/jack_of_hearts2.svg';
import QueenOfHearts from '../../assets/svg_cards/queen_of_hearts2.svg';
import KingOfHearts from '../../assets/svg_cards/king_of_hearts2.svg';
import AceOfHearts from '../../assets/svg_cards/ace_of_hearts.svg';

// Spades
import TwoOfSpades from '../../assets/svg_cards/2_of_spades.svg';
import ThreeOfSpades from '../../assets/svg_cards/3_of_spades.svg';
import FourOfSpades from '../../assets/svg_cards/4_of_spades.svg';
import FiveOfSpades from '../../assets/svg_cards/5_of_spades.svg';
import SixOfSpades from '../../assets/svg_cards/6_of_spades.svg';
import SevenOfSpades from '../../assets/svg_cards/7_of_spades.svg';
import EightOfSpades from '../../assets/svg_cards/8_of_spades.svg';
import NineOfSpades from '../../assets/svg_cards/9_of_spades.svg';
import TenOfSpades from '../../assets/svg_cards/10_of_spades.svg';
import JackOfSpades from '../../assets/svg_cards/jack_of_spades2.svg';
import QueenOfSpades from '../../assets/svg_cards/queen_of_spades2.svg';
import KingOfSpades from '../../assets/svg_cards/king_of_spades2.svg';
import AceOfSpades from '../../assets/svg_cards/ace_of_spades2.svg';

// Jokers
import BlackJoker from '../../assets/svg_cards/black_joker.svg';
import RedJoker from '../../assets/svg_cards/red_joker.svg';

// BackofCard
import PlayingCardBack from '../../assets/svg_cards/playingcardback.svg'


const cardProps = {
  width: '100%',
  height: '100%',
  style: { zIndex: 0, position: 'absolute' }
};

const cards = {
  // Clubs
  _2_of_clubs: <TwoOfClubs {...cardProps} />,
  _3_of_clubs: <ThreeOfClubs {...cardProps} />,
  _4_of_clubs: <FourOfClubs {...cardProps} />,
  _5_of_clubs: <FiveOfClubs {...cardProps} />,
  _6_of_clubs: <SixOfClubs {...cardProps} />,
  _7_of_clubs: <SevenOfClubs {...cardProps} />,
  _8_of_clubs: <EightOfClubs {...cardProps} />,
  _9_of_clubs: <NineOfClubs {...cardProps} />,
  _10_of_clubs: <TenOfClubs {...cardProps} />,
  _11_of_clubs: <JackOfClubs {...cardProps} />,
  _12_of_clubs: <QueenOfClubs {...cardProps} />,
  _13_of_clubs: <KingOfClubs {...cardProps} />,
  _1_of_clubs: <AceOfClubs {...cardProps} />,

  // Diamonds
  _2_of_diamonds: <TwoOfDiamonds {...cardProps} />,
  _3_of_diamonds: <ThreeOfDiamonds {...cardProps} />,
  _4_of_diamonds: <FourOfDiamonds {...cardProps} />,
  _5_of_diamonds: <FiveOfDiamonds {...cardProps} />,
  _6_of_diamonds: <SixOfDiamonds {...cardProps} />,
  _7_of_diamonds: <SevenOfDiamonds {...cardProps} />,
  _8_of_diamonds: <EightOfDiamonds {...cardProps} />,
  _9_of_diamonds: <NineOfDiamonds {...cardProps} />,
  _10_of_diamonds: <TenOfDiamonds {...cardProps} />,
  _11_of_diamonds: <JackOfDiamonds {...cardProps} />,
  _12_of_diamonds: <QueenOfDiamonds {...cardProps} />,
  _13_of_diamonds: <KingOfDiamonds {...cardProps} />,
  _1_of_diamonds: <AceOfDiamonds {...cardProps} />,

  // Hearts
  _2_of_hearts: <TwoOfHearts {...cardProps} />,
  _3_of_hearts: <ThreeOfHearts {...cardProps} />,
  _4_of_hearts: <FourOfHearts {...cardProps} />,
  _5_of_hearts: <FiveOfHearts {...cardProps} />,
  _6_of_hearts: <SixOfHearts {...cardProps} />,
  _7_of_hearts: <SevenOfHearts {...cardProps} />,
  _8_of_hearts: <EightOfHearts {...cardProps} />,
  _9_of_hearts: <NineOfHearts {...cardProps} />,
  _10_of_hearts: <TenOfHearts {...cardProps} />,
  _11_of_hearts: <JackOfHearts {...cardProps} />,
  _12_of_hearts: <QueenOfHearts {...cardProps} />,
  _13_of_hearts: <KingOfHearts {...cardProps} />,
  _1_of_hearts: <AceOfHearts {...cardProps} />,

  // Spades
  _2_of_spades: <TwoOfSpades {...cardProps} />,
  _3_of_spades: <ThreeOfSpades {...cardProps} />,
  _4_of_spades: <FourOfSpades {...cardProps} />,
  _5_of_spades: <FiveOfSpades {...cardProps} />,
  _6_of_spades: <SixOfSpades {...cardProps} />,
  _7_of_spades: <SevenOfSpades {...cardProps} />,
  _8_of_spades: <EightOfSpades {...cardProps} />,
  _9_of_spades: <NineOfSpades {...cardProps} />,
  _10_of_spades: <TenOfSpades {...cardProps} />,
  _11_of_spades: <JackOfSpades {...cardProps} />,
  _12_of_spades: <QueenOfSpades {...cardProps} />,
  _13_of_spades: <KingOfSpades {...cardProps} />,
  _1_of_spades: <AceOfSpades {...cardProps} />,

  // Jokers
  _black_joker: <BlackJoker {...cardProps} />,
  _red_joker: <RedJoker {...cardProps} />,

  _blank: <PlayingCardBack {...cardProps}/>
};

const Card = (props) => {
  const CardComponent = cards[props.cardState];
  return CardComponent;
};

export default Card;

