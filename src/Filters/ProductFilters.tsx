import React, { useEffect } from "react";
import { Form, Button, Col, Row, Card, Container } from "react-bootstrap";
import { useStore } from "second/ZustandStore";
import PriceRangeSlider from "./PriceRangeSlider";

const ProductFilters = () => {
  const { filters, setFilters, resetFilters } = useStore();

  const handleFilterChange = (key: any, value: any) => {
    setFilters(key, value);
  };

  return (
    <Container style={{ display: "flex", width: "100%" }}>
      <Card style={{ width: "100%" }}>
        <Row>
          <Col lg={10}>
            {" "}
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  name="search"
                  type="text"
                  placeholder="Search by item name or brand name..."
                  value={filters?.search || ""}
                  onChange={(e) =>
                    handleFilterChange(e.target.name, e.target.value)
                  }
                />
              </Form.Group>
            </Form>
          </Col>
          <Col lg={2}>
            {/* <Button type="submit" name="Submit" variant="success">
              Submit
            </Button> */}
          </Col>
        </Row>
        <Row>
          <PriceRangeSlider />
        </Row>
        <br />
        <Row>
          <Col lg={2}>
            <Button onClick={() => resetFilters()}>Reset</Button>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ProductFilters;
