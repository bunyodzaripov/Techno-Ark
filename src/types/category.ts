///////////////////////// Modal ////////////////////////
export interface update {
   id: number;
   name: string;
}

export interface props {
   open: boolean;
   handleClose: () => void;
   getData: () => void;
   update: update | undefined | any;
}

///////////////////////// Page ////////////////////////
export interface record {
   createdAt: string;
   id: number;
   lastUpdateAt: string;
   name: string;
}
