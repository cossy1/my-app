import {Checkbox, Menu, Modal} from "antd";
import React from "react";
import './filterModal.scss';
import { ReactComponent as CloseIcon } from "../../assets/svg/close.svg";

interface filterModalProps {
  visible: boolean;
  onCancel: () => void;
}

const FilterModal = (props: filterModalProps) => {
  const { visible, onCancel } = props;

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
    <div className='app-filterModal'>
      <Modal
        visible={visible}
        closable={false}
        width={414}
        maskClosable={false}
        centered
        footer={
          <div className='footer-tabs'>
            <div className='clear'>CLEAR</div> <div className='save' onClick={onCancel}>SAVE</div>
          </div>
        }
        onCancel={onCancel}
        bodyStyle={{ padding: 20 }}
        mask={false}
      >
        <div>
               <div className='top-header'>
                   <div className={'filter'}>
                       Filter
                   </div>

                   <div>
                       <CloseIcon onClick={() => onCancel()}/>
                   </div>
               </div>

            <div>
                <div style={{ width: 140 }}>
                    <div>
                        <Checkbox.Group
                            options={options}
                            onChange={()=>{}}
                            style={{ fontSize: 22, paddingBottom: 20, lineHeight: 2 }}
                        />
                    </div>
                    <hr style={{ marginTop: 20, width: 210 }} />

                    <div className="pprice">Price range</div>
                    <div>
                        <Checkbox.Group
                            options={options1}
                            onChange={()=>{}}
                            style={{ fontSize: 22, paddingBottom: 20, lineHeight: 2}}
                        />
                    </div>
                </div>

            </div>
        </div>
      </Modal>
    </div>
  );
};

export default FilterModal;
