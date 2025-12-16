export function PostCardLoader() {
  return (
    <div className="space-y-3 opacity-80 cursor-default animate-pulse">
      <div className="h-4 w-24 bg-gray-300 rounded" />
      <div className="h-7 w-4/5 bg-gray-300 rounded mt-2 mb-3" />
      <div className="space-y-2">
        <div className="h-4 w-full bg-gray-300 rounded" />
        <div className="h-4 w-11/12 bg-gray-300 rounded" />
        <div className="h-4 w-3/4 bg-gray-300 rounded" />
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
