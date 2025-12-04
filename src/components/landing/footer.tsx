"use client";

import * as React from 'react';

export function Footer() {
  const [year, setYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
          <p className="text-muted-foreground text-sm">
            &copy; {year} KlaroGov. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
