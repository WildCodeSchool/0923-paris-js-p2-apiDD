import React from "react";
import "../../../assets/variables.css";
import "./moneySeg.css";

function MoneySeg(props) {
  const { id, name, value } = props;
  return (
    <div className="purse" id={id}>
      <div className="purse_change">
        <div className="purse_value_content" id="purse_value_content_SmartPh">
          <p className="purse_value">{value}</p>
        </div>
        <div className="purse_money_line_DeskT">
          <div className="money_btn money_btn_DeskT" id="money_btn_down">
            <p className="money_btn_content">-</p>
          </div>
          <div className="purse_value_content">
            <p className="purse_value">{value}</p>
          </div>
          <div className="money_btn money_btn_DeskT">
            <p className="money_btn_content" id="money_btn_up">
              +
            </p>
          </div>
        </div>
      </div>

      <div className="purse_title_line">
        <div className="money_btn money_btn_SmartPh" id="money_btn_down">
          <p className="money_btn_content">-</p>
        </div>
        <div className="purse_title_container">
          <p className="purse_title">{name}</p>
        </div>
        <div className="money_btn money_btn_SmartPh">
          <p className="money_btn_content" id="money_btn_up">
            +
          </p>
        </div>
      </div>
    </div>
  );
}

export default MoneySeg;
