export interface Folder {
  id: number;
  name: string;
  subfolders?: Folder[]
}