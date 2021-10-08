import React, {useState} from "react";
import "./home-body.scss";
import { ReactComponent as Arrow } from "../../../../assets/svg/arrow.svg";
import { Checkbox, Col, Empty, Row, Space } from "antd";
import Premium from "../../../../component/premium";
import FilterModal from "../../../../component/filterModal";
import { isMobile } from "react-device-detect";
import { ReactComponent as FilterSvg } from "../../../../assets/svg/filter.svg";
import { Products } from "../../../../_shared/dummyData";
import { isEmpty } from "lodash";
import { addCart } from "../../../../redux/action/cart";
import { connect } from "react-redux";
import {filterProducts, filterProductsByPrice, sortProducts} from "../../../../_shared/hooks";

const HomeBody = () => {
  const [visible, setVisible] = useState(false);
  const [choice, setChoice] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [filter, setFilter] = useState(undefined);
  const [price, setPrice] = useState(undefined);

   let newProduct = sortProducts(Products, choice, toggle);

   if(filter){
     newProduct = filterProducts(newProduct, filter);
   }
   if(price){
     newProduct = filterProductsByPrice(newProduct, price);
   }

  // PAGINATION
  const [paginate, setPaginate] = useState({
    currentPage: 1,
    itemsPerPage: isMobile ? 6 : 8,
  });

  const handleClick = (e: any) => {
    setPaginate((prevState) => ({
      ...prevState,
      currentPage: Number(e),
    }));
  };

  const indexOfLastItem = paginate.currentPage * paginate.itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - paginate.itemsPerPage;
  const currentItem = newProduct && newProduct?.slice(indexOfFirstItem, indexOfLastItem);

  const renderImages = currentItem.map((item:any, index: any) => {
    return !isEmpty(item.image?.src) && (
          <div key={index}>
            <Premium
                bestSeller={item.bestseller}
                height={400}
                width={300}
                addCartBtn
                value={item}
                featured={item.featured}
            />
          </div>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(newProduct.length / paginate.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return pageNumbers.length > 1 && (
        <div
            key={number}
            onClick={() => handleClick(number)}
        >
          {number}
        </div>
    );
  });

  // PAGINATION END

  const onCancel = () => setVisible(!visible);

  const onChange = (e:any) => {
    setFilter(e);
  };

  const onChange1 = (e:any) => {
    setPrice(e);
  };

  const selectChange = (e: any) => {
    const type: boolean = e.target.value === 'price';
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
    { label: "Lower $20", value: "Lower $20" },
    { label: "$20 - $100", value: "$20 - $100" },
    { label: "$100 - $200", value: "$100 - $200" },
    { label: "More than $200", value: "More than $200" },
  ];


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
                <span onClick={_ => setToggle(!toggle)}>
                  <Arrow />
                </span>

                <span className="sort-by">Sort By</span>
                <select name="choice" onChange={selectChange} defaultValue={'price'}>
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
                      onChange={onChange1}
                      style={{ fontSize: 22, paddingBottom: 20, lineHeight: 3 }}
                    />
                  </div>
                </div>
              </Col>

              <Col span={20}>
                <div className="items-list" style={{ cursor: "pointer" }}>
                    {renderImages}
                </div>
                <div className="page-numbers">
                  {renderPageNumbers}
                </div>
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

              <div className="page-numbers">
                {renderPageNumbers}
              </div>
            </div>
          </>
        )}
      </div>
      <FilterModal visible={visible} onCancel={onCancel} />
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
