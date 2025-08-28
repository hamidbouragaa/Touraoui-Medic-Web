import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export default function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  const pageNumbers = [];
  const delta = 2;
  const left = currentPage - delta;
  const right = currentPage + delta + 1;
  let l;

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= left && i < right)) {
      pageNumbers.push(i);
    }
  }

  return (
    <nav className="flex items-center justify-center space-x-2 mt-12">
      <Button asChild variant="outline" size="icon" disabled={!hasPreviousPage}>
        <Link href={`${baseUrl}?page=${currentPage - 1}`}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous</span>
        </Link>
      </Button>

      {pageNumbers.map((pageNumber, index) => {
        const isCurrent = pageNumber === currentPage;
        if (l && pageNumber - l !== 1) {
            pageNumbers.splice(index, 0, -1);
        }
        l = pageNumber;

        if (pageNumber === -1) {
            return <span key={`ellipsis-${index}`} className="px-1">...</span>;
        }

        return (
          <Button asChild key={pageNumber} variant={isCurrent ? 'default' : 'outline'} size="icon">
            <Link href={`${baseUrl}?page=${pageNumber}`}>{pageNumber}</Link>
          </Button>
        );
      })}

      <Button asChild variant="outline" size="icon" disabled={!hasNextPage}>
        <Link href={`${baseUrl}?page=${currentPage + 1}`}>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next</span>
        </Link>
      </Button>
    </nav>
  );
}
