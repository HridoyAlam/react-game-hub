import { Game } from "../hooks/useGame";
import { Card, Image, CardBody, Heading, Text, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../Services/image-url";
import CriticScore from "./CriticScore";
import EmojiMap from "./EmojiMap";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name} <EmojiMap rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
