import { trpc } from "@/shared/api";

type QuitEventButtonProps = {
  eventId: number;
  onSuccess?: () => void;
};

export const QuitEventButton = ({
  eventId,
  onSuccess,
}: QuitEventButtonProps) => {
  const { mutate } = trpc.event.quit.useMutation({ onSuccess });

  const handleClick = () => {
    console.log('quitting event',eventId)
    mutate({ id: eventId });
  };

  return (
    <button
      className="h-10 px-6 font-semibold rounded-md bg-red-500 text-white"
      onClick={handleClick}
    >
      Покинуть событие
    </button>
  );
};
