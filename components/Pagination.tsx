import Link from "next/link";

interface PaginationProps {
  current: number;
  total: number;
  pageSize: number;
}

export default function Pagination({
  current,
  total,
  pageSize,
}: PaginationProps) {
  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="w-full ">
      <ul className="flex items-end justify-center gap-2.5">
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i} className="grow shrink-0 basis-[44px] max-w-[44px]">
            <Link
              href={`?page=${i + 1}`}
              className={`pagination-link relative inline-flex justify-center items-center h-11 w-full  text-sm ${
                current === i + 1
                  ? "text-[#ffffffb3] active cursor-not-allowed"
                  : "text-white cursor-pointer"
              }`}
            >
              {i + 1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
