///////////////////////// Modal ////////////////////////
export interface Update {
   id: number;
   name: string;
   parent_category_id?: number;
   description?: string;
   file?: File | string;
   categoryId: number;
   category_id: number;
}

export interface ModalProps {
   categories?: Record[];
   parentId?: number;
   open: boolean;
   handleClose: () => void;
   getData: () => void;
   update: Update;
}

///////////////////////// Global Category Table ////////////////////////
export interface Record extends Update {
   createdAt: string;
   image?: any;
   lastUpdateAt: string;
}

export interface Pagination {
   current: number;
   pageSize: number;
   total: undefined;
   showSizeChanger: boolean;
   pageSizeOptions: number[];
}
