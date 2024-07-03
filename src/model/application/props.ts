/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { TableRowSelection } from "antd/es/table/interface";
import { ApiResponse } from "model/client/response";

export namespace PageProps {
  export class AuthLayoutProps {
    children?: any;
    padding?: string;
  }
  export class ModalProps {
    openModal?: boolean;
    handleCancel?: any;
    modalTitle?: any;
    modalFooter?: any;
    onOk?: any;
    children?: any;
    cancelText?: string;
    okText?: any;
    modalWith?: string;
    centered?: boolean;
    maskClosable?: boolean;
    closable?: boolean;
  }

  export class SuccessModal {
    openModal?: boolean;
    onClick?: () => void;
    children?: any;
    onCancel?: () => any;
    status?: boolean;
    extraBtn?: React.ReactNode;
    btnText?: string;
  }
  export class PageLayoutProps {
    children?: any;
    pageTitle?: string;
    defaultSelectedKeys?: string;
    defaultOpenKeys?: string;
    breadcrumb?: any;
  }
  export class TableData {
    dataSource?: any[];
    column?: any[];
    loading?: boolean;
    total?: number;
    pageSize?: number;
    onPagination?: (e: number) => void;
    shouldExpand?: boolean;
    scrollX?: number;
    isNotPaginated?: boolean;
    emptyParagraphText?: string;
    emptyHeadingText?: string;
    rowSelection?: TableRowSelection<ApiResponse.Processor>;
  }

  export class SelectOptionValues {
    key?: any;
    value?: any;
  }
}
