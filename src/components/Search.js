import React from "react";
import { Form, Row, Col, Input, Button } from "antd";

function Search () {
        return <Row style={{ marginTop: "50px" }} justify="end">
        <Col span={8}>
          <Form layout="inline">
            <Col span={20}>
              <Form.Item label="Tìm Sách">
                <Input
                  placeholder="Tìm theo tên"
                />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Form>
        </Col>
      </Row>
    }
export default Search;