"use client";

import { useEffect, useMemo, useState } from "react";
import { DetailModal } from "@/components/DetailModal";
import { areaProperties, AreaSearchProperty, District, districtOptions } from "@/data/area-search";
import { profiles } from "@/data/profiles";
import styles from "./area-search.module.css";

type Layer = "school" | "mrt" | "lifestyle" | "other";

const featureItems: { id: Layer; icon: string; title: string; caption: string }[] = [
  { id: "school", icon: "⌂", title: "學區", caption: "學區顯示 Demo" },
  { id: "mrt", icon: "M", title: "捷運", caption: "路線與站點" },
  { id: "lifestyle", icon: "✦", title: "生活機能", caption: "商圈與公園" },
  { id: "other", icon: "⋯", title: "其他功能", caption: "更多條件" },
];

export function AreaSearchShowcase() {
  const [district, setDistrict] = useState<District>("全部區域");
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(areaProperties[0].id);
  const [layer, setLayer] = useState<Layer | null>(null);
  const [zoom, setZoom] = useState(1);
  const [detail, setDetail] = useState<AreaSearchProperty | null>(null);

  const results = useMemo(
    () =>
      areaProperties.filter(
        (property) =>
          (district === "全部區域" || property.district === district) &&
          `${property.title} ${property.district} ${property.area}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [district, query],
  );

  useEffect(() => {
    if (!results.some((property) => property.id === activeId)) {
      setActiveId(results[0]?.id ?? "");
    }
  }, [activeId, results]);

  function changeDistrict(next: District) {
    setDistrict(next);
    setQuery("");
  }

  return (
    <>
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="area-search-title">
          <p className={styles.kicker}>REALTY PROFILE · SHOWCASE FEATURE</p>
          <h1 id="area-search-title">
            區域找房 <span>（展示）</span>
          </h1>
          <p className={styles.english}>Area Property Search</p>
          <p>選擇想找的區域，快速瀏覽該區域內目前可提供的物件。</p>
          <label className={styles.search}>
            <span aria-hidden="true">⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="搜尋區域、生活圈、捷運站、物件名稱"
              aria-label="搜尋區域、生活圈、捷運站、物件名稱"
            />
          </label>
        </section>

        <section className={styles.controls} aria-label="區域與功能篩選">
          <div className={styles.districts} role="group" aria-label="選擇區域">
            {districtOptions.map((item) => (
              <button
                type="button"
                key={item}
                className={district === item ? styles.activeDistrict : ""}
                onClick={() => changeDistrict(item)}
                aria-pressed={district === item}
              >
                {item}
              </button>
            ))}
          </div>
          {layer === "other" && (
            <div className={styles.otherPopover} role="status">
              實價登錄　·　收藏　·　物件比較　·　更多條件
            </div>
          )}
        </section>

        <section className={styles.contentLayout} aria-label="區域找房展示">
          <div className={styles.featureGrid} aria-label="地圖功能圖層">
            {featureItems.map((feature) => (
              <button
                key={feature.id}
                type="button"
                className={layer === feature.id ? styles.activeFeature : ""}
                onClick={() => setLayer(layer === feature.id ? null : feature.id)}
                aria-pressed={layer === feature.id}
              >
                <b>{feature.icon}</b>
                <span>
                  {feature.title}
                  <small>{feature.caption}</small>
                </span>
              </button>
            ))}
          </div>

          <section className={styles.workspace} aria-label="地圖與物件結果">
            <DemoMap
              results={results}
              activeId={activeId}
              district={district}
              layer={layer}
              zoom={zoom}
              onSelect={setActiveId}
              onZoom={setZoom}
            />
            <div className={styles.results}>
              <div className={styles.resultHeading}>
                <div>
                  <p>AREA RESULTS</p>
                  <h2>找到 {results.length} 間物件</h2>
                </div>
                <span>{district === "全部區域" ? "高雄 Demo" : district}</span>
              </div>
              <div className={styles.propertyList}>
                {results.length ? (
                  results.map((property, index) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      index={index + 1}
                      active={property.id === activeId}
                      onSelect={() => setActiveId(property.id)}
                      onDetail={() => setDetail(property)}
                    />
                  ))
                ) : (
                  <div className={styles.empty}>找不到相符的 Demo 物件，請改用其他區域或關鍵字。</div>
                )}
              </div>
            </div>
          </section>
        </section>

        <section className={styles.notice}>
          <span aria-hidden="true">i</span>
          <div>
            <h2>展示功能 Demo</h2>
            <p>
              本頁為區域找房功能展示。正式版本可依需求串接真實物件資料、地圖座標、生活機能、實價登錄與其他房市資料，提供更完整的區域找房體驗。
            </p>
          </div>
        </section>
      </main>

      {detail && (
        <DetailModal profile={profiles.realty} item={detail} image={detail.image} onClose={() => setDetail(null)} />
      )}
    </>
  );
}

function DemoMap({
  results,
  activeId,
  district,
  layer,
  zoom,
  onSelect,
  onZoom,
}: {
  results: AreaSearchProperty[];
  activeId: string;
  district: District;
  layer: Layer | null;
  zoom: number;
  onSelect: (id: string) => void;
  onZoom: (value: number) => void;
}) {
  return (
    <div className={styles.mapShell}>
      <div className={styles.mapBadge}>
        <b>Kaohsiung Demo Map</b>
        <span>展示用區域與物件座標</span>
      </div>
      <div className={styles.mapCanvas} style={{ transform: `scale(${zoom})` }}>
        <svg className={styles.mapSvg} viewBox="0 0 100 100" aria-label="高雄示意地圖" role="img">
          <path className={styles.coast} d="M0 0H22V100H0Z" />
          <path className={styles.boundary} d="M25 20 L48 14 L64 29 L56 52 L67 67 L49 85 L28 76 L20 48 Z" />
          <path className={`${styles.districtShape} ${district === "鼓山區" ? styles.highlightDistrict : ""}`} d="M26 24 L43 20 L50 36 L43 55 L25 50 L19 38 Z" />
          <path className={`${styles.districtShape} ${district === "左營區" ? styles.highlightDistrict : ""}`} d="M52 14 L69 18 L75 34 L57 39 L50 29 Z" />
          <path className={`${styles.districtShape} ${district === "三民區" ? styles.highlightDistrict : ""}`} d="M43 42 L59 39 L66 55 L53 66 L39 58 Z" />
          <path className={`${styles.districtShape} ${district === "苓雅區" ? styles.highlightDistrict : ""}`} d="M58 57 L76 49 L83 66 L65 76 L53 66 Z" />
          <path className={`${styles.districtShape} ${district === "鳳山區" ? styles.highlightDistrict : ""}`} d="M69 73 L88 64 L94 84 L76 94 L62 85 Z" />
          <path className={styles.mrtLine} d="M72 6 Q63 28 67 44 Q75 57 77 85" />
          <path className={styles.mrtLineGold} d="M26 85 Q38 66 56 58 Q72 52 93 38" />
        </svg>
        {layer === "school" && <div className={`${styles.layerChip} ${styles.school}`}>學區顯示 Demo</div>}
        {layer === "lifestyle" && <div className={`${styles.layerChip} ${styles.lifestyle}`}>商圈　·　公園　·　醫療　·　超商</div>}
        {layer === "mrt" && (
          <div className={styles.stationGroup} aria-label="捷運站點示意">
            <i style={{ left: "67%", top: "25%" }}>M</i>
            <i style={{ left: "69%", top: "43%" }}>M</i>
            <i style={{ left: "74%", top: "60%" }}>M</i>
          </div>
        )}
        {results.map((property, index) => (
          <button
            key={property.id}
            type="button"
            className={`${styles.pin} ${activeId === property.id ? styles.activePin : ""}`}
            style={{ left: `${property.demoPosition.x}%`, top: `${property.demoPosition.y}%` }}
            onClick={() => onSelect(property.id)}
            aria-label={`選擇 ${property.title}`}
            aria-pressed={activeId === property.id}
          >
            <span>{index + 1}</span>
          </button>
        ))}
      </div>
      <div className={styles.legend} aria-label="地圖圖例">
        <span><i />捷運路線</span>
        <span><i />捷運站點</span>
        <span><i />區域邊界</span>
      </div>
      <div className={styles.mapControls} aria-label="地圖展示控制">
        <button type="button" onClick={() => onZoom(Math.min(1.2, Number((zoom + 0.1).toFixed(1))))} aria-label="放大地圖">+</button>
        <button type="button" onClick={() => onZoom(Math.max(1, Number((zoom - 0.1).toFixed(1))))} aria-label="縮小地圖">−</button>
        <button type="button" onClick={() => onZoom(1)} aria-label="重設地圖視角">⌖</button>
      </div>
    </div>
  );
}

function PropertyCard({
  property,
  index,
  active,
  onSelect,
  onDetail,
}: {
  property: AreaSearchProperty;
  index: number;
  active: boolean;
  onSelect: () => void;
  onDetail: () => void;
}) {
  return (
    <article className={`${styles.propertyCard} ${active ? styles.activeCard : ""}`} onClick={onSelect}>
      <span className={styles.listNumber}>{index}</span>
      <div
        className={styles.propertyImage}
        role="img"
        aria-label={`${property.title}展示圖片`}
        style={{ backgroundImage: `url(${property.image})`, backgroundPosition: property.imagePosition }}
      />
      <div className={styles.propertyBody}>
        <h3>{property.title}</h3>
        <p>{property.district} · {property.lifestyle}</p>
        <small>{property.rooms}房 {property.livingRooms}廳 {property.bathrooms}衛 · {property.ping} 坪 · <span className={styles.demoData}>展示資料</span></small>
        <div className={styles.tags}>{property.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
      <div className={styles.propertyAction}>
        <strong>{property.price}</strong>
        <button className="button button-outline small" type="button" onClick={(event) => { event.stopPropagation(); onDetail(); }}>查看詳情</button>
      </div>
    </article>
  );
}
