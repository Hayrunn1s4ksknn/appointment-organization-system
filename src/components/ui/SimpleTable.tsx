interface Column<T> {
  header: string;
  accessor: (row: T) => React.ReactNode;
}

interface SimpleTableProps<T> {
  columns: Column<T>[];
  data: T[];
}

export default function SimpleTable<T>({ columns, data }: SimpleTableProps<T>) {
  return (
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b border-zinc-200 text-left text-zinc-500">
          {columns.map((col, i) => (
            <th key={i} className="py-2 px-3 font-medium">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-b border-zinc-100 hover:bg-zinc-50">
            {columns.map((col, j) => (
              <td key={j} className="py-2 px-3 text-zinc-800">
                {col.accessor(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}