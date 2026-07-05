import { Header } from './components/Header';
import ContactForm from "./components/ContactForm";
import { DivisionCard } from './components/DivisionCard';
import { ProjectGalleryItem } from './components/ProjectGalleryItem';
import { Building, Factory, Shield, Music, Check, Mail, Phone, MapPin, ArrowRight, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LanguageProvider, useLanguage } from '@/app/contexts/LanguageContext';
import industrialBg from '../assets//5bbde425c755b5feb0d6b605c988d28422a3a578.png';
import buildingImage from '../assets//7879fdecdebace613fb46d6a0c90fe702fb796bd.png';
import aboutImage from '../assets//fd1126ac36f1a99def4f365b9a413f915ff43fd6.png';
import logoGrey from '../assets//c0a65ff90bacd53b6ef9182edd3f75fc40b18753.png';
import logoBlue from '../assets//5d74ca6cde6358b132173b5466c2bc84fbdbdfc9.png';
import logoYellow from '../assets//515ba472e4fd2fb45f49ac49a1074be040e2a8e6.png';
import logoOriginal from '../assets//9378e3684256543f62d4bc449a43aa8e33bb720a.png';
import heroSlide1 from '../assets//20406d9894f60469b41da2b93b16d898a327daf9.png';
import heroSlide2 from '../assets//1f67daf589dd5cd6123087fafd2c05ab333b90de.png';
import heroSlide3 from '../assets//ce20532e654bbf0feb82990a27eab0b452f1012f.png';
import heroSlide4 from '../assets//402a892ac0869d48095d6dc2176db46c6645394b.png';
import qrCode from '../assets//62fcc7302963a9ea9c203285d3a4d5ed3b8ba69e.png';
import heroSlide5 from '../assets//7b16a5e921f078f8db8fe4f745daaf10bc743aaa.png';
import heroSlide6 from '../assets//03074de7ac03a40dd9cc02c264f9b4782f401cf0.png';
import heroSlideDetails from '../assets//d1f42282b52a6719a64238bf86133a0bc5b12732.png';
import heroSlideDesign from '../assets//5571a5c6973e5d0955fef59ec286c2c32138cd3e.png';
import heroSlideVision from '../assets//fef7a97b9f08bb52fe98c2d4ff14ac4f08eff9ad.png';
import heroSlideRedLines from '../assets//b40ad0a2863a006d60f4be54415c8909cfa52248.png';
import heroSlideSystems from '../assets//8636b8c4108cc54df02b5dc426afa9e765724fc4.png';
import heroSlideProgress from '../assets//5b80b6504fe9e3fc2be82b584823aafa12cff7b3.png';
import heroSlideCertificate from '../assets//3e989f74e7e5633ac76680ea5bd2800618a87643.png';
import heroBackground from '../assets//03ce6031a31f1edcda84fe68880f5744a2921d24.png';
import heroSlideConstruction1 from '../assets//b1445c24490d1861dadc2bb8b6478ae798a6a053.png';
import heroSlideConstruction2 from '../assets//9ef9fc6540362a80bf9e6e6e0553581f98c75eb7.png';
import heroSlideConstruction3 from '../assets//150036d3308db24e6fed4845fad54460e404d285.png';
import heroSlideFirePipes from '../assets//2f40760bc273b90ed315fcfd914fab8f3c63200a.png';
import heroSlideDuctwork from '../assets//4293fe41ba665ab9e754c3dcf2e6e9b1bb7bcfe0.png';
import heroSlideRedScaffolding from '../assets//b31b03e311b181b9b67080f2d1d0b2d47f1f7a5f.png';
import alinmaBankImage from '../assets//09b3a4d1858d0ddbb5e9806ad350c194ef1d244c.png';
import alLuhaidanComplexImage from '../assets//fc532b5d4a28d6f4b2423e1deadf2e35b89dd7ab.png';
import alRajhiBankImage from '../assets//dc46641496b21dd582ec7327270b69b8b2239afa.png';
import alRomansiahImage from '../assets//e852b3c5ee23d4594ccccbf2542982f67761bd3d.png';
import bestWesternWahaImage from '../assets//2cd653f6769d5657c3f5b2e6eeaa429c1f081a34.png';
import bestWesternGallery1 from '../assets//8d5a6d7358c53653ee262227a3529545571e1b43.png';
import bestWesternGallery2 from '../assets//083fd18a4d4fcf5dd4f1d2384e14d8ad939fc5bd.png';
import bestWesternGallery3 from '../assets//419e2f98a0e574aa88f83be832788b5652896aae.png';
import bestWesternGallery4 from '../assets//a3aafd06a0dd41365e837718ac8cf89bb9cde0d8.png';
import alMasifComplexImage from '../assets//491dd6c3648ca1d2c75b0519615fd19c966fd931.png';
import gascoImage from '../assets//9c43a52d4d22c35bc4170f331f62e7847f313734.png';
import holidayInnImage from '../assets//57ceee43db6b1082ef7d5e08cf7640f0faf98b22.png';
import ministryFinanceImage from '../assets//1911eafb34c339d52ce795cd7e954ebe14e11d84.png';
import monshaatImage from '../assets//f4f72b709f3ef2326df9e5adf1a5ef726a5cfcf0.png';
import premiumSchoolImage from '../assets//03ce6031a31f1edcda84fe68880f5744a2921d24.png';
import privateCompoundImage from '../assets//3f56ed18679372c2915419cbc67e610be6988380.png';
import staybridgeImage from '../assets//d15eeaeb07d7593241d9ac99086619eca9e7448a.png';
import tbcSchoolsImage from '../assets//6f068904f376ae67d66835018278e37a15521384.png';
import tbcGallery1 from '../assets//dc4bf43d9d61a0ab42ed747ba43eae611e141399.png';
import tbcGallery2 from '../assets//f863e2a3748a320d4ff2533855fd704567781d68.png';
import tbcGallery3 from '../assets//3631328728d5e08662d69b525db37c69b2ad70fd.png';
import alYarmookSchoolImage from '../assets//718f890341e1181a6b4c59f3ed71a4bc2d677124.png';
import vocoImage from '../assets//21c5d6d57f54df0a185d1a83e98ebed8a863b622.png';
import alRaedImage from '../assets//cc1d71c006cdfec4a64671caf3c7ac766713ed03.png';
import clientsImage from '../assets//b2b513fc45c4e22756e9c12203d7da0d10c175ba.png';
import mofLogoImage from '../assets//357d5aeef9559419c1fdad6b5e2c738e863e95b8.png';
import tuderLogoImage from '../assets//6d4197c232816299450a0d47952ee50e7a71f6f4.png';
import tbcLogoImage from '../assets//cb0f8c5e605feac1a9d696dcbd34926cc3b2daba.png';
import alRomansiahLogoImage from '../assets//9f53bbab706697ed2eaf5ea80961e3bdae71ecbb.png';
import gascoLogoImage from '../assets//140ebe7dcf379a4facadf8966a5338960f82c625.png';
import riyadhDevLogoImage from '../assets//da182187fddc9cb73274557ca6eb7a2a8674031c.png';
import alinmaBankLogoImage from '../assets//fb7d18c34a85786a25716ebf6dbd82372dbc1878.png';
import alFaisaliahLogoImage from '../assets//e75fb23b2263f15c210c45fd04e2859586d888e3.png';
import vocoLogoImage from '../assets//ade4478895a6f8773dca462a34c3f6e1c6da5f90.png';
import miskLogoImage from '../assets//8a40f5fedaaa6984479c4af100dba0d78ac00eea.png';
import bestWesternLogoImage from '../assets//e5915048c69cd7ae166ea77e9f8ec99c36555b2c.png';
import holidayInnLogoImage from '../assets//fc6fa2e83aaf248136fd69259c7427b4f90726b2.png';
import monshaatLogoImage from '../assets//db2b75756415b0002c08b571418abdf521652a06.png';
import rajhiInvestLogoImage from '../assets//e9d15e5c5e35a63e4ac6d4c80408ef0eea8e0e9a.png';
import alRajhiBankBlueLogoImage from '../assets//4f3a098b2edd4d6739467262da7ec9e6e45f2b93.png';
import intercontinentalHotelsLogoImage from '../assets//925e5a849ed44c2c059a22ffc55a61507093ae32.png';
import mofaNewLogoImage from '../assets//eecf002d451b8eb938c94c0fc4d91474d9f46eac.png';
import mohNewLogoImage from '../assets//ba4b604f6d9b8d1cadf26b7febd1511c9f13374d.png';
import monshaatNewLogoImage from '../assets//ceffd0520b0fcfe4765de0a2fc4cb69914a0a943.png';
import bankAlbiladNewLogoImage from '../assets//d47f7aa331b429f6d448bce724071092fafbe05c.png';
import mofLogoIndustrialImage from '../assets//357d5aeef9559419c1fdad6b5e2c738e863e95b8.png';
import mofaLogoImage from '../assets//4bf2292b5d5b09c6ab770cfa37096379a89b193a.png';
import mohLogoImage from '../assets//8c32bfb850da4e133491047ce8e6aff2cccfc986.png';
import tbcLogoIndustrialImage from '../assets//cb0f8c5e605feac1a9d696dcbd34926cc3b2daba.png';
import intercontinentalLogoImage from '../assets//9996de3c2bee5d03198e0f19a508b0748afa0edb.png';
import zainLogoImage from '../assets//57081625b86f6100343faba1502878b313db385f.png';
import alRajhiBankLogoImage from '../assets//f9cbeaf6f931b31c20ba86a06a3a9ec110e2bf60.png';
import bankAlbiladLogoImage from '../assets//13a201f5c836f67fcc871e63e1f99fc1aafb70bb.png';
import nhcLogoImage from '../assets//e26ac7c88ed74a44865c7c6cb6a6e89bc5a5604e.png';
import royalEmbassyLogoImage from '../assets//23f2a673d5149f9e3c15d8d74f702090f7098f53.png';
import ministrySportLogoImage from '../assets//cba3c157b83556f593ff8f8c5ce6e3140911133b.png';
import kabGallery1 from '../assets//44a4268552588f2c8e066c12a664f0e77bf6b16e.png';
import danoneAlsafiLogo from '../assets//d73dc8393d6c0c01ee71afe268e40fcc60c0c628.png';
import raisLogoImage from '../assets//1c5f22af44db5e593c67de3d315bcc126d162c6a.png';
import architectureLogoImage from '../assets//f87925136420861f8ede94359abb7413d73d6258.png';
import alkhozamaLogoImage from '../assets//91fe077697dba7ebf51b20ff3c8f62054d1551a9.png';
import colorfulLogoImage from '../assets//2da7209f33f8addb966c97043259a182cd1f1437.png';
import fordPerformanceLogoImage from '../assets//6f54d0b29d14933a97aae96369d36cbf5db89448.png';
import hinoLogoImage from '../assets//ac63cb52e558bc9f7aff4b676c6e7472bab5de28.png';
import nissanDuarteLogoImage from '../assets//5304c378c47bbcadbf28790ec1c4fe67b5a4f8fe.png';
import mcdonaldsLogoImage from '../assets//b3c31f6eb575f27876742ef6fd2b772291187fe1.png';
import unifiedLogoImage from '../assets//c731ec927fe8f26f361b29c5068286c09aa11a28.png';
import alfarisSchoolLogoImage from '../assets//776c5cb6ad63783e2d9ced262e1240445195b5d2.png';
import zainNewLogoImage from '../assets//3828178d0e3ccb9f1c2b3ea8e6791c1e42098edb.png';
import sascoLogoImage from '../assets//0e724d98d8f03f8819ee820c3603d2e451d88af0.png';
import riyadhCareLogoImage from '../assets//a1fa0d39fa8aed2ca3c6d82833bcdaf444fe85a0.png';
import bestWesternHotelsLogoImage from '../assets//838a5bf14b037471d21c8db44264e726dcd4879e.png';
import riyadBankLogoImage from '../assets//04ef0947d8c494fb663b3815a60da1cee0f043e6.png';
import robertoCavalliLogoImage from '../assets//fdd6b73f354f8fe3e260c64c9a64a7afd61f8efe.png';
import darAlArkanLogoImage from '../assets//0bc35ca7b9048fe8f460fc1a59e5f096f36b5e83.png';
import gasStatisticsLogoImage from '../assets//15d3d7f3d17f1c11f5d0396d473d69714a99432d.png';
import kingFaisalHospitalLogoImage from '../assets//e2f069dff7c5f053d804e51fb4f4e4b0f1e55566.png';
import staybridgeSuitesLogoImage from '../assets//8140d178dcc4073e140ef4da7105b5ca11416885.png';
import kabGallery2 from '../assets//65d13c16ca01d9dc2c9c18190a4fedf671b285f8.png';
import kabHeroImage from '../assets//0464944092158acc1b2bc7bfc3fbc702921523bf.png';
import kabGallery3 from '../assets//9e5a0e3d6ea9951662397a920ab17dca7e9b653c.png';
import kabGallery4 from '../assets//43fa6bb90e78e795b43cd40d28f0eeee47e38f4b.png';
import kabGallery5 from '../assets//4a833cb9e12f25f45c736d3e5251f95e3d125276.png';
import alinmaGallery1 from '../assets//09b3a4d1858d0ddbb5e9806ad350c194ef1d244c.png';
import alinmaGallery2 from '../assets//4a091662bf7e4b2645679c83dabbbce5de724ec3.png';
import alinmaGallery3 from '../assets//27bfc2bb3831df4f8733ecaa376991303f073a9f.png';
import alinmaGallery4 from '../assets//3a9b9c2e3b80843049681e48ee8559859bc49bb8.png';
import alRaedGallery1 from '../assets//52ace66db8dd19b6d8524c48c74869919663713b.png';
import alRaedGallery2 from '../assets//b7e938fa34ba704eb9ed6b25f564669430c848ea.png';
import alRaedGallery3 from '../assets//7a824e4de3b3452f95f784167ed8019c4d71d168.png';
import alRaedGallery4 from '../assets//9b41e8b72b6c4d1a29950320e64d185aa51c787f.png';
import alRaedGallery5 from '../assets//3af6a327c45441e0f5bc545bb7e246a742a28337.png';
import alRaedGallery6 from '../assets//cb074b07c6344f5cb1a7b11137ea1bcf2a842d73.png';
import alRaedGallery7 from '../assets//3965d078bf175305d85a0658b85d8ef6a9cff74f.png';
import vocoGallery1 from '../assets//942dfc126f3ccad072b44d629cf281a9ec6f3f68.png';
import vocoGallery2 from '../assets//c9efed86c730ca02d011510f8477b4f1a1ebb40b.png';
import vocoGallery3 from '../assets//c725378702ca6def3e691e9d3a99e791f3184602.png';
import vocoGallery4 from '../assets//a004eb84e22ef50d44ed4feff23f9c67e6d7e298.png';
import vocoGallery5 from '../assets//4ba77b2002629f0b45296a25a36ce54d0fd6b2cb.png';
import vocoGallery6 from '../assets//5e099ef00359eaa159cb7e10314bb6b0943db147.png';
import staybridgeGallery1 from '../assets//d15eeaeb07d7593241d9ac99086619eca9e7448a.png';
import staybridgeGallery2 from '../assets//abbd7264f94bf979abd480ea918a2001078a77d8.png';
import staybridgeGallery3 from '../assets//e49aee5aea86810f36b3f871225ab803dc68272f.png';
import staybridgeGallery4 from '../assets//4f2d0cb5444343a672e4725814989ff84c08ba95.png';
import staybridgeGallery5 from '../assets//21dbf43292544c108d0d680f5ffb1001afee90b7.png';
import staybridgeGallery6 from '../assets//30606cfe4ea4a328e4becb3649e4f66b252cecb7.png';
import rowadGallery2 from '../assets//ddcb948dd359c27dc37d11a3b2097885ae8ff637.png';
import rowadGallery3 from '../assets//6c6755ea93e43b0d9411fdf9960d8def08f2b8b8.png';
import rowadGallery4 from '../assets//d7b783906a335828b53ad1fee344c34eec2358da.png';
import rowadGallery5 from '../assets//ef77be117cebca307960fdc66ff3cc9d6e66c055.png';
import rowadGallery6 from '../assets//0156eb80424d750b24e7b13ca2d7b5d723897b56.png';
import rowadGallery8 from '../assets//becfc4dff26292abac680f097a9d596307a363b6.png';
import rowadGallery9 from '../assets//3c697c4a2158dd134b195c1d76a564806b9d5dea.png';
import rowadGallery10 from '../assets//53ffc577154b0965bb433c74a65b0f6692ea9110.png';
import alRayanImage from '../assets//c80c33f8fc0e285febc8953cd3fb83e8bb88927d.png';
import alRayanGallery1 from '../assets//c80c33f8fc0e285febc8953cd3fb83e8bb88927d.png';
import alRayanGallery2 from '../assets//42258334c225a30f3a2092953a650905ccdb5f19.png';
import alRayanGallery3 from '../assets//61714ebb271f8d7fbab0d810ad2c3c7a99a4db24.png';
import alRayanGallery4 from '../assets//0ede8b7726023f0479c001a75129ac661bc897fb.png';
import privateCompoundGallery1 from '../assets//6401fdf4663e6f89e3679cf4a35411f9edb95909.png';
import privateCompoundGallery2 from '../assets//e2741e48a82b45ff00ca0ec22921d947d4feec72.png';
import privateCompoundGallery3 from '../assets//b8bb6626f3e5473be8208311a3db71029fca168b.png';
import privateCompoundGallery4 from '../assets//9b1136b816f2d262f27265550bc638d3b917602b.png';
import moshaatGallery1 from '../assets//f6e6d4741bd9f242ad17fcd579235863a3cbfaf6.png';
import moshaatGallery2 from '../assets//618f4867120b64e3f9a6cfff66929d42ff26c44f.png';
import moshaatGallery3 from '../assets//d63b6bc47805e143ca9df2fafebb885f6a50b068.png';
import moshaatGallery4 from '../assets//0765a899151f6f7318b5686013e0aed3fae7798f.png';
import moshaatGallery5 from '../assets//53bb51419201149d402a91cf4b73514a0ceb95a4.png';
import moshaatGallery6 from '../assets//25d0f12dd3c7569c2bdee8ac103f80bc6b778bc8.png';
import moshaatGallery7 from '../assets//ccb8cd00db3998b719ec1b08ccd1cf346b58b5b2.png';
import moshaatGallery8 from '../assets//31d31768cfb884808402c2986ef7b24295488243.png';
import holidayInnGallery1 from '../assets//57ceee43db6b1082ef7d5e08cf7640f0faf98b22.png';
import holidayInnGallery2 from '../assets//d0c4aa4e352ce13ef9d9ba17519090c7ccd8fd13.png';
import holidayInnGallery3 from '../assets//0b5225a8f969732820783cf1f9f2966df9ecdfc0.png';
import holidayInnGallery4 from '../assets//d7afa801b47e8bf615b5f2e8e282116dfebeb71c.png';
import holidayInnGallery5 from '../assets//cd6979f802edf8abecb48c0b32a6fcc623910dff.png';
import holidayInnGallery6 from '../assets//e911a341a1a9008d31c7bb208c6adf6cc43f9599.png';
import holidayInnGallery7 from '../assets//7604e1d44a3aa8c9545ebef5d2f05bbc18ad092f.png';
import holidayInnGallery8 from '../assets//04c901eed2d9e6e5057dbb1bdfe31a133a6167ee.png';
import holidayInnGallery9 from '../assets//31c886593406706bc37beaaa30d91537b24ef190.png';
import holidayInnGallery10 from '../assets//10a98de1caa6efe23bf8745da177f9c8dcf71a2d.png';
import holidayInnGallery11 from '../assets//abac05891bbc9009cb1e32697292b5b81a91c99a.png';
import holidayInnGallery12 from '../assets//d8a29a262dca2a6d8b5d9d505b210ffbbc13c846.png';
import mofGallery1 from '../assets//1911eafb34c339d52ce795cd7e954ebe14e11d84.png';
import mofGallery2 from '../assets//0178c1e22f6c6925bcb3806f8bb84511b5750f22.png';
import mofGallery3 from '../assets//0de44328471764aafd2305202b7f9ac27b641752.png';
import mofGallery4 from '../assets//94c5db3ad9be1412020968f3e14cfee691633735.png';
import novotelImage from '../assets//3ff41a3e348192f87dea743153ca7e876b4c2202.png';
import novotelGallery1 from '../assets//3ff41a3e348192f87dea743153ca7e876b4c2202.png';
import novotelGallery2 from '../assets//c7f17f099c7d2355fb8efb69bf472cda4e4ee667.png';
import novotelGallery3 from '../assets//7ad070c8437ff3a63e4ff35e7d57b81e7e44ad29.png';
import novotelGallery4 from '../assets//d01031374ac740eca361e974c985e1d9dd49155b.png';
import novotelGallery5 from '../assets//5adc550452a35bc248a2f877226ee2e6d78737ec.png';
import novotelGallery6 from '../assets//132227cf8ab3e0eb671ff1a6fb1734936f72194e.png';
import novotelGallery7 from '../assets//1b32587c998ee225e61042a94f2a15e8c68d10b9.png';
import novotelGallery8 from '../assets//9007e5b04dd8bb8ca58529c4727757cec583cce6.png';
import novotelGallery9 from '../assets//06e6a158e775a2a5db3392d4c60f63382c02e478.png';
import novotelGallery10 from '../assets//1d51916b989ca04f3d78e641f3441ee088deb171.png';
import shaqraFactoryImage from '../assets//6dad302703c3f1c09afe087d1a8231405c842c1a.png';
import shaqraFactoryGallery1 from '../assets//6dad302703c3f1c09afe087d1a8231405c842c1a.png';
import shaqraFactoryGallery2 from '../assets//ed6af4461f9508094b46562be94b69661e1ac8bd.png';
import shaqraFactoryGallery3 from '../assets//c1513df23e5ff5b18291927fe92e86aedb9afa3f.png';
import shaqraFactoryGallery4 from '../assets//dad30f2c91d8b0d334527787d17c35be004a0d75.png';
import theRockImage from '../assets//f91ae2594173baceded5450fb4b7daf509b6e929.png';
import theRockGallery1 from '../assets//f91ae2594173baceded5450fb4b7daf509b6e929.png';
import theRockGallery2 from '../assets//b089592a793417f343a327241c674db63730813d.png';
import theRockGallery3 from '../assets//3025a9cc4c9c5b3e49b225d7b33b06e4d5496544.png';
import theRockGallery4 from '../assets//cf592a8a1b548bf9be355f1a0715ec308a3a99d5.png';
import alLuhaidanGallery1 from '../assets//9ffb92b8b32168c8995a015f8d79e48b8af057dc.png';
import alLuhaidanGallery2 from '../assets//7d0777f5f94966363cc62eccc51bf03be8c00671.png';
import alLuhaidanGallery3 from '../assets//249ee4f8edc140161328173cb6439f3b31c48a6e.png';
import alLuhaidanGallery4 from '../assets//2c767c0d9b7b9fad7f03f105a3a60b2ff59fcfd2.png';
import alMasifGallery1 from '../assets//491dd6c3648ca1d2c75b0519615fd19c966fd931.png';
import alMasifGallery2 from '../assets//9401af57ce521d2f76624d73f3df3b03513f58df.png';
import alMasifGallery3 from '../assets//e075da2aa1d95c620694a0a0ec7eca90511e3fdd.png';
import alMasifGallery4 from '../assets//e6254255c21f2bc060f9d458c9f35c07d64b06e9.png';
import alMasifGallery5 from '../assets//de3a7984e2b3345ebd01350fa31f73822c5fef9b.png';
import alRajhiGallery1 from '../assets//dc46641496b21dd582ec7327270b69b8b2239afa.png';
import alRajhiGallery2 from '../assets//98a2b4601648c4718ba0cebece3f8ec60d4a42c5.png';
import alRajhiGallery3 from '../assets//fc9e65c4a3dc7820549c574d9c1d7aefbe4b94f8.png';
import alRajhiGallery4 from '../assets//6af68f6a911d16b1aba83ba82936f68dee3cf87f.png';
import alRajhiGallery5 from '../assets//5fe262b8e16209f411f023aafa9e21ff275dc0a0.png';
import alRajhiGallery6 from '../assets//99d9c122f27d4410fbc43fb1253d09207fd6fb2c.png';
import alRajhiGallery7 from '../assets//cc74d27f1d1d298eade954366409e345814ac0e0.png';
import alRajhiGallery8 from '../assets//7de25cbb4682530e83294b833b5653a39c550f10.png';
import alRajhiGallery9 from '../assets//c9e033a045ed09db47c72616332242bfb490926c.png';
import alRajhiGallery10 from '../assets//b8323a2a356eedacb23603ad244c1c9cd6599f1b.png';
import alRajhiGallery11 from '../assets//c9611880b8bc9862c3bc1aa35a92ef72bb873b87.png';
import alRajhiGallery12 from '../assets//80e57f3063429dad7358ab240a30b6774096dd13.png';
import alRajhiGallery13 from '../assets//098e1cc3864068916e22973cf50bdb34b5ab54b3.png';
import alRajhiGallery14 from '../assets//12e871bb3ceb91d3143eb8b0a1ea9a2ea6b5559b.png';
import alRajhiGallery15 from '../assets//6f20eb5805b53e98a4e8d7f8f764b2218801e246.png';
import alRajhiGallery16 from '../assets//986e23b5de8f4a26ce9ca8b1357d4bffc3138ad9.png';
import alRawdahImage from '../assets//1d0fc7c08b9510b09e203f64e4f2634f45c46c7a.png';
import alRawdahGallery1 from '../assets//648634b679f8ef51972da31914cb2f518cc8079f.png';
import alRawdahGallery2 from '../assets//0962f99beb90d425d5a32b098b39d9b5a8bd41ac.png';
import alRawdahGallery3 from '../assets//1d0fc7c08b9510b09e203f64e4f2634f45c46c7a.png';
import alRawdahGallery4 from '../assets//b14f8a7245c1dc4fb848eabad92cd141eed6b561.png';
import alRomansiahGallery1 from '../assets//23c8fb19742f57df5eca0e4b8ab928b02b54893d.png';
import alRomansiahGallery2 from '../assets//ada35312aac8f6e1db9ffc0c45d96a48286ee180.png';
import alRomansiahGallery3 from '../assets//40c5d4241218fa3a6d7e30e8ea17903cd0f8406a.png';
import alRomansiahGallery4 from '../assets//9a36e5606650e5049811ceb4f6c6b4f1cadaa97e.png';
import gascoGallery1 from '../assets//238662a7b370b40a087676a00e66565c50e2eda8.png';
import gascoGallery2 from '../assets//532381a67c54cdb255e96105d5ecf5f4ba5e7884.png';
import gascoGallery3 from '../assets//12d527fa88148cc2c22aec55cf9ca7e81d5a49b0.png';
import gascoGallery4 from '../assets//2fa92efe6c51f723ed67714b4b69c47124765c74.png';
import gascoGallery5 from '../assets//8cd4b08854d488f3c7ad0b7b247efc0fdddef5a8.png';
import gascoGallery6 from '../assets//f97aa10e08b86cd79135dc5578f3590d2bc149bc.png';
import intercontinentalImage from '../assets//de91ed5862f20f25ee0d1e4b9f496fe483557cc8.png';
import intercontinentalGallery1 from '../assets//de91ed5862f20f25ee0d1e4b9f496fe483557cc8.png';
import intercontinentalGallery2 from '../assets//93472aab3bd01b889fe54a9c09a2c57cebebc8e5.png';
import intercontinentalGallery3 from '../assets//1de2ff379d7a2bf267707c39a9d293017315b9f5.png';
import intercontinentalGallery4 from '../assets//e8fa114b20bb688794527e846b2fb48552be8fce.png';
import mofGallery5 from '../assets//ccf8484c122b1dc9598673c0a1f303d8bcf5291a.png';
import mofGallery6 from '../assets//b1009caf8d7fba787fe7e57a6548a577ac0c3091.png';
import mofGallery7 from '../assets//4f88ec1911580f24e9b1ef6cb6a99b59c6e8978e.png';
import premiumSchoolGallery1 from '../assets//ca42b5d69cd94ce98177b8e7874dfca8c52b4909.png';
import premiumSchoolGallery2 from '../assets//220550898dc7529148986a7e716f86a5f0088a51.png';
import premiumSchoolGallery3 from '../assets//ce50e482ed8ea51587317ec38cc32455df224cfa.png';
import premiumSchoolGallery4 from '../assets//b34c1a87751ddb861f896bb0aadc9c82aa979857.png';
import premiumSchoolGallery5 from '../assets//d30f21bface95956218e66a0a6cc3f00a67f51c5.png';
import premiumSchoolGallery6 from '../assets//db55b603e71114233e350e36b8af0f90e3d8ea74.png';
import premiumSchoolGallery7 from '../assets//32c35b3edc6e65b7dcd2a05f3c8962c21b7d2fa6.png';
import premiumSchoolGallery8 from '../assets//f16027f8aac595b71d18b0e1b5cc973cc51d80e4.png';

