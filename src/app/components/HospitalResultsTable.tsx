'use client'

import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
} from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'
import { Hospital } from './HospitalsView'

interface HospitalResultsTableProps {
  hospitals: Hospital[];
  selectedProcedure: string;
}

export default function HospitalResultsTable({ hospitals, selectedProcedure }: HospitalResultsTableProps) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

  const columns: ColumnDef<Hospital>[] = [
    {
      accessorKey: 'name',
      header: ({ column }) => {
        return (
          <button
            className="flex items-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Hospital
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        )
      },
    },
    {
      accessorKey: 'address',
      header: 'Address',
    },
    {
      accessorKey: 'totalCostWithoutInsurance',
      header: ({ column }) => {
        return (
          <button
            className="flex items-center justify-end w-full"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Total Cost Without Insurance
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        )
      },
      cell: ({ row }) => {
        const procedure = row.original.procedures.find(p => p.name === selectedProcedure)
        const amount = procedure ? procedure.totalCostWithoutInsurance : 0
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(amount)
        return <div className="text-right font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: 'insuranceCoverage',
      header: ({ column }) => {
        return (
          <button
            className="flex items-center justify-end w-full"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Insurance Coverage
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        )
      },
      cell: ({ row }) => {
        const procedure = row.original.procedures.find(p => p.name === selectedProcedure)
        const amount = procedure ? procedure.insuranceCoverage : 0
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(amount)
        return <div className="text-right font-medium">{formatted}</div>
      },
    },
    {
      accessorKey: 'outOfPocketCost',
      header: ({ column }) => {
        return (
          <button
            className="flex items-center justify-end w-full"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Out-of-Pocket Cost
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </button>
        )
      },
      cell: ({ row }) => {
        const procedure = row.original.procedures.find(p => p.name === selectedProcedure)
        const amount = procedure ? procedure.outOfPocketCost : 0
        const formatted = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(amount)
        return <div className="text-right font-medium">{formatted}</div>
      },
    },
  ]

  const table = useReactTable({
    data: hospitals,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter hospitals..."
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn('name')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

