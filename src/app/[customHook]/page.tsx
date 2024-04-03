export default function HookDocumentationPage({
  params,
}: {
  params: { customHook: string };
}) {
  return (
    <article className="w-full p-6 flex flex-col">
      <h1 className="text-xl font-medium border-b border-solid border-base-200 pb-3 px-2">
        {params.customHook}
      </h1>
    </article>
  );
}
