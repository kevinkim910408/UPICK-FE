import Image from "next/image";
import notification from "assets/images/icons/ic_noti.svg";
import BackBtn from "components/BackBtn";
import useClickRoute from "hooks/useClickRoute";
import pathGray from "assets/images/icons/PathGray.svg";
import heart_fill from "assets/images/icons/fullHeart.svg";
import heart_line from "assets/images/icons/heart-line.svg";
import star_fill from "assets/images/icons/star-fill.svg";
import star_empty from "assets/images/icons/star-emp.svg";
import { useEffect, useState } from "react";
import { GetMerchandiseDetail } from "store/modules/medicineSlice";
import { useAppDispatch } from "src/hooks/reduxHooks";
import { RootState } from "store/modules";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import InfoIcon from "assets/images/icons/info.svg";
import axios from "axios";

const MedicineDetail = () => {
  const onLink = useClickRoute({ link: "/alert" });
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const { data } = useSelector((state: RootState) => state.medicine);
  const [isLike, setIsLike] = useState<boolean>(false);

  useEffect(() => {
    if (id !== undefined) dispatch(GetMerchandiseDetail(`${id}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const auth = localStorage.getItem("authorization");
    if (!auth) return;
    setToken(auth ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(token)]);

  const toggleLikeHandler = async () => {
    try {
      const toggleLike = await axios({
        method: "PUT",
        // data: { pharmacistId: 1 },
        url: `${process.env.NEXT_PUBLIC_SERVER}/goods/merchandises/${data?.id}/like`,
        headers: {
          Authorization: token,
        },
      });
      console.log(toggleLike);
      setIsLike(!isLike);
    } catch (err) {
      console.log(err);
    }
  };

  const pickUpHandler = async () => {
    const data = 1;
    try {
      const toggleLike = await axios({
        method: "PUT",
        // data: { pharmacistId: 1 },
        url: `${process.env.NEXT_PUBLIC_SERVER}/goods/merchandises/${data}/like`,
        headers: {
          Authorization: token,
        },
      });
      console.log(toggleLike);
      setIsLike(!isLike);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {data !== "" && (
        <div className="w-full h-full flex flex-col pt-[30px] relative overflow-x-hidden bg-blue3">
          {/* Header - Done */}
          <div className="flex justify-between items-center pl-[20px] ">
            <BackBtn type="blue" />
            <div onClick={onLink} className="hover:cursor-pointer pr-[20px]">
              <Image alt="" src={notification} />
            </div>
          </div>
          {/* 약 사진 */}
          <div className="flex justify-center mt-[35px]">
            <Image
              src={`${data?.Image.url}`}
              alt=""
              width={`319px`}
              height={`199px`}
              unoptimized={true}
            ></Image>
          </div>
          {/* 바디부분 */}
          <div className="bg-coolgray1 px-[21px] rounded-t-[36px] mt-[32px]">
            {/* 약 이름 */}
            <div className="text-[20px] font-extrabold mt-[44px]">
              {`${data?.name}`}
            </div>

            {/* 영양소 소개 */}
            <div className="text-[10px] text-coolgray4 mt-[19px]">
              {`${data?.description}`}
            </div>

            {/* 영양정보 + mg */}
            <div className="flex justify-between text-[16px] mt-[24px]">
              <div className="text-cyan font-bold">영양정보</div>
              <div className="text-[12px] text-coolgray4">섭취권장용량</div>
            </div>

            {/* 영양소 + mg */}
            {data?.MerchandiseToIngredient.map((value: any, index: any) => {
              return (
                <div
                  className="flex justify-between text-[14px] mt-[16px]"
                  key={index}
                >
                  <div className="flex items-center">
                    <div className="font-extrabold">
                      {value.ingredient.name}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="text-white ml-[4px] text-[12px] bgOne">
                      {value.quantity}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* 약 복용횟수 */}
            {/* <div className="flex justify-between mt-[8px]">
            <div className="flex items-center text-white text-[12px]">
              <div className="bg-coolgray3 px-[8px] py-[4px] rounded-[37px] mr-[8px]">
                섭취 용량
              </div>
              <div className="text-coolgray3">1일 1정 2회</div>
            </div>
          </div> */}

            {/* 기능 타이틀*/}
            <div className="flex justify-between items-center mt-[34.5px]">
              <div className="text-cyan font-bold">기능</div>
            </div>

            {/* 기능 리스트 */}
            <div className="flex text-coolgray4 text-end text-[12px] mt-[16px] font-medium">
              {data?.MerchandiseEffect.map((value: any, index: any) => {
                return (
                  <div
                    className="text-[12px] text-coolgray1 px-[4px] bgTwo ml-[8px] pl-[10px] pr-[10px]"
                    key={index}
                  >
                    {value.effect.name}
                  </div>
                );
              })}
            </div>

            {/* 평점 */}
            <div className="rate">
              <div className="rateLeft">
                <div className="text-coolgray4 text-[12px]">약사점수</div>
                <div className="text-[#1576FB] text-[17.5px] mt-[8px] font-bold">
                  {data?.rating} 점
                </div>
              </div>
              <div className="rateRight">
                <div className="text-coolgray4 text-[12px]">
                  섭취용량과 방법
                </div>
                <div className="text-[#1576FB] text-[12px] mt-[10px] font-bold">
                  {data?.merchandiseHowToConsume.consumption}
                </div>
              </div>
            </div>

            {/* 최저섭취량 - 일단 주석 */}
            {/* <div className="flex justify-between text-[16px] mt-[24px]">
              <div className="text-[10px] text-coolgray4">섭취권장용량</div>
              <div className="flex justify-center items-center">
                <Image src={InfoIcon} alt=""></Image>
                <div className="text-[10px] text-coolgray4">
                  최적섭취량 30~1000mg
                </div>
              </div>
            </div> */}

            {/* 약사 후기  더보기> */}
            <div className="flex justify-between items-center mt-[40px] text-[16px]">
              <div className="text-darkblue1 font-medium">
                이 약을 추천하는
                <span className="font-bold"> 약사 후기</span>
              </div>
              {/* <div className="flex items-center">
                <div className="text-coolgray3 text-[10px] mr-[9px]">
                  더보기
                </div>
                <div className="rotate-180 opacity-50">
                  <Image src={pathGray} alt="heart" />
                </div>
              </div> */}
            </div>

            {/* 코멘트 */}
            <div className="flex flex-col mb-[120px]">
              {/* 타이틀 */}
              <div className="flex justify-between text-[16px] mt-[24px]">
                <div className="flex mt-[7px] gap-2 mb-[11px]">
                  <Image alt="" src={star_fill} />
                  <Image alt="" src={star_fill} />
                  <Image alt="" src={star_fill} />
                  <Image alt="" src={star_fill} />
                  <Image alt="" src={star_empty} />
                </div>
                <div className="text-[13px] text-[#4A5A95] font-bold">
                  한성준 약사
                </div>
              </div>
              {/* 평가내용 */}
              <div className="bgThree">
                <div className="commentUp">
                  <div className="mt-[8px] ml-[10px] min-w-[50px] text-[#00B7F0]">
                    좋아요
                  </div>
                  <div className="mt-[8px] ml-[10px]">
                    나이상관없이 남녀노소 먹어야하는 비타민 C 이 제품은 가격도
                    저렴한 편이고 알약 사이즈가 작아서 복용하기 편해요. 많이
                    먹어도 소변으로 배출되기 때문에 고용량을 먹어도 괜찮답니다.
                  </div>
                </div>
                <div className="commentDown">
                  <div className="mt-[8px] ml-[10px] min-w-[50px] text-[#00B7F0]">
                    주의하세요
                  </div>
                  <div className="mt-[8px] ml-[10px]">
                    임산부는 섭취에 주의를 요해요. 한꺼번에 많은 양을
                    복용하기보다는 나눠서 섭취하는게 좋아요.
                  </div>
                </div>
              </div>
            </div>

            {/* 바디부분 마지막 닫기태그 */}
          </div>

          {/* 좋아요 + 예약버튼 */}
          <div className="bg-coolgray1 flex justify-between py-[10px] px-[30px] fixed bottom-0">
            <div
              onClick={toggleLikeHandler}
              className="w-[40px] h-[40px] flex justify-center mr-[20px] bg-coolgray1 rounded-full shadow-home-p-category-btn"
            >
              <Image
                src={isLike ? heart_fill : heart_line}
                alt="heart"
                className="cursor-pointer"
              />
            </div>
            <button className="w-[256px] h-[40px] bg-coolgray3 rounded-[22px] text-center text-[14px] text-white shadow-button_shadow font-extrabold ">
              약국에 영양제 픽업 예약하기
            </button>
          </div>
          <style jsx>{`
            .bgOne {
              min-width: 39px;
              height: 25px;
              background: #808e99;
              border-radius: 33px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .bgTwo {
              min-width: 50px;
              height: 25px;
              background: #1576fb;
              border-radius: 33px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .bgThree {
              width: 335px;
              height: 110px;
              background: #ffffff;
              border-radius: 6px;
              display: flex;
              flex-direction: column;
            }
            .commentUp {
              display: flex;
              font-weight: 500;
              font-size: 10px;
              line-height: 16px;
            }
            .commentDown {
              display: flex;
              font-weight: 500;
              font-size: 10px;
              line-height: 14px;
            }
            .rate {
              width: 100%;
              margin: auto;
              margin-top: 47px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .rateLeft {
              width: 30%;
              height: 78px;
              background: #e2f0fb;
              border-radius: 6px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              margin-right: 11px;
            }
            .rateRight {
              width: 60%;
              height: 78px;
              background: #e2f0fb;
              border-radius: 6px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default MedicineDetail;
