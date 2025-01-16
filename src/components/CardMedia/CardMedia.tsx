import { Card, CardBody, Image } from "@nextui-org/react";
import { ITunesSearchResponse } from "@/types/types";

interface ICardMediaProps {
  results: ITunesSearchResponse[] | undefined;
}

function CardMedia({ results }: ICardMediaProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {results?.map((result) => (
        <Card key={`${Date.now()}-${result.artistName}`}>
          <CardBody>
            <Image
              src={result.artworkUrl100}
              alt={result.trackName}
              width={150}
              height={150}
            />
            <h4>{result.trackName}</h4>
            <p>{result.artistName}</p>
            <p className="text-sm text-gray-500">{result.collectionName}</p>
            <div className="mt-2">
              {result.collectionPrice > 0 && (
                <p className="text-blue-500">
                  Collection Price: ${result.collectionPrice}
                </p>
              )}
              {result.trackPrice > 0 && (
                <p className="text-blue-500">
                  Track Price: ${result.trackPrice}
                </p>
              )}
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default CardMedia;
