import type { AppProps, AppContext } from "next/app";
import { trpc } from "@/shared/api";
import { SessionProvider, getSession } from "next-auth/react";
import { UserBar } from "@/entities/user/ui/UserBar";
import { MainLogo } from "@/shared/ui/mainLogo/MainLogo";
import { UiHeader } from "@/shared/ui/ui-header";

import "@/app/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-4xl">
      <SessionProvider session={pageProps.session}>
        <UiHeader 
          leftElem={<MainLogo imageSrc="https://result.school/_next/static/media/main-logo-black.ba7419f1.svg" linkTo="/"/>}
          rightElem={<UserBar/>}/>
        <Component {...pageProps} />
      </SessionProvider>
    </div>
  );
}

App.getInitialProps = async (ctx: AppContext) => {
  return {
    pageProps: {
      session: await getSession(ctx.ctx),
    },
  };
};

export default trpc.withTRPC(App);
