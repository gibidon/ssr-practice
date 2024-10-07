import { CreateEventForm } from "@/features/create-event";
import { CreateEventSchema, trpc } from "@/shared/api";
import { UpdateEventSchema } from "@/shared/api";
import { UpdateEventForm } from "@/features/update-event";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function UpdateEvent() {
  const router = useRouter();
  

  const { mutate } = trpc.event.update.useMutation({
    onSuccess: (data) => {
      router.push(`/events/${data.id}`);
    },
  });

  const handleSubmit = (data: UpdateEventSchema) => {
    console.log('updating event!',data)
    // mutate({id:session.data?.user.id,...data});
    mutate({...data,id:10});
  };

  return <UpdateEventForm onSubmit={handleSubmit} />;
}
