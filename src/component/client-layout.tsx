'use client';

import Header from '@/component/header';
import Mobilenav from '@/component/mobilenav';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Mobilenav />
    </>
  );
}
