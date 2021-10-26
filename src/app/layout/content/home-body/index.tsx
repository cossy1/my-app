import React, {useEffect, useState} from "react";
import "./home-body.scss";
import { ReactComponent as Arrow } from "../../../../assets/svg/arrow.svg";
import { Checkbox, Col, Empty, Row, Space } from "antd";
import Premium from "../../../../component/premium";
import FilterModal from "../../../../component/filterModal";
import { isMobile } from "react-device-detect";
import { ReactComponent as FilterSvg } from "../../../../assets/svg/filter.svg";
 import { Products } from "../../../../_shared/dummyData";
import { isEmpty } from "lodash";
import { connect } from "react-redux";
import {
  filterProducts,
  filterProductsByPrice,
  sortProducts,
} from "../../../../_shared/hooks";
import ScrollBar from "react-perfect-scrollbar";
import {getProducts} from "../../../../redux/action/products";

interface Prop {
  show: boolean;
  getProducts?: any;
  products?: any;
}

const HomeBody = (props: Prop) => {
  const { show, getProducts, products } = props;
  const [visible, setVisible] = useState(false);
  const [choice, setChoice] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [filter, setFilter] = useState(undefined);
  const [price, setPrice] = useState(undefined);

  useEffect(() => {
    getProducts(Products)
  }, []);


  let newProduct = sortProducts(products, choice, toggle);

  if (filter) {
    newProduct = filterProducts(newProduct, filter);
  }

  if (price) {
    newProduct = filterProductsByPrice(newProduct, price);
  }

  // PAGINATION
  const [paginate, setPaginate] = useState({
    currentPage: 1,
    itemsPerPage: isMobile ? 6 : 9,
  });

  const handleClick = (e: any) => {
    setPaginate((prevState) => ({
      ...prevState,
      currentPage: Number(e),
    }));
  };

  const indexOfLastItem = paginate.currentPage * paginate.itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - paginate.itemsPerPage;
  const currentItem = newProduct?.slice(indexOfFirstItem, indexOfLastItem);

  const renderImages = !isEmpty(currentItem) ? (
    currentItem?.map((item: any, index: any) => {
      return (
        !isEmpty(item.image?.src) && (
          <div key={index} style={{paddingLeft: !isMobile ? 30 : 0}}>
            <Premium
              bestSeller={item.bestseller}
              height={isMobile ? 502 : 390.67}
              width={isMobile ? 362 : 281.72}
              addCartBtn
              value={item}
              featured={item.featured}
            />
          </div>
        )
      );
    })
  ) : (
    <div style={{ margin: "0 auto"}}>
      <Empty style={{marginTop: '300px'}} />
    </div>
  );


  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(newProduct.length / paginate.itemsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      pageNumbers.length > 1 && (
        <div key={number} onClick={() => handleClick(number)}>
          {number}
        </div>
      )
    );
  });

  // PAGINATION END

  const tog = () => setToggle(!toggle);

  const onCancel = () => setVisible(!visible);

  const onChange = (e: any) => {
    setFilter(e);
  };

  const onChange1 = (e: any) => {
    setPrice(e);
  };

  const selectChange = (e: any) => {
    const type: boolean = e.target.value === "price";
    setChoice(type);
  };

  const options = [
    { label: "People", value: "people" },
    { label: "Premium", value: "premium" },
    { label: "Pets", value: "pets" },
    { label: "Food", value: "food" },
    { label: "Landmarks", value: "landmarks" },
    { label: "animal", value: "animal" },
    { label: "Nature", value: "nature" },
  ];

  const options1 = [
    { label: "Lower $20", value: "20" },
    { label: "$20 - $100", value: "20 - 100" },
    { label: "$100 - $200", value: "$100 - $200" },
    { label: "More than $200", value: "More than $200" },
  ];

  return show ? (
    <>
      <div className="app-home-body">
        <div className="body-header">
          <div>
            <span className="photo"> Photography / </span>
            <span className="premium"> Premium Photos</span>
          </div>

          <div>
            {!isMobile ? (
              <Space size="middle">
                <div onClick={tog}>
                  <Arrow />
                </div>

                <span className="sort-by">Sort By</span>
                <select
                  name="choice"
                  onChange={selectChange}
                  defaultValue={"price"}
                >
                  <option value="price">Price</option>
                  <option value="letter">letter</option>
                </select>
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
                <ScrollBar>
                  <div style={{ width: 150, height: 500 }}>
                    <div className="category">Category</div>
                    <div style={{marginLeft: '10px'}}>
                      <Checkbox.Group
                        options={options}
                        onChange={onChange}
                        style={{
                          fontSize: 22,
                          paddingBottom: 20,
                          lineHeight: 3,
                        }}
                      />
                    </div>
                    <hr style={{ marginTop: 20, width: 268, marginLeft: '10px' }} />

                    <div className="category">Price range</div>
                    <div style={{marginLeft: '10px'}}>
                      <Checkbox.Group
                        options={options1}
                        onChange={onChange1}
                        defaultValue={['']}
                        style={{
                          fontSize: 22,
                          paddingBottom: 20,
                          lineHeight: 3,
                        }}
                      />
                    </div>
                  </div>
                </ScrollBar>
              </Col>

              <Col span={20}>
                <div className="items-list" style={{ cursor: "pointer", justifyContent: 'flex-start' }}>
                  {renderImages}
                </div>
                <div className="page-numbers">{renderPageNumbers}</div>
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
                cursor: "pointer",
              }}
            >
              {renderImages}

              <div className="page-numbers">{renderPageNumbers}</div>
            </div>
          </>
        )}
      </div>
      <FilterModal visible={visible} onCancel={onCancel} />
    </>
  ) : null;
};

const stateProps = (state: any) => ({
  cartItems: state.cart.carts,
  products: state.products.products
});

const dispatchProps = {
  getProducts,
};

export default connect(stateProps, dispatchProps)(HomeBody);
