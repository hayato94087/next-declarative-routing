import { type FC } from "react";
import { headers } from "next/headers";
import { Home } from "@/routes";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Page: FC<Props> = (props) => {
  const requestUrl = headers().get("x-url");

  return (
    <>
      <div className="p-5 bg-blue-100">
        <header className="p-5 bg-red-100 flex flex-row justify-between">
          <h1 className="text-lg font-bold self-center">{requestUrl}</h1>
          <div className="text-sm text-blue-800 py-2 px-3 rounded-md underline underline-offset-2 hover:text-blue-600">
            <Home.Link>戻る</Home.Link>
          </div>
        </header>
        <main className="p-5 bg-green-100 flex flex-col space-y-5">
          <section className="flex flex-col space-y-3 bg-yellow-100 p-5">
            <div className="flex flex-row">
              <h2 className="text-sm text-blue-800 py-2 px-3 bg-blue-100 rounded-md">
                props
              </h2>
            </div>
            <div className="flex flex-row">
              <pre className="w-full text-sm text-white py-2 px-3 bg-slate-800 rounded-md">
                {JSON.stringify(props)}
              </pre>
            </div>
          </section>
          <section className="flex flex-col space-y-3 bg-yellow-100 p-5">
            <div className="flex flex-row">
              <h2 className="text-sm text-blue-800 py-2 px-3 bg-blue-100 rounded-md">
                props.searchParams
              </h2>
            </div>
            <div className="flex flex-row">
              <pre className="w-full text-sm text-white py-2 px-3 bg-slate-800 rounded-md">
                {JSON.stringify(props.searchParams)}
              </pre>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;
