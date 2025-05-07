package com.ruoyi.system.utils;

//import com.sun.xml.internal.txw2.annotation.XmlElement;


import lombok.Data;
import lombok.Getter;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@Getter
@XmlRootElement(name = "xml")
    public class OrderReturnInfo {

        @XmlElement(name = "return_code")
        private String returnCode;

        @XmlElement(name = "return_msg")
        private String returnMsg;

        @XmlElement(name = "result_code")
        private String resultCode;

        @XmlElement(name = "mch_id")
        private String mchId;

        @XmlElement(name = "appid")
        private String appId;

        @XmlElement(name = "nonce_str")
        private String nonceStr;

        @XmlElement(name = "sign")
        private String sign;

        @XmlElement(name = "prepay_id")
        private String prepayId;

        @XmlElement(name = "trade_type")
        private String tradeType;

        // Getters and Setters

}
