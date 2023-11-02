import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkelton from "./GameCardSkelton";

const GameGrid = () => {
  const { games, error, isLoading } = useGame();
  const skeltons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" spacing={5}>
        {isLoading &&
          skeltons.map((skelton) => <GameCardSkelton key={skelton} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
