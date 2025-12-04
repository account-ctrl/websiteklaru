'use client';

import { useMemo } from 'react';
import { useCollection, useFirestore, useUser, useMemoFirebase } from '@/firebase';
import { collection, query, where, orderBy } from 'firebase/firestore';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { format } from 'date-fns';

type Document = {
  id: string;
  title: string;
  issuedBy: string;
  issuedAt: { seconds: number; nanoseconds: number } | Date;
  status: 'Active' | 'Expired' | 'Revoked';
};

const statusColors: Record<Document['status'], string> = {
  Active: 'bg-green-100 text-green-800',
  Expired: 'bg-yellow-100 text-yellow-800',
  Revoked: 'bg-red-100 text-red-800',
};

export default function DocumentsPage() {
  const { user } = useUser();
  const firestore = useFirestore();

  const documentsQuery = useMemoFirebase(() => {
    if (!user || !firestore) return null;
    return query(
      collection(firestore, `users/${user.uid}/documents`),
      orderBy('issuedAt', 'desc')
    );
  }, [user, firestore]);

  const { data: documents, isLoading, error } = useCollection<Document>(documentsQuery);

  const formatDate = (timestamp: Document['issuedAt']) => {
    if (!timestamp) return 'N/A';
    const date = timestamp instanceof Date ? timestamp : new Date(timestamp.seconds * 1000);
    return format(date, 'MMMM d, yyyy');
  };

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-destructive">Error: {error.message}</div>;
  }
  
  if (!documents || documents.length === 0) {
    return <p>You have no documents.</p>;
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Document Title</TableHead>
            <TableHead>Issued By</TableHead>
            <TableHead>Issued Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {documents.map((doc) => (
            <TableRow key={doc.id}>
              <TableCell className="font-medium">{doc.title}</TableCell>
              <TableCell>{doc.issuedBy}</TableCell>
              <TableCell>{formatDate(doc.issuedAt)}</TableCell>
              <TableCell>
                <Badge className={`${statusColors[doc.status]} hover:${statusColors[doc.status]}`}>
                  {doc.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
