import React from "react";
import { useTable } from "react-table";
import { styles } from "../../styles";

const TableBuilder = ({ data, columns, customization }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

    console.log(data)

  return (
    <table
      className={`divide-y divide-neutral-40 ${customization}`}
      {...getTableProps()}
    >
      <thead className="bg-primary-40">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                className={`px-6 py-4 ${
                  styles.textMMedium
                } tracking-wider text-left text-white uppercase w-${
                  column.width || "auto"
                }`}
                {...column.getHeaderProps()}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody
        className="bg-white divide-y divide-neutral-30"
        {...getTableBodyProps()}
      >
        {rows.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    className={`px-6 py-4 ${
                      styles.textSRegular
                    } text-gray-900 whitespace-nowrap w-[${
                      cell.column.width || "auto"
                    }]`}
                    {...cell.getCellProps()}
                  >
                    {cell.column.id === "id"
                      ? rowIndex + 1
                      : cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableBuilder;
