'use client';

import { useUser } from '@/firebase';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <p className="text-muted-foreground">
        Welcome back, {user?.displayName || user?.email}!
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="#">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>My Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p>View and edit your personal information.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="/dashboard/documents">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>My Documents</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access your issued documents and credentials.</p>
            </CardContent>
          </Card>
        </Link>
        <Link href="#">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage your account settings.</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}