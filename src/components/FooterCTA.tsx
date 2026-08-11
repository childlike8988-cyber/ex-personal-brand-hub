"use client";

import { useState } from "react";

export function FooterCTA() {
  const [message, setMessage] = useState("");
  return <section className="container footer-cta" id="contact"><div className="offer-mark">限量<br />建置</div><div><p>個人品牌網站</p><h2>每月前 3 名預訂享 <b>5 折</b></h2></div><p className="cta-note">基礎功能依產業不同配置<br />進階功能可依需求擴充</p><div className="cta-action"><button className="button button-gold" type="button" onClick={() => setMessage("Demo：正式版可串接 LINE、表單或指定聯絡管道。")}>私訊討論 <span>→</span></button>{message && <span role="status">{message}</span>}</div></section>;
}
