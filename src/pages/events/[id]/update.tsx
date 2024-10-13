import { trpc } from "@/shared/api";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { CreateEventSchema } from "@/shared/api";
import { CreateEventForm } from "@/features/create-event";

export default function UpdatePage() {
  const router = useRouter();
  const session = useSession();

  const { mutate } = trpc.event.update.useMutation({
    onSuccess: (data) => {
      router.push(`/`);
    },
  });

  const handleSubmit = (data: CreateEventSchema) => {
    console.log('creating event!')
    console.log('data in uodatePage: ',data, data.date)
    mutate({id:Number(router.query.id),...data});
  };

  if (router.isReady){
      return <CreateEventForm onSubmit={handleSubmit} />;

  }

  // return (<div>Update page</div>);
}
