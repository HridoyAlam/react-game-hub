import { Game } from "../hooks/useGame";
import { Card, Image, CardBody, Heading, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../Services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card width="350px" borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
