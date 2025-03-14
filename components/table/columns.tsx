"use client"
 
import { FileType } from "@/typing"
import { ColumnDef } from "@tanstack/react-table"
import prettyBytes from "pretty-bytes"
import { defaultStyles , FileIcon } from "react-file-icon"
import { COLOR_EXTENSION_MAP } from "@/constant"
 
export const columns: ColumnDef<FileType>[] = [

  {
    accessorKey: "type",
    header:"Type",
        cell: ({ renderValue, ...props}) => {
            const type = renderValue() as string;
           // image/jpeg
            const extension: string = type.split("/")[1];
            return (
              <div className="w-10">
                <FileIcon
                   extension={extension}
                   labelColor={COLOR_EXTENSION_MAP[extension]}
                   //@ts-ignore
                   {...defaultStyles[extension]}
                 />
              </div>
            );
           
        },
  },  
  
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "timestamp",
    header: "Date",
  },
  {
    accessorKey: "size",
    header:"Size",
    cell: ({ renderValue, ...props}) => {
          return <span>{prettyBytes(renderValue() as number)}</span>
    },
  },
  {
    accessorKey: "downloadURL",
    header:"Link",
    cell: ({ renderValue, ...props}) => (
        <a
          href={renderValue() as string}
          target="_blank"
          className="underline text-blue-500 hover:text-blue-600"
          >
           Download
        </a>
    ),
  },

];