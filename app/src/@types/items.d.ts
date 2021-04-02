type TItemStatus = "new" | "processing" | "done" | "error";

export interface IItem {
    id: number;
    name: string;
    status: TItemStatus;
    image: string | null;
    date:any
}
