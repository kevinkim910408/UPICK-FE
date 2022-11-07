/** 우리동네 약사 샘플 데이터 */
export const samplePharmacistData = [
  {
    id: 1,
    name: "영근",
    pharmacy_name: "졸리다",
    address: "서울특별시 금천구 영근로",
    lat: 37.5173319258532,
    lng: 127.047377408384,
    available_time_start_hour: 13,
    available_time_start_minute: 0,
    available_time_end_hour: 15,
    available_time_end_minute: 0,
    chat_tags: ["다음에도 상담받고 싶은", "친절한", "꼼꼼한"],
    info_tags: ["영유아어린이영양제", "근처소아과", "주말오전영업"],
    meter: 123,
  },
  {
    id: 2,
    name: "차은우",
    pharmacy_name: "잘생김",
    address: "충청북도 청주시 상당구 중고개로",
    lat: 37.5173319258532,
    lng: 127.047377408384,
    available_time_start_hour: 11,
    available_time_start_minute: 0,
    available_time_end_hour: 18,
    available_time_end_minute: 0,
    chat_tags: ["다음에도 상담받고 싶은", "친절한", "꼼꼼한"],
    info_tags: ["영유아어린이영양제", "근처소아과", "주말오전영업"],
    meter: 12,
  },
  {
    id: 3,
    name: "김펭수",
    pharmacy_name: "귀여움",
    address: "서울특별시 강남구 선릉로",
    lat: 37.5173319258532,
    lng: 127.047377408384,
    available_time_start_hour: 10,
    available_time_start_minute: 0,
    available_time_end_hour: 19,
    available_time_end_minute: 30,
    chat_tags: ["다음에도 상담받고 싶은", "친절한", "꼼꼼한"],
    info_tags: ["영유아어린이영양제", "근처소아과", "주말오전영업"],
    meter: 3,
  },
];

