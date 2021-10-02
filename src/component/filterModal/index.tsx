import {Checkbox, Modal} from "antd";
import React from "react";
import './filterModal.scss';
import { ReactComponent as CloseIcon } from "../../assets/svg/close.svg";

interface filterModalProps {
  visible: boolean;
  onCancel: () => void;
}

const FilterModal = (props: filterModalProps) => {
  const { visible, onCancel } = props;

    const onChange = () => {};

    const onChange1 = () => {};


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

  return (
    <div className='app-filterModal'>
      <Modal
        visible={visible}
        closable={false}
        width={'25rem'}
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
                            onChange={onChange}
                            style={{ fontSize: 22, paddingBottom: 20, lineHeight: 2 }}
                        />
                    </div>
                    <hr style={{ marginTop: 20, width: 210 }} />

                    <div className="pprice">Price range</div>
                    <div>
                        <Checkbox.Group
                            options={options1}
                            onChange={onChange1}
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
