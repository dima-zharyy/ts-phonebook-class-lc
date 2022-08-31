import React, { Component } from "react";

import {
  Form,
  InnerFormContainer,
  FormLabel,
  FormInput,
  Button,
} from "./ContactForm.styled";

import { nanoid } from "nanoid";
import { IFormProps, IFormState } from "components/types/types";

export class ContactForm extends Component<IFormProps, IFormState> {
  state = {
    name: "",
    number: "",
  };

  inputNameId = nanoid(5);
  inputNumberId = nanoid(5);

  handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ [event.target.name]: event.target.value });
  };

  resetForm = (): void => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <InnerFormContainer>
          <FormLabel htmlFor={this.inputNameId}>Name</FormLabel>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.inputNameId}
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </InnerFormContainer>
        <InnerFormContainer>
          <FormLabel htmlFor={this.inputNumberId}>Number</FormLabel>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.inputNumberId}
            onChange={this.handleInputChange}
            value={this.state.number}
          />
        </InnerFormContainer>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
