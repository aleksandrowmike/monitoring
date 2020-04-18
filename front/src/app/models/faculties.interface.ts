export interface IFaculties {
  id: number;
  name: string;
  subsidiary?: IFaculties[];
  created_at?: string;
  updated_at?: string;
}

