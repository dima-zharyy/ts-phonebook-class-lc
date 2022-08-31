import { IListItem } from "components/types/types";
import {
  ContactItem,
  ContactTextWrapper,
  ContactName,
  Button,
} from "./ContactListItem.styled";

export const ContactListItem: React.FC<IListItem> = ({
  name,
  number,
  onClick,
}) => {
  return (
    <ContactItem>
      <ContactTextWrapper>
        <ContactName>{name}:</ContactName> <span>{number}</span>
      </ContactTextWrapper>
      <Button type="button" onClick={onClick}>
        Delete
      </Button>
    </ContactItem>
  );
};
