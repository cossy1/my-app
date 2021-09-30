import React, { useState } from "react";
import "./home-body.scss";
import { ReactComponent as Arrow } from "../../../../assets/svg/arrow.svg";
import { Checkbox, Col, Dropdown, Menu, Row, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Premium from "../../../../component/premium";
import FilterModal from "../../../../component/filterModal";
import { isMobile } from "react-device-detect";
import { ReactComponent as FilterSvg } from "../../../../assets/svg/filter.svg";
import { Products } from "../../../../_shared/dummyData";
import { isEmpty } from "lodash";
import {addCart} from "../../../../redux/action/cart";
import {connect} from "react-redux";
import Header from "../../header";

const HomeBody = ({addCart, cartItems}: any) => {
  const [visible, setVisible] = useState(false);
  const [showItem, setShowItem] = useState(false);


  const products = Products.map((item) => item);

  console.log('cartItems:::', cartItems);

  const onCancel = () => setVisible(!visible);
  const onChange = () => {
    console.log("Onchange");
  };

  const options = [
    { label: "People", value: "People" },
    { label: "Premium", value: "Premium" },
    { label: "Pets", value: "Pets" },
    { label: "Food", value: "Food" },
    { label: "Landmarks", value: "Landmarks" },
    { label: "Cities", value: "Cities" },
    { label: "Nature", value: "Nature" },
  ];

  const options1 = [
    { label: "Lower $20", value: "Lower $20" },
    { label: "$20 - $100", value: "$20 - $100" },
    { label: "$100 - $200", value: "$100 - $200" },
    { label: "More than $200", value: "More than $200" },
  ];

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="/">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="/">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <>
      <div className="app-home-body">
        <div className="body-header">
          <div>
            <span className="photo"> Photography / </span>
            <span className="premium"> Premium Photos</span>
          </div>

          <div>
            {!isMobile ? (
              <Space>
                <span>
                  <Arrow />
                </span>

                <span className="sort-by">Sort By</span>
                <span style={{ color: "#000000", fontSize: 22 }}>Price</span>

                <Dropdown
                  overlay={menu}
                  trigger={["click"]}
                  placement="bottomRight"
                >
                  <a
                    href={"/"}
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <DownOutlined />
                  </a>
                </Dropdown>
              </Space>
            ) : (
              <FilterSvg
                style={{ marginRight: 10 }}
                onClick={() => setVisible(true)}
              />
            )}
          </div>
        </div>
        {!isMobile ? (
          <div className="items">
            <Row>
              <Col span={4}>
                <div style={{ width: 140, height: 500 }}>
                  <div className="category">Category</div>
                  <div>
                    <Checkbox.Group
                      options={options}
                      onChange={onChange}
                      style={{ fontSize: 22, paddingBottom: 20, lineHeight: 3 }}
                    />
                  </div>
                  <hr style={{ marginTop: 20, width: 268 }} />

                  <div className="category">Price range</div>
                  <div>
                    <Checkbox.Group
                      options={options1}
                      onChange={onChange}
                      style={{ fontSize: 22, paddingBottom: 20, lineHeight: 3 }}
                    />
                  </div>
                </div>
              </Col>

              <Col span={20}>
                <div className="items-list">
                  {Products.map((e: any) =>
                    !isEmpty(e.image?.src) && (

                          <Premium
                              bestSeller={e.bestseller}
                              height={400}
                              width={300}
                              addCartBtn
                             value={e}
                          />
                    )
                  )}
                  {/*<Premium*/}
                  {/*    src={RedBench}*/}
                  {/*    width={281}*/}
                  {/*    title={"People"}*/}
                  {/*    subTitle={"Red Bench"}*/}
                  {/*    amount={3.89}*/}
                  {/*    height={390.67}*/}
                  {/*    addCart*/}
                  {/*/>*/}

                  {/*<div>*/}
                  {/*  <Premium*/}
                  {/*      src={EggBallon}*/}
                  {/*      width={281}*/}
                  {/*      title={"Food"}*/}
                  {/*      subTitle={"Egg Ballon"}*/}
                  {/*      amount={93.89}*/}
                  {/*      height={390.67}*/}
                  {/*      addCart*/}
                  {/*  />*/}
                  {/*</div>*/}

                  {/*<div>*/}
                  {/*  <Premium*/}
                  {/*      src={EggBallon}*/}
                  {/*      width={281}*/}
                  {/*      title={"Food"}*/}
                  {/*      subTitle={"Egg Ballon"}*/}
                  {/*      amount={93.89}*/}
                  {/*      height={390.67}*/}
                  {/*      addCart*/}
                  {/*  />*/}
                  {/*</div>*/}
                </div>

                {/*<div className="items-list" style={{ margin: "10px 0" }}>*/}
                {/*  <div>*/}
                {/*    <Premium*/}
                {/*        src={Man}*/}
                {/*        width={281}*/}
                {/*        title={"People"}*/}
                {/*        subTitle={"Man"}*/}
                {/*        amount={100.0}*/}
                {/*        height={390.67}*/}
                {/*        addCart*/}
                {/*    />*/}
                {/*  </div>*/}

                {/*  <div>*/}
                {/*    <Premium*/}
                {/*        src={Architecture}*/}
                {/*        width={281}*/}
                {/*        title={"LandMarks"}*/}
                {/*        subTitle={"Architecture"}*/}
                {/*        amount={101.0}*/}
                {/*        height={390.67}*/}
                {/*        addCart*/}
                {/*    />*/}
                {/*  </div>*/}

                {/*  <div>*/}
                {/*    <Premium*/}
                {/*        src={Architecture}*/}
                {/*        width={281}*/}
                {/*        title={"LandMarks"}*/}
                {/*        subTitle={"Architecture"}*/}
                {/*        amount={101.0}*/}
                {/*        height={390.67}*/}
                {/*        addCart*/}
                {/*    />*/}
                {/*  </div>*/}
                {/*</div>*/}
              </Col>
            </Row>
          </div>
        ) : (
          <>
            <div
              className="items-list"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              {Products.map((e: any) =>
                  !isEmpty(e.image?.src) && (
                      <Premium
                          bestSeller={e.bestseller}
                          height={400}
                          width={300}
                          addCartBtn
                          value={e}
                      />
                  )
              )}
            </div>
            {/*<div className="seller">Best Seller</div>*/}
            {/*<div className="items-list">*/}
            {/*  <div>*/}
            {/*    <Premium*/}
            {/*      src={RedBench}*/}
            {/*      width={281}*/}
            {/*      title={"People"}*/}
            {/*      subTitle={"Red Bench"}*/}
            {/*      amount={3.89}*/}
            {/*      height={390.67}*/}
            {/*      addCart*/}
            {/*    />*/}
            {/*  </div>*/}

            {/*  <div>*/}
            {/*    <Premium*/}
            {/*      src={EggBallon}*/}
            {/*      width={281}*/}
            {/*      title={"Food"}*/}
            {/*      subTitle={"Egg Ballon"}*/}
            {/*      amount={93.89}*/}
            {/*      height={390.67}*/}
            {/*      addCart*/}
            {/*    />*/}
            {/*  </div>*/}

            {/*  <div>*/}
            {/*    <Premium*/}
            {/*      src={EggBallon}*/}
            {/*      width={281}*/}
            {/*      title={"Food"}*/}
            {/*      subTitle={"Egg Ballon"}*/}
            {/*      amount={93.89}*/}
            {/*      height={390.67}*/}
            {/*      addCart*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}

            {/*<div className="items-list" style={{ margin: "10px 0" }}>*/}
            {/*  <div>*/}
            {/*    <Premium*/}
            {/*      src={Man}*/}
            {/*      width={281}*/}
            {/*      title={"People"}*/}
            {/*      subTitle={"Man"}*/}
            {/*      amount={100.0}*/}
            {/*      height={390.67}*/}
            {/*      addCart*/}
            {/*    />*/}
            {/*  </div>*/}

            {/*  <div>*/}
            {/*    <Premium*/}
            {/*      src={Architecture}*/}
            {/*      width={281}*/}
            {/*      title={"LandMarks"}*/}
            {/*      subTitle={"Architecture"}*/}
            {/*      amount={101.0}*/}
            {/*      height={390.67}*/}
            {/*      addCart*/}
            {/*    />*/}
            {/*  </div>*/}

            {/*  <div>*/}
            {/*    <Premium*/}
            {/*      src={Architecture}*/}
            {/*      width={281}*/}
            {/*      title={"LandMarks"}*/}
            {/*      subTitle={"Architecture"}*/}
            {/*      amount={101.0}*/}
            {/*      height={390.67}*/}
            {/*      addCart*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*</div>*/}
          </>
        )}
      </div>
      <FilterModal visible={visible} onCancel={onCancel} />
      <Header visible={showItem} show={false}/>

    </>
  );
};

const stateProps = (state: any) => ({
  cartItems: state.cart.carts,
});

const dispatchProps = {
  addCart,
};

export default connect(stateProps, dispatchProps)(HomeBody);
