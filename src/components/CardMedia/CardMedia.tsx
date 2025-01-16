import { Card, CardBody, Image } from "@nextui-org/react";
import { ITunesSearchResponse } from "@/types/types";

interface ICardMediaProps {
  results: ITunesSearchResponse[] | [];
}

function CardMedia({ results }: ICardMediaProps) {
  return (
    <div
      className={`grid ${
        results.length > 0
          ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          : ""
      }`}
    >
      {results.length > 0 ? (
        results.map((result) => (
          <Card
            key={result.trackId}
            className="flex flex-col justify-center items-center text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <CardBody className="flex flex-col items-center justify-between">
              <Image
                src={result.artworkUrl100}
                alt={result.trackName}
                width={150}
                height={150}
                className="rounded-lg"
              />
              <h4 className="mt-3 font-semibold text-lg">{result.trackName}</h4>
              <p className="text-sm text-gray-600">{result.artistName}</p>

              <div className="mt-4 w-full text-left">
                <p className="text-blue-500 font-medium">
                  Collection Price: ${result.collectionPrice}
                </p>

                <p className="text-blue-500 font-medium">
                  Track Price: ${result.trackPrice}
                </p>
              </div>
            </CardBody>
          </Card>
        ))
      ) : (
        <span className="text-center">Not Found</span>
      )}
    </div>
  );
}

export default CardMedia;
