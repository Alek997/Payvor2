import React from "react";
import { useAsync } from "react-use";
import { getAllAds } from "../services/adService";
import { get } from "lodash";
import { Row, Col, Card } from "antd";

const Ads = () => {
  const ads = get(useAsync(getAllAds()), "value");
  return (
    <Row>
      {ads.map(ad => {
        return (
          <Col size={4}>
            <Card
              title="Default size card"
              extra={<a href="#">More</a>}
              style={{ width: 300 }}
            >
              <p>{ad.title}</p>
              <p>{ad.address}</p>
              <p>{ad.description}</p>
              <p>{ad.budget}</p>
              <p>{ad.phone}</p>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default Ads;
