import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
  } from "@/components/ui/pagination"

export function PaginationBar() {
    return (
        <div >
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationLink href="#">Login</PaginationLink>
                </PaginationItem>
                    <PaginationLink href="#">Tarot</PaginationLink>
                <PaginationItem>
                    <PaginationLink href="#">Dice</PaginationLink>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
        </div>
)
}