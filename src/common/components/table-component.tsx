/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageTable } from "./table";

interface Props {
  column?: any[];
  dataSource?: any[];
  tableName?: string;
  btn?: any;
  forms?: any;
  loading?: boolean;
  pageSize?: number;
  shouldExpand?: boolean;
  scrollX?: number;
  isNotPaginated?: boolean;
  total?: number;
  url?: string;
  emptyParagraphText?: string;
  emptyHeadingText?: string;
  rowSelection?: any;
}

export const TableComponent: React.FC<Props> = ({
  column,
  dataSource,
  loading,
  pageSize,
  shouldExpand,
  scrollX,
  isNotPaginated,
  total,
  emptyHeadingText,
  emptyParagraphText,
  rowSelection,
}) => {
  return (
    <div className="bg-white w-full rounded-lg  table-shadow">
      <PageTable
        column={column}
        loading={loading}
        dataSource={dataSource}
        pageSize={pageSize}
        shouldExpand={shouldExpand}
        scrollX={scrollX}
        isNotPaginated={isNotPaginated}
        total={total}
        rowSelection={rowSelection}
        emptyHeadingText={emptyHeadingText}
        emptyParagraphText={emptyParagraphText}
      />
    </div>
  );
};
