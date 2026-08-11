"use client";

import { useMemo, useState } from "react";

const defaults = { price: 2000, ratio: 80, rate: 2.06, years: 30 };

export function MortgageCalculator() {
  const [price, setPrice] = useState(defaults.price); const [ratio, setRatio] = useState(defaults.ratio); const [rate, setRate] = useState(defaults.rate); const [years, setYears] = useState(defaults.years);
  const result = useMemo(() => { const principal = Math.max(0, price * 10000 * ratio / 100); const monthlyRate = rate / 100 / 12; const months = years * 12; const monthly = monthlyRate === 0 ? principal / months : principal * monthlyRate * (1 + monthlyRate) ** months / ((1 + monthlyRate) ** months - 1); return { principal, monthly: Number.isFinite(monthly) ? monthly : 0 }; }, [price, ratio, rate, years]);
  const reset = () => { setPrice(defaults.price); setRatio(defaults.ratio); setRate(defaults.rate); setYears(defaults.years); };
  const field = (label: string, value: number, setValue: (value: number) => void, suffix: string, step = 1) => <label className="input-field">{label}<span><input aria-label={label} type="number" value={value} min="0" step={step} onChange={(event) => setValue(Number(event.target.value))} />{suffix}</span></label>;
  return <section className="container calculator" id="calculator"><div className="tool-heading"><div><p className="section-kicker">REALTY TOOL</p><h2>房貸試算</h2><p>快速掌握每月預估支出，協助安排下一步計畫。</p></div><button type="button" className="text-button" onClick={reset}>重設數值</button></div><div className="calc-grid"><div className="calc-fields">{field("房屋總價", price, setPrice, "萬元")}{field("貸款成數", ratio, setRatio, "%")}{field("貸款年利率", rate, setRate, "%", 0.01)}{field("貸款年限", years, setYears, "年")}</div><output className="calc-result"><span>預估貸款本金</span><small>NT$ {Math.round(result.principal).toLocaleString()}</small><hr /><span>每月約繳</span><strong>NT$ {Math.round(result.monthly).toLocaleString()} <i>/ 月</i></strong></output></div><p className="disclaimer">試算結果僅供參考，實際貸款條件依金融機構核准為準。</p></section>;
}
