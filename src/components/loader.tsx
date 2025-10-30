import { Spinner } from './spinner';

export function Loader() {
  return (
    <div className="min-h-[60svh] flex justify-center items-center">
      <Spinner />
    </div>
  );
}
