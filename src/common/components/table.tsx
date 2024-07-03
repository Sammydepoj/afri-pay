/* eslint-disable prettier/prettier */
import { Empty, Spin, Table } from "antd"
import React, { useCallback } from "react"
import { PageProps } from "../../model/application/props"
import { setAllGlobalKey } from "../../store"
import { useAppDispatch, useAppSelector } from "../../store/hooks"

export const PageTable: React.FC<PageProps.TableData> = ({
  column,
  dataSource,
  loading,
  pageSize,
  total,
  shouldExpand,
  scrollX,
  emptyHeadingText,
  emptyParagraphText,
  rowSelection
}) => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => {
    return state.global
  })
  const onRowSelect = (_rowIndex: number, record: any) => {
    if (shouldExpand) {
      dispatch(
        setAllGlobalKey({
          ...state,
          expand: true,
          record,
        }),
      )
    }
  }

  const onPaginate = useCallback(
    (page: number, pageSize: number) => {
      dispatch(
        setAllGlobalKey({
          ...state,
          page,
          pageSize
        }),
      )
    },
    [dispatch, state],
  )

  return (
    <Spin spinning={loading}>
      <Table
        style={{ whiteSpace: "pre" }}
        columns={column}
        dataSource={dataSource}
        pagination={{
          position: ["bottomRight"],
          onChange: onPaginate,
          defaultCurrent: state.page,
          showSizeChanger: true,
          total,
          pageSize: state.pageSize,
          hideOnSinglePage: true,
          pageSizeOptions: [
            "10",
            "20",
            "30",
            "40",
            "50",
            "60",
            "70",
            "80",
            "90",
            "100",
          ],
        }}
        scroll={{ x: scrollX }}
        className="cursor-pointer"
        onRow={(record: any, rowIndex: number | undefined) => {
          return {
            onClick: async () => {
              onRowSelect(rowIndex as number, record)
            },
          }
        }}
        rowSelection={rowSelection}
        locale={{
          emptyText:
            emptyHeadingText && emptyParagraphText ? (
              <div className="h-60 grid place-content-center">
                {" "}
                <h1 className="text-[#182A2C] text-[1.5rem] font-bold">
                  {" "}
                  {emptyHeadingText}{" "}
                </h1>
                <p className="text-[#182A2C] text-[1rem]">
                  {emptyParagraphText}
                </p>
              </div>
            ) : (
              <Empty />
            ),
        }}
      />
    </Spin>
  )
}
