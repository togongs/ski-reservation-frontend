import Image from 'next/image';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import asdsa from '../public/assets/img/img1.png';
import ass1 from '../public/assets/img/img2.png';
import ass2 from '../public/assets/img/img3.png';
import Slider from 'react-slick';
import { Col, Row } from 'react-bootstrap';

const MainBox = styled.div`
  padding-top: 40px;
`;
const BrandBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BrandContentBox = styled.div`
  display: flex;
`;
const BrandInnerText = styled.div`
  display: flex;
  flex-direction: column;
`;
const GuideBox = styled.div`
  text-align: center;
`;
const GuideHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const GuideInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const GuideInnerText = styled.div`
  display: flex;
  width: 700px;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 767px) {
    width: auto;
  }
`;
const NFTBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TutorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TutorInnerContent = styled.div`
  .slick-list {
    width: 400px;
    height: 250px;
    margin-bottom: 60px;
    @media (max-width: 767px) {
      width: 250px;
    }
  }
  .slick-dots {
    width: 400px;
    @media (max-width: 767px) {
      width: 250px;
    }
  }
`;
const TutorInnerText = styled.div`
  display: flex;
  flex-direction: column;
`;
const TutorSlideBox = styled.div`
  display: flex;
  width: 700px;
  @media (max-width: 767px) {
    width: auto;
  }
`;
const TutorSlideBox2 = styled.div`
  display: flex;
  width: 700px;
  justify-content: end;
  @media (max-width: 767px) {
    width: auto;
  }
`;

const Main = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <div>
      <MainBox>
        <Slider {...settings}>
          <Image src={asdsa} unoptimized={true} />
          <Image src={ass1} unoptimized={true} />
          <Image src={ass2} unoptimized={true} />
        </Slider>
        {/* <ProductAll /> */}
      </MainBox>
      <div>
        <h1>브랜드 소개</h1>
        <p>잊지못할 겨울추억</p>
        <p>탑스키강습과 함께하세요!</p>
        <Row>
          <Col>
            <Image src={ass1} unoptimized={true} />
          </Col>
          <Col>
            <p>잊지못할 겨울추억</p>
            <p>탑스키강습과 함께하세요!</p>
          </Col>
        </Row>

        <Row>
          <Col>
            <p>잊지못할 겨울추억</p>
            <p>탑스키강습과 함께하세요!</p>
          </Col>
          <Col>
            <Image src={ass1} unoptimized={true} />
          </Col>
        </Row>
      </div>

      <GuideBox>
        <GuideHeader>
          <h1>강습예약 안내</h1>
          <p>바로가기</p>
        </GuideHeader>
        <p>쉽고 편리하게 원하는</p>
        <p>날짜에 강습을 예약하세요!</p>

        <div>
          <Row>
            <Col>
              <Image src={ass1} unoptimized={true} />
            </Col>
            <Col>
              <p>1. 스키장 선택</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src={ass1} unoptimized={true} />
            </Col>
            <Col>
              <p>2. 원하는 강습일자/시간 선택</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src={ass1} unoptimized={true} />
            </Col>
            <Col>
              <p>3. 강습 종류/인원 선택</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src={ass1} unoptimized={true} />
            </Col>
            <Col>
              <p>4. 결제하기</p>
            </Col>
          </Row>
        </div>
      </GuideBox>

      <NFTBox>
        <h1>NFT 수료증 발행</h1>
        <p>잊지못할 겨울추억</p>
        <p>탑스키강습과 함께하세요!</p>
        <Image src={ass1} unoptimized={true} />
        <p>국내 최초 강습 수료증 NFT 발행</p>
        <p>추후 제공될 프리미엄 혜택 놓치지 않을거야!</p>
      </NFTBox>

      <TutorBox>
        <h1>강사진 소개</h1>
        <p>국내 검증된 강사진 강습 진행</p>

        <TutorInnerContent>
          <Row>
            <Col>
              <Slider {...settings}>
                <Image src={asdsa} alt="" unoptimized={true} />
                <Image src={ass1} unoptimized={true} />
                <Image src={ass2} unoptimized={true} />
              </Slider>
            </Col>
            <Col>
              <p>대명리조트 강사진</p>
              <p>실력검증완료</p>
            </Col>
          </Row>
        </TutorInnerContent>
        <TutorInnerText></TutorInnerText>

        <TutorInnerContent>
          <Row>
            <Col>
              <p>용평</p>
            </Col>
            <Col>
              <Slider {...settings}>
                <Image src={asdsa} unoptimized={true} />
                <Image src={ass1} unoptimized={true} />
                <Image src={ass2} unoptimized={true} />
              </Slider>
            </Col>
          </Row>
        </TutorInnerContent>

        <TutorInnerContent>
          <Row>
            <Col>
              <Slider {...settings}>
                <Image src={asdsa} unoptimized={true} />
                <Image src={ass1} unoptimized={true} />
                <Image src={ass2} unoptimized={true} />
              </Slider>
            </Col>
            <Col>
              <p>곤지암</p>
            </Col>
          </Row>
        </TutorInnerContent>
        <TutorInnerContent>
          <Row>
            <Col>
              <p>엘리시안</p>
            </Col>
            <Col>
              <Slider {...settings}>
                <Image src={asdsa} unoptimized={true} />
                <Image src={ass1} unoptimized={true} />
                <Image src={ass2} unoptimized={true} />
              </Slider>
            </Col>
          </Row>
        </TutorInnerContent>
      </TutorBox>
    </div>
  );
};

export default Main;
