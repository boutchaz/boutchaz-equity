import { CustomLink } from "data/types";
import React, { FC } from "react";
import Link from "next/Link";
import twFocusClass from "utils/twFocusClass";


export interface PaginationProps {
    className?: string;
    pagination?: any;
    currentPage?: number;
    setPage: (âge: number) => void;
}

const Pagination: FC<PaginationProps> = ({ pagination,currentPage,setPage, className = "" }) => {
    const renderItem = (pag: CustomLink, index: number) => {
        if (index === currentPage) {
            // RETURN ACTIVE PAGINATION
            return (
                <button
                    key={index}
                    className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-primary-6000 text-white ${twFocusClass()}`}
                    onClick={() => setPage(index)}
                >
                    {pag.label}
                </button>
            );
        }
        // RETURN UNACTIVE PAGINATION
        return (
                <button className={`inline-flex w-11 h-11 items-center justify-center rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-6000 dark:text-neutral-400 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:border-neutral-700 ${twFocusClass()}`}
                 onClick={() => setPage(index)}
                >
                    {pag.label}

                </button>
        );
    };

    return (
        <nav
            className={`nc-Pagination inline-flex space-x-1 text-base font-medium ${className}`}
        >
            {[...Array(pagination.pageCount )].map((x, i) =>
               renderItem({
                label: 1+i+'',
                href: '/',
              }, i+1)
            )}
        </nav>
    );
};

export default Pagination;