/** 약사픽 article 샘플 데이터  */
export const sampleArticleData = [
  {
    id: 1,
    title: ["무더위, 에너지가 없다면?", "추천하는 비타민 C 종류"],
    text: "무더위로 체력이 떨어지는 여름에는 삼계탕과 같은 보신 식품을 찾는 사람들이 적지 않다. 하지만 여름철 몸 보신에 비타민C 만한 게 없다. \n 30℃를 넘나드는 무더위가 이어지면 우리 몸에서 호흡, 소화, 땀 분비와 같은 기초 대사율이 높아진다. 아울러 효소는 평소보다 더 많이 파괴되고, 잘 지치며, 식욕도 떨어진다. 이런 현상의 원인은 유해한 활성산소 때문이다. 활성산소는 체내에 쌓이면 피로의 원인이 될 뿐 아니라 노화, 성인병, 나아가 암의 원인도 된다. \n 몸은 활성산소에 의한 손상을 막는 방어장치를 갖고 있다. 하지만 산화 손상을 완벽하게 차단하는 것은 어렵다. 이 때문에 항산화제를 별도로 보충해주는 것이 중요하다. 비타민C는 대표적인 항산화제다.\n 비타민C는 항산화 효과뿐 아니라 여름철의 강한 자외선으로부터 피부를 보호하는 데도 중요한 역할을 한다. 비타민C는 손상된 피부 재생을 촉진하고 멜라닌 색소의 증가를 억제, 기미나 주근깨를 완화시킨다. 자외선 차단제를 꾸준히 바르는 것 못지 않게 음료나 종합영양제 등을 통해 비타민C를 섭취하는 것은 피부 건강에 도움이 된다.\n 비타민C는 다이어트 효과도 높여준다. 최근의 한 국내 연구에 따르면 고용량 비타민C를 섭취하기만 해도 체중을 감량하는 효과가 있었으며, 식이섬유와 함께 섭취하면 효과가 더 크게 나타났다.\n 그렇다면 비타민C는 얼마나 섭취하는 것이 좋을까? 충분히 많이 먹는 것이 좋다고 본다. 비타민C는 물에 녹는 성질, 즉 수용성이기 때문에 많이 섭취해도 필요한 양만 몸 안에서 쓰이고 나머지는 소변으로 배출되기 때문에 체내 과도한 축적으로 인한 부작용이 없다. 보건당국이 권고하는 비타민C의 하루 섭취량(60~100㎎)은 괴혈병에 걸리지 않을 정도인 최소량에 불과하다. \n 성인 기준으로 비타민C를 하루 5000~6000㎎ 먹는 것이 좋다고 생각한다. 이 정도를 섭취하려면 음식 외에 별도로 2~3회쯤 비타민C를 섭취해야 한다. 비타민C는 복용 후 6시간이 지나면 몸 밖으로 배출되기 때문에 한번에 많은 양을 먹기보다는 식후 2알 정도를 먹는 것이 효과를 극대화할 수 있다. ",
    author: "한성준",
    pharmacy: "애옹애옹",
    keyword: ["피로개선", "비타민C", "항산화", "항산화"],
  },
  {
    id: 2,
    title: ["무더위, 에너지가 없다면?", "추천하는 비타민 C 종류"],
    text: "무더위로 체력이 떨어지는 여름에는 삼계탕과 같은 보신 식품을 찾는 사람들이 적지 않다. 하지만 여름철 몸 보신에 비타민C 만한 게 없다. \n 30℃를 넘나드는 무더위가 이어지면 우리 몸에서 호흡, 소화, 땀 분비와 같은 기초 대사율이 높아진다. 아울러 효소는 평소보다 더 많이 파괴되고, 잘 지치며, 식욕도 떨어진다. 이런 현상의 원인은 유해한 활성산소 때문이다. 활성산소는 체내에 쌓이면 피로의 원인이 될 뿐 아니라 노화, 성인병, 나아가 암의 원인도 된다. \n 몸은 활성산소에 의한 손상을 막는 방어장치를 갖고 있다. 하지만 산화 손상을 완벽하게 차단하는 것은 어렵다. 이 때문에 항산화제를 별도로 보충해주는 것이 중요하다. 비타민C는 대표적인 항산화제다.\n 비타민C는 항산화 효과뿐 아니라 여름철의 강한 자외선으로부터 피부를 보호하는 데도 중요한 역할을 한다. 비타민C는 손상된 피부 재생을 촉진하고 멜라닌 색소의 증가를 억제, 기미나 주근깨를 완화시킨다. 자외선 차단제를 꾸준히 바르는 것 못지 않게 음료나 종합영양제 등을 통해 비타민C를 섭취하는 것은 피부 건강에 도움이 된다.\n 비타민C는 다이어트 효과도 높여준다. 최근의 한 국내 연구에 따르면 고용량 비타민C를 섭취하기만 해도 체중을 감량하는 효과가 있었으며, 식이섬유와 함께 섭취하면 효과가 더 크게 나타났다.\n 그렇다면 비타민C는 얼마나 섭취하는 것이 좋을까? 충분히 많이 먹는 것이 좋다고 본다. 비타민C는 물에 녹는 성질, 즉 수용성이기 때문에 많이 섭취해도 필요한 양만 몸 안에서 쓰이고 나머지는 소변으로 배출되기 때문에 체내 과도한 축적으로 인한 부작용이 없다. 보건당국이 권고하는 비타민C의 하루 섭취량(60~100㎎)은 괴혈병에 걸리지 않을 정도인 최소량에 불과하다. \n 성인 기준으로 비타민C를 하루 5000~6000㎎ 먹는 것이 좋다고 생각한다. 이 정도를 섭취하려면 음식 외에 별도로 2~3회쯤 비타민C를 섭취해야 한다. 비타민C는 복용 후 6시간이 지나면 몸 밖으로 배출되기 때문에 한번에 많은 양을 먹기보다는 식후 2알 정도를 먹는 것이 효과를 극대화할 수 있다. ",
    author: "한성준",
    pharmacy: "애옹애옹",
    keyword: ["피로개선", "비타민C", "항산화", "항산화"],
  },
  {
    id: 3,
    title: ["무더위, 에너지가 없다면?", "추천하는 비타민 C 종류"],
    text: "무더위로 체력이 떨어지는 여름에는 삼계탕과 같은 보신 식품을 찾는 사람들이 적지 않다. 하지만 여름철 몸 보신에 비타민C 만한 게 없다. \n 30℃를 넘나드는 무더위가 이어지면 우리 몸에서 호흡, 소화, 땀 분비와 같은 기초 대사율이 높아진다. 아울러 효소는 평소보다 더 많이 파괴되고, 잘 지치며, 식욕도 떨어진다. 이런 현상의 원인은 유해한 활성산소 때문이다. 활성산소는 체내에 쌓이면 피로의 원인이 될 뿐 아니라 노화, 성인병, 나아가 암의 원인도 된다. \n 몸은 활성산소에 의한 손상을 막는 방어장치를 갖고 있다. 하지만 산화 손상을 완벽하게 차단하는 것은 어렵다. 이 때문에 항산화제를 별도로 보충해주는 것이 중요하다. 비타민C는 대표적인 항산화제다.\n 비타민C는 항산화 효과뿐 아니라 여름철의 강한 자외선으로부터 피부를 보호하는 데도 중요한 역할을 한다. 비타민C는 손상된 피부 재생을 촉진하고 멜라닌 색소의 증가를 억제, 기미나 주근깨를 완화시킨다. 자외선 차단제를 꾸준히 바르는 것 못지 않게 음료나 종합영양제 등을 통해 비타민C를 섭취하는 것은 피부 건강에 도움이 된다.\n 비타민C는 다이어트 효과도 높여준다. 최근의 한 국내 연구에 따르면 고용량 비타민C를 섭취하기만 해도 체중을 감량하는 효과가 있었으며, 식이섬유와 함께 섭취하면 효과가 더 크게 나타났다.\n 그렇다면 비타민C는 얼마나 섭취하는 것이 좋을까? 충분히 많이 먹는 것이 좋다고 본다. 비타민C는 물에 녹는 성질, 즉 수용성이기 때문에 많이 섭취해도 필요한 양만 몸 안에서 쓰이고 나머지는 소변으로 배출되기 때문에 체내 과도한 축적으로 인한 부작용이 없다. 보건당국이 권고하는 비타민C의 하루 섭취량(60~100㎎)은 괴혈병에 걸리지 않을 정도인 최소량에 불과하다. \n 성인 기준으로 비타민C를 하루 5000~6000㎎ 먹는 것이 좋다고 생각한다. 이 정도를 섭취하려면 음식 외에 별도로 2~3회쯤 비타민C를 섭취해야 한다. 비타민C는 복용 후 6시간이 지나면 몸 밖으로 배출되기 때문에 한번에 많은 양을 먹기보다는 식후 2알 정도를 먹는 것이 효과를 극대화할 수 있다.",
    author: "한성준",
    pharmacy: "애옹애옹",
    keyword: ["피로개선", "비타민C", "항산화", "항산화"],
  },
  {
    id: 4,
    title: ["무더위, 에너지가 없다면?", "추천하는 비타민 C 종류"],
    text: "무더위로 체력이 떨어지는 여름에는 삼계탕과 같은 보신 식품을 찾는 사람들이 적지 않다. 하지만 여름철 몸 보신에 비타민C 만한 게 없다. \n 30℃를 넘나드는 무더위가 이어지면 우리 몸에서 호흡, 소화, 땀 분비와 같은 기초 대사율이 높아진다. 아울러 효소는 평소보다 더 많이 파괴되고, 잘 지치며, 식욕도 떨어진다. 이런 현상의 원인은 유해한 활성산소 때문이다. 활성산소는 체내에 쌓이면 피로의 원인이 될 뿐 아니라 노화, 성인병, 나아가 암의 원인도 된다. \n 몸은 활성산소에 의한 손상을 막는 방어장치를 갖고 있다. 하지만 산화 손상을 완벽하게 차단하는 것은 어렵다. 이 때문에 항산화제를 별도로 보충해주는 것이 중요하다. 비타민C는 대표적인 항산화제다.\n 비타민C는 항산화 효과뿐 아니라 여름철의 강한 자외선으로부터 피부를 보호하는 데도 중요한 역할을 한다. 비타민C는 손상된 피부 재생을 촉진하고 멜라닌 색소의 증가를 억제, 기미나 주근깨를 완화시킨다. 자외선 차단제를 꾸준히 바르는 것 못지 않게 음료나 종합영양제 등을 통해 비타민C를 섭취하는 것은 피부 건강에 도움이 된다.\n 비타민C는 다이어트 효과도 높여준다. 최근의 한 국내 연구에 따르면 고용량 비타민C를 섭취하기만 해도 체중을 감량하는 효과가 있었으며, 식이섬유와 함께 섭취하면 효과가 더 크게 나타났다.\n 그렇다면 비타민C는 얼마나 섭취하는 것이 좋을까? 충분히 많이 먹는 것이 좋다고 본다. 비타민C는 물에 녹는 성질, 즉 수용성이기 때문에 많이 섭취해도 필요한 양만 몸 안에서 쓰이고 나머지는 소변으로 배출되기 때문에 체내 과도한 축적으로 인한 부작용이 없다. 보건당국이 권고하는 비타민C의 하루 섭취량(60~100㎎)은 괴혈병에 걸리지 않을 정도인 최소량에 불과하다. \n 성인 기준으로 비타민C를 하루 5000~6000㎎ 먹는 것이 좋다고 생각한다. 이 정도를 섭취하려면 음식 외에 별도로 2~3회쯤 비타민C를 섭취해야 한다. 비타민C는 복용 후 6시간이 지나면 몸 밖으로 배출되기 때문에 한번에 많은 양을 먹기보다는 식후 2알 정도를 먹는 것이 효과를 극대화할 수 있다.",
    author: "한성준",
    pharmacy: "애옹애옹",
    keyword: ["피로개선", "비타민C", "항산화", "항산화"],
  },
];