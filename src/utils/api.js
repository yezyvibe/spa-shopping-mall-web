const API_END_POINT =
  "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products";

export const request = async (productId) => {
  try {
    const response = await fetch(
      `${API_END_POINT}${productId ? `/${productId}` : ""}`
    );
    if (response.ok) {
      const json = await response.json();
      return json;
    }
  } catch (e) {
    alert("정보를 올바르게 받아오지 못했습니다!");
    console.log(e);
  }
};