function AppContent() {
  const { t, language, isRTL } = useLanguage();
  const [selectedDivision, setSelectedDivision] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    setShowSuccess(true);
    e.currentTarget.reset();
  }
}

  const divisions = [
    {
      id: 'construction',
      title: language === 'en' ? 'CONSTRUCTION' : 'المقاولات',
      description: t('divisions.construction.fullDesc'),
      icon: Building,
      image: buildingImage,
      logo: logoGrey
    },
    {
      id: 'industrial',
      title: language === 'en' ? 'INDUSTRIAL' : 'الصناعة',
      description: t('divisions.manufacturing.fullDesc'),
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1501880622860-e1be39410ac1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxkaW5nJTIwbWV0YWwlMjB3b3JrfGVufDF8fHx8MTc2NzYwODA4OHww&ixlib=rb-4.1.0&q=80&w=1080',
      logo: logoBlue
    },
    {
      id: 'safety',
      title: language === 'en' ? 'SAFETY & FIRE PROTECTION' : 'للسلامة و الحماية من الحرائق',
      description: t('divisions.safety.fullDesc'),
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1730579798283-69903b94916a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwc2FmZXR5JTIwc3ByaW5rbGVyfGVufDF8fHx8MTc2NzY4ODQzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      logo: logoYellow
    },
    {
      id: 'entertainment',
      title: language === 'en' ? 'ENTERTAINMENT' : 'الترفيه',
      description: t('divisions.entertainment.fullDesc'),
      icon: Music,
      image: 'https://images.unsplash.com/photo-1566781000434-a975f1a23399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcXVlc3RyaWFuJTIwaG9yc2UlMjBzdGFibGV8ZW58MXx8fHwxNzY3Njg4MjA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      logo: logoGrey
    }
  ];

  const constructionServices = [
    t('construction.serviceslist.hospitality'),
    t('construction.serviceslist.commercial'),
    t('construction.serviceslist.industrial'),
    t('construction.serviceslist.infrastructure'),
    t('construction.serviceslist.renovation'),
    t('construction.serviceslist.steel'),
    t('construction.serviceslist.dataroom'),
    t('construction.serviceslist.knx'),
    t('construction.serviceslist.concrete'),
    t('construction.serviceslist.mep'),
    t('construction.serviceslist.interior'),
    t('construction.serviceslist.turnkey'),
    t('construction.serviceslist.hotelfit'),
    t('construction.serviceslist.intfitout'),
    t('construction.serviceslist.lowcurrent'),
    t('construction.serviceslist.delivery'),
    t('construction.serviceslist.bms'),
    t('construction.serviceslist.grms')
  ];

  const safetyServices = {
    fireProtection: [
      t('safety.protection.alarm'),
      t('safety.protection.sprinkler'),
      t('safety.protection.suppression'),
      t('safety.protection.lighting'),
      t('safety.protection.extinguisher'),
      t('safety.protection.hydrant')
    ],
    safety: [
      t('safety.equipment.risk'),
      t('safety.equipment.supply'),
      t('safety.equipment.audits'),
      t('safety.equipment.elv'),
      t('safety.equipment.data'),
      t('safety.equipment.sound')
    ],
    maintenance: [
      t('safety.maintenance.inspections'),
      t('safety.maintenance.preventive'),
      t('safety.maintenance.upgrades'),
      t('safety.maintenance.certification'),
      t('safety.maintenance.documentation')
    ]
  };

  const industrialServices = {
    grc: {
      title: t('manufacturing.services.grc.title'),
      items: [
        t('manufacturing.services.grc.item1'),
        t('manufacturing.services.grc.item2'),
        t('manufacturing.services.grc.item3'),
        t('manufacturing.services.grc.item4'),
        t('manufacturing.services.grc.item5'),
        t('manufacturing.services.grc.item6')
      ],
      description: t('manufacturing.services.grc.description')
    },
    wooden: {
      title: t('manufacturing.services.wooden.title'),
      items: [
        t('manufacturing.services.wooden.item1'),
        t('manufacturing.services.wooden.item2'),
        t('manufacturing.services.wooden.item3'),
        t('manufacturing.services.wooden.item4'),
        t('manufacturing.services.wooden.item5'),
        t('manufacturing.services.wooden.item6')
      ],
      description: t('manufacturing.services.wooden.description')
    },
    aluminum: {
      title: t('manufacturing.services.aluminum.title'),
      items: [
        t('manufacturing.services.aluminum.item1'),
        t('manufacturing.services.aluminum.item2'),
        t('manufacturing.services.aluminum.item3'),
        t('manufacturing.services.aluminum.item4'),
        t('manufacturing.services.aluminum.item5'),
        t('manufacturing.services.aluminum.item6'),
        t('manufacturing.services.aluminum.item7'),
        t('manufacturing.services.aluminum.item8'),
        t('manufacturing.services.aluminum.item9'),
        t('manufacturing.services.aluminum.item10')
      ],
      description: t('manufacturing.services.aluminum.description')
    },
    acrylic: {
      title: t('manufacturing.services.acrylic.title'),
      items: [
        t('manufacturing.services.acrylic.item1'),
        t('manufacturing.services.acrylic.item2'),
        t('manufacturing.services.acrylic.item3'),
        t('manufacturing.services.acrylic.item4'),
        t('manufacturing.services.acrylic.item5'),
        t('manufacturing.services.acrylic.item6'),
        t('manufacturing.services.acrylic.item7')
      ],
      description: t('manufacturing.services.acrylic.description')
    }
  };

  const clients = [
    { name: 'Client 1', logo: 'https://via.placeholder.com/150x80?text=Client+1' },
    { name: 'Client 2', logo: 'https://via.placeholder.com/150x80?text=Client+2' },
    { name: 'Client 3', logo: 'https://via.placeholder.com/150x80?text=Client+3' },
    { name: 'Client 4', logo: 'https://via.placeholder.com/150x80?text=Client+4' },
    { name: 'Client 5', logo: 'https://via.placeholder.com/150x80?text=Client+5' },
    { name: 'Client 6', logo: 'https://via.placeholder.com/150x80?text=Client+6' },
  ];

  // Helper function to translate project names
  const getProjectName = (name: string) => {
    const projectKeyMap: Record<string, string> = {
      'Premium private al Riyadh schools': 'projects.premium',
      'Premium private AL Riyadh schools': 'projects.premium',
      'Best Western PLUS Al-Waha Hotel – 4 Stars': 'projects.bestwaha',
      'Alinma Bank': 'projects.alinma',
      'Holiday Inn Suites Hotel - 5 Stars': 'projects.holidayinn',
      'VOCO Suites Hotel - 5 Stars': 'projects.voco',
      'Staybridge Suites Hotel - 5 Stars': 'projects.staybridge',
      'Al Raed Groove Complex': 'projects.raed',
      'AL Rayan Commercial Complex': 'projects.rayan',
      'AL Masif Commercial Complex': 'projects.masif',
      'Al Romansiah Branch': 'projects.romansiah',
      'Al Rajhi Bank Branches': 'projects.rajhibank',
      'Ministry of finance offices': 'projects.mof',
      'TBC Schools': 'projects.tbc',
      'Rowad Al Khaleej international School': 'projects.rowad',
      'Gasco head office': 'projects.gasco',
      'Al-Luhaidan Commercial Complex & Offices': 'projects.luhaidan',
      'Private Compounds': 'projects.compounds'
    };
    const key = projectKeyMap[name];
    return key ? t(key) : name;
  };

  if (selectedDivision === 'construction') {
    return (
      <div className="min-h-screen bg-white" style={{ fontFamily: 'Lato, sans-serif' }}>
        <Header logoSrc={logoOriginal} />
        
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
          <div className="absolute inset-0">
            <img 
              src={buildingImage}
              alt="Construction"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setSelectedDivision(null)}
              className="mb-8 text-white hover:text-[#eb2627] transition-colors flex items-center gap-2"
            >
              {isRTL ? '→' : '←'} {t('common.backToHome')}
            </button>
            <h1 className="text-6xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
              {language === 'en' ? 'LE PREMIER CONSTRUCTION' : 'أول تصميم للمقاولات'}
            </h1>
            <p className="text-white text-xl max-w-3xl">
              {t('construction.hero.description')}
            </p>
          </div>
        </section>

        {/* Mission, About, Vision */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {t('construction.mission.title').toUpperCase()}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('construction.mission.description')}
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {t('construction.about.title').toUpperCase()}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('construction.about.description')}
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {t('construction.vision.title').toUpperCase()}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('construction.vision.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Construction Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl text-[#eb2627] mb-12 text-center" style={{ fontFamily: 'Anton, sans-serif' }}>
              {t('construction.serviceslist.title').toUpperCase()}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                constructionServices.slice(0, 6),
                constructionServices.slice(6, 12),
                constructionServices.slice(12, 18)
              ].map((serviceGroup, groupIdx) => (
                <div key={groupIdx}>
                  <ul className="space-y-3">
                    {serviceGroup.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-[#eb2627] flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-lg">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-[#eb2627] mx-auto mb-6"></div>
              <h2 className="text-4xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                {t('construction.ourprojects.title').toUpperCase()}
              </h2>
            </div>
            
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-1">
              {[
                { name: t('projects.novotel'), location: 'Riyadh', owner: 'Al raya Real State', sector: 'Hospitality', status: 'Under Progress', year: '2025-2026', image: novotelImage, description: 'An ongoing Novotel Hotel construction project in Riyadh, reflecting our commitment to excellence in execution, quality workmanship, and timely delivery in the hospitality sector.' },
                { name: t('projects.shaqra'), location: 'Riyadh-Shaqra industrial city', owner: 'Awal tasmim industrial', sector: 'Industrial', status: 'Under Progress', year: '2025-2026', image: shaqraFactoryImage, description: 'Shaqra Factory is one of our strategic industrial developments currently under construction in Riyadh – Shaqra Industrial City. This project reflects our company\'s commitment to expanding our industrial capabilities and delivering high-quality construction standards. The development showcases our expertise in executing large-scale industrial facilities with a strong focus on efficiency, safety, and operational excellence.' },
                { name: t('projects.therock'), location: 'Riyadh Hitten', owner: 'Mr.Adel AlNamlah', sector: 'Commercial & Offices', status: 'Under Progress', year: '2025-2026', image: theRockImage, description: 'The Rock is an ongoing commercial and office construction project located in Hittin, Riyadh. The project reflects our commitment to quality workmanship, efficient project management, and timely delivery. Construction is currently in progress, with work advancing according to schedule.' },
                { name: t('projects.bestwaha'), location: 'Riyadh', owner: 'SASCO', sector: 'Hospitality', status: 'Under progress', year: '2024-2025', image: bestWesternWahaImage, description: 'The Best Western PLUS Al-Waha Hotel is a 4-star hospitality project in Riyadh currently under construction for SASCO. This development highlights our expertise in delivering high-quality hotel projects, with a strong focus on precision, safety, and exceptional execution standards. Our team is committed to achieving superior workmanship while ensuring timely delivery in line with international hospitality requirements.' },
                { name: t('projects.alyarmook'), location: 'Riyadh', owner: '', sector: 'Education', status: 'Under Progress', year: '2026', image: alYarmookSchoolImage },
                { name: t('projects.premium'), location: 'Riyadh', owner: 'Misk Foundation', sector: 'Education', status: 'Completed', year: '2024-2025', image: premiumSchoolImage, description: 'Premium Private Al Riyadh Schools is a completed educational development delivered for Misk Foundation in Riyadh. This project reflects our company\'s ability to successfully execute high-quality institutional buildings, meeting the highest standards of construction, safety, and functionality. The successful completion of this project demonstrates our commitment to excellence, precision, and on-time delivery for impactful community developments.', video: 'https://www.instagram.com/reel/DRrVZ0ZCJAy/?igsh=MTl6OW56Yzd0ajR2cw==' },
                { name: t('projects.alinma'), location: 'Riyadh', owner: 'Alinma bank', sector: 'Banks', status: 'Completed', year: '2024-2025', image: alinmaBankImage, description: 'We proudly delivered the Alinma Bank project in Riyadh, showcasing our commitment to quality, precision, and modern construction standards. The result is a functional and visually distinctive facility completed on time and to the highest standards.' },
                { name: t('projects.intercontinental'), location: 'Riyadh', owner: 'IHG Hotels & Resorts', sector: 'Hospitality', status: 'Completed', year: '2023', image: intercontinentalImage, description: 'We successfully delivered the renovation of the Intercontinental IHG Hotel in Riyadh, upgrading interiors and facilities to enhance guest experience while meeting the highest standards of quality and finishing.' },
                { name: t('projects.holidayinn'), location: 'AL Khobar', owner: 'Rajhi invest', sector: 'Hospitality', status: 'Completed', year: '2022', image: holidayInnImage, description: 'We delivered the Holiday Inn Suites Hotel (5 Stars) project in Al Khobar, providing high-quality finishes and modern hospitality standards to create a comfortable and premium guest experience, completed on time and to the highest quality.' },
                { name: t('projects.voco'), location: 'AL Khobar', owner: 'Rajhi invest', sector: 'Hospitality', status: 'Completed', year: '2022', image: vocoImage, description: 'VOCO Suites Hotel is a premium 5-star hospitality project in Al Khobar, completed in 2022 for Rajhi Invest. Our team delivered high-quality construction with meticulous attention to luxury finishes, MEP systems, and interior installations.' },
                { name: t('projects.staybridge'), location: 'AL Khobar', owner: 'Rajhi invest', sector: 'Hospitality', status: 'Completed', year: '2022', image: staybridgeImage, description: 'We successfully delivered the Staybridge Suites Hotel (5 Stars) in Al Khobar, providing high-end finishes and quality workmanship to create a comfortable, modern, and premium hospitality environment, completed on time and to the highest standards.' },
                { name: t('projects.rajhibank'), location: 'Different locations in Saudi Arabia', owner: 'Al Rajhi Bank', sector: 'Banks', status: 'Completed', year: '2022', image: alRajhiBankImage, description: 'We successfully delivered multiple Al Rajhi Bank branches across different locations in Saudi Arabia, ensuring consistent quality, modern design, and efficient execution while meeting the bank\'s operational and branding standards.' },
                { name: t('projects.rowad'), location: 'Al Khobar', owner: 'AL Khaleej for training and education', sector: 'Education', status: 'Completed', year: '2021', image: rowadGallery2, description: 'The school project was delivered with careful consideration for safety, learning environment, and durability, providing students with a modern and supportive educational facility.' },
                { name: t('projects.tbc'), location: 'Riyadh', owner: 'Ministry of education', sector: 'Education', status: 'Completed', year: '2021', image: tbcSchoolsImage, description: 'We delivered the TBC Schools project in Riyadh with a focus on smart planning, durable materials, and efficient execution, creating a practical and well-structured educational facility that supports students and staff alike.' },
                { name: t('projects.romansiah'), location: 'Al-Kharj', owner: 'Al Romansiah company', sector: 'Food and Beverage', status: 'Completed', year: '2021', image: alRomansiahImage, description: 'We completed the Al Romansiah branch in Al Kharj with a focus on strong visual identity, efficient layout, and quality finishes, delivering a welcoming and functional food and beverage space that supports smooth customer experience.' },
                { name: t('projects.rawdah'), location: 'Riyadh-Rawdah', owner: 'AlRajhi Development', sector: 'Real Estate', status: 'Completed', year: '2021', image: alRawdahImage, description: 'We delivered the Al Rawdah Commercial Building with a focus on structural quality, efficient space planning, and durable construction, resulting in a modern commercial property suitable for long-term use and investment.' },
                { name: t('projects.mof'), location: 'Riyadh', owner: 'MOF', sector: 'Government', status: 'Completed', year: '2021', image: ministryFinanceImage, description: 'We completed the office fit-out works for the Ministry of Finance in Riyadh, delivering modern workspaces with high-quality finishes, efficient layouts, and a professional environment that supports daily operations.' },
                { name: t('projects.gasco'), location: 'Riyadh', owner: 'Gasco company', sector: 'Energy', status: 'Completed', year: '2021', image: gascoImage, description: 'We delivered the Gasco Head Office project with a focus on executive-quality interiors, professional workspace design, and refined finishes, creating a functional and representative environment suitable for corporate operations.' },
                { name: t('projects.raed'), location: 'Riyadh', owner: 'Al Rajhi bank', sector: 'Real Estate', status: 'Completed', year: '2020', image: alRaedImage, description: 'Al Raed Groove is a completed mixed-use development in Riyadh for Al Rajhi Bank (2020), delivered by our team with a strong focus on construction quality, coordination, and timely execution across architectural, structural, and MEP works. The project was successfully completed within an accelerated timeline of just six months.' },
                { name: t('projects.rayan'), location: 'Riyadh', owner: 'Al Rajhi bank', sector: 'Banks', status: 'Completed', year: '2020', image: alRayanImage, description: 'A completed commercial complex in Al Rayan, delivered with high-quality construction and efficient execution across architectural, structural, and MEP works.' },
                { name: t('projects.masif'), location: 'Riyadh', owner: 'Al Rajhi for Development', sector: 'Real Estate', status: 'Completed', year: '2020', image: alMasifComplexImage, description: 'A successfully delivered commercial complex in Almasif for Al Rajhi for Development, reflecting high standards of quality, coordination, and execution.' },
                { name: t('projects.monshaat'), location: 'Riyadh', owner: 'Monshaat', sector: 'Government', status: 'Completed', year: '2020', image: monshaatImage, description: 'Successfully delivered the office interior works for Monsha\'at Office in Riyadh, ensuring quality, comfort, and modern functionality.' },
                { name: t('projects.compounds'), location: 'Riyadh', owner: '', sector: 'Real Estate', status: 'Completed', year: '2019', image: privateCompoundImage, description: 'Delivered a private residential compound in Riyadh, including villas, outdoor facilities, and landscaped areas with a focus on quality and functionality.' },
                { name: t('projects.luhaidan'), location: 'Riyadh', owner: 'Abdulkarim Al Luhaidan', sector: 'Real Estate', status: 'Completed', year: '2017', image: alLuhaidanComplexImage, description: 'Successfully delivered a commercial complex and office project in Riyadh, featuring contemporary design, durable construction, and functional workspaces.' },
                { name: t('projects.more'), location: '', owner: '', sector: '', status: '', year: '', image: '', description: 'What you see is only the surface, Behind every frame lies a deeper vision, waiting to be discovered.' },
              ].map((project, idx) => {
               const projectImages =
  project.name === t('projects.more')
    ? [
      '/moreproject.jpeg',
        '/raed.mp4',
        '/rajhibank.mp4',
        '/riyadh.mp4',
        '/thecanopy.mp4',
        '/townsquare.mp4',
        '/vid.mp4'
      ]
      : project.name === t('projects.premuim')
                  ? [alinmaGallery1, alinmaGallery2, alinmaGallery3, alinmaGallery4]
                  : project.name === t('projects.premium')
                    ? [premiumSchoolImage, premiumSchoolGallery1, premiumSchoolGallery2, premiumSchoolGallery3, premiumSchoolGallery4, premiumSchoolGallery5, premiumSchoolGallery6, premiumSchoolGallery7, premiumSchoolGallery8]
                    : project.name === t('projects.bestwaha')
                      ? [bestWesternWahaImage, bestWesternGallery1, bestWesternGallery2, bestWesternGallery3, bestWesternGallery4]
                      : project.name === t('projects.raed')
                      ? ['/raed.jpeg', "raed.mp4" , alRaedGallery1, alRaedGallery2, alRaedGallery3, alRaedGallery4, alRaedGallery5, alRaedGallery6, alRaedGallery7]
                      : project.name === t('projects.voco')
                      ? [vocoGallery1, vocoGallery2, vocoGallery3, vocoGallery4, vocoGallery5, vocoGallery6]
                      : project.name === t('projects.staybridge')
                        ? [staybridgeGallery1, staybridgeGallery2, staybridgeGallery3, staybridgeGallery4, staybridgeGallery5, staybridgeGallery6]
                        : project.name === t('projects.intercontinental')
                          ? [intercontinentalGallery4, intercontinentalGallery1, intercontinentalGallery2, intercontinentalGallery3]
                          : project.name === t('projects.rowad')
                            ? [rowadGallery2, rowadGallery3, rowadGallery4, rowadGallery5, rowadGallery6, rowadGallery8, rowadGallery9, rowadGallery10]
                            : project.name === t('projects.rayan')
  ? ['/rayan.jpeg', "/alrayn.mp4", alRayanGallery1, alRayanGallery2, alRayanGallery3, alRayanGallery4]
: project.name === t('projects.tbc')
  ? [tbcSchoolsImage, tbcGallery1, tbcGallery2, tbcGallery3]
                              : project.name === t('projects.monshaat')
                            ? [moshaatGallery1, moshaatGallery2, moshaatGallery3, moshaatGallery4, moshaatGallery5, moshaatGallery6, moshaatGallery7, moshaatGallery8]
                            : project.name === t('projects.holidayinn')
                              ? [holidayInnGallery1, holidayInnGallery2, holidayInnGallery3, holidayInnGallery4, holidayInnGallery5, holidayInnGallery6, holidayInnGallery7, holidayInnGallery8, holidayInnGallery9, holidayInnGallery10, holidayInnGallery11, holidayInnGallery12]
                              : project.name === t('projects.mof')
                                ? [mofGallery1, mofGallery2, mofGallery3, mofGallery4, mofGallery5, mofGallery6, mofGallery7]
                                : project.name === t('projects.novotel')
                                  ? [novotelGallery1, novotelGallery9, novotelGallery10, novotelGallery2, novotelGallery3, novotelGallery4, novotelGallery5, novotelGallery6, novotelGallery7, novotelGallery8]
                                  : project.name === t('projects.shaqra')
                                    ? [shaqraFactoryGallery1, shaqraFactoryGallery2, shaqraFactoryGallery3, shaqraFactoryGallery4]
                                    : project.name === t('projects.therock')
                                      ? [theRockGallery1, theRockGallery2, theRockGallery3, theRockGallery4]
                                      : project.name === t('projects.luhaidan')
                                        ? [alLuhaidanGallery1, alLuhaidanGallery2, alLuhaidanGallery3, alLuhaidanGallery4]
                                        : project.name === t('projects.masif')
                                          ? ['/masif.jpeg', "/massif.mp4",alMasifGallery1, alMasifGallery2, alMasifGallery3, alMasifGallery4, alMasifGallery5]
                                          : project.name === t('projects.rajhibank')
                                            ? [alRajhiGallery1, alRajhiGallery2, alRajhiGallery3, alRajhiGallery4, alRajhiGallery5, alRajhiGallery6, alRajhiGallery7, alRajhiGallery8, alRajhiGallery9, alRajhiGallery10, alRajhiGallery11, alRajhiGallery12, alRajhiGallery13, alRajhiGallery14, alRajhiGallery15, alRajhiGallery16]
                                            : project.name === t('projects.rawdah')
                                              ? [alRawdahGallery1, alRawdahGallery2, alRawdahGallery3, alRawdahGallery4]
                                              : project.name === t('projects.romansiah')
                                                ? [alRomansiahImage, alRomansiahGallery1, alRomansiahGallery2, alRomansiahGallery3, alRomansiahGallery4]
                                                : project.name === t('projects.gasco')
                                                  ? [gascoImage, gascoGallery1, gascoGallery2, gascoGallery3, gascoGallery4, gascoGallery5, gascoGallery6]
                                                  : project.name === t('projects.compounds')
                                                    ? [privateCompoundGallery2, privateCompoundGallery1, privateCompoundGallery3, privateCompoundGallery4]
                                                    : project.image 
                                ? [project.image, project.image, project.image, project.image, project.image]
                                : Array.from({ length: 5 }, (_, i) => `https://images.unsplash.com/photo-${1600000000000 + idx * 10000000 + i * 100000}?w=800&h=600&fit=crop`);
                
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => setSelectedProject({ ...project, division: 'construction', images: projectImages })}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                      <img 
src={projectImages[0]}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/300x225?text=' + encodeURIComponent(project.name.substring(0, 20)) }}
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="text-xs text-gray-900 mb-1 line-clamp-2 min-h-[2rem]" style={{ fontFamily: 'Anton, sans-serif' }}>
                        {project.name}
                      </h3>
                      <p className="text-[10px] text-gray-600 mb-1">{project.location} | {project.sector} | {project.year}</p>
                      <button className="text-blue-600 hover:text-blue-800 text-[10px] flex items-center gap-1">
                        Details →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-[#eb2627] mx-auto mb-6"></div>
              <h2 className="text-4xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                {t('construction.ourclients.title').toUpperCase()}
              </h2>
            </div>
            
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-1 justify-items-center">
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={rajhiInvestLogoImage} 
                  alt="Rajhi Invest" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={tbcLogoImage} 
                  alt="TBC" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={mohNewLogoImage} 
                  alt="Ministry of Health" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={monshaatNewLogoImage} 
                  alt="Monsha'at" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={mofLogoImage} 
                  alt="Ministry of Finance" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={mofaNewLogoImage} 
                  alt="Ministry of Foreign Affairs" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={ministrySportLogoImage} 
                  alt="Ministry of Sport" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={royalEmbassyLogoImage} 
                  alt="Royal Embassy" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={nhcLogoImage} 
                  alt="National Housing Company" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={gasStatisticsLogoImage} 
                  alt="General Authority for Statistics" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={kingFaisalHospitalLogoImage} 
                  alt="King Faisal Specialist Hospital & Research Center" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={riyadhCareLogoImage} 
                  alt="Riyadh Care Hospital" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={miskLogoImage} 
                  alt="Misk Foundation" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={vocoLogoImage} 
                  alt="Voco" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={intercontinentalHotelsLogoImage} 
                  alt="Intercontinental Hotels & Resorts" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={tuderLogoImage} 
                  alt="Tuder" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={bankAlbiladNewLogoImage} 
                  alt="Bank Albilad" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={riyadBankLogoImage} 
                  alt="Riyad Bank" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={alRajhiBankBlueLogoImage} 
                  alt="Al Rajhi Bank" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={alinmaBankLogoImage} 
                  alt="Alinma Bank" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={holidayInnLogoImage} 
                  alt="Holiday Inn & Suites" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={bestWesternLogoImage} 
                  alt="Best Western Plus" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={staybridgeSuitesLogoImage} 
                  alt="Staybridge Suites" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={alFaisaliahLogoImage} 
                  alt="Al Faisaliah Group" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={gascoLogoImage} 
                  alt="GASCO" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={robertoCavalliLogoImage} 
                  alt="Roberto Cavalli" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={zainNewLogoImage} 
                  alt="Zain" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={sascoLogoImage} 
                  alt="SASCO" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={unifiedLogoImage} 
                  alt="Unified" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={alkhozamaLogoImage} 
                  alt="Alkhozama Management Company" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={architectureLogoImage} 
                  alt="Architecture" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={colorfulLogoImage} 
                  alt="Client Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={darAlArkanLogoImage} 
                  alt="Dar Al Arkan" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={alfarisSchoolLogoImage} 
                  alt="Al Faris International School" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={raisLogoImage} 
                  alt="RAIS Education for Life" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={fordPerformanceLogoImage} 
                  alt="Ford Performance" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={nissanDuarteLogoImage} 
                  alt="Nissan of Duarte" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={hinoLogoImage} 
                  alt="Hino" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={mcdonaldsLogoImage} 
                  alt="McDonald's" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={alRomansiahLogoImage} 
                  alt="Al Romansiah" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={danoneAlsafiLogo} 
                  alt="Danone Alsafi" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats & Contact */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>200+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>200+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
              
              {/* Contact */}
              <div>
                <h3 className="text-3xl text-[#eb2627] mb-6" style={{ fontFamily: 'Anton, sans-serif' }}>{t('contact.title').toUpperCase()}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#eb2627] mt-1" />
                    <p className="text-gray-700" dir="ltr">+966 55 034 2011</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#eb2627] mt-1" />
                    <p className="text-gray-700">info@lepremier.com.sa</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#eb2627] mt-1" />
                    <p className="text-gray-700">Riyadh, An Narjis 12234</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        
        {/* Project Detail Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start z-10">
                <div>
                  <h2 className="text-3xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>
                    {selectedProject.name}
                  </h2>
                  <p className="text-gray-600">
                    {selectedProject.location} | {selectedProject.owner}
                    {selectedProject.sector && ` | ${selectedProject.sector}`}
                    {selectedProject.year && ` | ${selectedProject.year}`}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
                >
                  ×
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Project Details */}
                {selectedProject.sector && (
                  <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Location</h3>
                      <p className="text-gray-900">{selectedProject.location}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Owner</h3>
                      <p className="text-gray-900">{selectedProject.owner || 'N/A'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Sector</h3>
                      <p className="text-gray-900">{selectedProject.sector}</p>
                    </div>
                    {selectedProject.status && (
                      <div>
                        <h3 className="text-sm text-gray-500 mb-1">Status</h3>
                        <p className="text-gray-900">{selectedProject.status}</p>
                      </div>
                    )}
                    {selectedProject.year && (
                      <div>
                        <h3 className="text-sm text-gray-500 mb-1">Year</h3>
                        <p className="text-gray-900">{selectedProject.year}</p>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Project Images Gallery */}
                <div>
                  <h3 className="text-xl text-gray-900 mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                    PROJECT GALLERY
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.images?.map((img: string, idx: number) => (
                      <ProjectGalleryItem 
                        key={idx}
                        src={img}
                        projectName={selectedProject.name}
                        index={idx}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Description placeholder */}
                <div className="mt-6">
                  <h3 className="text-xl text-gray-900 mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                    DESCRIPTION
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description || 'Detailed project description will be added here. This project represents our commitment to excellence and quality in delivering exceptional results for our clients.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (selectedDivision === 'safety') {
    return (
      <div className="min-h-screen bg-white" style={{ fontFamily: 'Lato, sans-serif' }}>
        <Header logoSrc={logoOriginal} />
        
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1730579798283-69903b94916a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJlJTIwc2FmZXR5JTIwc3ByaW5rbGVyfGVufDF8fHx8MTc2NzY4ODQzN3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Safety & Fire Protection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setSelectedDivision(null)}
              className="mb-8 text-white hover:text-[#eb2627] transition-colors flex items-center gap-2"
            >
              {isRTL ? '→' : '←'} {t('common.backToHome')}
            </button>
            <h1 className="text-6xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
              {t('safety.hero.title').toUpperCase()}
            </h1>
            <p className="text-white text-xl max-w-3xl">
              {t('safety.hero.description')}
            </p>
          </div>
        </section>

        {/* Mission, About, Vision */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {t('safety.mission.title').toUpperCase()}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('safety.mission.description')}
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {t('safety.about.title').toUpperCase()}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('safety.about.description')}
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {t('safety.vision.title').toUpperCase()}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('safety.vision.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl text-[#eb2627] mb-12 text-center" style={{ fontFamily: 'Anton, sans-serif' }}>
              {t('safety.services.title').toUpperCase()}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="text-2xl text-[#eb2627] mb-6" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {t('safety.protection.title').toUpperCase()}
                </h3>
                <ul className="space-y-3">
                  {safetyServices.fireProtection.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#eb2627] flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl text-[#eb2627] mb-6" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {t('safety.maintenance.title').toUpperCase()}
                </h3>
                <ul className="space-y-3">
                  {safetyServices.maintenance.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#eb2627] flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-[#eb2627] mx-auto mb-6"></div>
              <h2 className="text-4xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                {t('safety.projects.title').toUpperCase()}
              </h2>
            </div>
            
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-1">
              {[
                { name: t('projects.premium'), location: 'Riyadh', owner: 'Misk Foundation', sector: 'Education', status: 'Completed', year: '2024-2025', image: premiumSchoolImage },
                { name: t('projects.bestwaha'), location: 'Riyadh', owner: 'SASCO', sector: 'Hospitality', status: 'Under progress', year: '2024-2025', image: bestWesternWahaImage },
                { name: t('projects.alinma'), location: 'Riyadh', owner: 'Alinma bank', sector: 'Banks', status: 'Completed', year: '2024-2025', image: alinmaBankImage, description: 'We proudly delivered the Alinma Bank project in Riyadh, showcasing our commitment to quality, precision, and modern construction standards. The result is a functional and visually distinctive facility completed on time and to the highest standards.' },
                { name: t('projects.holidayinn'), location: 'AL Khobar', owner: 'Rajhi invest', sector: 'Hospitality', status: 'Completed', year: '2022', image: holidayInnImage, description: 'We delivered the Holiday Inn Suites Hotel (5 Stars) project in Al Khobar, providing high-quality finishes and modern hospitality standards to create a comfortable and premium guest experience, completed on time and to the highest quality.' },
                { name: t('projects.voco'), location: 'AL Khobar', owner: 'Rajhi invest', sector: 'Hospitality', status: 'Completed', year: '2022', image: vocoImage, description: 'VOCO Suites Hotel is a premium 5-star hospitality project in Al Khobar, completed in 2022 for Rajhi Invest. Our team delivered high-quality construction with meticulous attention to luxury finishes, MEP systems, and interior installations.' },
                { name: t('projects.staybridge'), location: 'AL Khobar', owner: 'Rajhi invest', sector: 'Hospitality', status: 'Completed', year: '2022', image: staybridgeImage, description: 'We successfully delivered the Staybridge Suites Hotel (5 Stars) in Al Khobar, providing high-end finishes and quality workmanship to create a comfortable, modern, and premium hospitality environment, completed on time and to the highest standards.' },
                { name: t('projects.raed'), location: 'Riyadh', owner: 'Al Rajhi bank', sector: 'Real Estate', status: 'Completed', year: '2020', image: alRaedImage, description: 'Al Raed Groove is a completed mixed-use development in Riyadh for Al Rajhi Bank (2020), delivered by our team with a strong focus on construction quality, coordination, and timely execution across architectural, structural, and MEP works. The project was successfully completed within an accelerated timeline of just six months.' },
                { name: t('projects.rayan'), location: 'Riyadh', owner: 'Al Rajhi bank', sector: 'Banks', status: 'Completed', year: '2020', image: alRayanImage, description: 'A completed commercial complex in Al Rayan, delivered with high-quality construction and efficient execution across architectural, structural, and MEP works.' },
                { name: t('projects.masif'), location: 'Riyadh', owner: 'Al Rajhi for Development', sector: 'Real Estate', status: 'Completed', year: '2018', image: alMasifComplexImage, description: 'A successfully delivered commercial complex in Almasif for Al Rajhi for Development, reflecting high standards of quality, coordination, and execution.' },
                { name: t('projects.romansiah'), location: 'Al-Kharj', owner: 'Al Romansiah company', sector: 'Retail', status: 'Completed', year: '2019', image: alRomansiahImage, description: 'We completed the Al Romansiah branch in Al Kharj with a focus on strong visual identity, efficient layout, and quality finishes, delivering a welcoming and functional food and beverage space that supports smooth customer experience.' },
                { name: t('projects.rajhibank'), location: 'Riyadh', owner: 'Al Rajhi Bank', sector: 'Banks', status: 'Completed', year: '2020', image: alRajhiBankImage, description: 'We successfully delivered multiple Al Rajhi Bank branches across different locations in Saudi Arabia, ensuring consistent quality, modern design, and efficient execution while meeting the bank\'s operational and branding standards.' },
                { name: t('projects.mof'), location: 'Riyadh', owner: 'MOF', sector: 'Government', status: 'Completed', year: '2018', image: ministryFinanceImage, description: 'We completed the office fit-out works for the Ministry of Finance in Riyadh, delivering modern workspaces with high-quality finishes, efficient layouts, and a professional environment that supports daily operations.' },
                { name: t('projects.tbc'), location: 'Riyadh', owner: 'Ministry of education', sector: 'Education', status: 'Completed', year: '2019', image: tbcSchoolsImage, description: 'We delivered the TBC Schools project in Riyadh with a focus on smart planning, durable materials, and efficient execution, creating a practical and well-structured educational facility that supports students and staff alike.' },
                { name: t('projects.rowad'), location: 'Al Khobar', owner: 'AL Khaleej for training and education', sector: 'Education', status: 'Completed', year: '2020', image: rowadGallery2, description: 'The school project was delivered with careful consideration for safety, learning environment, and durability, providing students with a modern and supportive educational facility.' },
                { name: t('projects.gasco'), location: 'Riyadh', owner: 'Gasco company', sector: 'Energy', status: 'Completed', year: '2021', image: gascoImage, description: 'We delivered the Gasco Head Office project with a focus on executive-quality interiors, professional workspace design, and refined finishes, creating a functional and representative environment suitable for corporate operations.' },
                { name: t('projects.luhaidan'), location: 'Riyadh', owner: 'Abdulkarim Al Luhaidan', sector: 'Real Estate', status: 'Completed', year: '2017', image: alLuhaidanComplexImage },
                { name: t('projects.compounds'), location: 'Riyadh', owner: '', sector: 'Real Estate', status: 'Completed', year: '2019', image: privateCompoundImage },
              ].map((project, idx) => {
                const projectImage = project.image || `https://images.unsplash.com/photo-${1700000000000 + idx * 10000000}?w=300&h=225&fit=crop`;
                const projectImages = project.name === t('projects.alinma')
                  ? [alinmaGallery1, alinmaGallery2, alinmaGallery3, alinmaGallery4]
                  : project.name === t('projects.bestwaha')
                    ? [bestWesternWahaImage, bestWesternGallery1, bestWesternGallery2, bestWesternGallery3, bestWesternGallery4]
                    : project.name === t('projects.raed')
                      ? [alRaedGallery1, alRaedGallery2, alRaedGallery3, alRaedGallery4, alRaedGallery5, alRaedGallery6, alRaedGallery7, 'https://drive.google.com/file/d/1-mKutTYM7SFrTNeFaxAlNolhZidLa88l/view']
                      : project.name === t('projects.voco')
                      ? [vocoGallery1, vocoGallery2, vocoGallery3, vocoGallery4, vocoGallery5, vocoGallery6]
                      : project.name === t('projects.staybridge')
                        ? [staybridgeGallery1, staybridgeGallery2, staybridgeGallery3, staybridgeGallery4, staybridgeGallery5, staybridgeGallery6]
                        : project.name === t('projects.rowad')
                          ? [rowadGallery2, rowadGallery3, rowadGallery4, rowadGallery5, rowadGallery6, rowadGallery8, rowadGallery9, rowadGallery10]
                          : project.name === t('projects.rayan')
                            ? [alRayanGallery1, alRayanGallery2, alRayanGallery3, alRayanGallery4]
                            : project.name === 'TBC Schools'
                              ? [tbcSchoolsImage, tbcGallery1, tbcGallery2, tbcGallery3]
                              : project.name === 'Private Compounds'
                                ? [privateCompoundGallery2, privateCompoundGallery1, privateCompoundGallery3, privateCompoundGallery4]
                                : project.image 
                                ? [project.image, project.image, project.image, project.image, project.image]
                                : Array.from({ length: 5 }, (_, i) => `https://images.unsplash.com/photo-${1700000000000 + idx * 10000000 + i * 100000}?w=800&h=600&fit=crop`);
                
                const projectDetails = {
                  ...project,
                  sector: project.sector || '',
                  status: project.status || '',
                  year: project.year || ''
                };
                
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => setSelectedProject({ ...project, division: 'industrial', images: projectImages })}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                      <img 
                        src={projectImage}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/300x225?text=' + encodeURIComponent(project.name.substring(0, 20)) }}
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="text-xs text-gray-900 mb-1 line-clamp-2 min-h-[2rem]" style={{ fontFamily: 'Anton, sans-serif' }}>
                        {project.name}
                      </h3>
                      <p className="text-[10px] text-gray-600 mb-1">{project.location} | {project.owner}</p>
                      <button className="text-blue-600 hover:text-blue-800 text-[10px] flex items-center gap-1">
                        Details →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats & Contact */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>300+</div>
                  <div className="text-gray-600">Systems Installed</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>300+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
              
              {/* Contact */}
              <div>
                <h3 className="text-3xl text-[#eb2627] mb-6" style={{ fontFamily: 'Anton, sans-serif' }}>{t('contact.title').toUpperCase()}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#eb2627] mt-1" />
                    <p className="text-gray-700" dir="ltr">+966 55 034 2011</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#eb2627] mt-1" />
                    <p className="text-gray-700">info@lepremier.com.sa</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#eb2627] mt-1" />
                    <p className="text-gray-700">Riyadh, An Narjis 12234</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        
        {/* Project Detail Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start z-10">
                <div>
                  <h2 className="text-3xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>
                    {selectedProject.name}
                  </h2>
                  <p className="text-gray-600">
                    {selectedProject.location} | {selectedProject.owner}
                    {selectedProject.sector && ` | ${selectedProject.sector}`}
                    {selectedProject.year && ` | ${selectedProject.year}`}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
                >
                  ×
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Project Details */}
                {selectedProject.sector && (
                  <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Location</h3>
                      <p className="text-gray-900">{selectedProject.location}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Owner</h3>
                      <p className="text-gray-900">{selectedProject.owner || 'N/A'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Sector</h3>
                      <p className="text-gray-900">{selectedProject.sector}</p>
                    </div>
                    {selectedProject.status && (
                      <div>
                        <h3 className="text-sm text-gray-500 mb-1">Status</h3>
                        <p className="text-gray-900">{selectedProject.status}</p>
                      </div>
                    )}
                    {selectedProject.year && (
                      <div>
                        <h3 className="text-sm text-gray-500 mb-1">Year</h3>
                        <p className="text-gray-900">{selectedProject.year}</p>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Project Images Gallery */}
                <div>
                  <h3 className="text-xl text-gray-900 mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                    PROJECT GALLERY
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.images?.map((img: string, idx: number) => (
                      <ProjectGalleryItem 
                        key={idx}
                        src={img}
                        projectName={selectedProject.name}
                        index={idx}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Description placeholder */}
                <div className="mt-6">
                  <h3 className="text-xl text-gray-900 mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                    DESCRIPTION
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description || 'Detailed project description will be added here. This project represents our commitment to excellence and quality in delivering exceptional results for our clients.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (selectedDivision === 'industrial') {
    return (
      <div className="min-h-screen bg-white" style={{ fontFamily: 'Lato, sans-serif' }}>
        <Header logoSrc={logoOriginal} />
        
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
          <div className="absolute inset-0">
            <img 
              src={industrialBg}
              alt="Industrial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button 
              onClick={() => setSelectedDivision(null)}
              className="mb-8 text-white hover:text-[#eb2627] transition-colors flex items-center gap-2"
            >
              {isRTL ? '→' : '←'} {t('common.backToHome')}
            </button>
            <h1 className="text-6xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
              {t('manufacturing.hero.industrial.title')}
            </h1>
            <p className="text-white text-xl max-w-3xl">
              {t('manufacturing.hero.industrial.description')}
            </p>
          </div>
        </section>

        {/* Mission, About, Vision */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h2 className="text-3xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {t('manufacturing.mission.title').toUpperCase()}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('manufacturing.mission.description')}
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {t('manufacturing.about.title').toUpperCase()}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('manufacturing.about.description')}
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {t('manufacturing.vision.title').toUpperCase()}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {t('manufacturing.vision.description')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Services */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl text-[#eb2627] mb-12 text-center" style={{ fontFamily: 'Anton, sans-serif' }}>
              {t('manufacturing.industrial.title')}
            </h2>
            
            {/* Grid of Service Categories */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {Object.values(industrialServices).map((service, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <h3 className="text-xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                    {service.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {service.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#eb2627] flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-200 pt-4">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-[#eb2627] mx-auto mb-6"></div>
              <h2 className="text-4xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                {t('manufacturing.projects.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-1">
              {[
                { name: t('projects.bestwaha'), location: 'Riyadh', owner: 'SASCO', sector: 'Hospitality', status: 'Under progress', year: '2024-2025', image: bestWesternWahaImage },
                { name: t('projects.premium'), location: 'Riyadh', owner: 'Misk Foundation', sector: 'Education', status: 'Completed', year: '2024-2025', image: premiumSchoolImage },
                { name: t('projects.alinma'), location: 'Riyadh', owner: 'Alinma bank', sector: 'Banks', status: 'Completed', year: '2024-2025', image: alinmaBankImage, description: 'We proudly delivered the Alinma Bank project in Riyadh, showcasing our commitment to quality, precision, and modern construction standards. The result is a functional and visually distinctive facility completed on time and to the highest standards.' },
                { name: t('projects.holidayinn'), location: 'AL Khobar', owner: 'Rajhi invest', sector: 'Hospitality', status: 'Completed', year: '2022', image: holidayInnImage, description: 'We delivered the Holiday Inn Suites Hotel (5 Stars) project in Al Khobar, providing high-quality finishes and modern hospitality standards to create a comfortable and premium guest experience, completed on time and to the highest quality.' },
                { name: t('projects.voco'), location: 'AL Khobar', owner: 'Rajhi invest', sector: 'Hospitality', status: 'Completed', year: '2022', image: vocoImage, description: 'VOCO Suites Hotel is a premium 5-star hospitality project in Al Khobar, completed in 2022 for Rajhi Invest. Our team delivered high-quality construction with meticulous attention to luxury finishes, MEP systems, and interior installations.' },
                { name: t('projects.staybridge'), location: 'AL Khobar', owner: 'Rajhi invest', sector: 'Hospitality', status: 'Completed', year: '2022', image: staybridgeImage, description: 'We successfully delivered the Staybridge Suites Hotel (5 Stars) in Al Khobar, providing high-end finishes and quality workmanship to create a comfortable, modern, and premium hospitality environment, completed on time and to the highest standards.' },
                { name: t('projects.gasco'), location: 'Riyadh', owner: 'Gasco company', sector: 'Energy', status: 'Completed', year: '2021', image: gascoImage, description: 'We delivered the Gasco Head Office project with a focus on executive-quality interiors, professional workspace design, and refined finishes, creating a functional and representative environment suitable for corporate operations.' },
                { name: t('projects.raed'), location: 'Riyadh', owner: 'Al Rajhi bank', sector: 'Real Estate', status: 'Completed', year: '2020', image: alRaedImage, description: 'Al Raed Groove is a completed mixed-use development in Riyadh for Al Rajhi Bank (2020), delivered by our team with a strong focus on construction quality, coordination, and timely execution across architectural, structural, and MEP works. The project was successfully completed within an accelerated timeline of just six months.' },
                { name: t('projects.rayan'), location: 'Riyadh', owner: 'Al Rajhi bank', sector: 'Banks', status: 'Completed', year: '2020', image: alRayanImage, description: 'A completed commercial complex in Al Rayan, delivered with high-quality construction and efficient execution across architectural, structural, and MEP works.' },
                { name: t('projects.rajhibank'), location: 'Riyadh', owner: 'Al Rajhi Bank', sector: 'Banks', status: 'Completed', year: '2020', image: alRajhiBankImage, description: 'We successfully delivered multiple Al Rajhi Bank branches across different locations in Saudi Arabia, ensuring consistent quality, modern design, and efficient execution while meeting the bank\'s operational and branding standards.' },
                { name: t('projects.rowad'), location: 'Al Khobar', owner: 'AL Khaleej for training and education', sector: 'Education', status: 'Completed', year: '2020', image: rowadGallery2, description: 'The school project was delivered with careful consideration for safety, learning environment, and durability, providing students with a modern and supportive educational facility.' },
                { name: t('projects.romansiah'), location: 'Al-Kharj', owner: 'Al Romansiah company', sector: 'Retail', status: 'Completed', year: '2019', image: alRomansiahImage, description: 'We completed the Al Romansiah branch in Al Kharj with a focus on strong visual identity, efficient layout, and quality finishes, delivering a welcoming and functional food and beverage space that supports smooth customer experience.' },
                { name: t('projects.tbc'), location: 'Riyadh', owner: 'Ministry of education', sector: 'Education', status: 'Completed', year: '2019', image: tbcSchoolsImage, description: 'We delivered the TBC Schools project in Riyadh with a focus on smart planning, durable materials, and efficient execution, creating a practical and well-structured educational facility that supports students and staff alike.' },
                { name: t('projects.compounds'), location: 'Riyadh', owner: '', sector: 'Real Estate', status: 'Completed', year: '2019', image: privateCompoundImage },
                { name: t('projects.masif'), location: 'Riyadh', owner: 'Al Rajhi for Development', sector: 'Real Estate', status: 'Completed', year: '2018', image: alMasifComplexImage, description: 'A successfully delivered commercial complex in Almasif for Al Rajhi for Development, reflecting high standards of quality, coordination, and execution.' },
                { name: t('projects.mof'), location: 'Riyadh', owner: 'MOF', sector: 'Government', status: 'Completed', year: '2018', image: ministryFinanceImage, description: 'We completed the office fit-out works for the Ministry of Finance in Riyadh, delivering modern workspaces with high-quality finishes, efficient layouts, and a professional environment that supports daily operations.' },
                { name: t('projects.luhaidan'), location: 'Riyadh', owner: 'Abdulkarim Al Luhaidan', sector: 'Real Estate', status: 'Completed', year: '2017', image: alLuhaidanComplexImage },
              ].map((project, idx) => {
                const projectImage = project.image || `https://images.unsplash.com/photo-${1500000000000 + idx * 10000000}?w=300&h=225&fit=crop`;
                const projectImages = project.name === t('projects.alinma')
                  ? [alinmaGallery1, alinmaGallery2, alinmaGallery3, alinmaGallery4]
                  : project.name === t('projects.bestwaha')
                    ? [bestWesternWahaImage, bestWesternGallery1, bestWesternGallery2, bestWesternGallery3, bestWesternGallery4]
                    : project.name === t('projects.raed')
                      ? [alRaedGallery1, alRaedGallery2, alRaedGallery3, alRaedGallery4, alRaedGallery5, alRaedGallery6, alRaedGallery7, 'https://drive.google.com/file/d/1-mKutTYM7SFrTNeFaxAlNolhZidLa88l/view']
                      : project.name === t('projects.voco')
                      ? [vocoGallery1, vocoGallery2, vocoGallery3, vocoGallery4, vocoGallery5, vocoGallery6]
                      : project.name === t('projects.staybridge')
                        ? [staybridgeGallery1, staybridgeGallery2, staybridgeGallery3, staybridgeGallery4, staybridgeGallery5, staybridgeGallery6]
                        : project.name === t('projects.rowad')
                          ? [rowadGallery2, rowadGallery3, rowadGallery4, rowadGallery5, rowadGallery6, rowadGallery8, rowadGallery9, rowadGallery10]
                          : project.name === t('projects.rayan')
                            ? [alRayanGallery1, alRayanGallery2, alRayanGallery3, alRayanGallery4]
                            : project.name === 'TBC Schools'
                              ? [tbcSchoolsImage, tbcGallery1, tbcGallery2, tbcGallery3]
                              : project.name === 'Private Compounds'
                                ? [privateCompoundGallery2, privateCompoundGallery1, privateCompoundGallery3, privateCompoundGallery4]
                                : project.image 
                                ? [project.image, project.image, project.image, project.image, project.image]
                                : Array.from({ length: 5 }, (_, i) => `https://images.unsplash.com/photo-${1500000000000 + idx * 10000000 + i * 100000}?w=800&h=600&fit=crop`);
                
                const projectDetails = {
                  ...project,
                  sector: project.sector || '',
                  status: project.status || '',
                  year: project.year || ''
                };
                
                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => setSelectedProject({ ...project, division: 'safety', images: projectImages })}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                      <img 
                        src={projectImage}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/300x225?text=' + encodeURIComponent(project.name.substring(0, 20)) }}
                      />
                    </div>
                    <div className="p-2">
                      <h3 className="text-xs text-gray-900 mb-1 line-clamp-2 min-h-[2rem]" style={{ fontFamily: 'Anton, sans-serif' }}>
                        {project.name}
                      </h3>
                      <p className="text-[10px] text-gray-600 mb-1">{project.location} | {project.owner}</p>
                      <button className="text-blue-600 hover:text-blue-800 text-[10px] flex items-center gap-1">
                        Details →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Clients */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="w-16 h-1 bg-[#eb2627] mx-auto mb-6"></div>
              <h2 className="text-4xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                {t('manufacturing.clients.title')}
              </h2>
            </div>
            
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-1 justify-items-center">
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={rajhiInvestLogoImage} 
                  alt="Rajhi Invest" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={tbcLogoImage} 
                  alt="TBC" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={mohNewLogoImage} 
                  alt="Ministry of Health" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={monshaatNewLogoImage} 
                  alt="Monsha'at" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={mofLogoImage} 
                  alt="Ministry of Finance" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={mofaNewLogoImage} 
                  alt="Ministry of Foreign Affairs" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={ministrySportLogoImage} 
                  alt="Ministry of Sport" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={royalEmbassyLogoImage} 
                  alt="Royal Embassy" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={nhcLogoImage} 
                  alt="National Housing Company" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={gasStatisticsLogoImage} 
                  alt="General Authority for Statistics" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={kingFaisalHospitalLogoImage} 
                  alt="King Faisal Specialist Hospital & Research Center" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={riyadhCareLogoImage} 
                  alt="Riyadh Care Hospital" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={miskLogoImage} 
                  alt="Misk Foundation" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={vocoLogoImage} 
                  alt="Voco" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={intercontinentalHotelsLogoImage} 
                  alt="Intercontinental Hotels & Resorts" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={tuderLogoImage} 
                  alt="Tuder" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={bankAlbiladNewLogoImage} 
                  alt="Bank Albilad" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={riyadBankLogoImage} 
                  alt="Riyad Bank" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={alRajhiBankBlueLogoImage} 
                  alt="Al Rajhi Bank" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={alinmaBankLogoImage} 
                  alt="Alinma Bank" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={holidayInnLogoImage} 
                  alt="Holiday Inn & Suites" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={bestWesternLogoImage} 
                  alt="Best Western Plus" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={staybridgeSuitesLogoImage} 
                  alt="Staybridge Suites" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={alFaisaliahLogoImage} 
                  alt="Al Faisaliah Group" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={gascoLogoImage} 
                  alt="GASCO" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={robertoCavalliLogoImage} 
                  alt="Roberto Cavalli" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={zainNewLogoImage} 
                  alt="Zain" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={sascoLogoImage} 
                  alt="SASCO" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={unifiedLogoImage} 
                  alt="Unified" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={alkhozamaLogoImage} 
                  alt="Alkhozama Management Company" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={architectureLogoImage} 
                  alt="Architecture" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={colorfulLogoImage} 
                  alt="Client Logo" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={darAlArkanLogoImage} 
                  alt="Dar Al Arkan" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={alfarisSchoolLogoImage} 
                  alt="Al Faris International School" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={raisLogoImage} 
                  alt="RAIS Education for Life" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={fordPerformanceLogoImage} 
                  alt="Ford Performance" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={nissanDuarteLogoImage} 
                  alt="Nissan of Duarte" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={hinoLogoImage} 
                  alt="Hino" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={mcdonaldsLogoImage} 
                  alt="McDonald's" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={alRomansiahLogoImage} 
                  alt="Al Romansiah" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-2 bg-white rounded w-full h-24">
                <img 
                  src={danoneAlsafiLogo} 
                  alt="Danone Alsafi" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats & Contact */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-6xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>50+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-6xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>4+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
              
              {/* Contact */}
              <div>
                <h3 className="text-3xl text-[#eb2627] mb-6" style={{ fontFamily: 'Anton, sans-serif' }}>{t('contact.title').toUpperCase()}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#eb2627] mt-1" />
                    <p className="text-gray-700" dir="ltr">+966 55 034 2011</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#eb2627] mt-1" />
                    <p className="text-gray-700">info@lepremier.com.sa</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#eb2627] mt-1" />
                    <p className="text-gray-700">Riyadh, An Narjis 12234</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        
        {/* Project Detail Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto my-8"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start z-10">
                <div>
                  <h2 className="text-3xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>
                    {selectedProject.name}
                  </h2>
                  <p className="text-gray-600">
                    {selectedProject.location} | {selectedProject.owner}
                    {selectedProject.sector && ` | ${selectedProject.sector}`}
                    {selectedProject.year && ` | ${selectedProject.year}`}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
                >
                  ×
                </button>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Project Details */}
                {selectedProject.sector && (
                  <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Location</h3>
                      <p className="text-gray-900">{selectedProject.location}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Owner</h3>
                      <p className="text-gray-900">{selectedProject.owner || 'N/A'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Sector</h3>
                      <p className="text-gray-900">{selectedProject.sector}</p>
                    </div>
                    {selectedProject.status && (
                      <div>
                        <h3 className="text-sm text-gray-500 mb-1">Status</h3>
                        <p className="text-gray-900">{selectedProject.status}</p>
                      </div>
                    )}
                    {selectedProject.year && (
                      <div>
                        <h3 className="text-sm text-gray-500 mb-1">Year</h3>
                        <p className="text-gray-900">{selectedProject.year}</p>
                      </div>
                    )}
                  </div>
                )}
                
                {/* Project Images Gallery */}
                <div>
                  <h3 className="text-xl text-gray-900 mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                    PROJECT GALLERY
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.images?.map((img: string, idx: number) => (
                      <ProjectGalleryItem 
                        key={idx}
                        src={img}
                        projectName={selectedProject.name}
                        index={idx}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Description placeholder */}
                <div className="mt-6">
                  <h3 className="text-xl text-gray-900 mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                    DESCRIPTION
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.description || 'Detailed project description will be added here. This project represents our commitment to excellence and quality in delivering exceptional results for our clients.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (selectedDivision === 'entertainment') {
    return (
      <div className="min-h-screen bg-white" style={{ fontFamily: 'Lato, sans-serif' }}>
        <Header logoSrc={logoOriginal} />
        
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mt-20">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1566781000434-a975f1a23399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcXVlc3RyaWFuJTIwaG9yc2UlMjBzdGFibGV8ZW58MXx8fHwxNzY3Njg4MjA4fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Entertainment"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <button 
              onClick={() => setSelectedDivision(null)}
              className="mb-8 text-white hover:text-[#eb2627] transition-colors flex items-center gap-2 mx-auto"
            >
              {isRTL ? '→' : '←'} {t('common.backToHome')}
            </button>
            <h1 className="text-6xl text-white mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
              {language === 'en' ? 'LE PREMIER ENTERTAINMENT' : 'أول تصميم للترفيه'}
            </h1>
            <p className="text-white text-2xl max-w-3xl mx-auto">
              {language === 'en' ? 'Where Lifestyle Meets Excellence' : 'حيث يلتقي أسلوب الحياة بالتميّز'}
            </p>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl text-[#eb2627] mb-6" style={{ fontFamily: 'Anton, sans-serif' }}>
              {t('entertainment.about.title')}
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {t('entertainment.about.p1')}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('entertainment.about.p2')}
            </p>
          </div>
        </section>

        {/* Kab Equestrian Center */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-5xl text-[#eb2627] mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                {t('entertainment.kab.title')}
              </h2>
              <p className="text-2xl text-gray-600">{t('entertainment.kab.subtitle')}</p>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto mb-16 text-center">
              {t('entertainment.kab.description')}
            </p>

            {/* Facilities & Services */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-3xl text-[#eb2627] mb-6" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {t('entertainment.kab.facilities.title')}
                </h3>
                <ul className="space-y-3">
                  {[
                    t('entertainment.kab.facilities.stables'),
                    t('entertainment.kab.facilities.outdoor'),
                    t('entertainment.kab.facilities.indoor'),
                    t('entertainment.kab.facilities.care'),
                    t('entertainment.kab.facilities.environment'),
                    t('entertainment.kab.facilities.comfort')
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#eb2627] flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-3xl text-[#eb2627] mb-6" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {t('entertainment.kab.services.title')}
                </h3>
                <ul className="space-y-3">
                  {[
                    t('entertainment.kab.services.boarding'),
                    t('entertainment.kab.services.training'),
                    t('entertainment.kab.services.lessons'),
                    t('entertainment.kab.services.private'),
                    t('entertainment.kab.services.events')
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#eb2627] flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-lg">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 p-12 rounded-lg">
              <h3 className="text-3xl text-[#eb2627] mb-6" style={{ fontFamily: 'Anton, sans-serif' }}>
                {t('entertainment.kab.vision.title')}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {t('entertainment.kab.vision.description')}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl text-[#eb2627] mb-12 text-center" style={{ fontFamily: 'Anton, sans-serif' }}>
              {t('entertainment.kab.gallery.title')}
            </h2>
            <p className="text-gray-600 text-center mb-12 text-lg">
              {t('entertainment.kab.gallery.description')}
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                kabGallery1,
                kabGallery2,
                kabHeroImage,
                kabGallery3,
                kabGallery4,
                kabGallery5,
              ].map((img, idx) => (
                <ProjectGalleryItem 
                  key={idx}
                  src={img}
                  projectName="KAB Equestrian Center"
                  index={idx}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Location Map */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl text-[#eb2627] mb-12 text-center" style={{ fontFamily: 'Anton, sans-serif' }}>
              {t('contact.location.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Kab Equestrian Center</h3>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-[#eb2627] mt-1">📍</span>
                    <span>Al Muzahmiyya 19645, 8345, 101<br />Saudi Arabia</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#eb2627]" />
                    <span dir="ltr">+966 55 450 8692</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-[#eb2627]" />
                    <span>@kabacademy_</span>
                  </p>
                </div>
              </div>
              <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29672.36585847986!2d46.30!3d24.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1b8c5c5c5c5d%3A0x1!2sAl%20Muzahmiyya%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kab Equestrian Center Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#eb2627] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl mb-6" style={{ fontFamily: 'Anton, sans-serif' }}>
              {language === 'en' ? 'DISCOVER THE EXPERIENCE' : 'اكتشف التجربة'}
            </h2>
            <p className="text-xl mb-8">
              {language === 'en' ? 'For inquiries, memberships, or service information, please contact us to learn more about Kab Equestrian Center.' : 'للاستفسارات أو العضويات أو معلومات الخدمة، يُرجى الاتصال بنا لمعرفة المزيد عن مركز KAB للفروسية.'}
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded">
                <Phone className="w-5 h-5" />
                <span dir="ltr">+966 55 450 8692</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded">
                <Instagram className="w-5 h-5" />
                <span>@kabacademy_</span>
              </div>
            </div>
            <button 
              onClick={() => setSelectedDivision(null)}
              className="bg-white text-[#eb2627] px-8 py-4 rounded text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  // Main Home Page
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Lato, sans-serif' }}>
      <Header logoSrc={logoOriginal} />
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen overflow-hidden">
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <img 
              src={heroBackground}
              alt="Corporate Building"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/70"></div>
          </div>
          
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl text-[#eb2627] mb-6" style={{ fontFamily: 'Anton, sans-serif', letterSpacing: '2px' }}>
                {language === 'en' ? (
                  <>
                    BUILDING TOMORROW'S
                    <br />
                    SUCCESS TODAY
                  </>
                ) : (
                  <>
                    نبني نجاح الغد اليوم
                  </>
                )}
              </h1>
              <p className="text-xl sm:text-2xl text-[#eb2627] mb-10 max-w-3xl mx-auto">
                {t('hero.main.description')}
              </p>
              <button 
                onClick={() => document.getElementById('divisions')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#eb2627] text-white px-8 py-4 rounded text-lg hover:bg-[#d42020] transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                {t('hero.main.cta')}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl text-gray-900 mb-6" style={{ fontFamily: 'Anton, sans-serif' }}>
                {language === 'en' ? (
                  <>
                    OVER TWO DECADES OF
                    <br />
                    <span className="text-[#eb2627]">TRUSTED EXCELLENCE</span>
                  </>
                ) : (
                  <span className="text-[#eb2627]">{t('about.subtitle')}</span>
                )}
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {t('about.p1')}
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                {t('about.p2')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="text-5xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>20+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="text-5xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="text-5xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>4</div>
                  <div className="text-gray-600">Business Divisions</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <div className="text-5xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>500+</div>
                  <div className="text-gray-600">Satisfied Clients</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={aboutImage}
                alt="Le Premier Building"
                className="rounded-xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Divisions Section */}
      <section id="divisions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl text-gray-900 mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
              {t('divisions.title').toUpperCase()}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('divisions.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {divisions.map((division) => (
              <DivisionCard
                key={division.id}
                title={division.title}
                description={division.description}
                icon={division.icon}
                image={division.image}
                onClick={() => setSelectedDivision(division.id)}
                logo={division.logo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl mb-6" style={{ fontFamily: 'Anton, sans-serif' }}>
                {t('contact.title')}
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                {t('contact.description')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#eb2627] w-12 h-12 rounded flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">{t('contact.email')}</h3>
                    <p className="text-gray-300">info@lepremier.com.sa</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-[#eb2627] w-12 h-12 rounded flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white mb-1">{t('contact.address')}</h3>
                    <p className="text-gray-300">
                      {t('footer.riyadh')}
                    </p>
                    <img src={qrCode} alt="Location QR Code" className="w-48 h-48 mt-4 -ml-4" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
  <input
    type="hidden"
    name="access_key"
    value="38e0b390-6d79-4e7b-8753-a902507bfb90"
  />
                <div>
  <label htmlFor="name" className="block text-white mb-2">
    {t('contact.form.name')}
  </label>
  <input
    type="text"
    id="name"
    name="name"
    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#eb2627]"
    placeholder={t('contact.form.namePlaceholder')}
    required
  />
</div>

<div>
  <label htmlFor="email" className="block text-white mb-2">
    {t('contact.form.email')}
  </label>
  <input
    type="email"
    id="email"
    name="email"
    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#eb2627]"
    placeholder={t('contact.form.emailPlaceholder')}
    required
  />
</div>

<div>
  <label htmlFor="message" className="block text-white mb-2">
    {t('contact.form.message')}
  </label>
  <textarea
    id="message"
    name="message"
    rows={5}
    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded text-white focus:outline-none focus:ring-2 focus:ring-[#eb2627]"
    placeholder={t('contact.form.messagePlaceholder')}
    required
  ></textarea>
</div>
<button 
  type="submit"
  className="w-full bg-[#eb2627] text-white py-3 rounded hover:bg-[#d42020] transition-colors"
>
  {t('contact.form.submit')}
</button>
</form>
</div>
</div>
</div>
</section>
{showSuccess && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-8 max-w-md text-center shadow-xl">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
        <span className="text-3xl text-green-600">✓</span>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Message Sent Successfully
      </h3>

      <p className="text-gray-600 mb-6">
        Thank you for contacting Le Premier Group. We will get back to you soon.
      </p>

      <button
        onClick={() => setShowSuccess(false)}
        className="bg-[#eb2627] text-white px-8 py-3 rounded hover:bg-[#d42020] transition-colors"
      >
        OK
      </button>
    </div>
  </div>
)}

      <Footer />
      
      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start z-10">
              <div>
                <h2 className="text-3xl text-[#eb2627] mb-2" style={{ fontFamily: 'Anton, sans-serif' }}>
                  {selectedProject.name}
                </h2>
                <p className="text-gray-600">
                  {selectedProject.location} | {selectedProject.owner}
                  {selectedProject.sector && ` | ${selectedProject.sector}`}
                  {selectedProject.year && ` | ${selectedProject.year}`}
                </p>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-gray-500 hover:text-gray-700 text-3xl leading-none"
              >
                ×
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6">
              {/* Project Details */}
              {selectedProject.sector && (
                <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Location</h3>
                    <p className="text-gray-900">{selectedProject.location}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Owner</h3>
                    <p className="text-gray-900">{selectedProject.owner || 'N/A'}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-500 mb-1">Sector</h3>
                    <p className="text-gray-900">{selectedProject.sector}</p>
                  </div>
                  {selectedProject.status && (
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Status</h3>
                      <p className="text-gray-900">{selectedProject.status}</p>
                    </div>
                  )}
                  {selectedProject.year && (
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">Year</h3>
                      <p className="text-gray-900">{selectedProject.year}</p>
                    </div>
                  )}
                </div>
              )}
              
              {/* Project Images Gallery */}
              <div>
                <h3 className="text-xl text-gray-900 mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                  PROJECT GALLERY
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedProject.images?.map((img: string, idx: number) => (
                    <ProjectGalleryItem 
                      key={idx}
                      src={img}
                      projectName={selectedProject.name}
                      index={idx}
                    />
                  ))}
                </div>
              </div>
              
              {/* Description placeholder */}
              <div className="mt-6">
                <h3 className="text-xl text-gray-900 mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>
                  DESCRIPTION
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.description || 'Detailed project description will be added here. This project represents our commitment to excellence and quality in delivering exceptional results for our clients.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black text-white py-12" style={{ fontFamily: 'Lato, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>{t('footer.brand')}</h3>
            <p className="text-gray-400 leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>{t('footer.divisions.title')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.divisions.construction')}</li>
              <li>{t('footer.divisions.manufacturing')}</li>
              <li>{t('footer.divisions.safety')}</li>
              <li>{t('footer.divisions.entertainment')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>{t('footer.company.title')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.company.about')}</li>
              <li>{t('footer.company.team')}</li>
              <li>{t('footer.company.careers')}</li>
              <li>{t('footer.company.news')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4" style={{ fontFamily: 'Anton, sans-serif' }}>{t('footer.connect.title')}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.connect.contact')}</li>
              <li>{t('footer.connect.linkedin')}</li>
              <li>{t('footer.connect.twitter')}</li>
              <li>{t('footer.connect.facebook')}</li>
              <li>{t('footer.connect.instagram')}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}