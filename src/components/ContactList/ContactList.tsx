import { ContactListItem } from "components";
import { IList } from "components/types/types";

export const ContactList: React.FC<IList> = ({ contacts, onClick }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onClick={() => onClick(id)}
          />
        );
      })}
    </ul>
  );
};
