export interface IAppState {
  contacts: { [key: string]: string }[] | [];
  filter: string;
}

export interface IFormState {
  [key: string]: string;
}

export interface IFormProps {
  onSubmit: (data: IFormState) => void;
}

export interface IList {
  contacts: { id: string; name: string; number: string }[];
  onClick: (id: string) => void;
}

export interface IListItem {
  name: string;
  number: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IFilter {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
