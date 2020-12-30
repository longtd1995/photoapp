import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";

PhotoForm.propTypes = {};

function PhotoForm(props) {
  return (
    <Form>
      <FormGroup>
        <Label>Title</Label>
        <Input name="title" id="titleId" placeholder="Eg: Wow nature..." />
      </FormGroup>
      <FormGroup>
        <Label>Category</Label>
        <Select
          id="categoryId"
          name="categoryId"
          placeholder="What's your photo category?"
          options={PHOTO_CATEGORY_OPTIONS}
        />
      </FormGroup>
      <FormGroup>
        <Button className="secondary">Add to Album</Button>
      </FormGroup>
    </Form>
  );
}

export default PhotoForm;
