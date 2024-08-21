import React, { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { Row, Col, Form } from "react-bootstrap";
import { useStore } from "second/ZustandStore";

const MIN = 0;
const MAX = 3000;

const PriceRangeSlider = () => {
  const { filters, setFilters } = useStore();

  const handleSliderChange = (value: any) => {
    setFilters("priceRange", value);
  };

  return (
    <Form>
      <Form.Group as={Col} controlId="priceRange">
        <Form.Label column sm={2}>
          Price Range
        </Form.Label>
        <Col sm={8}>
          <Slider
            range
            min={MIN}
            max={MAX}
            defaultValue={[MIN, MAX]}
            value={filters?.priceRange || [MIN, MAX]}
            onChange={handleSliderChange}
          />
        </Col>
        <Col sm={2}>
          <Form.Control type="text" readOnly value={`$${MIN} - $${MAX}`} />
        </Col>
      </Form.Group>
    </Form>
  );
};

export default PriceRangeSlider;
