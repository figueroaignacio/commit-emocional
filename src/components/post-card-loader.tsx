export function PostCardLoader() {
  return (
    <div className="space-y-3 opacity-80 cursor-default animate-pulse">
      <div className="py-8 px-5 bg-card rounded-xl border border-border">
        <div className="h-4 w-24 bg-secondary rounded" />
        <div className="h-7 w-3/4 bg-secondary rounded mt-2 mb-3" />
      </div>
      <div className="px-4 space-y-2">
        <div className="h-4 w-full bg-secondary rounded" />
        <div className="h-4 w-11/12 bg-secondary rounded" />
        <div className="h-4 w-5/6 bg-secondary rounded" />
      </div>
      <div className="w-full flex justify-end px-4">
        <div className="h-4 w-20 bg-secondary rounded" />
      </div>
    </div>
  );
}

export function PostListLoader() {
  return (
    <div className="flex flex-col space-y-8">
      {Array.from({ length: 4 }).map((_, index) => (
        <PostCardLoader key={index} />
      ))}
    </div>
  );
}
