import { EventCard } from "@/entities/event";
import { JoinEventButton } from "@/features/join-event";
import { trpc } from "@/shared/api";

export default function Home() {
  const { data, refetch } = trpc.event.findMany.useQuery();
  const {data:data2} = trpc.hello.useQuery({text:'42'})
  

  return (
    <ul>
      {data?.map((event) => (
        <li key={event.id} className="mb-6">
          <EventCard
            {...event}
            action={
              !event.isJoined && (
                <JoinEventButton eventId={event.id} onSuccess={refetch} />
              )
            }
          />
        </li>
      ))}
    </ul>
  );
}
