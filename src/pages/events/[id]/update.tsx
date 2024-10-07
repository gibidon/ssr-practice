import { EventDetail } from "@/entities/event";
import { trpc } from "@/shared/api";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { UpdateEventSchema } from "@/shared/api";
import { CreateEventSchema } from "@/shared/api";
import { CreateEventForm } from "@/features/create-event";

export default function UpdatePage() {
  const router = useRouter();
  const session = useSession();
  console.log('rq',router.query)

  const { mutate } = trpc.event.update.useMutation({
    onSuccess: (data) => {
    //   router.push(`/events/${data.id}`);
      router.push(`/`);
    },
  });

  const handleSubmit = (data: CreateEventSchema) => {
    console.log('creating event!')
    mutate({id:Number(router.query.id),...data});
  };

  if (router.isReady){
      return <CreateEventForm onSubmit={handleSubmit} />;

  }

  return (<div>Update page</div>);
}
