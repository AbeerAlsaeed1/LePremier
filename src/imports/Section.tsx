import svgPaths from "./svg-iwjguf0ovz";
import imgImageCorporateBuilding from "figma:asset/61fcea9050938b8873a14605e322d9e8d8a91337.png";

function ImageCorporateBuilding() {
  return (
    <div className="absolute h-[1000px] left-0 top-0 w-[1675.194px]" data-name="Image (Corporate Building)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageCorporateBuilding} />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-gradient-to-r from-[rgba(235,38,39,0.9)] h-[1000px] left-0 to-[rgba(212,32,32,0.8)] top-0 w-[1675.194px]" data-name="Container" />;
}

function Container() {
  return (
    <div className="absolute h-[1000px] left-0 top-0 w-[1675.194px]" data-name="Container">
      <ImageCorporateBuilding />
      <Container1 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute font-['Anton:Regular',sans-serif] h-[213.571px] leading-[106.785px] left-[35.6px] not-italic text-[106.785px] text-center text-white top-0 tracking-[2.2247px] w-[945.043px]" data-name="Heading 1">
      <p className="-translate-x-1/2 absolute left-[472.61px] top-[-1.11px]">{`BUILDING TOMORROW'S`}</p>
      <p className="-translate-x-1/2 absolute left-[472.95px] top-[105.67px]">SUCCESS TODAY</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[71.19px] left-[80.98px] top-[240.27px] w-[854.282px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Lato:Regular',sans-serif] leading-[35.595px] left-[427.54px] not-italic text-[26.696px] text-center text-white top-0 w-[727.475px] whitespace-pre-wrap">A diversified business group with over 20 years of excellence in Construction, Manufacturing, Safety, and Entertainment</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[235.35px] size-[22.247px] top-[22.25px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.2469 22.2469">
        <g id="Icon">
          <path d="M4.63487 11.1235H17.6123" id="Vector" stroke="var(--stroke-0, #EB2627)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.85391" />
          <path d={svgPaths.p132abe00} id="Vector_2" stroke="var(--stroke-0, #EB2627)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.85391" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-white h-[66.741px] left-[361.51px] rounded-[4.449px] shadow-[0px_11.123px_16.685px_0px_rgba(0,0,0,0.1),0px_4.449px_6.674px_0px_rgba(0,0,0,0.1)] top-[355.95px] w-[293.19px]" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Lato:Medium',sans-serif] leading-[31.146px] left-[131.1px] not-italic text-[#eb2627] text-[20.022px] text-center top-[17.8px]">Explore Our Divisions</p>
      <Icon />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[422.692px] left-[329.48px] top-[288.65px] w-[1016.233px]" data-name="Container">
      <Heading />
      <Paragraph />
      <Button />
    </div>
  );
}

export default function Section() {
  return (
    <div className="relative size-full" data-name="Section">
      <Container />
      <Container2 />
    </div>
  );
}