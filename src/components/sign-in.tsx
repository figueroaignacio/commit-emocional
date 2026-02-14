'use client';

import { signIn } from '@/lib/auth-client';

export default function SignIn() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold">Sign In</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        onClick={async () => {
          await signIn.social({
            provider: 'google',
            callbackURL: '/',
          });
        }}
      >
        Sign In with Google
      </button>
    </div>
  );
}
