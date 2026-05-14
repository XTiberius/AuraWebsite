'use client';

import { AuthProvider } from '@/lib/AuthContext';
import { Toaster } from '@/components/ui/toaster';

export function Providers({ children }) {
  return (
    <AuthProvider>
      {children}
      <Toaster />
    </AuthProvider>
  );
}
