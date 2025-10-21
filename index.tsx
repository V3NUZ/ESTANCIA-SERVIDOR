'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function IndexRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push('/src/app/page.tsx');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirigiendo a AnimalWorld...</p>
      </div>
    </div>
  );
}