// File: src/components/ui/badge.jsx
import React from 'react';
import { cn } from '../../lib/utils'; // adjust the path if necessary

const Badge = ({ className, children, ...props }) => (
  <span className={cn("inline-flex items-center rounded-full px-2 py-1 text-xs font-medium", className)} {...props}>
    {children}
  </span>
);

export { Badge };
