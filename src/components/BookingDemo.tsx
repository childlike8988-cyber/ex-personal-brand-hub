"use client";

import { FormEvent, useState } from "react";

export function BookingDemo() {
  const [submitted, setSubmitted] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
  return <section className="container booking" id="services"><div className="tool-heading"><div><p className="section-kicker">BOOKING DEMO</p><h2>快速預約</h2><p>將每一次感興趣的互動，轉化為清楚的下一步。</p></div></div><form onSubmit={submit}><label>預約日期<input type="date" required defaultValue="2026-08-18" /></label><label>人數<select defaultValue="2"><option value="1">1 位</option><option value="2">2 位</option><option value="4">4 位</option><option value="6">6 位以上</option></select></label><label>姓名<input type="text" required placeholder="王小明" /></label><label>聯絡方式<input type="tel" required placeholder="0912-345-678" /></label><button className="button button-gold" type="submit">立即預約</button></form>{submitted && <div className="booking-success" role="status"><b>Demo 預約已送出</b><span>正式網站可依需求串接實際預約流程。</span></div>}</section>;
}
