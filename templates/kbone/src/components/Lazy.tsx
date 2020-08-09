import React, { Suspense } from 'react';

interface Props {
    children: React.ReactElement
}
export default function Lazy({ children }: Props): React.ReactElement {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
      </Suspense>
    </div>
  );
}
